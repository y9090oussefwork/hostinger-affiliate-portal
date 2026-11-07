const express = require("express");
const compression = require("compression");
const path = require("path");
const crypto = require("crypto");
const { loadStore, saveStore, resetStore, recordClick } = require("./data/db");
const { renderLandingPage } = require("./ssr/renderLanding");

const app = express();
const PORT = process.env.PORT || 3000;

// Active admin tokens in memory
const activeTokens = new Set();

app.use(compression());
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));

// Static assets
app.use(
  express.static(path.join(__dirname, "public"), {
    index: false,
    setHeaders: (res, filePath) => {
      if (filePath.endsWith(".css") || filePath.endsWith(".js")) {
        res.setHeader("Cache-Control", "public, max-age=60, must-revalidate");
      }
    }
  })
);

// Helper to resolve language (explicit URL param/path > Accept-Language header > store default)
function resolveLang(req, store, explicitLang) {
  if (explicitLang === "ar" || explicitLang === "en") return explicitLang;
  if (req.query.lang === "ar" || req.query.lang === "en") return req.query.lang;
  const acceptLang = String(req.headers["accept-language"] || "").toLowerCase();
  if (acceptLang.startsWith("ar")) return "ar";
  return store.general?.defaultLang || "en";
}

function sendLanding(req, res, overrides = {}) {
  const store = loadStore();
  const lang = resolveLang(req, store, overrides.lang);
  const host = `${req.protocol}://${req.get("host")}`;
  const html = renderLandingPage(store, Object.assign({}, req.query, overrides, { lang, requestHost: host, requestPath: req.path }));
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.send(html);
}

// ==================== MAIN SSR LANDING PAGE & CLEAN SEO ROUTES ====================
app.get("/", (req, res) => sendLanding(req, res));
app.get("/ar", (req, res) => sendLanding(req, res, { lang: "ar" }));
app.get("/en", (req, res) => sendLanding(req, res, { lang: "en" }));
app.get("/ae", (req, res) => sendLanding(req, res));

app.get(["/ae/:catSlug", "/ar/:catSlug", "/en/:catSlug"], (req, res, next) => {
  const store = loadStore();
  const slug = req.params.catSlug;
  const matched = (store.categories || []).find((c) => c.id === slug || c.slug === slug);
  if (!matched) return next();
  const prefix = req.path.split("/")[1];
  const explicitLang = prefix === "ar" ? "ar" : prefix === "en" ? "en" : undefined;
  return sendLanding(req, res, { cat: matched.id, lang: explicitLang, isDedicatedCatRoute: true });
});

// ==================== SMART AFFILIATE REDIRECT & TRACKER (/go) ====================
app.get("/go", (req, res) => {
  const store = loadStore();
  const {
    plan: planId,
    cat: catId,
    period = "24",
    type = "direct",
    lang = "ar",
    utm_source = "",
    utm_campaign = "",
    gclid = ""
  } = req.query;

  let targetUrl = store.general?.generalLink || "https://www.hostinger.com/ae?REFERRALCODE=EQOY9090OIJA";
  let planName = "الرابط العام لهوستنجر (General Link)";
  let trackedId = "general";

  if (type === "category" && catId) {
    const catObj = (store.categories || []).find((c) => c.id === catId || c.slug === catId);
    if (catObj && catObj.categoryLink) {
      targetUrl = catObj.categoryLink;
      planName = `قسم: ${catObj.nameAr}`;
      trackedId = `cat-${catObj.id}`;
    }
  } else if (planId) {
    const planObj = (store.plans || []).find((p) => p.id === planId);
    if (planObj) {
      trackedId = planObj.id;
      planName = planObj.nameAr || planObj.nameEn;
      if (type === "general") {
        targetUrl = planObj.links?.generalFallback || store.general?.generalLink || targetUrl;
      } else {
        const periodKey = `period_${period}`;
        targetUrl =
          planObj.links?.[periodKey] ||
          planObj.links?.direct ||
          planObj.links?.period_24 ||
          store.general?.generalLink ||
          targetUrl;

        // Dynamically align period parameter in Hostinger cart URLs if present
        if (period && typeof targetUrl === "string" && targetUrl.includes("period=")) {
          targetUrl = targetUrl.replace(/([?&]period=)\d+/, `$1${encodeURIComponent(period)}`);
        }
      }
    }
  }

  const ua = req.headers["user-agent"] || "";
  const isMobile = /mobile|android|iphone|ipad/i.test(ua);

  recordClick({
    planId: trackedId,
    planName,
    period: String(period),
    linkType: type,
    targetUrl,
    lang,
    utmSource: utm_source,
    utmCampaign: utm_campaign,
    gclid,
    device: isMobile ? "mobile" : "desktop"
  });

  res.redirect(302, targetUrl);
});

