// Hostinger Affiliate Admin Dashboard Logic
(function () {
  let storeData = null;
  let adminToken = localStorage.getItem("hostinger_admin_token") || "";
  let selectedPlanCategoryFilter = "all";

  function escapeHtml(str) {
    if (str === null || str === undefined) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function showToast(msg) {
    const t = document.getElementById("admin-toast");
    if (!t) return;
    t.textContent = msg;
    t.classList.add("show");
    setTimeout(() => t.classList.remove("show"), 3200);
  }

  async function apiFetch(url, options = {}) {
    const headers = Object.assign(
      {
        "Content-Type": "application/json",
        "x-admin-token": adminToken
      },
      options.headers || {}
    );
    const res = await fetch(url, Object.assign({}, options, { headers }));
    if (res.status === 401) {
      document.getElementById("login-overlay").style.display = "flex";
      document.getElementById("admin-app").style.display = "none";
      throw new Error("Unauthorized");
    }
    return res.json();
  }

  // ==================== AUTH & LOAD ====================
  async function tryLoadStore() {
    try {
      const data = await apiFetch("/api/admin/store");
      storeData = data;
      document.getElementById("login-overlay").style.display = "none";
      document.getElementById("admin-app").style.display = "grid";
      populateAllTabs();
    } catch (e) {
      document.getElementById("login-overlay").style.display = "flex";
      document.getElementById("admin-app").style.display = "none";
    }
  }

  document.getElementById("login-form")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const pass = document.getElementById("admin-password-input").value;
    const errEl = document.getElementById("login-error");
    errEl.textContent = "";
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pass })
      });
      const json = await res.json();
      if (!res.ok || !json.token) {
        errEl.textContent = json.error || "كلمة المرور غير صحيحة";
        return;
      }
      adminToken = json.token;
      localStorage.setItem("hostinger_admin_token", adminToken);
      await tryLoadStore();
    } catch (err) {
      errEl.textContent = "حدث خطأ في الاتصال بالسيرفر";
    }
  });

  // ==================== SIDEBAR NAVIGATION ====================
  document.querySelectorAll(".side-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".side-tab").forEach((b) => b.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      const targetId = btn.getAttribute("data-tab");
      document.getElementById(targetId)?.classList.add("active");
      document.getElementById("current-tab-title").textContent = btn.textContent.trim();
    });
  });

  // ==================== POPULATE ALL TABS ====================
  function populateAllTabs() {
    if (!storeData) return;

    document.getElementById("top-ref-code").textContent = storeData.general?.referralCode || "EQOY9090OIJA";

    populateOverview();
    populateCategoriesFilter();
    populatePlansEditor();
    populateCategoriesEditor();
    populateCountdownTab();
    populateGeneralTab();
    populateSeoAdsTab();
    populateFaqsTab();
  }

  // 1. Overview & Analytics
  function populateOverview() {
    const analytics = storeData.analytics || { totalClicks: 0, clicksByPlan: {}, recentClicks: [] };
    document.getElementById("stat-total-clicks").textContent = analytics.totalClicks || 0;
    const activePlansCount = (storeData.plans || []).filter((p) => p.active !== false).length;
    document.getElementById("stat-active-plans").textContent = activePlansCount;

    const targetMs = new Date(storeData.countdown?.targetDate).getTime();
    const diffHours = Math.max(0, Math.round((targetMs - Date.now()) / 3600000));
    document.getElementById("stat-countdown-rem").textContent = `${Math.floor(diffHours / 24)} يوم و ${diffHours % 24} ساعة`;

    const breakdownBox = document.getElementById("clicks-by-plan-list");
    const entries = Object.entries(analytics.clicksByPlan || {});
    if (entries.length === 0) {
      breakdownBox.innerHTML = `<p class="muted-text">لم يتم تسجيل نقرات بعد. جرب الضغط على أي خطة في صفحة الهبوط لتراها هنا فوراً!</p>`;
    } else {
      breakdownBox.innerHTML = entries
        .sort((a, b) => b[1] - a[1])
        .map(([key, count]) => {
          const planObj = (storeData.plans || []).find((p) => p.id === key);
          const label = planObj ? planObj.nameAr : key === "general" ? "الرابط العام لهوستنجر" : key;
          return `
            <div class="click-pill-card">
              <span>${escapeHtml(label)}</span>
              <strong>${count} نقرة</strong>
            </div>`;
        })
        .join("");
    }

    const tbody = document.getElementById("recent-clicks-tbody");
    const recents = analytics.recentClicks || [];
    if (recents.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;">لا توجد نقرات مسجلة حتى الآن</td></tr>`;
    } else {
      tbody.innerHTML = recents
        .slice(0, 40)
        .map((c) => {
          const dt = new Date(c.timestamp).toLocaleString("ar-EG");
          const utmInfo = c.gclid
            ? `Google Ad (gclid: ${c.gclid.slice(0, 10)}...)`
            : c.utmSource
            ? `${c.utmSource} / ${c.utmCampaign || "-"}`
            : "مباشر / سيو";
          return `
            <tr>
              <td class="tabular">${escapeHtml(dt)}</td>
              <td><strong>${escapeHtml(c.planName)}</strong></td>
              <td>${c.linkType === "direct" ? "سلة مباشرة (Direct Cart)" : "موقع عام (Official Site)"}</td>
              <td class="tabular">${escapeHtml(c.period)} شهر</td>
              <td>${c.lang === "ar" ? "عربي" : "EN"}</td>
              <td class="tabular">${escapeHtml(utmInfo)}</td>
            </tr>`;
        })
        .join("");
    }
  }

  // 2. Plans Editor
  function populateCategoriesFilter() {
    const sel = document.getElementById("admin-plan-cat-filter");
    if (!sel) return;
    sel.innerHTML =
      `<option value="all">جميع الأقسام (${(storeData.plans || []).length} خطة)</option>` +
      (storeData.categories || [])
        .map((c) => `<option value="${escapeHtml(c.id)}" ${selectedPlanCategoryFilter === c.id ? "selected" : ""}>${escapeHtml(c.nameAr)}</option>`)
        .join("");
    sel.onchange = () => {
      selectedPlanCategoryFilter = sel.value;
      populatePlansEditor();
    };
  }

  function populatePlansEditor() {
    const container = document.getElementById("admin-plans-container");
    if (!container) return;

    const plans = (storeData.plans || []).filter(
      (p) => selectedPlanCategoryFilter === "all" || p.categoryId === selectedPlanCategoryFilter
    );

    const catOptionsHtml = (selectedCat) =>
      (storeData.categories || [])
        .map((c) => `<option value="${escapeHtml(c.id)}" ${c.id === selectedCat ? "selected" : ""}>${escapeHtml(c.nameAr)}</option>`)
        .join("");

    container.innerHTML = plans
      .map((plan) => {
        const idx = storeData.plans.findIndex((x) => x.id === plan.id);
        const specsStr = (plan.specs || [])
          .map((s) => `${s.labelAr} | ${s.labelEn} | ${s.valueAr} | ${s.valueEn}`)
          .join("\n");
        const featArStr = (plan.featuresAr || []).join("\n");
        const featEnStr = (plan.featuresEn || []).join("\n");

        return `
        <div class="plan-editor-card" data-plan-idx="${idx}">
          <div class="plan-editor-header">
            <div class="plan-editor-title">
              <span>${escapeHtml(plan.nameAr)} — <span class="tabular">${escapeHtml(plan.nameEn)}</span></span>
            </div>
            <div style="display:flex;gap:12px;align-items:center;">
              <label style="font-size:0.82rem;font-weight:600;">
                <input type="checkbox" class="pe-dark" ${plan.darkCard ? "checked" : ""} /> كارت داكن مميز (Dark Card)
              </label>
              <label style="font-size:0.82rem;font-weight:600;">
                <input type="checkbox" class="pe-popular" ${plan.popular ? "checked" : ""} /> شريط "الأكثر شعبية"
              </label>
              <label style="font-size:0.82rem;font-weight:600;">
                <input type="checkbox" class="pe-active" ${plan.active !== false ? "checked" : ""} /> الخطة مفعلة
              </label>
              <button type="button" class="btn-danger-sm pe-delete-btn" data-idx="${idx}">حذف الخطة</button>
            </div>
          </div>

          <div class="form-grid-4" style="margin-bottom:14px;">
            <div class="form-group">
              <label>اسم الخطة (عربي)</label>
              <input type="text" class="admin-input pe-name-ar" value="${escapeHtml(plan.nameAr)}" />
            </div>
            <div class="form-group">
              <label>اسم الخطة (إنجليزي)</label>
              <input type="text" class="admin-input pe-name-en" dir="ltr" value="${escapeHtml(plan.nameEn)}" />
            </div>
            <div class="form-group">
              <label>القسم التابع له</label>
              <select class="admin-select pe-cat">${catOptionsHtml(plan.categoryId)}</select>
            </div>
            <div class="form-group">
              <label>ترتيب الظهور</label>
              <input type="number" class="admin-input pe-order" value="${Number(plan.order || 1)}" />
            </div>
          </div>

          <div class="form-grid-2" style="margin-bottom:14px;">
            <div class="form-group">
              <label>وصف قصير تحت الاسم (عربي)</label>
              <input type="text" class="admin-input pe-tag-ar" value="${escapeHtml(plan.taglineAr)}" />
            </div>
            <div class="form-group">
              <label>وصف قصير تحت الاسم (إنجليزي)</label>
              <input type="text" class="admin-input pe-tag-en" dir="ltr" value="${escapeHtml(plan.taglineEn)}" />
            </div>
          </div>

          <!-- Prices Row -->
          <div class="form-grid-4" style="margin-bottom:14px;">
            <div class="form-group">
              <label>السعر الأصلي المشطوب ($)</label>
              <input type="number" step="0.01" class="admin-input pe-orig-usd" value="${Number(plan.originalMonthlyUsd || 14.99)}" />
            </div>
            <div class="form-group">
              <label>سعر 1 شهر ($)</label>
              <input type="number" step="0.01" class="admin-input pe-p1" value="${Number(plan.pricesUsd?.["1"] || 9.99)}" />
            </div>
            <div class="form-group">
              <label>سعر 12 شهر ($)</label>
              <input type="number" step="0.01" class="admin-input pe-p12" value="${Number(plan.pricesUsd?.["12"] || 5.99)}" />
            </div>
            <div class="form-group">
              <label>سعر 24 / 48 شهر ($)</label>
              <input type="number" step="0.01" class="admin-input pe-p24" value="${Number(plan.pricesUsd?.["48"] || plan.pricesUsd?.["24"] || 4.99)}" />
            </div>
          </div>

          <!-- Direct Cart Links Per Duration -->
          <div class="links-box-highlight">
            <h4>🔗 الروابط المباشرة لهذه الخطة (توجيه مباشر للسلة أو لصفحة الخطة مع كود الخصم)</h4>
            <div class="form-grid-2">
              <div class="form-group">
                <label>الرابط المباشر الأساسي للخطة (Default Direct Link)</label>
                <input type="url" class="admin-input pe-link-direct" dir="ltr" value="${escapeHtml(plan.links?.direct || "")}" />
              </div>
              <div class="form-group">
                <label>رابط سلة 24 شهراً (Period = 24 Cart Link)</label>
                <input type="url" class="admin-input pe-link-24" dir="ltr" value="${escapeHtml(plan.links?.period_24 || "")}" />
              </div>
              <div class="form-group">
                <label>رابط سلة 12 شهراً (Period = 12 Cart Link)</label>
                <input type="url" class="admin-input pe-link-12" dir="ltr" value="${escapeHtml(plan.links?.period_12 || "")}" />
              </div>
              <div class="form-group">
                <label>رابط سلة شهر واحد (Period = 1 Cart Link)</label>
                <input type="url" class="admin-input pe-link-1" dir="ltr" value="${escapeHtml(plan.links?.period_1 || "")}" />
              </div>
              <div class="form-group">
                <label>رابط سلة 48 شهراً (Period = 48 Cart Link)</label>
                <input type="url" class="admin-input pe-link-48" dir="ltr" value="${escapeHtml(plan.links?.period_48 || "")}" />
              </div>
              <div class="form-group">
                <label>رابط الموقع العام البديل للبطاقة (General Site Link)</label>
                <input type="url" class="admin-input pe-link-gen" dir="ltr" value="${escapeHtml(plan.links?.generalFallback || storeData.general?.generalLink || "")}" />
              </div>
            </div>
          </div>

          <!-- Specs & Features -->
          <div class="form-grid-2" style="margin-top:14px;">
            <div class="form-group">
              <label>المميزات بالعربي (ميزة في كل سطر)</label>
              <textarea class="admin-textarea pe-feat-ar" rows="4">${escapeHtml(featArStr)}</textarea>
            </div>
            <div class="form-group">
              <label>المميزات بالإنجليزي (One feature per line)</label>
              <textarea class="admin-textarea pe-feat-en" rows="4" dir="ltr">${escapeHtml(featEnStr)}</textarea>
            </div>
          </div>
          <div class="form-group" style="margin-top:10px;">
            <label>المواصفات الأربعة البارزة (كل سطر بصيغة: العنوان عربي | العنوان إنجليزي | القيمة عربي | القيمة إنجليزي)</label>
            <textarea class="admin-textarea pe-specs" rows="3">${escapeHtml(specsStr)}</textarea>
          </div>
        </div>`;
      })
      .join("");

    // Bind delete buttons
    container.querySelectorAll(".pe-delete-btn").forEach((btn) => {
      btn.onclick = () => {
        const idx = Number(btn.getAttribute("data-idx"));
        if (confirm("هل أنت متأكد من حذف هذه الخطة؟")) {
          syncUIToStore();
          storeData.plans.splice(idx, 1);
          populatePlansEditor();
        }
      };
    });
  }

  // Add New Plan
  document.getElementById("add-new-plan-btn")?.addEventListener("click", () => {
    syncUIToStore();
    const defaultCat = selectedPlanCategoryFilter === "all" ? "vps" : selectedPlanCategoryFilter;
    const genLink = storeData.general?.generalLink || "https://www.hostinger.com/ae?REFERRALCODE=EQOY9090OIJA";
    storeData.plans.unshift({
      id: "plan-" + Date.now().toString(36),
      categoryId: defaultCat,
      order: 1,
      active: true,
      popular: false,
      nameAr: "خطة جديدة",
      nameEn: "New Plan",
      taglineAr: "وصف مميز للخطة الجديدة",
      taglineEn: "Great description for the new plan",
      badgeAr: "خصم حصري +20%",
      badgeEn: "Exclusive +20% Off",
      originalMonthlyUsd: 19.99,
      pricesUsd: { "1": 12.99, "12": 7.99, "24": 6.99, "48": 6.99 },
      extraDiscountEligiblePeriods: ["12", "24", "48"],
      specs: [
        { labelAr: "المعالج", labelEn: "CPU", valueAr: "2 نواة", valueEn: "2 Cores" },
        { labelAr: "الرام", labelEn: "RAM", valueAr: "8 جيجابايت", valueEn: "8 GB" }
      ],
      featuresAr: ["خصم إضافي 20% عبر رابط الشركاء", "ضمان استرداد الأموال 30 يوماً"],
      featuresEn: ["Extra 20% partner discount included", "30-Day Money-Back Guarantee"],
      links: {
        direct: genLink,
        period_1: genLink,
        period_12: genLink,
        period_24: genLink,
        period_48: genLink,
        generalFallback: genLink
      }
    });
    populatePlansEditor();
    showToast("تمت إضافة خطة جديدة! عدّل بياناتها ثم اضغط حفظ التغييرات.");
  });

  // 3. Categories Editor
  function populateCategoriesEditor() {
    const container = document.getElementById("admin-categories-container");
    if (!container) return;

    container.innerHTML = (storeData.categories || [])
      .map(
        (cat, idx) => `
      <div class="plan-editor-card" data-cat-idx="${idx}">
        <div class="plan-editor-header">
          <div class="plan-editor-title">📁 ${escapeHtml(cat.nameAr)} (${escapeHtml(cat.id)})</div>
          <div style="display:flex;gap:10px;align-items:center;">
            <label style="font-size:0.85rem;font-weight:700;">
              <input type="checkbox" class="ce-active" ${cat.active !== false ? "checked" : ""} /> القسم مفعل
            </label>
            <button type="button" class="btn-danger-sm ce-del-btn" data-idx="${idx}">حذف القسم</button>
          </div>
        </div>
        <div class="form-grid-4">
          <div class="form-group">
            <label>معرف القسم (Slug بالإنجليزي مثل vps)</label>
            <input type="text" class="admin-input ce-id" dir="ltr" value="${escapeHtml(cat.id)}" />
          </div>
          <div class="form-group">
            <label>اسم القسم (عربي)</label>
            <input type="text" class="admin-input ce-name-ar" value="${escapeHtml(cat.nameAr)}" />
          </div>
          <div class="form-group">
            <label>اسم القسم (إنجليزي)</label>
            <input type="text" class="admin-input ce-name-en" dir="ltr" value="${escapeHtml(cat.nameEn)}" />
          </div>
          <div class="form-group">
            <label>الترتيب</label>
            <input type="number" class="admin-input ce-order" value="${Number(cat.order || idx + 1)}" />
          </div>
        </div>
        <div class="form-grid-2" style="margin-top:12px;">
          <div class="form-group">
            <label>شارة القسم (عربي)</label>
            <input type="text" class="admin-input ce-badge-ar" value="${escapeHtml(cat.badgeAr)}" />
          </div>
          <div class="form-group">
            <label>شارة القسم (إنجليزي)</label>
            <input type="text" class="admin-input ce-badge-en" dir="ltr" value="${escapeHtml(cat.badgeEn)}" />
          </div>
          <div class="form-group">
            <label>وصف القسم (عربي)</label>
            <input type="text" class="admin-input ce-desc-ar" value="${escapeHtml(cat.descriptionAr)}" />
          </div>
          <div class="form-group">
            <label>وصف القسم (إنجليزي)</label>
            <input type="text" class="admin-input ce-desc-en" dir="ltr" value="${escapeHtml(cat.descriptionEn)}" />
          </div>
        </div>
        <div class="form-group" style="margin-top:12px;">
          <label>رابط القسم المباشر في هوستنجر (Category Referral Link)</label>
          <input type="url" class="admin-input ce-link" dir="ltr" value="${escapeHtml(cat.categoryLink)}" />
        </div>
      </div>`
      )
      .join("");

    container.querySelectorAll(".ce-del-btn").forEach((btn) => {
      btn.onclick = () => {
        const idx = Number(btn.getAttribute("data-idx"));
        if (confirm("هل أنت متأكد من حذف هذا القسم؟")) {
          syncUIToStore();
          storeData.categories.splice(idx, 1);
          populateCategoriesEditor();
          populateCategoriesFilter();
        }
      };
    });
  }

  document.getElementById("add-new-cat-btn")?.addEventListener("click", () => {
    syncUIToStore();
    storeData.categories.push({
      id: "cat-" + Date.now().toString(36),
      slug: "new-category",
      order: storeData.categories.length + 1,
      active: true,
      badgeAr: "خصم +20%",
      badgeEn: "+20% Extra Off",
      nameAr: "قسم جديد",
      nameEn: "New Category",
      descriptionAr: "وصف القسم الجديد",
      descriptionEn: "New category description",
      categoryLink: storeData.general?.generalLink || "https://www.hostinger.com/ae?REFERRALCODE=EQOY9090OIJA"
    });
    populateCategoriesEditor();
    populateCategoriesFilter();
    showToast("تمت إضافة قسم جديد!");
  });

  // 4. Countdown Tab
  function populateCountdownTab() {
    const cd = storeData.countdown || {};
    document.getElementById("cd-enabled").value = String(cd.enabled !== false);
    if (cd.targetDate) {
      const d = new Date(cd.targetDate);
      const localIso = new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
      document.getElementById("cd-target-date").value = localIso;
    }
    document.getElementById("cd-auto-reset").value = String(cd.autoResetWhenExpired !== false);
    document.getElementById("cd-evergreen-hours").value = Number(cd.evergreenHours || 221);
    document.getElementById("cd-badge-ar").value = cd.badgeAr || "";
    document.getElementById("cd-badge-en").value = cd.badgeEn || "";
    document.getElementById("cd-text-ar").value = cd.topBarTextAr || "";
    document.getElementById("cd-text-en").value = cd.topBarTextEn || "";
    document.getElementById("cd-cta-ar").value = cd.ctaBarAr || "";
    document.getElementById("cd-cta-en").value = cd.ctaBarEn || "";
  }

  document.querySelectorAll(".btn-preset").forEach((btn) => {
    btn.addEventListener("click", () => {
      const hours = Number(btn.getAttribute("data-hours") || 24);
      const target = new Date(Date.now() + hours * 3600 * 1000);
      const localIso = new Date(target.getTime() - target.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
      document.getElementById("cd-target-date").value = localIso;
      showToast("تم ضبط وقت انتهاء العرض! اضغط (حفظ التغييرات) لتطبيقه.");
    });
  });

  // 5. General & Hero Tab
  function populateGeneralTab() {
    const g = storeData.general || {};
    const h = storeData.hero || {};
    document.getElementById("gen-link").value = g.generalLink || "";
    document.getElementById("gen-code").value = g.referralCode || "";
    document.getElementById("gen-extra-pct").value = Number(g.extraDiscountPercent || 20);
    document.getElementById("gen-default-lang").value = g.defaultLang || "ar";
    document.getElementById("gen-default-period").value = String(g.defaultPeriod || "24");
    document.getElementById("gen-show-general-btn").value = String(g.showGeneralSiteButtonOnCards !== false);

    document.getElementById("hero-title-ar").value = h.titleAr || "";
    document.getElementById("hero-title-en").value = h.titleEn || "";
    document.getElementById("hero-sub-ar").value = h.subtitleAr || "";
    document.getElementById("hero-sub-en").value = h.subtitleEn || "";
  }

  // 6. SEO & Google Ads Deep Links
  function populateSeoAdsTab() {
    const s = storeData.seo || {};
    document.getElementById("seo-title-ar").value = s.titleAr || "";
    document.getElementById("seo-title-en").value = s.titleEn || "";
    document.getElementById("seo-desc-ar").value = s.descriptionAr || "";
    document.getElementById("seo-desc-en").value = s.descriptionEn || "";
    document.getElementById("seo-keys-ar").value = s.keywordsAr || "";
    document.getElementById("seo-keys-en").value = s.keywordsEn || "";
    document.getElementById("seo-gads-id").value = s.googleAdsId || "";
    document.getElementById("seo-ga-id").value = s.googleAnalyticsId || "";

    const origin = window.location.origin;
    const adsBox = document.getElementById("google-ads-links-box");
    const campaigns = [
      {
        label: "حملة خوادم VPS KVM (عربي - رابط نظيف)",
        url: `${origin}/ar/vps-hosting?utm_source=google&utm_campaign=vps_ar`
      },
      {
        label: "حملة خوادم VPS KVM (إنجليزي - رابط نظيف)",
        url: `${origin}/en/vps-hosting?utm_source=google&utm_campaign=vps_en`
      },
      {
        label: "حملة استضافة المواقع والووردبريس (عربي)",
        url: `${origin}/ar/web-hosting?utm_source=google&utm_campaign=web_ar`
      },
      {
        label: "حملة استضافة المواقع والووردبريس (إنجليزي)",
        url: `${origin}/en/web-hosting?utm_source=google&utm_campaign=web_en`
      },
      {
        label: "حملة الاستضافة السحابية Cloud (عربي)",
        url: `${origin}/ar/cloud-hosting?utm_source=google&utm_campaign=cloud_ar`
      },
      {
        label: "حملة سيرفرات n8n والذكاء الاصطناعي (عربي)",
        url: `${origin}/ar/applications?utm_source=google&utm_campaign=n8n_ai`
      }
    ];

    adsBox.innerHTML = campaigns
      .map(
        (c) => `
      <div class="ad-deep-link-row">
        <strong>${escapeHtml(c.label)}</strong>
        <code>${escapeHtml(c.url)}</code>
        <button type="button" class="btn-outline-sm copy-ad-url" data-url="${escapeHtml(c.url)}">نسخ الرابط للحملة</button>
      </div>`
      )
      .join("");

    adsBox.querySelectorAll(".copy-ad-url").forEach((btn) => {
      btn.onclick = () => {
        navigator.clipboard?.writeText(btn.getAttribute("data-url"));
        showToast("✅ تم نسخ رابط حملة إعلانات جوجل!");
      };
    });
  }

  // 7. FAQs Tab
  function populateFaqsTab() {
    const container = document.getElementById("admin-faqs-container");
    if (!container) return;
    container.innerHTML = (storeData.faqs || [])
      .map(
        (f, idx) => `
      <div class="plan-editor-card" data-faq-idx="${idx}">
        <div class="plan-editor-header">
          <div class="plan-editor-title">❓ سؤال #${idx + 1}</div>
          <button type="button" class="btn-danger-sm faq-del-btn" data-idx="${idx}">حذف السؤال</button>
        </div>
        <div class="form-grid-2">
          <div class="form-group">
            <label>السؤال (عربي)</label>
            <input type="text" class="admin-input fq-q-ar" value="${escapeHtml(f.qAr)}" />
          </div>
          <div class="form-group">
            <label>السؤال (إنجليزي)</label>
            <input type="text" class="admin-input fq-q-en" dir="ltr" value="${escapeHtml(f.qEn)}" />
          </div>
          <div class="form-group">
            <label>الإجابة (عربي)</label>
            <textarea class="admin-textarea fq-a-ar" rows="3">${escapeHtml(f.aAr)}</textarea>
          </div>
          <div class="form-group">
            <label>الإجابة (إنجليزي)</label>
            <textarea class="admin-textarea fq-a-en" rows="3" dir="ltr">${escapeHtml(f.aEn)}</textarea>
          </div>
        </div>
      </div>`
      )
      .join("");

    container.querySelectorAll(".faq-del-btn").forEach((btn) => {
      btn.onclick = () => {
        const idx = Number(btn.getAttribute("data-idx"));
        syncUIToStore();
        storeData.faqs.splice(idx, 1);
        populateFaqsTab();
      };
    });
  }

  document.getElementById("add-faq-btn")?.addEventListener("click", () => {
    syncUIToStore();
    storeData.faqs.push({
      id: "faq-" + Date.now().toString(36),
      qAr: "سؤال جديد؟",
      aAr: "إجابة السؤال بالعربي.",
      qEn: "New Question?",
      aEn: "Answer in English."
    });
    populateFaqsTab();
  });

  // ==================== SYNC UI INPUTS BACK INTO storeData ====================
  function syncUIToStore() {
    if (!storeData) return;

    // General
    storeData.general.generalLink = document.getElementById("gen-link").value.trim();
    storeData.general.referralCode = document.getElementById("gen-code").value.trim();
    storeData.general.extraDiscountPercent = Number(document.getElementById("gen-extra-pct").value || 20);
    storeData.general.defaultLang = document.getElementById("gen-default-lang").value;
    storeData.general.defaultPeriod = document.getElementById("gen-default-period").value;
    storeData.general.showGeneralSiteButtonOnCards = document.getElementById("gen-show-general-btn").value === "true";

    // Hero
    storeData.hero.titleAr = document.getElementById("hero-title-ar").value;
    storeData.hero.titleEn = document.getElementById("hero-title-en").value;
    storeData.hero.subtitleAr = document.getElementById("hero-sub-ar").value;
    storeData.hero.subtitleEn = document.getElementById("hero-sub-en").value;

    // Countdown
    storeData.countdown.enabled = document.getElementById("cd-enabled").value === "true";
    const dtVal = document.getElementById("cd-target-date").value;
    if (dtVal) {
      storeData.countdown.targetDate = new Date(dtVal).toISOString();
    }
    storeData.countdown.autoResetWhenExpired = document.getElementById("cd-auto-reset").value === "true";
    storeData.countdown.evergreenHours = Number(document.getElementById("cd-evergreen-hours").value || 221);
    storeData.countdown.badgeAr = document.getElementById("cd-badge-ar").value;
    storeData.countdown.badgeEn = document.getElementById("cd-badge-en").value;
    storeData.countdown.topBarTextAr = document.getElementById("cd-text-ar").value;
    storeData.countdown.topBarTextEn = document.getElementById("cd-text-en").value;
    storeData.countdown.ctaBarAr = document.getElementById("cd-cta-ar").value;
    storeData.countdown.ctaBarEn = document.getElementById("cd-cta-en").value;

    // SEO
    storeData.seo.titleAr = document.getElementById("seo-title-ar").value;
    storeData.seo.titleEn = document.getElementById("seo-title-en").value;
    storeData.seo.descriptionAr = document.getElementById("seo-desc-ar").value;
    storeData.seo.descriptionEn = document.getElementById("seo-desc-en").value;
    storeData.seo.keywordsAr = document.getElementById("seo-keys-ar").value;
    storeData.seo.keywordsEn = document.getElementById("seo-keys-en").value;
    storeData.seo.googleAdsId = document.getElementById("seo-gads-id").value.trim();
    storeData.seo.googleAnalyticsId = document.getElementById("seo-ga-id").value.trim();

    // Categories
    document.querySelectorAll("#admin-categories-container .plan-editor-card").forEach((card) => {
      const idx = Number(card.getAttribute("data-cat-idx"));
      const cat = storeData.categories[idx];
      if (!cat) return;
      cat.active = card.querySelector(".ce-active").checked;
      cat.id = card.querySelector(".ce-id").value.trim();
      cat.slug = cat.id;
      cat.nameAr = card.querySelector(".ce-name-ar").value;
      cat.nameEn = card.querySelector(".ce-name-en").value;
      cat.order = Number(card.querySelector(".ce-order").value || idx + 1);
      cat.badgeAr = card.querySelector(".ce-badge-ar").value;
      cat.badgeEn = card.querySelector(".ce-badge-en").value;
      cat.descriptionAr = card.querySelector(".ce-desc-ar").value;
      cat.descriptionEn = card.querySelector(".ce-desc-en").value;
      cat.categoryLink = card.querySelector(".ce-link").value.trim();
    });

    // Plans
    document.querySelectorAll("#admin-plans-container .plan-editor-card").forEach((card) => {
      const idx = Number(card.getAttribute("data-plan-idx"));
      const plan = storeData.plans[idx];
      if (!plan) return;
      plan.darkCard = Boolean(card.querySelector(".pe-dark")?.checked);
      plan.popular = card.querySelector(".pe-popular").checked;
      plan.active = card.querySelector(".pe-active").checked;
      plan.nameAr = card.querySelector(".pe-name-ar").value;
      plan.nameEn = card.querySelector(".pe-name-en").value;
      plan.categoryId = card.querySelector(".pe-cat").value;
      plan.order = Number(card.querySelector(".pe-order").value || 1);
      plan.taglineAr = card.querySelector(".pe-tag-ar").value;
      plan.taglineEn = card.querySelector(".pe-tag-en").value;
      plan.originalMonthlyUsd = Number(card.querySelector(".pe-orig-usd").value || 14.99);

      const p1 = Number(card.querySelector(".pe-p1").value || 9.99);
      const p12 = Number(card.querySelector(".pe-p12").value || 5.99);
      const p24 = Number(card.querySelector(".pe-p24").value || 4.99);
      plan.pricesUsd = {
        "1": p1,
        "12": p12,
        "24": p24,
        "48": p24
      };

      plan.links = {
        direct: card.querySelector(".pe-link-direct").value.trim(),
        period_24: card.querySelector(".pe-link-24").value.trim(),
        period_12: card.querySelector(".pe-link-12").value.trim(),
        period_1: card.querySelector(".pe-link-1").value.trim(),
        period_48: card.querySelector(".pe-link-48").value.trim(),
        generalFallback: card.querySelector(".pe-link-gen").value.trim()
      };

      plan.featuresAr = card
        .querySelector(".pe-feat-ar")
        .value.split("\n")
        .map((s) => s.trim())
        .filter(Boolean);
      plan.featuresEn = card
        .querySelector(".pe-feat-en")
        .value.split("\n")
        .map((s) => s.trim())
        .filter(Boolean);

      const rawSpecs = card
        .querySelector(".pe-specs")
        .value.split("\n")
        .map((s) => s.trim())
        .filter(Boolean);
      plan.specs = rawSpecs.map((line) => {
        const parts = line.split("|").map((p) => p.trim());
        return {
          labelAr: parts[0] || "",
          labelEn: parts[1] || parts[0] || "",
          valueAr: parts[2] || "",
          valueEn: parts[3] || parts[2] || ""
        };
      });
    });

    // FAQs
    document.querySelectorAll("#admin-faqs-container .plan-editor-card").forEach((card) => {
      const idx = Number(card.getAttribute("data-faq-idx"));
      const faq = storeData.faqs[idx];
      if (!faq) return;
      faq.qAr = card.querySelector(".fq-q-ar").value;
      faq.qEn = card.querySelector(".fq-q-en").value;
      faq.aAr = card.querySelector(".fq-a-ar").value;
      faq.aEn = card.querySelector(".fq-a-en").value;
    });

    // Optional new password
    const newPass = document.getElementById("new-admin-pass")?.value.trim();
    if (newPass) {
      storeData.general.adminPasswordHash = newPass;
    }
  }

  async function saveAllChanges() {
    syncUIToStore();
    try {
      const res = await apiFetch("/api/admin/store", {
        method: "PUT",
        body: JSON.stringify(storeData)
      });
      if (res.ok) {
        showToast("✅ تم حفظ كافة التعديلات بنجاح وتحديث صفحة الهبوط فوراً!");
        populateAllTabs();
      }
    } catch (err) {
      showToast("❌ حدث خطأ أثناء الحفظ");
    }
  }

  document.getElementById("save-all-btn")?.addEventListener("click", saveAllChanges);
  document.getElementById("top-save-btn")?.addEventListener("click", saveAllChanges);

  // Clear Analytics
  document.getElementById("clear-analytics-btn")?.addEventListener("click", async () => {
    if (!confirm("هل تريد تصفير سجل النقرات؟")) return;
    await apiFetch("/api/admin/clear-analytics", { method: "POST" });
    await tryLoadStore();
    showToast("تم تصفير سجل النقرات");
  });

  // Export JSON Backup
  document.getElementById("export-json-btn")?.addEventListener("click", () => {
    syncUIToStore();
    const blob = new Blob([JSON.stringify(storeData, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `hostinger-affiliate-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
  });

  // Import JSON Backup
  document.getElementById("import-json-input")?.addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (ev) => {
      try {
        const imported = JSON.parse(ev.target.result);
        storeData = imported;
        await apiFetch("/api/admin/store", {
          method: "PUT",
          body: JSON.stringify(storeData)
        });
        populateAllTabs();
        showToast("✅ تم استيراد النسخة الاحتياطية بنجاح!");
      } catch (err) {
        showToast("❌ ملف JSON غير صالح");
      }
    };
    reader.readAsText(file);
  });

  // Reset to defaults
  document.getElementById("reset-defaults-btn")?.addEventListener("click", async () => {
    if (!confirm("هل أنت متأكد من استعادة الإعدادات الافتراضية؟")) return;
    await apiFetch("/api/admin/reset", { method: "POST" });
    await tryLoadStore();
    showToast("تمت استعادة الإعدادات الأصلية!");
  });

  // Initial load attempt
  tryLoadStore();
})();

