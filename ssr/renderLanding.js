// Server-Side Renderer (SSR) — 1:1 Hostinger Official Design & 13-Product Catalog
// Matches user's 3 Hostinger screenshots (White Friday Hero, Websites Dark Unlimited Card, VPS MOST POPULAR Card)

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

function getCategoryIconSvg(catId) {
  switch (catId) {
    case "web-hosting":
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`;
    case "wordpress-hosting":
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`;
    case "woocommerce-hosting":
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`;
    case "cloud-hosting":
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`;
    case "pro":
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;
    case "vps-hosting":
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`;
    case "ai-managed-vps":
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>`;
    case "gpu-hosting":
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>`;
    case "web-apps-hosting":
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;
    case "applications":
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`;
    default:
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`;
  }
}

function renderDirectoryItemHtml(cat, store, lang) {
  const isAr = lang === "ar";
  const catPlans = (store.plans || []).filter((p) => p.active !== false && p.categoryId === cat.id);
  let minPrice = "1.19";
  let unit = isAr ? "/شهرياً" : "/mo";
  if (catPlans.length > 0) {
    const prices = catPlans.map((p) =>
      Number(p.pricesUsd?.["48"] ?? p.pricesUsd?.["24"] ?? p.pricesUsd?.["12"] ?? p.pricesUsd?.["1"] ?? 1.59)
    );
    minPrice = Math.min(...prices).toFixed(2);
    if (catPlans[0].billingUnitEn === "/ hr") {
      unit = isAr ? "/ساعة" : "/hr";
    }
  }

  return `
  <a href="/${lang}/${escapeHtml(cat.id)}" class="h-dir-item">
    <div class="hdi-left">
      <span class="hdi-icon">${getCategoryIconSvg(cat.id)}</span>
      <div class="hdi-meta">
        <strong title="${escapeHtml(isAr ? cat.nameAr : cat.nameEn)}">${escapeHtml(isAr ? cat.nameAr : cat.nameEn)}</strong>
        <span>${isAr ? `يبدأ من US$${minPrice}${unit}` : `From US$${minPrice}${unit}`}</span>
      </div>
    </div>
    <div class="hdi-right">
      <span class="hdi-badge">${escapeHtml(isAr ? cat.badgeAr : cat.badgeEn)}</span>
      <span class="hdi-arrow" aria-hidden="true">←</span>
    </div>
  </a>`;
}

function buildJsonLd(store, lang) {
  const isAr = lang === "ar";
  const siteTitle = isAr ? store.seo.titleAr : store.seo.titleEn;
  const siteDesc = isAr ? store.seo.descriptionAr : store.seo.descriptionEn;
  const activePlans = (store.plans || []).filter((p) => p.active !== false);
  const prices = [];

  const offers = activePlans.map((plan) => {
    const p = Number(plan.pricesUsd?.["48"] || plan.pricesUsd?.["24"] || plan.pricesUsd?.["12"] || 1.59);
    prices.push(p);
    return {
      "@type": "Offer",
      name: isAr ? plan.nameAr : plan.nameEn,
      description: isAr ? plan.taglineAr : plan.taglineEn,
      price: p.toFixed(2),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: plan.links?.direct || store.general.generalLink
    };
  });

  const lowPrice = prices.length ? Math.min(...prices).toFixed(2) : "1.19";
  const highPrice = prices.length ? Math.max(...prices).toFixed(2) : "29.99";

  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: siteTitle,
        description: siteDesc,
        brand: { "@type": "Brand", name: "Hostinger" },
        AggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "24350",
          bestRating: "5",
          worstRating: "1"
        },
        offers: {
          "@type": "AggregateOffer",
          lowPrice,
          highPrice,
          priceCurrency: "USD",
          offerCount: offers.length || 1,
          offers
        }
      },
      {
        "@type": "FAQPage",
        mainEntity: (store.faqs || []).map((f) => ({
          "@type": "Question",
          name: isAr ? f.qAr : f.qEn,
          acceptedAnswer: { "@type": "Answer", text: isAr ? f.aAr : f.aEn }
        }))
      }
    ]
  });
}

function renderCardHtml(plan, catObj, lang, period, store) {
  const isAr = lang === "ar";
  const isVpsStyle = catObj?.cardStyle === "vps";
  const isDarkCard = Boolean(plan.darkCard);
  const isVpsPopular = Boolean(plan.popular && isVpsStyle && !isDarkCard);

  const extraPct = Number(store.general?.extraDiscountPercent) || 20;
  const factor = plan.pricesAreNetReferral ? 1 : (100 - extraPct) / 100;

  const rawPrice = Number(plan.pricesUsd?.[period] ?? plan.pricesUsd?.["48"] ?? plan.pricesUsd?.["24"] ?? 1.59);
  const finalMonthly = (rawPrice * factor).toFixed(2);
  const origMonthly = Number(plan.originalMonthlyUsd || rawPrice * 2.5).toFixed(2);
  const renewMonthly = Number(plan.renewalMonthlyUsd || origMonthly).toFixed(2);

  const monthsCount = Number(period) || 24;
  const totalToday = (Number(finalMonthly) * monthsCount).toFixed(2);

  const unitLabel = isAr ? (plan.billingUnitAr || "/شهرياً") : (plan.billingUnitEn || "/mo");
  const discountBadge = isAr
    ? plan.discountBadgeAr || plan.badgeAr || "خصم 75%"
    : plan.discountBadgeEn || plan.badgeEn || "75% off";
  const pillStyleClass = plan.discountBadgeStyle === "lavender" ? "pill-lavender" : "pill-red";

  const directUrl = `/go?plan=${encodeURIComponent(plan.id)}&period=${encodeURIComponent(period)}&type=direct&lang=${lang}`;
  const generalUrl = `/go?plan=${encodeURIComponent(plan.id)}&period=${encodeURIComponent(period)}&type=general&lang=${lang}`;

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
      ? `تدفع اليوم US$${totalToday} لمدة ${monthsCount} شهراً. يتجدد بسعر US$${renewMonthly}/شهرياً لنفس المدة. يمكنك الإلغاء في أي وقت.`
      : `Today you pay US$${totalToday} for ${monthsCount} months. Renews at US$${renewMonthly}/mo for the same term. Cancel anytime.`;

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
        <div class="h-old-price">US$${origMonthly}</div>
        <div class="h-main-price">
          <span class="h-curr">US$</span><span class="h-val">${finalMonthly}</span><span class="h-unit">${escapeHtml(unitLabel)}</span>
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

function renderLandingPage(store, query = {}) {
  const lang = query.lang === "ar" ? "ar" : query.lang === "en" ? "en" : store.general.defaultLang || "en";
  const isAr = lang === "ar";
  const dir = isAr ? "rtl" : "ltr";

  const requestedCat = query.cat || store.general.defaultCategory || "web-hosting";
  const activeCategories = (store.categories || [])
    .filter((c) => c.active !== false)
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  const currentCatObj =
    activeCategories.find((c) => c.id === requestedCat || c.slug === requestedCat) || activeCategories[0];
  const currentCatId = currentCatObj ? currentCatObj.id : "web-hosting";
  const currentPeriod = query.period || currentCatObj?.defaultPeriod || "48";

  // Dynamic Category-Specific SEO Title & Description when visiting /vps-hosting, /ar/vps-hosting, ?cat=..., etc.
  const isSpecificCat = Boolean(query.isDedicatedCatRoute || query.cat);
  const title =
    isSpecificCat && currentCatObj
      ? isAr
        ? `عروض وخصومات هوستنجر ${currentCatObj.nameAr} 2026 | ${currentCatObj.badgeAr} + 20% خصم الشركاء الإضافي`
        : `Hostinger ${currentCatObj.nameEn} Official Deals 2026 | ${currentCatObj.badgeEn} + Extra 20% Partner Off`
      : isAr
      ? store.seo.titleAr
      : store.seo.titleEn;

  const description =
    isSpecificCat && currentCatObj
      ? isAr
        ? `${currentCatObj.descriptionAr} احصل على ${currentCatObj.badgeAr} بالإضافة إلى 20% خصم إحالة فوري يُفعل تلقائياً عند الشراء عبر الرابط المباشر مع ضمان استرداد الأموال 30 يوماً.`
        : `${currentCatObj.descriptionEn} Claim ${currentCatObj.badgeEn} plus an extra 20% partner referral discount automatically applied via our official partner link.`
      : isAr
      ? store.seo.descriptionAr
      : store.seo.descriptionEn;

  const keywords = isAr ? store.seo.keywordsAr : store.seo.keywordsEn;
  const baseUrl = (query.requestHost || store.seo.siteUrl || "https://hostinger-deals.example.com").replace(/\/$/, "");
  const canonicalPath = isSpecificCat ? `/${lang}/${currentCatId}` : `/${lang}`;
  const canonicalUrl = `${baseUrl}${canonicalPath}`;

  const gaId = (store.seo?.googleAnalyticsId || "").trim();
  const gadsId = (store.seo?.googleAdsId || "").trim();
  const primaryTagId = gaId || gadsId;
  const gtagHtml = primaryTagId
    ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${escapeHtml(primaryTagId)}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    ${gaId ? `gtag('config', '${escapeHtml(gaId)}');` : ""}
    ${gadsId ? `gtag('config', '${escapeHtml(gadsId)}');` : ""}
  </script>`
    : "";

  const publicStore = JSON.parse(JSON.stringify(store));
  if (publicStore.general) {
    delete publicStore.general.adminPasswordHash;
  }

  const visiblePlans = (store.plans || [])
    .filter((p) => p.active !== false && p.categoryId === currentCatId)
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  const ssrCardsHtml = visiblePlans
    .map((plan) => renderCardHtml(plan, currentCatObj, lang, currentPeriod, store))
    .join("\n");

  const ssrFaqsHtml = (store.faqs || [])
    .map(
      (f, idx) => `
      <div class="faq-row ${idx === 0 ? "open" : ""}">
        <button class="faq-trigger" type="button">
          <span>${escapeHtml(isAr ? f.qAr : f.qEn)}</span>
          <span class="faq-plus">+</span>
        </button>
        <div class="faq-body">
          <p>${escapeHtml(isAr ? f.aAr : f.aEn)}</p>
        </div>
      </div>`
    )
    .join("\n");

  return `<!DOCTYPE html>
<html lang="${lang}" dir="${dir}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <meta name="keywords" content="${escapeHtml(keywords)}" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <meta name="theme-color" content="#190c40" />
  <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />

  <meta property="og:type" content="website" />
  <meta property="og:title" content="${escapeHtml(title)}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:url" content="${escapeHtml(canonicalUrl)}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(title)}" />
  <meta name="twitter:description" content="${escapeHtml(description)}" />

  <link rel="alternate" hreflang="ar" href="${escapeHtml(baseUrl)}/ar${isSpecificCat ? `/${currentCatId}` : ""}" />
  <link rel="alternate" hreflang="en" href="${escapeHtml(baseUrl)}/en${isSpecificCat ? `/${currentCatId}` : ""}" />
  <link rel="alternate" hreflang="x-default" href="${escapeHtml(baseUrl)}/en${isSpecificCat ? `/${currentCatId}` : ""}" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

  <link rel="stylesheet" href="/css/styles.css" />
  <script type="application/ld+json">${buildJsonLd(store, lang)}</script>
  ${gtagHtml}
  ${store.seo?.customHeadHtml || ""}
</head>
<body class="lang-${lang}">

  <!-- ==================== 1. RED SCROLLING TICKER BAR (SCREENSHOT 1) ==================== -->
  <div class="red-marquee-bar" id="promo-topbar" style="${store.countdown?.enabled === false ? "display:none;" : ""}">
    <div class="marquee-track">
      <div class="marquee-content">
        <span>${isAr ? "أقوى عروض العام" : "Biggest deals of the year"}</span>
        <span class="m-sep">✦</span>
        <span>${isAr ? "ضمان استرداد الأموال 30 يوماً" : "30-day money-back guarantee"}</span>
        <span class="m-sep">%</span>
        <span>${isAr ? "خصم يصل إلى 88% + 20% كود الإحالة" : "Up to 88% off"}</span>
        <span class="m-sep">✦</span>
        <span>${isAr ? "دعم فني 24/7" : "24/7 support"}</span>
        <span class="m-sep">%</span>
        <span>${isAr ? "ينتهي خلال:" : "Ends in:"} <strong id="cd-days">09</strong>d : <strong id="cd-hours">05</strong>h : <strong id="cd-mins">37</strong>m : <strong id="cd-secs">42</strong>s</span>
        <span class="m-sep">✦</span>
        <span>${isAr ? "أقوى عروض العام" : "Biggest deals of the year"}</span>
        <span class="m-sep">%</span>
        <span>${isAr ? "ضمان استرداد الأموال 30 يوماً" : "30-day money-back guarantee"}</span>
        <span class="m-sep">✦</span>
        <span>${isAr ? "خصم يصل إلى 88%" : "Up to 88% off"}</span>
        <span class="m-sep">%</span>
        <span>${isAr ? "دعم فني 24/7" : "24/7 support"}</span>
      </div>
    </div>
  </div>

  <!-- ==================== 2. DARK COSMIC HOSTINGER NAVBAR ==================== -->
  <header class="h-navbar">
    <div class="h-container h-nav-inner">
      <div class="h-nav-left">
        <a href="/${lang}" class="h-logo">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M4 3h5v7h6V3h5v18h-5v-7H9v7H4V3z"/></svg>
          <span>HOSTINGER</span>
          <em class="h-partner-badge">${isAr ? "عروض الشركاء" : "PARTNER DEALS"}</em>
        </a>

        <nav class="h-nav-menu">
          <a href="#pricing-section" class="h-nav-link">${isAr ? "الأسعار" : "Pricing"}</a>

          <!-- Products Mega Dropdown (All 13 Hostinger Products!) -->
          <div class="h-dropdown-wrap">
            <button type="button" class="h-nav-link h-drop-trigger" id="products-menu-btn">
              <span>${isAr ? "المنتجات (13)" : "Products"}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="h-mega-menu" id="products-mega-menu">
              <div class="mega-col">
                <div class="mega-group-title">${isAr ? "استضافة المواقع والسحابة" : "WEBSITES & CLOUD"}</div>
                <button type="button" class="mega-item" data-select-cat="web-hosting">
                  <strong>Web Hosting</strong>
                  <span>${isAr ? "للمواقع والمدونات الناشئة" : "For websites and blogs"}</span>
                </button>
                <button type="button" class="mega-item" data-select-cat="wordpress-hosting">
                  <strong>WordPress Hosting</strong>
                  <span>${isAr ? "استضافة ووردبريس مُدارة بالـ AI" : "Managed WordPress with AI"}</span>
                </button>
                <button type="button" class="mega-item" data-select-cat="woocommerce-hosting">
                  <strong>WooCommerce Hosting</strong>
                  <span>${isAr ? "للمتاجر الإلكترونية" : "For online eCommerce stores"}</span>
                </button>
                <button type="button" class="mega-item" data-select-cat="cloud-hosting">
                  <strong>Cloud Hosting</strong>
                  <span>${isAr ? "موارد سحابية مخصصة للمشاريع" : "Dedicated cloud resources"}</span>
                </button>
                <button type="button" class="mega-item" data-select-cat="pro">
                  <strong>Hostinger Pro (Agencies)</strong>
                  <span>${isAr ? "للوكالات وإدارة مواقع العملاء" : "Manage multiple client sites"}</span>
                </button>
              </div>

              <div class="mega-col">
                <div class="mega-group-title">${isAr ? "السيرفرات والذكاء الاصطناعي" : "VPS, GPU & APPS"}</div>
                <button type="button" class="mega-item" data-select-cat="vps-hosting">
                  <strong>VPS Hosting (KVM)</strong>
                  <span>${isAr ? "خوادم KVM 1, 2, 4, 8 بمعالج AMD EPYC" : "KVM 1, 2, 4, 8 with AMD EPYC"}</span>
                </button>
                <button type="button" class="mega-item" data-select-cat="ai-managed-vps">
                  <strong>AI Managed VPS</strong>
                  <span>${isAr ? "سيرفرات VPS يديرها الذكاء الاصطناعي" : "VPS managed via Kodee AI chat"}</span>
                </button>
                <button type="button" class="mega-item" data-select-cat="gpu-hosting">
                  <strong>GPU Hosting</strong>
                  <span>${isAr ? "كروت NVIDIA RTX 4090, L40S, H100" : "NVIDIA GPUs for AI & LLMs"}</span>
                </button>
                <button type="button" class="mega-item" data-select-cat="web-apps-hosting">
                  <strong>Web Apps Hosting</strong>
                  <span>${isAr ? "نشر تطبيقات Node.js, Python, Docker" : "Deploy from GitHub & Docker"}</span>
                </button>
                <button type="button" class="mega-item" data-select-cat="applications">
                  <strong>Applications (1-Click n8n)</strong>
                  <span>${isAr ? "تثبيت فوري لـ n8n و Odoo و Coolify" : "1-Click n8n, Odoo, Supabase"}</span>
                </button>
              </div>

              <div class="mega-col">
                <div class="mega-group-title">${isAr ? "البريد والإنتاجية" : "EMAIL & WORKSPACE"}</div>
                <button type="button" class="mega-item" data-select-cat="business-email">
                  <strong>Business Email</strong>
                  <span>${isAr ? "بريد احترافي باسم شركتك" : "Custom domain email boxes"}</span>
                </button>
                <button type="button" class="mega-item" data-select-cat="email-marketing">
                  <strong>Email Marketing (Reach)</strong>
                  <span>${isAr ? "التسويق البريدي بالذكاء الاصطناعي" : "AI newsletter & drip campaigns"}</span>
                </button>
                <button type="button" class="mega-item" data-select-cat="google-workspace">
                  <strong>Google Workspace</strong>
                  <span>${isAr ? "Gmail و Drive و Meet مع Gemini AI" : "Official Gmail, Drive & Gemini AI"}</span>
                </button>
              </div>
            </div>
          </div>

          <a href="#pricing-section" class="h-nav-link" data-quick-group="vps">${isAr ? "خوادم VPS" : "VPS Hosting"}</a>
          <a href="#pricing-section" class="h-nav-link" data-quick-group="cloud">${isAr ? "السحابة" : "Cloud"}</a>
          <a href="#faq-section" class="h-nav-link">${isAr ? "الأسئلة الشائعة" : "FAQ"}</a>
        </nav>
      </div>

      <div class="h-nav-right">
        <button type="button" id="lang-switch-btn" class="h-lang-btn">
          <span class="flag-ae">🇦🇪</span>
          <span id="lang-switch-label">${isAr ? "EN" : "عربي"}</span>
        </button>

        <button type="button" id="mobile-menu-btn" class="h-mobile-burger" aria-label="Toggle Menu" aria-expanded="false">
          <svg class="burger-open-ic" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </div>
    </div>

    <!-- Mobile Slide-Down Drawer (For Mobile & Tablet Screens) -->
    <div class="h-mobile-drawer" id="mobile-nav-drawer">
      <div class="hmd-inner">
        <div class="hmd-section-lbl">${isAr ? "جميع منتجات هوستنجر (13)" : "ALL 13 HOSTINGER PRODUCTS"}</div>
        <div class="hmd-grid">
          ${activeCategories
            .map(
              (cat) => `
            <button type="button" class="hmd-prod-btn ${cat.id === currentCatId ? "active" : ""}" data-select-cat="${escapeHtml(cat.id)}">
              <span>${escapeHtml(isAr ? cat.nameAr : cat.nameEn)}</span>
              <em>${escapeHtml(isAr ? cat.badgeAr : cat.badgeEn)}</em>
            </button>`
            )
            .join("\n")}
        </div>
        <div class="hmd-footer">
          <a href="/go?type=general&lang=${lang}" target="_blank" rel="sponsored noopener" class="hmd-official-cta">
            ${isAr ? "فتح موقع Hostinger الرسمي (+20% خصم) ↗" : "Open Official Hostinger Site (+20% Off) ↗"}
          </a>
        </div>
      </div>
    </div>
  </header>

  <!-- ==================== 3. WHITE FRIDAY HERO (1:1 SCREENSHOT 1) ==================== -->
  <section class="h-hero">
    <!-- Floating 3D-style % Emblems from Screenshot 1 -->
    <div class="pct-float pct-silver" aria-hidden="true">%</div>
    <div class="pct-float pct-purple" aria-hidden="true">%</div>
    <div class="pct-float pct-yellow" aria-hidden="true">%</div>

    <div class="h-container h-hero-center">
      <h1 class="wf-title" id="hero-title">${escapeHtml(isAr ? store.hero.titleAr : store.hero.titleEn)}</h1>

      <div class="wf-discount-wrap">
        <div class="wf-starburst">
          <span>${isAr ? "حتى" : "UP"}</span>
          <span>${isAr ? "" : "TO"}</span>
        </div>
        <div class="wf-red-pill">${isAr ? "88% خصم" : "88% OFF"}</div>
      </div>

      <p class="wf-subtitle" id="hero-subtitle">
        ${escapeHtml(isAr ? store.hero.subtitleAr : store.hero.subtitleEn)}
      </p>

      <div class="wf-cta-group">
        <a href="#pricing-section" class="wf-claim-btn" id="hero-primary-cta">
          ${escapeHtml(isAr ? store.hero.primaryCtaAr : store.hero.primaryCtaEn)}
        </a>
        <a href="/go?type=general&lang=${lang}" target="_blank" rel="sponsored noopener" class="wf-general-btn" id="hero-secondary-cta">
          ${isAr ? "أو ادخل للموقع العام بالخصم 20% ↗" : "Or enter Official Hostinger Site (+20% Off) ↗"}
        </a>
      </div>

      <div class="wf-guarantee">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
        <span id="hero-trust-stats">${escapeHtml(isAr ? store.hero.trustStatsAr : store.hero.trustStatsEn)}</span>
      </div>
    </div>
  </section>

  <!-- ==================== 4. PRICING & ALL 13 PRODUCTS SECTION (SCREENSHOTS 2 & 3) ==================== -->
  <section id="pricing-section" class="h-pricing-section">
    <div class="h-container">
      <h2 class="h-sec-title" id="pricing-main-heading">
        ${isAr ? "احجز عرضك الآن قبل انتهاء الوقت" : "Secure your deal before it's gone"}
      </h2>

      <!-- Unified, Clean Hostinger Control Bar (Replaces the crowded multi-row chips) -->
      <div class="h-controls-bar">
        <!-- Main Pill Switcher (Exact Hostinger Style + More Products Popover) -->
        <div class="h-primary-switch" id="category-tabs" role="tablist">
          <button type="button" role="tab" class="h-ps-btn ${currentCatId === "web-hosting" ? "active" : ""}" data-cat-id="web-hosting">
            ${isAr ? "استضافة المواقع" : "Websites"}
          </button>
          <button type="button" role="tab" class="h-ps-btn ${currentCatId === "vps-hosting" ? "active" : ""}" data-cat-id="vps-hosting">
            ${isAr ? "خوادم VPS" : "VPS hosting"}
          </button>
          <button type="button" role="tab" class="h-ps-btn ${currentCatId === "wordpress-hosting" ? "active" : ""}" data-cat-id="wordpress-hosting">
            ${isAr ? "ووردبريس" : "WordPress"}
          </button>
          <button type="button" role="tab" class="h-ps-btn ${currentCatId === "cloud-hosting" ? "active" : ""}" data-cat-id="cloud-hosting">
            ${isAr ? "السحابة" : "Cloud"}
          </button>

          <!-- Clean Dropdown inside the Pill for the remaining specialized Hostinger products -->
          <div class="h-more-prods-wrap" id="more-prods-wrap">
            <button type="button" class="h-ps-btn h-more-trigger ${!["web-hosting", "vps-hosting", "wordpress-hosting", "cloud-hosting"].includes(currentCatId) ? "active" : ""}" id="more-prods-btn">
              <span id="more-prods-label">
                ${
                  !["web-hosting", "vps-hosting", "wordpress-hosting", "cloud-hosting"].includes(currentCatId)
                    ? escapeHtml(isAr ? currentCatObj?.nameAr : currentCatObj?.nameEn)
                    : isAr
                    ? "منتجات أخرى"
                    : "More products"
                }
              </span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="h-more-popover" id="more-prods-popover">
              ${activeCategories
                .filter((c) => !["web-hosting", "vps-hosting", "wordpress-hosting", "cloud-hosting"].includes(c.id))
                .map(
                  (cat) => `
                <button type="button" class="h-more-item ${cat.id === currentCatId ? "active" : ""}" data-cat-id="${escapeHtml(cat.id)}">
                  <span class="hmi-name">${escapeHtml(isAr ? cat.nameAr : cat.nameEn)}</span>
                  <span class="hmi-badge">${escapeHtml(isAr ? cat.badgeAr : cat.badgeEn)}</span>
                </button>`
                )
                .join("\n")}
            </div>
          </div>
        </div>

        <!-- Compact Billing Duration Pill (1M, 12M, 24M, 48M) -->
        <div class="h-period-pill" id="period-buttons" aria-label="Billing cycle">
          <button type="button" class="h-per-btn ${currentPeriod === "1" ? "active" : ""}" data-period="1">
            ${isAr ? "شهر" : "1M"}
          </button>
          <button type="button" class="h-per-btn ${currentPeriod === "12" ? "active" : ""}" data-period="12">
            ${isAr ? "12 شهر" : "12M"}
          </button>
          <button type="button" class="h-per-btn ${currentPeriod === "24" ? "active" : ""}" data-period="24">
            ${isAr ? "24 شهر" : "24M"}
          </button>
          <button type="button" class="h-per-btn ${currentPeriod === "48" ? "active" : ""}" data-period="48">
            <span>${isAr ? "48 شهر" : "48M"}</span>
            <em class="per-save-tag">-88%</em>
          </button>
        </div>
      </div>

      <!-- Sub-header Trust Icons Row from Screenshots 2 & 3 -->
      <div class="h-sub-trust-row">
        <div class="hst-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span id="cat-subline">${escapeHtml(isAr ? currentCatObj?.sublineAr : currentCatObj?.sublineEn)}</span>
        </div>
        <div class="hst-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
          <span>${isAr ? "ضمان استرداد الأموال لمدة 30 يوماً" : "30-day money-back guarantee"}</span>
        </div>
        <div class="hst-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
          <span>${isAr ? "دعم فني 24/7" : "24/7 support"}</span>
        </div>
        <a href="/go?cat=${escapeHtml(currentCatId)}&type=category&lang=${lang}" target="_blank" rel="sponsored noopener" class="hst-cat-direct" id="active-cat-link">
          <span id="active-cat-link-text">${isAr ? "فتح صفحة المنتج في Hostinger ↗" : "Open product page on Hostinger ↗"}</span>
        </a>
      </div>

      <!-- High-Conversion Partner Value Callout (CRO Booster) -->
      <div class="h-cro-callout">
        <span class="hcc-badge">${isAr ? "خصم الشركاء +20% مُفعّل" : "+20% Partner Code Active"}</span>
        <span class="hcc-text">
          ${
            isAr
              ? `الأسعار المعروضة أدناه شاملة <strong>خصم الإحالة الإضافي 20%</strong> فوق خصم الجمعة البيضاء (حتى 88%) — يُطبق تلقائياً في السلة عند الضغط على <strong>اختر الخطة</strong>.`
              : `Prices shown below include your <strong>extra 20% partner referral discount</strong> stacked on top of White Friday deals (up to 88% off) — automatically applied when you click <strong>Choose plan</strong>.`
          }
        </span>
      </div>

      <!-- Cards Grid (Matches Screenshots 2 & 3) -->
      <div class="h-cards-grid" id="plans-grid">
        ${ssrCardsHtml}
      </div>

      <!-- Dark Rounded "Every plan has everything you need and more" Banner (Screenshot 3!) -->
      <div class="h-every-plan-box">
        <h3 class="hep-title">
          ${
            isAr
              ? `كل خطة تحتوي على <span class="hep-purple">كل ما تحتاجه</span> وأكثر`
              : `Every plan has <span class="hep-purple">everything you need</span> and more`
          }
        </h3>
        <div class="hep-grid">
          <div class="hep-item"><span class="hep-check">✓</span> <span>${isAr ? "معالجات AMD EPYC فائقة السرعة" : "AMD EPYC processors"}</span></div>
          <div class="hep-item"><span class="hep-check">✓</span> <span>${isAr ? "نسخ احتياطي أسبوعي ويومي مجاني" : "Free weekly backups"}</span></div>
          <div class="hep-item"><span class="hep-check">✓</span> <span>${isAr ? "واجهة برمجة عامة Public API" : "Public API"}</span></div>
          <div class="hep-item"><span class="hep-check">✓</span> <span>${isAr ? "أقراص تخزين NVMe SSD" : "NVMe SSD storage"}</span></div>
          <div class="hep-item"><span class="hep-check">✓</span> <span>${isAr ? "إدارة جدار الحماية Firewall" : "Firewall management"}</span></div>
          <div class="hep-item"><span class="hep-check">✓</span> <span>${isAr ? "طرفية ويب بالذكاء الاصطناعي AI Terminal" : "AI Web Terminal"}</span></div>
          <div class="hep-item"><span class="hep-check">✓</span> <span>${isAr ? "مراكز بيانات حول العالم" : "Data centers worldwide"}</span></div>
          <div class="hep-item"><span class="hep-check">✓</span> <span>${isAr ? "سرعة شبكة 1 Gbps" : "1 Gbps network speed"}</span></div>
          <div class="hep-item"><span class="hep-check">✓</span> <span>${isAr ? "دومين مجاني لمدة سنة كاملة" : "Free domain for 1 year"}</span></div>
        </div>
      </div>

      <p class="h-bottom-disclaimer">
        ${
          isAr
            ? "جميع الخطط تُدفع مقدماً. يعكس السعر الشهري إجمالي سعر الخطة مقسوماً على عدد الأشهر شاملة خصم الإحالة الإضافي (20%) المُفعّل عبر الرابط المباشر."
            : "All plans are paid upfront. The monthly rate reflects the total plan price divided by the number of months in your plan with the extra 20% partner referral discount applied via direct link."
        }
      </p>
    </div>
  </section>

  <!-- ==================== 5. GENERAL REFERRAL LINK & 3-COLUMN BENTO PRODUCT DIRECTORY ==================== -->
  <section class="h-directory-section">
    <div class="h-container">
      <div class="h-general-vault">
        <div class="hgv-left">
          <div class="hgv-pill-tag">
            <span class="hgv-dot"></span>
            <span>${isAr ? "خصم الشركاء (+20%) يتفعل حصرياً بالرابط الكامل" : "Official Partner Discount (+20% Extra Off) via Full Link"}</span>
          </div>
          <h3>${isAr ? "تصفح موقع Hostinger الرسمي بالخصم الكامل" : "Explore Hostinger Official Website with +20% Extra Off"}</h3>
          <p>${isAr ? "تنبيه هام: خصم الـ 20% الإضافي يُفعّل تلقائياً فقط عند فتح الرابط الكامل أدناه أو الضغط على أزرار الباقات (لا يعمل ككود يُضاف يدوياً في خانة الكوبون)." : "Important: Your extra 20% discount is activated automatically only when opening the full partner link below or clicking a plan button (cannot be typed manually into a coupon box)."}</p>
        </div>
        <div class="hgv-actions">
          <div class="hgv-copy-box" dir="ltr">
            <input type="text" id="referral-link-input" readonly value="${escapeHtml(store.general.generalLink)}" aria-label="Referral Link" />
            <button type="button" id="copy-link-btn">${isAr ? "نسخ الرابط كامل" : "Copy full link"}</button>
          </div>
          <a href="/go?type=general&lang=${lang}" target="_blank" rel="sponsored noopener" class="hgv-open-btn" id="usb-cta">
            <span>${isAr ? "فتح موقع Hostinger بالخصم" : "Open Official Site with Discount"}</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <!-- Balanced 3-Column Bento Directory for All 13 Products -->
      <div class="h-bento-directory">
        <!-- Column 1: Websites & Cloud (5 items) -->
        <div class="h-bento-col">
          <div class="hbc-header">
            <span class="hbc-title">${isAr ? "استضافة المواقع والسحابة" : "Websites, WP & Cloud"}</span>
            <span class="hbc-count">5 ${isAr ? "منتجات" : "Products"}</span>
          </div>
          <div class="hbc-list">
            ${activeCategories
              .filter((c) => ["web-hosting", "wordpress-hosting", "woocommerce-hosting", "cloud-hosting", "pro"].includes(c.id))
              .map((cat) => renderDirectoryItemHtml(cat, store, lang))
              .join("\n")}
          </div>
        </div>

        <!-- Column 2: VPS, AI & GPU (5 items) -->
        <div class="h-bento-col">
          <div class="hbc-header">
            <span class="hbc-title">${isAr ? "خوادم VPS والذكاء الاصطناعي" : "VPS, AI & GPU Servers"}</span>
            <span class="hbc-count">5 ${isAr ? "منتجات" : "Products"}</span>
          </div>
          <div class="hbc-list">
            ${activeCategories
              .filter((c) => ["vps-hosting", "ai-managed-vps", "gpu-hosting", "web-apps-hosting", "applications"].includes(c.id))
              .map((cat) => renderDirectoryItemHtml(cat, store, lang))
              .join("\n")}
          </div>
        </div>

        <!-- Column 3: Email, Workspace & Express KVM Cart (3 items + Express Cart Box = Exact Same Height) -->
        <div class="h-bento-col">
          <div class="hbc-header">
            <span class="hbc-title">${isAr ? "البريد والأعمال + سلة VPS السريعة" : "Email, Workspace & Fast Cart"}</span>
            <span class="hbc-count">${isAr ? "وصول فوري" : "Direct Links"}</span>
          </div>
          <div class="hbc-list">
            ${activeCategories
              .filter((c) => ["business-email", "email-marketing", "google-workspace"].includes(c.id))
              .map((cat) => renderDirectoryItemHtml(cat, store, lang))
              .join("\n")}

            <!-- Express KVM Direct Cart Box (Fills the remaining 2 slots so all 3 columns align perfectly!) -->
            <div class="h-express-kvm-box">
              <div class="hekb-top">
                <strong>${isAr ? "🛒 سلة شراء VPS المباشرة (خصم 20% فوري)" : "🛒 Express VPS Direct Cart (Referral Applied)"}</strong>
                <span>${isAr ? "انتقل للسلة مباشرة مع تفعيل الخصم بالرابط" : "Jump straight to Hostinger checkout with discount"}</span>
              </div>
              <div class="hekb-chips">
                <a href="/go?plan=vps-kvm-1&period=24&type=direct&lang=${lang}" target="_blank" rel="sponsored noopener" class="hekb-chip">
                  <strong>KVM 1</strong> <span>$5.19/mo ↗</span>
                </a>
                <a href="/go?plan=vps-kvm-2&period=24&type=direct&lang=${lang}" target="_blank" rel="sponsored noopener" class="hekb-chip popular">
                  <strong>KVM 2</strong> <span>$7.03/mo ↗</span>
                </a>
                <a href="/go?plan=vps-kvm-4&period=24&type=direct&lang=${lang}" target="_blank" rel="sponsored noopener" class="hekb-chip">
                  <strong>KVM 4</strong> <span>$10.39/mo ↗</span>
                </a>
                <a href="/go?plan=vps-kvm-8&period=24&type=direct&lang=${lang}" target="_blank" rel="sponsored noopener" class="hekb-chip">
                  <strong>KVM 8</strong> <span>$20.79/mo ↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ==================== 6. FAQ SECTION ==================== -->
  <section id="faq-section" class="h-faq-section">
    <div class="h-container h-faq-narrow">
      <h2 class="h-sec-title">${isAr ? "الأسئلة الشائعة حول خصومات وعروض هوستنجر" : "Frequently asked questions"}</h2>
      <div class="faq-list" id="faq-list">
        ${ssrFaqsHtml}
      </div>
    </div>
  </section>

  <!-- ==================== 7. SEO BUYER'S GUIDE & VERIFIED COUPON SUMMARY ==================== -->
  <section class="h-seo-guide-section">
    <div class="h-container">
      <div class="h-seo-card">
        <div class="hsc-grid">
          <div class="hsc-col">
            <h2>${isAr ? "دليل عروض وخصومات شركاء هوستنجر الرسمية 2026 (+20% خصم إضافي)" : "Hostinger Official Partner Deals & Discount Guide 2026 (+20% Extra Off)"}</h2>
            <p>
              ${
                isAr
                  ? "تُعد هوستنجر (Hostinger) واحدة من أسرع شركات استضافة المواقع وخوادم الـ VPS نمواً في العالم والشرق الأوسط. من خلال بوابة عروض الشركاء المعتمدين، يمكنك دمج تخفيضات الجمعة البيضاء الكبرى (التي تصل إلى 88%) مع رابط الإحالة الرسمي للحصول على خصم إضافي فوري بنسبة 20% في سلة الشراء لمختلف الخطط السنوية (12، 24، و48 شهراً). يُفعّل هذا الخصم تلقائياً بمجرد الدخول عبر الروابط المباشرة في هذه الصفحة دون الحاجة لإدخال أي كود يدوياً."
                  : "Hostinger is one of the fastest-growing web hosting and KVM VPS providers worldwide. Through our official partner portal, you can stack Hostinger's seasonal White Friday discounts (up to 88% off) with our direct partner referral links for an automatic extra 20% discount at checkout on eligible 12, 24, and 48-month plans — activated automatically via link without typing any manual coupon code."
              }
            </p>
            <h3>${isAr ? "كيف تختار الباقة المناسبة لمشروعك؟" : "How to choose the right Hostinger plan?"}</h3>
            <ul class="hsc-list">
              <li><strong>${isAr ? "استضافة المواقع والووردبريس (Web & WordPress):" : "Web & WordPress Hosting:"}</strong> ${isAr ? "تبدأ من $1.19/شهرياً (باقة Single) و $2.23/شهرياً لباقة Unlimited شاملة دومين مجاني ومساحة NVMe وأدوات الذكاء الاصطناعي." : "Starts at US$1.19/mo (Single) and US$2.23/mo for Unlimited with a free domain, NVMe storage, and AI website builder."}</li>
              <li><strong>${isAr ? "خوادم KVM VPS وسيرفرات n8n:" : "KVM VPS & 1-Click n8n Servers:"}</strong> ${isAr ? "تبدأ من $5.19/شهرياً لخطة KVM 1 و $7.03/شهرياً لخطة KVM 2 بمعالجات AMD EPYC وصلاحية Root كاملة." : "Starts at US$5.19/mo (KVM 1) and US$7.03/mo (KVM 2) powered by AMD EPYC CPUs, NVMe SSD, and 1-Click Docker/n8n templates."}</li>
              <li><strong>${isAr ? "الاستضافة السحابية والوكالات (Cloud & Pro):" : "Cloud & Agency Pro Hosting:"}</strong> ${isAr ? "تبدأ من $6.39/شهرياً مع موارد مخصصة وعنوان IP مجاني للمتاجر الكبرى والوكالات." : "Starts at US$6.39/mo with dedicated cloud resources, free dedicated IP, and per-site isolation for agencies."}</li>
            </ul>
          </div>

          <div class="hsc-col">
            <h3>${isAr ? "ملخص أقوى خصومات هوستنجر الفعالة عبر الرابط المباشر" : "Verified Hostinger Partner Deals Summary"}</h3>
            <div class="hsc-table-wrap">
              <table class="hsc-table">
                <thead>
                  <tr>
                    <th>${isAr ? "المنتج / الخطة" : "Product / Plan"}</th>
                    <th>${isAr ? "الخصم الكلي" : "Total Discount"}</th>
                    <th>${isAr ? "السعر بعد خصم الرابط" : "Net Partner Price"}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Web Hosting (Single / Premium)</strong></td>
                    <td><span class="hsc-pill">88% + 20% Off</span></td>
                    <td><strong>US$1.19 – $1.59/mo</strong></td>
                  </tr>
                  <tr>
                    <td><strong>Unlimited / Business WordPress</strong></td>
                    <td><span class="hsc-pill">88% + 20% Off</span></td>
                    <td><strong>US$2.23/mo</strong></td>
                  </tr>
                  <tr>
                    <td><strong>Cloud Startup / WooCommerce</strong></td>
                    <td><span class="hsc-pill">77% + 20% Off</span></td>
                    <td><strong>US$6.39/mo</strong></td>
                  </tr>
                  <tr>
                    <td><strong>VPS KVM 1 / KVM 2 (AMD EPYC)</strong></td>
                    <td><span class="hsc-pill">74% + 20% Off</span></td>
                    <td><strong>US$5.19 – $7.03/mo</strong></td>
                  </tr>
                  <tr>
                    <td><strong>VPS KVM 4 / KVM 8 Enterprise</strong></td>
                    <td><span class="hsc-pill">76% + 20% Off</span></td>
                    <td><strong>US$10.39 – $20.79/mo</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Internal SEO Crawl Links for All 13 Categories -->
            <div class="hsc-seo-links">
              <span>${isAr ? "روابط الأقسام المباشرة:" : "Direct Product Pages:"}</span>
              ${activeCategories
                .map(
                  (c) =>
                    `<a href="/${lang}/${escapeHtml(c.id)}">${escapeHtml(isAr ? c.nameAr : c.nameEn)}</a>`
                )
                .join(" • ")}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ==================== 8. GOOGLE ADS & META ADS COMPLIANT FOOTER ==================== -->
  <footer class="h-footer">
    <div class="h-container">
      <div class="h-footer-inner">
        <div class="hf-brand-col">
          <div class="hf-brand-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4 3h5v7h6V3h5v18h-5v-7H9v7H4V3z"/></svg>
            <strong>HOSTINGER</strong>
            <span class="hf-partner-tag">${isAr ? "بوابة عروض الشركاء المعتمدين" : "Authorized Affiliate Partner Portal"}</span>
          </div>
          <p class="hf-brand-sub">${isAr ? "خصم إضافي 20% مُفعّل تلقائياً عبر روابط الشراكة المباشرة لجميع باقات هوستنجر الرسمية." : "Extra 20% partner discount automatically applied via direct links across all official Hostinger plans."}</p>
        </div>

        <div class="hf-right">
          <button type="button" class="hf-legal-btn" data-legal="privacy">${isAr ? "سياسة الخصوصية" : "Privacy Policy"}</button>
          <button type="button" class="hf-legal-btn" data-legal="terms">${isAr ? "شروط الاستخدام" : "Terms of Use"}</button>
          <button type="button" class="hf-legal-btn" data-legal="disclosure">${isAr ? "إفصاح الشركاء" : "Affiliate Disclosure"}</button>
          <a href="/go?type=general&lang=${lang}" target="_blank" rel="sponsored noopener" class="hf-site-link">${isAr ? "موقع Hostinger الرسمي بالخصم ↗" : "Official Hostinger Site (+20% Off) ↗"}</a>
        </div>
      </div>

      <div class="hf-disclosure">
        ${
          isAr
            ? "إفصاح الشركاء والشفافية الإعلانية: هذا الموقع عبارة عن بوابة عروض ترويجية مستقلة تابعة لبرنامج شركاء وإحالات هوستنجر الرسمي (Hostinger Referral & Affiliate Program). عند الشراء عبر الروابط الكاملة الموجودة في هذه الصفحة، يتفعل لك تلقائياً خصم إضافي حصري يصل إلى 20% فوق العروض الرسمية (الخصم مرتبط بالرابط المباشر ولا يُضاف ككود منفصل)، وقد نحصل نحن على عمولة إحالة دون أي تكلفة إضافية عليك. جميع العلامات التجارية والأسماء المذكورة مملوكة لشركة Hostinger International Ltd. وتتم عمليات الدفع والفوترة وضمان استرداد الأموال (30 يوماً) مباشرة عبر الموقع الرسمي الآمن لشركة Hostinger."
            : "Affiliate & Advertising Disclosure: This website operates as an independent promotional partner portal participating in the official Hostinger Referral & Affiliate Program. When you purchase by opening the full partner links on this page, you automatically receive an extra referral discount (up to 20% off eligible plans — activated exclusively via the link) and we may earn a partner commission at no additional cost to you. All trademarks and brand names belong to Hostinger International Ltd. All checkouts, billing, and the 30-day money-back guarantee are processed directly on Hostinger's official website."
        }
      </div>

      <!-- Designer & Developer Credit -->
      <div class="hf-dev-credit">
        <span>${isAr ? "تمت البرمجة والتطوير بواسطة" : "Designed & Developed by"}</span>
        <a href="https://youssefk.com" target="_blank" rel="noopener" class="hf-dev-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          <strong>youssef khalaf</strong>
          <em>youssefk.com ↗</em>
        </a>
      </div>
    </div>
  </footer>

  <!-- Floating WhatsApp CTA Button (Telegram/WhatsApp Direct Contact) -->
  <a href="https://wa.me/201090901500?text=${encodeURIComponent(isAr ? 'مرحباً، أود الاستفسار عن كود خصم وعروض هوستنجر' : 'Hello, I would like to inquire about Hostinger discounts')}" 
     data-wa-user="y9090oussef"
     target="_blank" 
     rel="noopener noreferrer" 
     class="floating-whatsapp-btn" 
     id="floating-whatsapp"
     aria-label="تواصل عبر واتساب" 
     title="${isAr ? 'تواصل معنا مباشرة عبر واتساب' : 'Chat with us on WhatsApp'}">
    <div class="fwa-pulse"></div>
    <svg class="fwa-icon" viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.06 7.23C8.88 7.23 8.58 7.3 8.33 7.57C8.08 7.85 7.38 8.5 7.38 9.83C7.38 11.16 8.35 12.44 8.49 12.63C8.63 12.82 10.4 15.54 13.12 16.71C13.77 16.99 14.28 17.16 14.67 17.29C15.33 17.5 15.93 17.47 16.41 17.4C16.94 17.32 18.04 16.73 18.27 16.08C18.5 15.43 18.5 14.88 18.43 14.76C18.36 14.64 18.18 14.57 17.91 14.43C17.64 14.3 16.31 13.65 16.06 13.56C15.82 13.47 15.64 13.42 15.46 13.69C15.28 13.97 14.77 14.57 14.61 14.75C14.46 14.94 14.31 14.96 14.04 14.83C13.77 14.69 12.91 14.41 11.89 13.5C11.1 12.79 10.56 11.91 10.41 11.65C10.26 11.39 10.39 11.24 10.53 11.11C10.65 11 10.8 10.8 10.94 10.64C11.08 10.48 11.12 10.36 11.21 10.18C11.3 10 11.26 9.85 11.19 9.72C11.12 9.59 10.59 8.29 10.37 7.76C10.15 7.24 9.93 7.31 9.77 7.3C9.62 7.3 9.44 7.23 9.06 7.23Z"/>
    </svg>
    <span class="fwa-tooltip">${isAr ? "تواصل واتساب (y9090oussef)" : "Chat on WhatsApp"}</span>
  </a>

  <!-- Built-in Legal Modal (Privacy Policy, Terms, Affiliate Disclosure for Google Ads Compliance) -->
  <div class="h-legal-modal-backdrop" id="legal-modal" aria-hidden="true">
    <div class="h-legal-modal-box" role="dialog" aria-modal="true">
      <div class="hlm-header">
        <h3 id="legal-modal-title">Privacy Policy</h3>
        <button type="button" id="close-legal-modal" class="hlm-close" aria-label="Close">✕</button>
      </div>
      <div class="hlm-body" id="legal-modal-body"></div>
    </div>
  </div>

  <div id="toast-notification" class="h-toast" aria-live="polite"></div>

  <script>
    window.__INITIAL_STORE__ = ${JSON.stringify(publicStore)};
    window.__INITIAL_LANG__ = ${JSON.stringify(lang)};
    window.__INITIAL_CAT__ = ${JSON.stringify(currentCatId)};
    window.__INITIAL_PERIOD__ = ${JSON.stringify(currentPeriod)};
  </script>
  <script src="/js/app.js"></script>
</body>
</html>`;
}

module.exports = { renderLandingPage };
