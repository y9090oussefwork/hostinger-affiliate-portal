// ==========================================================================
// HOSTINGER 1:1 OFFICIAL DESIGN REPLICA — CLIENT INTERACTIVITY (app.js)
// Supports all 13 product categories, Websites | VPS switcher, 1/12/24/48m
// billing periods, multi-currency (USD/AED/SAR/EGP), EN/AR toggle, and UTM passthrough.
// ==========================================================================

(function () {
  const store = window.__INITIAL_STORE__ || {};
  let currentLang = window.__INITIAL_LANG__ || store.general?.defaultLang || "en";
  let currentCat = window.__INITIAL_CAT__ || store.general?.defaultCategory || "web-hosting";
  let currentPeriod = String(window.__INITIAL_PERIOD__ || "48");
  let currentCurrency = "USD";

  const CURRENCIES = {
    USD: { symbol: "US$", rate: 1 },
    AED: { symbol: "AED ", rate: 3.67 },
    SAR: { symbol: "SAR ", rate: 3.75 },
    EGP: { symbol: "EGP ", rate: 49.2 }
  };

  function escapeHtml(str) {
    if (str === null || str === undefined) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function getSpecIconSvg(iconType) {
    switch (iconType) {
      case "cpu":
        return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>`;
      case "ram":
        return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 19v-3M10 19v-3M14 19v-3M18 19v-3M4 15h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1z"/></svg>`;
      case "disk":
        return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="6" y1="12" x2="6.01" y2="12"/><line x1="10" y1="12" x2="18" y2="12"/></svg>`;
      default:
        return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`;
    }
  }

  function appendVisitorUtm(urlStr) {
    try {
      const pageParams = new URLSearchParams(window.location.search);
      const u = new URL(urlStr, window.location.origin);
      ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"].forEach((k) => {
        if (pageParams.has(k) && !u.searchParams.has(k)) {
          u.searchParams.set(k, pageParams.get(k));
        }
      });
      return u.pathname + u.search;
    } catch (e) {
      return urlStr;
    }
  }

  function renderCardHtml(plan, catObj) {
    const isAr = currentLang === "ar";
    const isVpsStyle = catObj?.cardStyle === "vps";
    const isDarkCard = Boolean(plan.darkCard);
    const isVpsPopular = Boolean(plan.popular && isVpsStyle && !isDarkCard);

    const currObj = CURRENCIES[currentCurrency] || CURRENCIES.USD;
    const extraPct = Number(store.general?.extraDiscountPercent) || 20;
    const factor = plan.pricesAreNetReferral ? 1 : (100 - extraPct) / 100;

    const rawUsd = Number(
      plan.pricesUsd?.[currentPeriod] ??
        plan.pricesUsd?.[catObj?.defaultPeriod] ??
        plan.pricesUsd?.["48"] ??
        plan.pricesUsd?.["24"] ??
        1.59
    );

    const finalPrice = (rawUsd * factor * currObj.rate).toFixed(2);
    const origPrice = (Number(plan.originalMonthlyUsd || rawUsd * 2.5) * currObj.rate).toFixed(2);
    const renewPrice = (Number(plan.renewalMonthlyUsd || plan.originalMonthlyUsd || rawUsd * 2) * currObj.rate).toFixed(2);

    const monthsCount = Number(currentPeriod) || 24;
    const totalToday = (Number(finalPrice) * monthsCount).toFixed(2);

    const unitLabel = isAr ? plan.billingUnitAr || "/شهرياً" : plan.billingUnitEn || "/mo";
    const discountBadge = isAr
      ? plan.discountBadgeAr || plan.badgeAr || "خصم 75%"
      : plan.discountBadgeEn || plan.badgeEn || "75% off";
    const pillStyleClass = plan.discountBadgeStyle === "lavender" ? "pill-lavender" : "pill-red";

    const directUrl = appendVisitorUtm(
      `/go?plan=${encodeURIComponent(plan.id)}&period=${encodeURIComponent(currentPeriod)}&type=direct&lang=${currentLang}`
    );
    const generalUrl = appendVisitorUtm(
      `/go?plan=${encodeURIComponent(plan.id)}&period=${encodeURIComponent(currentPeriod)}&type=general&lang=${currentLang}`
    );

    const giftText = isAr ? plan.promoGiftAr : plan.promoGiftEn;
    const features = (isAr ? plan.featuresAr : plan.featuresEn) || [];
    const buildWith = (isAr ? plan.buildWithAr : plan.buildWithEn) || [];
    const specs = plan.specs || [];

    const billingNote =
      plan.billingUnitEn === "/ hr"
        ? isAr
          ? "محاسبة مرنة بالساعة من رصيد الحساب. يمكنك الإلغاء في أي وقت."
          : "Hourly pay-as-you-go billing from credit balance. Cancel anytime."
        : isAr
        ? `تدفع اليوم ${currObj.symbol}${totalToday} لمدة ${monthsCount} شهراً. يتجدد بسعر ${currObj.symbol}${renewPrice}/شهرياً لنفس المدة. يمكنك الإلغاء في أي وقت.`
        : `Today you pay ${currObj.symbol}${totalToday} for ${monthsCount} months. Renews at ${currObj.symbol}${renewPrice}/mo for the same term. Cancel anytime.`;

    return `
    <div class="h-card-wrap ${isVpsPopular ? "has-popular-hat" : ""}">
      ${
        isVpsPopular
          ? `<div class="vps-popular-hat">${isAr ? "الأكثر شعبية" : "MOST POPULAR"}</div>`
          : `<div class="vps-hat-spacer"></div>`
      }
      <article class="h-card ${isDarkCard ? "h-card-dark" : ""} ${isVpsPopular ? "h-card-vps-pop" : ""}" data-plan-id="${escapeHtml(plan.id)}">
        <div class="h-card-top-badge">
          <span class="h-discount-pill ${pillStyleClass}">${escapeHtml(discountBadge)}</span>
        </div>

        <h3 class="h-plan-title">
          ${isDarkCard ? `<span class="sparkle-icon">✦</span> ` : ""}${escapeHtml(isAr ? plan.nameAr : plan.nameEn)}
        </h3>
        <p class="h-plan-desc">${escapeHtml(isAr ? plan.taglineAr : plan.taglineEn)}</p>

        <div class="h-price-area">
          <div class="h-old-price">${currObj.symbol}${origPrice}</div>
          <div class="h-main-price">
            <span class="h-curr">${currObj.symbol}</span><span class="h-val">${finalPrice}</span><span class="h-unit">${escapeHtml(unitLabel)}</span>
          </div>
          <div class="h-referral-applied-badge">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
            <span>${isAr ? "تم تطبيق كود الإحالة" : "Referral code applied"}</span>
          </div>
        </div>

        <div class="h-cta-wrap">
          <a href="${directUrl}" target="_blank" rel="sponsored noopener" class="h-btn-choose ${isDarkCard || isVpsPopular ? "solid" : "outline"}">
            ${isAr ? "اختر الخطة" : "Choose plan"}
          </a>
          ${
            store.general?.showGeneralSiteButtonOnCards !== false
              ? `<a href="${generalUrl}" target="_blank" rel="sponsored noopener" class="h-link-secondary">
                  ${isAr ? "أو تصفح الموقع الرسمي بالخصم ↗" : "Or browse official site with 20% off ↗"}
                </a>`
              : ""
          }
        </div>

        <p class="h-billing-fineprint">${escapeHtml(billingNote)}</p>

        <hr class="h-card-divider" />

        ${
          giftText
            ? `<div class="h-gift-box">
                <span class="h-gift-text">${escapeHtml(giftText)}</span>
                <span class="h-gift-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>
                </span>
              </div>`
            : ""
        }

        ${
          specs.length > 0
            ? `<ul class="h-specs-list">
                ${specs
                  .map(
                    (s) => `
                  <li>
                    <span class="spec-ic">${getSpecIconSvg(s.icon)}</span>
                    <strong>${escapeHtml(isAr ? s.valueAr : s.valueEn)}</strong>
                  </li>`
                  )
                  .join("")}
              </ul>`
            : ""
        }

        <ul class="h-features-list">
          ${features
            .map((f) => {
              const isDash = f.trim().startsWith("—") || f.trim().startsWith("-");
              const cleanText = f.replace(/^[✓—\-]\s*/, "");
              return `
              <li class="${isDash ? "feat-disabled" : "feat-enabled"}">
                <span class="feat-mark">${isDash ? "—" : "✓"}</span>
                <span class="feat-txt">${escapeHtml(cleanText)}</span>
              </li>`;
            })
            .join("")}
        </ul>

        ${
          buildWith.length > 0
            ? `<div class="h-build-with">
                <div class="h-bw-title">${isAr ? "ابنِ موقعك باستخدام:" : "Build with:"}</div>
                <ul class="h-features-list">
                  ${buildWith
                    .map((b) => {
                      const isDash = b.trim().startsWith("—") || b.trim().startsWith("-");
                      const cleanText = b.replace(/^[✓—\-]\s*/, "");
                      return `
                      <li class="${isDash ? "feat-disabled" : "feat-enabled"}">
                        <span class="feat-mark">${isDash ? "—" : "✦"}</span>
                        <span class="feat-txt">${escapeHtml(cleanText)}</span>
                      </li>`;
                    })
                    .join("")}
                </ul>
              </div>`
            : ""
        }
      </article>
    </div>`;
  }

  function updateUI() {
    const isAr = currentLang === "ar";
    document.documentElement.lang = currentLang;
    document.documentElement.dir = isAr ? "rtl" : "ltr";
    document.body.classList.toggle("lang-ar", isAr);
    document.body.classList.toggle("lang-en", !isAr);

    const langLabel = document.getElementById("lang-switch-label");
    if (langLabel) langLabel.textContent = isAr ? "EN" : "عربي";

    const activeCategories = (store.categories || []).filter((c) => c.active !== false);
    const catObj = activeCategories.find((c) => c.id === currentCat) || activeCategories[0];
    if (!catObj) return;

    // Ensure selected billing period is valid for this product category
    const availPeriods = catObj.availablePeriods || ["1", "12", "24", "48"];
    if (!availPeriods.includes(String(currentPeriod))) {
      currentPeriod = String(catObj.defaultPeriod || availPeriods[availPeriods.length - 1] || "24");
    }

    const mainPillIds = ["web-hosting", "vps-hosting", "wordpress-hosting", "cloud-hosting"];
    const isMoreCat = !mainPillIds.includes(currentCat);

    // Update Main Pill Tabs
    document.querySelectorAll(".h-ps-btn[data-cat-id]").forEach((btn) => {
      const cid = btn.getAttribute("data-cat-id");
      btn.classList.toggle("active", cid === currentCat);
    });

    // Update "More products" button & popover items
    const moreBtn = document.getElementById("more-prods-btn");
    const moreLabel = document.getElementById("more-prods-label");
    if (moreBtn) {
      moreBtn.classList.toggle("active", isMoreCat);
    }
    if (moreLabel) {
      moreLabel.textContent = isMoreCat
        ? isAr
          ? catObj.nameAr
          : catObj.nameEn
        : isAr
        ? "منتجات أخرى"
        : "More products";
    }

    document.querySelectorAll(".h-more-item[data-cat-id], .hmd-prod-btn[data-select-cat]").forEach((item) => {
      const cid = item.getAttribute("data-cat-id") || item.getAttribute("data-select-cat");
      item.classList.toggle("active", cid === currentCat);
    });

    // Update Billing Period Buttons visibility & active state
    document.querySelectorAll(".h-per-btn").forEach((btn) => {
      const p = btn.getAttribute("data-period");
      const isSupported = availPeriods.includes(p);
      btn.style.display = isSupported ? "inline-flex" : "none";
      btn.classList.toggle("active", p === String(currentPeriod));
    });

    // Update Sub-trust line & direct category link
    const sublineEl = document.getElementById("cat-subline");
    if (sublineEl) sublineEl.textContent = isAr ? catObj.sublineAr : catObj.sublineEn;

    const catLinkEl = document.getElementById("active-cat-link");
    const catLinkTxt = document.getElementById("active-cat-link-text");
    if (catLinkEl) {
      catLinkEl.href = appendVisitorUtm(`/go?cat=${encodeURIComponent(currentCat)}&type=category&lang=${currentLang}`);
    }
    if (catLinkTxt) {
      catLinkTxt.textContent = isAr
        ? `فتح صفحة ${catObj.nameAr} في Hostinger ↗`
        : `Open ${catObj.nameEn} page on Hostinger ↗`;
    }

    // Render Plans Grid
    const gridEl = document.getElementById("plans-grid");
    if (gridEl) {
      const plans = (store.plans || [])
        .filter((p) => p.active !== false && p.categoryId === currentCat)
        .sort((a, b) => (a.order || 0) - (b.order || 0));
      gridEl.innerHTML = plans.map((p) => renderCardHtml(p, catObj)).join("\n");
    }
  }

  function showToast(msg) {
    const t = document.getElementById("toast-notification");
    if (!t) return;
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(window.__toastTimer);
    window.__toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
  }

  function initCountdown() {
    if (store.countdown?.enabled === false) return;
    const endIso = store.countdown?.targetDate || store.countdown?.endDate;
    let endTime = endIso ? new Date(endIso).getTime() : 0;
    if (!endTime || isNaN(endTime) || endTime <= Date.now()) {
      const hours = Number(store.countdown?.evergreenHours) || 221;
      endTime = Date.now() + hours * 3600 * 1000;
    }

    function tick() {
      const diff = Math.max(0, endTime - Date.now());
      const d = String(Math.floor(diff / 86400000)).padStart(2, "0");
      const h = String(Math.floor((diff % 86400000) / 3600000)).padStart(2, "0");
      const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0");
      const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0");

      // Top marquee ticker
      const dEl = document.getElementById("cd-days");
      const hEl = document.getElementById("cd-hours");
      const mEl = document.getElementById("cd-mins");
      const sEl = document.getElementById("cd-secs");
      if (dEl) dEl.textContent = d;
      if (hEl) hEl.textContent = h;
      if (mEl) mEl.textContent = m;
      if (sEl) sEl.textContent = s;

      // Dedicated Countdown Urgency Section
      const liveDEl = document.getElementById("live-cd-days");
      const liveHEl = document.getElementById("live-cd-hours");
      const liveMEl = document.getElementById("live-cd-mins");
      const liveSEl = document.getElementById("live-cd-secs");
      if (liveDEl) liveDEl.textContent = d;
      if (liveHEl) liveHEl.textContent = h;
      if (liveMEl) liveMEl.textContent = m;
      if (liveSEl) liveSEl.textContent = s;
    }
    tick();
    setInterval(tick, 1000);
  }

  document.addEventListener("DOMContentLoaded", () => {
    // Main Pill Tabs & More Products Popover Items
    document.querySelectorAll(".h-ps-btn[data-cat-id], .h-more-item[data-cat-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        currentCat = btn.getAttribute("data-cat-id") || "web-hosting";
        const catObj = (store.categories || []).find((c) => c.id === currentCat);
        if (catObj?.defaultPeriod) currentPeriod = String(catObj.defaultPeriod);
        document.getElementById("more-prods-wrap")?.classList.remove("open");
        updateUI();
      });
    });

    // Toggle "More products" popover on click (useful for mobile/touch)
    const moreProdsBtn = document.getElementById("more-prods-btn");
    const moreProdsWrap = document.getElementById("more-prods-wrap");
    if (moreProdsBtn && moreProdsWrap) {
      moreProdsBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        moreProdsWrap.classList.toggle("open");
      });
      document.addEventListener("click", (e) => {
        if (!moreProdsWrap.contains(e.target)) {
          moreProdsWrap.classList.remove("open");
        }
      });
    }

    // Mega Menu & Mobile Drawer Product Items
    document.querySelectorAll("[data-select-cat]").forEach((item) => {
      item.addEventListener("click", () => {
        currentCat = item.getAttribute("data-select-cat") || "web-hosting";
        const catObj = (store.categories || []).find((c) => c.id === currentCat);
        if (catObj?.defaultPeriod) currentPeriod = String(catObj.defaultPeriod);
        document.querySelector(".h-dropdown-wrap")?.classList.remove("open");
        document.getElementById("mobile-nav-drawer")?.classList.remove("open");
        updateUI();
        document.getElementById("pricing-section")?.scrollIntoView({ behavior: "smooth" });
      });
    });

    // Mobile Hamburger Menu Toggle
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileDrawer = document.getElementById("mobile-nav-drawer");
    if (mobileMenuBtn && mobileDrawer) {
      mobileMenuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = mobileDrawer.classList.toggle("open");
        mobileMenuBtn.setAttribute("aria-expanded", String(isOpen));
      });
      document.addEventListener("click", (e) => {
        if (!mobileDrawer.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
          mobileDrawer.classList.remove("open");
          mobileMenuBtn.setAttribute("aria-expanded", "false");
        }
      });
    }

    // Navbar quick group links
    document.querySelectorAll("[data-quick-group]").forEach((link) => {
      link.addEventListener("click", () => {
        const g = link.getAttribute("data-quick-group");
        currentCat = g === "vps" ? "vps-hosting" : "cloud-hosting";
        const catObj = (store.categories || []).find((c) => c.id === currentCat);
        if (catObj?.defaultPeriod) currentPeriod = String(catObj.defaultPeriod);
        updateUI();
      });
    });

    // Billing Period Buttons
    document.querySelectorAll(".h-per-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        currentPeriod = btn.getAttribute("data-period") || "24";
        updateUI();
      });
    });

    // Language Switch Button (Navigates to clean SEO URL in target language while keeping UTM/GCLID)
    const langBtn = document.getElementById("lang-switch-btn");
    if (langBtn) {
      langBtn.addEventListener("click", () => {
        const nextLang = currentLang === "ar" ? "en" : "ar";
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.delete("lang");
        searchParams.delete("cat");
        const qs = searchParams.toString();
        window.location.href = `/${nextLang}/${encodeURIComponent(currentCat)}${qs ? `?${qs}` : ""}`;
      });
    }

    // Outbound Affiliate Checkout Click Tracker (Fires Google Ads Conversion & GA4 / Meta Pixel events)
    document.addEventListener("click", (e) => {
      const link = e.target.closest('a[href^="/go"]');
      if (!link) return;
      try {
        const u = new URL(link.href, window.location.origin);
        const planId = u.searchParams.get("plan") || u.searchParams.get("cat") || "general";
        const period = u.searchParams.get("period") || currentPeriod;
        if (typeof window.gtag === "function") {
          window.gtag("event", "begin_checkout", {
            event_category: "affiliate_outbound",
            event_label: `${planId}_${period}m`,
            value: 1,
            currency: "USD"
          });
          const gadsId = store.seo?.googleAdsId;
          const convLabel = store.seo?.googleAdsConversionLabel;
          if (gadsId && convLabel) {
            window.gtag("event", "conversion", {
              send_to: `${gadsId}/${convLabel}`
            });
          }
        }
        if (typeof window.fbq === "function") {
          window.fbq("track", "InitiateCheckout", { content_name: planId, currency: "USD" });
        }
      } catch (_) {}
    });

    // Built-in Legal Modals (Privacy Policy, Terms of Use, Affiliate Disclosure for Google Ads Compliance)
    const legalModal = document.getElementById("legal-modal");
    const legalTitle = document.getElementById("legal-modal-title");
    const legalBody = document.getElementById("legal-modal-body");
    const closeLegalBtn = document.getElementById("close-legal-modal");

    const legalContent = {
      privacy: {
        titleAr: "سياسة الخصوصية وملفات تعريف الارتباط (Privacy Policy)",
        titleEn: "Privacy & Cookie Policy",
        bodyAr: `<p>نحن نحترم خصوصية زوارنا ونلتزم بحمايتها. لا يقوم هذا الموقع بجمع أي بيانات شخصية حساسة أو بيانات بطاقات دفع، حيث تتم جميع عمليات التسجيل والدفع مباشرة عبر المنصة الرسمية الآمنة لشركة <strong>Hostinger International Ltd</strong>.</p>
                 <p><strong>ملفات تعريف الارتباط (Cookies) ومعرفات الإعلانات:</strong> نستخدم ملفات تعريف ارتباط تقنية وإحصائية (مثل Google Analytics ومعرف النقرات GCLID) لقياس أداء الحملات الإعلانية وتوجيهك إلى رابط الإحالة الرسمي لتطبيق خصم الشركاء الإضافي (20%) في سلة الشراء تلقائياً.</p>`,
        bodyEn: `<p>We respect your privacy. This portal does not collect personal billing or credit card data — all account registrations and payments take place directly on the official, secure <strong>Hostinger International Ltd.</strong> platform.</p>
                 <p><strong>Cookies & Attribution:</strong> We use standard analytics and referral attribution parameters (such as UTM tags, GCLID, and Hostinger's official REFERRALCODE parameter) solely to measure ad performance and apply your automatic extra 20% partner discount at checkout.</p>`
      },
      terms: {
        titleAr: "شروط الاستخدام (Terms of Use)",
        titleEn: "Terms of Use",
        bodyAr: `<p>يُقدم هذا الموقع دليل مقارنة وعروض ترويجية لباقات هوستنجر الرسمية (استضافة المواقع، السحابة، خوادم VPS، والبريد الإلكتروني) بصفتنا شريكاً معتمداً في برنامج إحالة هوستنجر.</p>
                 <p>جميع الأسعار والمواصفات المعروضة تعكس العروض الترويجية الحالية مضافاً إليها خصم كود الإحالة للدفعات المقدمة، وتخضع لشروط الخدمة وضمان استرداد الأموال لمدة 30 يوماً المعتمد لدى شركة Hostinger.</p>`,
        bodyEn: `<p>This portal provides an organized comparison of official Hostinger plans and seasonal promotions as an authorized participant in the Hostinger Referral & Affiliate Program.</p>
                 <p>Displayed monthly rates reflect upfront promotional pricing combined with partner referral discounts and are subject to Hostinger's official Terms of Service and 30-day money-back guarantee.</p>`
      },
      disclosure: {
        titleAr: "إفصاح الشركاء والعمولة (Affiliate Disclosure)",
        titleEn: "Affiliate Partner Disclosure",
        bodyAr: `<p>امتثالاً لإرشادات الشفافية الإعلانية (FTC و Google Ads): يشارك هذا الموقع في برنامج شركاء وإحالات هوستنجر الرسمي (Hostinger Official Referral Program).</p>
                 <p>عند النقر على أزرار "اختر الخطة" أو فتح روابط الشركاء الكاملة في هذه الصفحة، يتم تفعيل خصم إضافي حصري لك بنسبة تصل إلى 20% فوق العروض الموسمية تلقائياً في سلة الشراء (الخصم مرتبط بالرابط المباشر ولا يعمل ككود يُكتب يدوياً)، وقد نحصل على عمولة تسويقية من هوستنجر دون أي زيادة في السعر عليك إطلاقاً.</p>`,
        bodyEn: `<p>In accordance with FTC guidelines and Google Ads transparency policies: this website is an independent partner portal participating in the official Hostinger Referral & Affiliate Program.</p>
                 <p>Clicking "Choose plan" or opening our full partner links automatically applies an exclusive extra partner discount (up to 20% off — activated via link only) to your order, and we may receive a referral commission from Hostinger at zero additional cost to you.</p>`
      }
    };

    document.querySelectorAll("[data-legal]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.getAttribute("data-legal") || "privacy";
        const item = legalContent[key] || legalContent.privacy;
        if (legalTitle) legalTitle.textContent = currentLang === "ar" ? item.titleAr : item.titleEn;
        if (legalBody) legalBody.innerHTML = currentLang === "ar" ? item.bodyAr : item.bodyEn;
        legalModal?.classList.add("open");
      });
    });

    if (closeLegalBtn && legalModal) {
      closeLegalBtn.addEventListener("click", () => legalModal.classList.remove("open"));
      legalModal.addEventListener("click", (e) => {
        if (e.target === legalModal) legalModal.classList.remove("open");
      });
    }

    // Copy General Referral Link
    const copyBtn = document.getElementById("copy-link-btn");
    const refInput = document.getElementById("referral-link-input");
    if (copyBtn && refInput) {
      copyBtn.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(refInput.value);
          showToast(currentLang === "ar" ? "تم نسخ رابط الإحالة بنجاح! ✓" : "Referral link copied! ✓");
        } catch {
          refInput.select();
          document.execCommand("copy");
          showToast(currentLang === "ar" ? "تم نسخ رابط الإحالة! ✓" : "Referral link copied! ✓");
        }
      });
    }

    // FAQ Accordion
    document.querySelectorAll(".faq-trigger").forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const row = trigger.closest(".faq-row");
        if (row) row.classList.toggle("open");
      });
    });

    initCountdown();
    updateUI();
  });
})();