// ==================== ADMIN DASHBOARD PAGE ====================
app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "admin.html"));
});

// ==================== ADMIN API ====================
function requireAdmin(req, res, next) {
  const token = req.headers["x-admin-token"];
  if (!token || !activeTokens.has(token)) {
    return res.status(401).json({ error: "غير مصرح" });
  }
  next();
}

app.post("/api/admin/login", (req, res) => {
  const { password } = req.body || {};
  const store = loadStore();
  const expected = store.general?.adminPasswordHash || "admin123";
  if (password === expected) {
    const token = crypto.randomBytes(24).toString("hex");
    activeTokens.add(token);
    return res.json({ ok: true, token });
  }
  return res.status(401).json({ error: "كلمة المرور غير صحيحة" });
});

app.get("/api/admin/store", requireAdmin, (req, res) => {
  const store = loadStore();
  res.json(store);
});

app.put("/api/admin/store", requireAdmin, (req, res) => {
  const current = loadStore();
  const updated = req.body;
  if (!updated || typeof updated !== "object") {
    return res.status(400).json({ error: "Invalid payload" });
  }
  // Preserve password if not explicitly changed
  if (!updated.general?.adminPasswordHash) {
    updated.general = updated.general || {};
    updated.general.adminPasswordHash = current.general?.adminPasswordHash || "admin123";
  }
  // Preserve analytics if not included
  if (!updated.analytics) {
    updated.analytics = current.analytics;
  }
  saveStore(updated);
  res.json({ ok: true });
});

app.post("/api/admin/clear-analytics", requireAdmin, (req, res) => {
  const store = loadStore();
  store.analytics = { totalClicks: 0, clicksByPlan: {}, recentClicks: [] };
  saveStore(store);
  res.json({ ok: true });
});

app.post("/api/admin/reset", requireAdmin, (req, res) => {
  const fresh = resetStore();
  res.json({ ok: true, store: fresh });
});

// ==================== SEO ROBOTS.TXT & SITEMAP.XML ====================
app.get("/robots.txt", (req, res) => {
  const host = `${req.protocol}://${req.get("host")}`;
  res.type("text/plain").send(`User-agent: *\nAllow: /\nDisallow: /admin\nDisallow: /api/\nSitemap: ${host}/sitemap.xml\n`);
});

app.get("/sitemap.xml", (req, res) => {
  const store = loadStore();
  const host = `${req.protocol}://${req.get("host")}`;
  const nowIso = new Date().toISOString();
  const cats = (store.categories || []).filter((c) => c.active !== false);

  const urls = [
    `${host}/`,
    `${host}/ar`,
    `${host}/en`,
    `${host}/ae`,
    ...cats.map((c) => `${host}/${encodeURIComponent(c.id)}`),
    ...cats.map((c) => `${host}/ar/${encodeURIComponent(c.id)}`),
    ...cats.map((c) => `${host}/en/${encodeURIComponent(c.id)}`),
    ...cats.map((c) => `${host}/ae/${encodeURIComponent(c.id)}`)
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.replace(/&/g, "&amp;")}</loc>
    <lastmod>${nowIso}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  res.header("Content-Type", "application/xml");
  res.send(xml);
});

// Clean root-level category routes (e.g. /vps-hosting, /web-hosting, /wordpress-hosting)
app.get("/:catSlug", (req, res, next) => {
  const store = loadStore();
  const slug = req.params.catSlug;
  const matched = (store.categories || []).find((c) => c.id === slug || c.slug === slug);
  if (!matched) return next();
  return sendLanding(req, res, { cat: matched.id, isDedicatedCatRoute: true });
});

app.listen(PORT, () => {
  console.log(`🚀 Hostinger Affiliate Pro Server running at http://localhost:${PORT}`);
  console.log(`⚙️  Admin Control Panel available at http://localhost:${PORT}/admin`);
});

