// Complete Hostinger Official Product Catalog & Plans Database
// Mirrors https://www.hostinger.com/ae and all 13 product pages with Referral Code EQOY9090OIJA applied.

const now = Date.now();
const defaultCountdownTarget = new Date(now + (9 * 86400 + 5 * 3600 + 37 * 60) * 1000).toISOString();

const REF_CODE = "EQOY9090OIJA";
const GENERAL_LINK = `https://www.hostinger.com/ae?REFERRALCODE=${REF_CODE}`;

// User's exact direct cart links for VPS KVM plans
const CART_KVM_1_24 = "https://www.hostinger.com/ae/cart?product=vps%3Avps_kvm_1&period=24&referral_type=cart_link&REFERRALCODE=EQOY9090OIJA&referral_id=01a1b21c-194d-73ed-a7ed-520fd123d911";
const CART_KVM_2_24 = "https://www.hostinger.com/ae/cart?product=vps%3Avps_kvm_2&period=24&referral_type=cart_link&REFERRALCODE=EQOY9090OIJA&referral_id=01a1b21c-2868-71a9-9bf8-4c4865369b91";
const CART_KVM_4_24 = "https://www.hostinger.com/ae/cart?product=vps%3Avps_kvm_4&period=24&referral_type=cart_link&REFERRALCODE=EQOY9090OIJA&referral_id=01a1b21c-35d6-71c8-8272-87ccbba5056c";
const CART_KVM_8_24 = "https://www.hostinger.com/ae/cart?product=vps%3Avps_kvm_8&period=24&referral_type=cart_link&REFERRALCODE=EQOY9090OIJA&referral_id=01a1b21c-49c3-7024-bfc4-d3f5119d1a83";
const CART_KVM_8_1 = "https://www.hostinger.com/ae/cart?product=vps%3Avps_kvm_8&period=1&referral_type=cart_link&REFERRALCODE=EQOY9090OIJA&referral_id=01a1b21c-732d-719e-acc0-5287f6b28a74";
const CART_KVM_8_12 = "https://www.hostinger.com/ae/cart?product=vps%3Avps_kvm_8&period=12&referral_type=cart_link&REFERRALCODE=EQOY9090OIJA&referral_id=01a1b21c-8b97-7111-a6a1-98738acb9e30";

const defaultData = {
  general: {
    brandNameAr: "HOSTINGER",
    brandNameEn: "HOSTINGER",
    referralCode: REF_CODE,
    generalLink: GENERAL_LINK,
    extraDiscountPercent: 20,
    maxTotalDiscountPercent: 88,
    defaultLang: "en", // Matches user's screenshots by default, with 1-click Arabic toggle!
    defaultCurrency: "USD",
    defaultPeriod: "48",
    defaultCategory: "web-hosting",
    showGeneralSiteButtonOnCards: true,
    adminPasswordHash: "admin123"
  },

  countdown: {
    enabled: true,
    targetDate: defaultCountdownTarget,
    evergreenHours: 221,
    autoResetWhenExpired: true,
    badgeAr: "عروض الجمعة البيضاء • خصم حتى 88%",
    badgeEn: "Biggest deals of the year • Up to 88% off",
    topBarTextAr: "ضمان استرداد الأموال لمدة 30 يوماً • دعم فني 24/7 • كود الإحالة الإضافي (20%) مُفعّل تلقائياً",
    topBarTextEn: "30-day money-back guarantee • 24/7 support • Extra 20% Referral Code Applied",
    ctaBarAr: "احصل على العرض",
    ctaBarEn: "Claim deal"
  },

  hero: {
    badgeAr: "حتى",
    badgeEn: "UP TO",
    discountHeadlineAr: "خصم 88%",
    discountHeadlineEn: "88% OFF",
    titleAr: "White Friday",
    titleEn: "White Friday",
    subtitleAr: "أطلق وطوّر أعمالك عبر منصة ذكية متكاملة، ابتداءً من US$1.19/شهرياً (شامل كود الإحالة).",
    subtitleEn: "Launch and grow your business with one agentic platform, from US$1.19/mo.",
    primaryCtaAr: "احصل على العرض",
    primaryCtaEn: "Claim deal",
    secondaryCtaAr: "تصفح الموقع الرسمي",
    secondaryCtaEn: "Explore Official Site",
    trustStatsAr: "ضمان استرداد الأموال لمدة 30 يوماً",
    trustStatsEn: "30-day money-back guarantee"
  },

  currencies: {
    USD: { symbol: "US$", rate: 1, nameAr: "دولار أمريكي (US$)", nameEn: "US Dollar (US$)" },
    AED: { symbol: "AED ", rate: 3.67, nameAr: "درهم إماراتي (AED)", nameEn: "UAE Dirham (AED)" },
    SAR: { symbol: "SAR ", rate: 3.75, nameAr: "ريال سعودي (SAR)", nameEn: "Saudi Riyal (SAR)" },
    EGP: { symbol: "EGP ", rate: 49.5, nameAr: "جنيه مصري (EGP)", nameEn: "Egyptian Pound (EGP)" }
  },

  seo: {
    siteUrl: "https://hostoffers.youssefk.com",
    titleAr: "عروض هوستنجر الرسمي | خصم حتى 88% + 20% خصم الشركاء على الاستضافة و VPS",
    titleEn: "Hostinger Official Deals | Up to 88% OFF + Extra 20% Partner Discount on Web & VPS Hosting",
    descriptionAr: "احصل على عروض هوستنجر الرسمية على جميع المنتجات: استضافة المواقع، ووردبريس، ووكومرس، السحابة، خوادم KVM VPS، GPU، و Google Workspace مع تفعيل خصم الإحالة الإضافي (20%) تلقائياً عبر الرابط المباشر.",
    descriptionEn: "Secure your Hostinger deal before it's gone. Official partner portal featuring all 13 Hostinger products (Websites, WordPress, WooCommerce, Cloud, KVM VPS, GPU, AI VPS, Email & Workspace) with an extra 20% partner referral discount applied via direct link.",
    keywordsAr: "هوستنجر, عروض هوستنجر, خصم هوستنجر, Hostinger AE, Hostinger VPS, KVM 1, KVM 2, KVM 4, KVM 8, استضافة ووردبريس, استضافة سحابية",
    keywordsEn: "Hostinger AE, Hostinger White Friday, Hostinger referral discount applied, Hostinger KVM VPS, Hostinger Web Hosting, Cloud Startup, Unlimited Hosting",
    ogImage: "https://assets.hostinger.com/images/og-default.png",
    googleAnalyticsId: "",
    googleAdsId: "",
    googleAdsConversionLabel: "",
    customHeadHtml: ""
  },

  // ==================== ALL 13 OFFICIAL HOSTINGER PRODUCT CATEGORIES ====================
  categories: [
    {
      id: "web-hosting",
      slug: "web-hosting",
      group: "websites",
      order: 1,
      active: true,
      cardStyle: "websites", // Uses dark featured card (Unlimited) like Screenshot 2
      defaultPeriod: "48",
      availablePeriods: ["1", "12", "24", "48"],
      badgeAr: "خصم 88%",
      badgeEn: "88% OFF",
      nameAr: "استضافة المواقع (Web Hosting)",
      nameEn: "Web Hosting",
      sublineAr: "للمواقع، المتاجر، والمدونات",
      sublineEn: "For websites, stores, and blogs",
      descriptionAr: "استضافة مواقع سريعة وآمنة مع أداة البناء بالذكاء الاصطناعي ودومين مجاني.",
      descriptionEn: "Run websites smoothly with AI Builder, Managed WordPress, and Free Domain.",
      categoryLink: `https://www.hostinger.com/ae/web-hosting?REFERRALCODE=${REF_CODE}`
    },
    {
      id: "vps-hosting",
      slug: "vps-hosting",
      group: "vps",
      order: 2,
      active: true,
      cardStyle: "vps", // Uses purple MOST POPULAR header card (KVM 2) + Dark bottom feature box like Screenshot 3
      defaultPeriod: "24",
      availablePeriods: ["1", "12", "24"],
      badgeAr: "خصم 76%",
      badgeEn: "76% OFF",
      nameAr: "خوادم VPS (VPS Hosting)",
      nameEn: "VPS Hosting",
      sublineAr: "لتطبيقات الويب، السيرفرات، والمزيد",
      sublineEn: "For web apps, servers, and more",
      descriptionAr: "سيرفرات KVM VPS بمعالجات AMD EPYC وأقراص NVMe مع صلاحية Root كاملة.",
      descriptionEn: "KVM Virtual Private Servers with AMD EPYC processors, NVMe SSD storage, and full root access.",
      categoryLink: `https://www.hostinger.com/ae/vps-hosting?REFERRALCODE=${REF_CODE}`
    },
    {
      id: "wordpress-hosting",
      slug: "wordpress-hosting",
      group: "websites",
      order: 3,
      active: true,
      cardStyle: "websites",
      defaultPeriod: "48",
      availablePeriods: ["1", "12", "24", "48"],
      badgeAr: "مُدار بالذكاء الاصطناعي",
      badgeEn: "Managed WP",
      nameAr: "استضافة ووردبريس (WordPress)",
      nameEn: "WordPress Hosting",
      sublineAr: "استضافة ووردبريس مُدارة فائقة السرعة",
      sublineEn: "Optimized Managed WordPress with AI tools",
      descriptionAr: "استضافة ووردبريس مُدارة بالكامل مع LiteSpeed وأدوات الذكاء الاصطناعي وتحديثات تلقائية.",
      descriptionEn: "Managed WordPress hosting with built-in AI tools, staging environment, and automatic updates.",
      categoryLink: `https://www.hostinger.com/ae/wordpress-hosting?REFERRALCODE=${REF_CODE}`
    },
    {
      id: "woocommerce-hosting",
      slug: "woocommerce-hosting",
      group: "websites",
      order: 4,
      active: true,
      cardStyle: "websites",
      defaultPeriod: "48",
      availablePeriods: ["1", "12", "24", "48"],
      badgeAr: "للمتاجر الإلكترونية",
      badgeEn: "Ecommerce",
      nameAr: "استضافة ووكومرس (WooCommerce)",
      nameEn: "WooCommerce Hosting",
      sublineAr: "أطلق متجرك الإلكتروني بسرعة فائقة وبدون عمولة مبيعات",
      sublineEn: "Build and scale your online store with 0% transaction fees",
      descriptionAr: "باقات مخصصة لمتاجر WooCommerce مع NVMe سريع وشبكة CDN مجانية ونسخ احتياطي يومي.",
      descriptionEn: "High-speed WooCommerce hosting powered by NVMe storage, Free CDN, and daily backups.",
      categoryLink: `https://www.hostinger.com/ae/woocommerce-hosting?REFERRALCODE=${REF_CODE}`
    },
    {
      id: "cloud-hosting",
      slug: "cloud-hosting",
      group: "cloud",
      order: 5,
      active: true,
      cardStyle: "websites",
      defaultPeriod: "48",
      availablePeriods: ["1", "12", "24", "48"],
      badgeAr: "خصم 77%",
      badgeEn: "77% OFF",
      nameAr: "الاستضافة السحابية (Cloud Hosting)",
      nameEn: "Cloud Hosting",
      sublineAr: "موارد سحابية مخصصة للمشاريع الكبيرة والوكالات",
      sublineEn: "Dedicated cloud power for agencies and high-traffic projects",
      descriptionAr: "قوة السيرفرات السحابية مع سهولة لوحة hPanel وعنوان IP مخصص مجاني.",
      descriptionEn: "Dedicated resources, Free Dedicated IP, and 24/7 priority support for mission-critical sites.",
      categoryLink: `https://www.hostinger.com/ae/cloud-hosting?REFERRALCODE=${REF_CODE}`
    },
    {
      id: "pro",
      slug: "pro",
      group: "cloud",
      order: 6,
      active: true,
      cardStyle: "websites",
      defaultPeriod: "48",
      availablePeriods: ["1", "12", "24", "48"],
      badgeAr: "للوكالات والمحترفين",
      badgeEn: "For Agencies",
      nameAr: "استضافة الوكالات (Hostinger Pro)",
      nameEn: "Pro Agency Hosting",
      sublineAr: "إدارة جميع مواقع عملائك من لوحة تحكم واحدة مع عزل كامل",
      sublineEn: "Manage all client websites from one dashboard with site isolation",
      descriptionAr: "مصممة للوكالات والمستقلين لاستضافة حتى 300 موقع مع مشاركة الصلاحيات وعزل كل موقع.",
      descriptionEn: "Built for agencies and freelancers: per-site isolation, client access sharing, and NVMe speed.",
      categoryLink: `https://www.hostinger.com/ae/pro?REFERRALCODE=${REF_CODE}`
    },
    {
      id: "ai-managed-vps",
      slug: "ai-managed-vps",
      group: "vps",
      order: 7,
      active: true,
      cardStyle: "vps",
      defaultPeriod: "24",
      availablePeriods: ["1", "12", "24"],
      badgeAr: "مُدار بالذكاء الاصطناعي",
      badgeEn: "AI Managed",
      nameAr: "سيرفرات VPS مُدارة بالذكاء الاصطناعي",
      nameEn: "AI Managed VPS",
      sublineAr: "قوة KVM VPS كاملة يديرها لك وكيل الذكاء الاصطناعي Kodee",
      sublineEn: "Full KVM VPS power managed effortlessly through AI chat",
      descriptionAr: "لا حاجة لخبرة Linux — أدر سيرفرك، ثبّت التطبيقات، واضبط الحماية بالمحادثة مع AI.",
      descriptionEn: "Manage configurations, deployments, and security firewalls naturally using Hostinger's AI Web Terminal.",
      categoryLink: `https://www.hostinger.com/ae/ai-managed-vps?REFERRALCODE=${REF_CODE}`
    },
    {
      id: "gpu-hosting",
      slug: "gpu-hosting",
      group: "vps",
      order: 8,
      active: true,
      cardStyle: "vps",
      defaultPeriod: "1",
      availablePeriods: ["1"],
      badgeAr: "كروت شاشة NVIDIA",
      badgeEn: "NVIDIA GPUs",
      nameAr: "استضافة كروت الشاشة (GPU Hosting)",
      nameEn: "GPU Hosting",
      sublineAr: "وحدات معالجة رسومية مخصصة لتدريب وتشغيل نماذج الذكاء الاصطناعي",
      sublineEn: "Dedicated NVIDIA GPUs for AI training, LLMs, and deep learning",
      descriptionAr: "خوادم GPU سحابية فورية (RTX 4090, L40S, H100, B200) لتشغيل نماذج الذكاء الاصطناعي.",
      descriptionEn: "High-performance NVIDIA GPU instances for machine learning, LLM inference, and rendering.",
      categoryLink: `https://www.hostinger.com/ae/gpu-hosting?REFERRALCODE=${REF_CODE}`
    },
    {
      id: "web-apps-hosting",
      slug: "web-apps-hosting",
      group: "vps",
      order: 9,
      active: true,
      cardStyle: "vps",
      defaultPeriod: "24",
      availablePeriods: ["1", "12", "24"],
      badgeAr: "Node.js • Python • Docker",
      badgeEn: "Apps & Git",
      nameAr: "استضافة تطبيقات الويب (Web Apps)",
      nameEn: "Web Apps Hosting",
      sublineAr: "انشر تطبيقاتك البرمجية مباشرة من GitHub أو عبر Docker",
      sublineEn: "Deploy full-stack applications from GitHub or Docker in seconds",
      descriptionAr: "بيئة مثالية لتشغيل تطبيقات Node.js، Python، Next.js، Go، وقواعد البيانات.",
      descriptionEn: "Streamlined cloud & VPS infrastructure for modern web apps, APIs, and databases.",
      categoryLink: `https://www.hostinger.com/ae/web-apps-hosting?REFERRALCODE=${REF_CODE}`
    },
    {
      id: "applications",
      slug: "applications",
      group: "vps",
      order: 10,
      active: true,
      cardStyle: "vps",
      defaultPeriod: "24",
      availablePeriods: ["1", "12", "24"],
      badgeAr: "n8n • Odoo • Coolify",
      badgeEn: "1-Click Apps",
      nameAr: "تطبيقات جاهزة بضغطة زر (Applications)",
      nameEn: "Applications Hosting",
      sublineAr: "أكثر من 100 تطبيق وقالب جاهز للتثبيت الفوري (n8n، Docker، Odoo)",
      sublineEn: "100+ one-click templates including n8n, Coolify, Odoo, and Supabase",
      descriptionAr: "شغّل n8n للأتمتة أو Odoo أو Coolify بضغطة زر واحدة بدون حدود على عدد العمليات.",
      descriptionEn: "Deploy self-hosted open-source applications in one click with full data ownership.",
      categoryLink: `https://www.hostinger.com/ae/applications?REFERRALCODE=${REF_CODE}`
    },
    {
      id: "business-email",
      slug: "business-email",
      group: "email",
      order: 11,
      active: true,
      cardStyle: "websites",
      defaultPeriod: "48",
      availablePeriods: ["1", "12", "24", "48"],
      badgeAr: "بريد باسم شركتك",
      badgeEn: "Custom Domain Email",
      nameAr: "البريد الإلكتروني للأعمال (Business Email)",
      nameEn: "Business Email",
      sublineAr: "عزز ثقة عملائك ببريد إلكتروني احترافي يحمل اسم نطاقك",
      sublineEn: "Build brand trust with professional email matching your domain",
      descriptionAr: "بريد أعمال احترافي آمن بسعة تصل إلى 50GB لكل صندوق مع حماية متقدمة من السبام.",
      descriptionEn: "Fast, encrypted business email with up to 50 GB storage, calendar, and smart anti-spam.",
      categoryLink: `https://www.hostinger.com/ae/business-email?REFERRALCODE=${REF_CODE}`
    },
    {
      id: "email-marketing",
      slug: "email-marketing",
      group: "email",
      order: 12,
      active: true,
      cardStyle: "websites",
      defaultPeriod: "24",
      availablePeriods: ["1", "12", "24"],
      badgeAr: "Hostinger Reach AI",
      badgeEn: "Hostinger Reach",
      nameAr: "التسويق عبر البريد (Email Marketing)",
      nameEn: "Email Marketing",
      sublineAr: "صمم وأرسل حملات بريدية ذكية بالذكاء الاصطناعي مع Hostinger Reach",
      sublineEn: "Create and automate AI-powered email newsletters with Hostinger Reach",
      descriptionAr: "منصة تسويق بريدي مدمجة بالذكاء الاصطناعي لكتابة وتصميم الرسائل وأتمتة المبيعات.",
      descriptionEn: "AI-powered email campaign builder with automated customer journeys and high deliverability.",
      categoryLink: `https://www.hostinger.com/ae/email-marketing?REFERRALCODE=${REF_CODE}`
    },
    {
      id: "google-workspace",
      slug: "google-workspace",
      group: "email",
      order: 13,
      active: true,
      cardStyle: "websites",
      defaultPeriod: "12",
      availablePeriods: ["1", "12"],
      badgeAr: "Gmail + Gemini AI",
      badgeEn: "Official Google Partner",
      nameAr: "جوجل وورك سبيس (Google Workspace)",
      nameEn: "Google Workspace",
      sublineAr: "أدوات Google الرسمية للأعمال (Gmail، Drive، Meet، Docs) مع Gemini AI",
      sublineEn: "Professional Gmail, Drive, Meet, and Docs with built-in Gemini AI",
      descriptionAr: "اربط نطاقك بتطبيقات Google Workspace الرسمية مع إعداد تلقائي فوري من لوحة هوستنجر.",
      descriptionEn: "Get official Google Workspace with instant DNS configuration inside your Hostinger panel.",
      categoryLink: `https://www.hostinger.com/ae/google-workspace?REFERRALCODE=${REF_CODE}`
    }
  ],

  // ==================== ALL PLANS ACROSS ALL 13 CATEGORIES ====================
  // Note: When `pricesAreNetReferral: true`, the prices in `pricesUsd` are ALREADY the exact final price shown on Hostinger with the referral code applied (matching Screenshots 2 & 3: $1.19, $1.59, $2.23, $6.39 and $5.19, $7.03, $10.39, $20.79!).
  plans: [
    // -------------------- 1. WEB HOSTING (Exact Screenshot 2!) --------------------
    {
      id: "web-single",
      categoryId: "web-hosting",
      order: 1,
      active: true,
      popular: false,
      darkCard: false,
      pricesAreNetReferral: true,
      nameAr: "Single",
      nameEn: "Single",
      taglineAr: "أطلق موقعك الأول على الإنترنت. مثالية للمبتدئين أو المشاريع البسيطة.",
      taglineEn: "Get your first website online. Best for beginners or simple projects.",
      discountBadgeAr: "خصم 88%",
      discountBadgeEn: "88% off",
      discountBadgeStyle: "lavender",
      originalMonthlyUsd: 9.99,
      renewalMonthlyUsd: 8.99,
      pricesUsd: { "1": 9.99, "12": 1.99, "24": 1.59, "48": 1.19 },
      promoGiftAr: "الجمعة البيضاء: احصل على ضعف نقاط AI (500 بدلاً من 250)",
      promoGiftEn: "White Friday: Get 2x AI credits, 500 instead of 250",
      featuresAr: [
        "✓ موقع إلكتروني واحد (1 website)",
        "— دومين مجاني (Free domain)",
        "✓ 10 GB مساحة تخزين SSD",
        "✓ نسخ احتياطي أسبوعي مجاني",
        "✓ متاح للتجارة الإلكترونية (Ecommerce)",
        "— شبكة CDN",
        "— أولوية الدعم الفني 24/7"
      ],
      featuresEn: [
        "✓ 1 website",
        "— Free domain",
        "✓ 10 GB SSD storage",
        "✓ Free weekly backups",
        "✓ Ecommerce available",
        "— CDN",
        "— Priority 24/7 expert support"
      ],
      buildWithAr: ["✓ منشئ الذكاء الاصطناعي AI Builder", "✓ ووردبريس WordPress", "— أدوات البرمجة بالذكاء الاصطناعي", "— كود مخصص Custom code"],
      buildWithEn: ["✓ AI Builder", "✓ WordPress", "— AI coding tools", "— Custom code"],
      links: {
        direct: `https://www.hostinger.com/ae/web-hosting?REFERRALCODE=${REF_CODE}`,
        period_1: `https://www.hostinger.com/ae/web-hosting?REFERRALCODE=${REF_CODE}`,
        period_12: `https://www.hostinger.com/ae/web-hosting?REFERRALCODE=${REF_CODE}`,
        period_24: `https://www.hostinger.com/ae/web-hosting?REFERRALCODE=${REF_CODE}`,
        period_48: `https://www.hostinger.com/ae/web-hosting?REFERRALCODE=${REF_CODE}`,
        generalFallback: GENERAL_LINK
      }
    },
    {
      id: "web-premium",
      categoryId: "web-hosting",
      order: 2,
      active: true,
      popular: false,
      darkCard: false,
      pricesAreNetReferral: true,
      nameAr: "Premium",
      nameEn: "Premium",
      taglineAr: "شغّل مواقعك بسلاسة تامة. رائعة لصناع المحتوى والعلامات التجارية الناشئة.",
      taglineEn: "Run websites smoothly. Great for creators and small brands.",
      discountBadgeAr: "خصم 88%",
      discountBadgeEn: "88% off",
      discountBadgeStyle: "red",
      originalMonthlyUsd: 12.99,
      renewalMonthlyUsd: 10.99,
      pricesUsd: { "1": 11.99, "12": 2.39, "24": 1.99, "48": 1.59 },
      promoGiftAr: "الجمعة البيضاء: احصل على ضعف نقاط AI (500 بدلاً من 250)",
      promoGiftEn: "White Friday: Get 2x AI credits, 500 instead of 250",
      featuresAr: [
        "✓ 3 مواقع إلكترونية (3 websites)",
        "✓ دومين مجاني لمدة سنة كاملة",
        "✓ 20 GB مساحة تخزين SSD",
        "✓ نسخ احتياطي أسبوعي مجاني",
        "✓ متاح للتجارة الإلكترونية (Ecommerce)",
        "— شبكة CDN",
        "— أولوية الدعم الفني 24/7"
      ],
      featuresEn: [
        "✓ 3 websites",
        "✓ Domain – free for 1 year",
        "✓ 20 GB SSD storage",
        "✓ Free weekly backups",
        "✓ Ecommerce available",
        "— CDN",
        "— Priority 24/7 expert support"
      ],
      buildWithAr: ["✓ منشئ الذكاء الاصطناعي AI Builder", "✓ ووردبريس WordPress", "— أدوات البرمجة بالذكاء الاصطناعي", "— كود مخصص Custom code"],
      buildWithEn: ["✓ AI Builder", "✓ WordPress", "— AI coding tools", "— Custom code"],
      links: {
        direct: `https://www.hostinger.com/ae/web-hosting?REFERRALCODE=${REF_CODE}`,
        period_1: `https://www.hostinger.com/ae/web-hosting?REFERRALCODE=${REF_CODE}`,
        period_12: `https://www.hostinger.com/ae/web-hosting?REFERRALCODE=${REF_CODE}`,
        period_24: `https://www.hostinger.com/ae/web-hosting?REFERRALCODE=${REF_CODE}`,
        period_48: `https://www.hostinger.com/ae/web-hosting?REFERRALCODE=${REF_CODE}`,
        generalFallback: GENERAL_LINK
      }
    },
    {
      id: "web-unlimited",
      categoryId: "web-hosting",
      order: 3,
      active: true,
      popular: true,
      darkCard: true, // Exact Dark Featured Card from Screenshot 2!
      pricesAreNetReferral: true,
      nameAr: "Unlimited",
      nameEn: "Unlimited",
      taglineAr: "عدد غير محدود من المواقع وصناديق البريد، مع أدوات AI وأولوية الدعم لأقصى مرونة.",
      taglineEn: "Unlimited websites and mailboxes, plus AI tools and priority support for maximum flexibility.",
      discountBadgeAr: "عرض خاص - خصم 88%",
      discountBadgeEn: "Special offer - 88% off",
      discountBadgeStyle: "red",
      originalMonthlyUsd: 18.99,
      renewalMonthlyUsd: 16.99,
      pricesUsd: { "1": 13.99, "12": 3.19, "24": 2.79, "48": 2.23 },
      promoGiftAr: "الجمعة البيضاء: احصل على ضعف نقاط AI (1000 بدلاً من 500)",
      promoGiftEn: "White Friday: Get 2x AI credits, 1000 instead of 500",
      featuresAr: [
        "✓ عدد غير محدود من المواقع (Unlimited websites)",
        "✓ دومين مجاني لمدة سنة كاملة",
        "✓ 50 GB مساحة تخزين NVMe فائقة السرعة",
        "✓ نسخ احتياطي يومي + استعادة سهلة للبيانات",
        "✓ شبكة CDN مجانية مشمولة",
        "✓ متاح للتجارة الإلكترونية (Ecommerce)",
        "✓ أولوية قصوى في الدعم الفني 24/7"
      ],
      featuresEn: [
        "✓ Unlimited websites",
        "✓ Domain – free for 1 year",
        "✓ 50 GB NVMe storage",
        "✓ Daily backups + easy data restore",
        "✓ CDN included",
        "✓ Ecommerce available",
        "✓ Priority 24/7 expert support"
      ],
      buildWithAr: ["✓ منشئ الذكاء الاصطناعي AI Builder", "✓ ووردبريس WordPress", "✓ أدوات البرمجة بالذكاء الاصطناعي", "✓ كود مخصص Custom code"],
      buildWithEn: ["✓ AI Builder", "✓ WordPress", "✓ AI coding tools", "✓ Custom code"],
      links: {
        direct: `https://www.hostinger.com/ae/web-hosting?REFERRALCODE=${REF_CODE}`,
        period_1: `https://www.hostinger.com/ae/web-hosting?REFERRALCODE=${REF_CODE}`,
        period_12: `https://www.hostinger.com/ae/web-hosting?REFERRALCODE=${REF_CODE}`,
        period_24: `https://www.hostinger.com/ae/web-hosting?REFERRALCODE=${REF_CODE}`,
        period_48: `https://www.hostinger.com/ae/web-hosting?REFERRALCODE=${REF_CODE}`,
        generalFallback: GENERAL_LINK
      }
    },
    {
      id: "web-cloud-startup",
      categoryId: "web-hosting",
      order: 4,
      active: true,
      popular: false,
      darkCard: false,
      pricesAreNetReferral: true,
      nameAr: "Cloud Startup",
      nameEn: "Cloud Startup",
      taglineAr: "قوة سحابية مخصصة للوكالات أو المشاريع ذات الزيارات العالية.",
      taglineEn: "Dedicated power for agencies or high-traffic projects.",
      discountBadgeAr: "خصم 77%",
      discountBadgeEn: "77% off",
      discountBadgeStyle: "red",
      originalMonthlyUsd: 27.99,
      renewalMonthlyUsd: 25.99,
      pricesUsd: { "1": 24.99, "12": 7.99, "24": 7.19, "48": 6.39 },
      promoGiftAr: "الجمعة البيضاء: احصل على ضعف نقاط AI (2000 بدلاً من 1000)",
      promoGiftEn: "White Friday: Get 2x AI credits, 2000 instead of 1000",
      featuresAr: [
        "✓ عدد غير محدود من المواقع (Unlimited websites)",
        "✓ دومين مجاني لمدة سنة كاملة",
        "✓ 100 GB مساحة تخزين NVMe",
        "✓ نسخ احتياطي يومي وعند الطلب",
        "✓ شبكة CDN مجانية مشمولة",
        "✓ متاح للتجارة الإلكترونية (Ecommerce)",
        "✓ أولوية قصوى في الدعم الفني 24/7"
      ],
      featuresEn: [
        "✓ Unlimited websites",
        "✓ Domain – free for 1 year",
        "✓ 100 GB NVMe storage",
        "✓ Daily and on-demand backups",
        "✓ CDN included",
        "✓ Ecommerce available",
        "✓ Priority 24/7 expert support"
      ],
      buildWithAr: ["✓ منشئ الذكاء الاصطناعي AI Builder", "✓ ووردبريس WordPress", "✓ أدوات البرمجة بالذكاء الاصطناعي", "✓ كود مخصص Custom code"],
      buildWithEn: ["✓ AI Builder", "✓ WordPress", "✓ AI coding tools", "✓ Custom code"],
      links: {
        direct: `https://www.hostinger.com/ae/cloud-hosting?REFERRALCODE=${REF_CODE}`,
        period_1: `https://www.hostinger.com/ae/cloud-hosting?REFERRALCODE=${REF_CODE}`,
        period_12: `https://www.hostinger.com/ae/cloud-hosting?REFERRALCODE=${REF_CODE}`,
        period_24: `https://www.hostinger.com/ae/cloud-hosting?REFERRALCODE=${REF_CODE}`,
        period_48: `https://www.hostinger.com/ae/cloud-hosting?REFERRALCODE=${REF_CODE}`,
        generalFallback: GENERAL_LINK
      }
    },

    // -------------------- 2. VPS HOSTING (Exact Screenshot 3 + User's Direct Cart Links!) --------------------
    {
      id: "vps-kvm-1",
      categoryId: "vps-hosting",
      order: 1,
      active: true,
      popular: false,
      darkCard: false,
      pricesAreNetReferral: true,
      nameAr: "KVM 1",
      nameEn: "KVM 1",
      taglineAr: "سيرفر VPS مثالي للمشاريع الناشئة، Docker، وتطبيقات الويب الخفيفة.",
      taglineEn: "Entry-level KVM VPS for starter web apps, Docker containers, and testing.",
      discountBadgeAr: "خصم 74%",
      discountBadgeEn: "74% off",
      discountBadgeStyle: "red",
      originalMonthlyUsd: 19.99,
      renewalMonthlyUsd: 11.99,
      pricesUsd: { "1": 9.99, "12": 5.59, "24": 5.19, "48": 5.19 },
      specs: [
        { icon: "cpu", labelAr: "المعالج", labelEn: "vCPU", valueAr: "1 نواة vCPU", valueEn: "1 vCPU core" },
        { icon: "ram", labelAr: "الذاكرة", labelEn: "RAM", valueAr: "4 GB رام", valueEn: "4 GB RAM" },
        { icon: "disk", labelAr: "التخزين", labelEn: "Storage", valueAr: "50 GB مساحة NVMe", valueEn: "50 GB NVMe disk space" },
        { icon: "net", labelAr: "الباندويث", labelEn: "Bandwidth", valueAr: "4 TB باندويث", valueEn: "4 TB bandwidth" }
      ],
      featuresAr: [
        "✓ معالجات AMD EPYC",
        "✓ صلاحية Root كاملة",
        "✓ مساعد الذكاء الاصطناعي Kodee",
        "✓ نسخ احتياطي أسبوعي مجاني"
      ],
      featuresEn: [
        "✓ AMD EPYC processors",
        "✓ Full root access",
        "✓ Kodee AI Web Terminal",
        "✓ Free weekly backups"
      ],
      links: {
        direct: CART_KVM_1_24,
        period_1: CART_KVM_1_24,
        period_12: CART_KVM_1_24,
        period_24: CART_KVM_1_24,
        period_48: CART_KVM_1_24,
        generalFallback: GENERAL_LINK
      }
    },
    {
      id: "vps-kvm-2",
      categoryId: "vps-hosting",
      order: 2,
      active: true,
      popular: true, // Purple MOST POPULAR header bar card like Screenshot 3!
      darkCard: false,
      pricesAreNetReferral: true,
      nameAr: "KVM 2",
      nameEn: "KVM 2",
      taglineAr: "الأكثر اختياراً لتشغيل المواقع المتعددة، أتمتة n8n، ولوحات التحكم.",
      taglineEn: "Most popular choice for production apps, n8n workflows, and control panels.",
      discountBadgeAr: "عرض خاص - خصم 71%",
      discountBadgeEn: "Special offer - 71% off",
      discountBadgeStyle: "red",
      originalMonthlyUsd: 24.49,
      renewalMonthlyUsd: 14.99,
      pricesUsd: { "1": 12.99, "12": 7.59, "24": 7.03, "48": 7.03 },
      specs: [
        { icon: "cpu", labelAr: "المعالج", labelEn: "vCPU", valueAr: "2 أنوية vCPU", valueEn: "2 vCPU cores" },
        { icon: "ram", labelAr: "الذاكرة", labelEn: "RAM", valueAr: "8 GB رام", valueEn: "8 GB RAM" },
        { icon: "disk", labelAr: "التخزين", labelEn: "Storage", valueAr: "100 GB مساحة NVMe", valueEn: "100 GB NVMe disk space" },
        { icon: "net", labelAr: "الباندويث", labelEn: "Bandwidth", valueAr: "8 TB باندويث", valueEn: "8 TB bandwidth" }
      ],
      featuresAr: [
        "✓ معالجات AMD EPYC",
        "✓ صلاحية Root كاملة",
        "✓ تثبيت n8n و Docker بضغطة زر",
        "✓ سرعة شبكة 1 Gbps"
      ],
      featuresEn: [
        "✓ AMD EPYC processors",
        "✓ Full root access",
        "✓ 1-Click n8n & Docker templates",
        "✓ 1 Gbps network speed"
      ],
      links: {
        direct: CART_KVM_2_24,
        period_1: CART_KVM_2_24,
        period_12: CART_KVM_2_24,
        period_24: CART_KVM_2_24,
        period_48: CART_KVM_2_24,
        generalFallback: GENERAL_LINK
      }
    },
    {
      id: "vps-kvm-4",
      categoryId: "vps-hosting",
      order: 3,
      active: true,
      popular: false,
      darkCard: false,
      pricesAreNetReferral: true,
      nameAr: "KVM 4",
      nameEn: "KVM 4",
      taglineAr: "أداء قوي للشركات، مشاريع SaaS، والمتاجر ذات الزيارات المرتفعة.",
      taglineEn: "Heavy-duty resources for SaaS platforms, agencies, and high-traffic workloads.",
      discountBadgeAr: "خصم 76%",
      discountBadgeEn: "76% off",
      discountBadgeStyle: "red",
      originalMonthlyUsd: 42.99,
      renewalMonthlyUsd: 31.99,
      pricesUsd: { "1": 19.99, "12": 11.49, "24": 10.39, "48": 10.39 },
      specs: [
        { icon: "cpu", labelAr: "المعالج", labelEn: "vCPU", valueAr: "4 أنوية vCPU", valueEn: "4 vCPU cores" },
        { icon: "ram", labelAr: "الذاكرة", labelEn: "RAM", valueAr: "16 GB رام", valueEn: "16 GB RAM" },
        { icon: "disk", labelAr: "التخزين", labelEn: "Storage", valueAr: "200 GB مساحة NVMe", valueEn: "200 GB NVMe disk space" },
        { icon: "net", labelAr: "الباندويث", labelEn: "Bandwidth", valueAr: "16 TB باندويث", valueEn: "16 TB bandwidth" }
      ],
      featuresAr: [
        "✓ معالجات AMD EPYC",
        "✓ صلاحية Root كاملة",
        "✓ جدار حماية مدار بالذكاء الاصطناعي",
        "✓ دومين مجاني لمدة سنة"
      ],
      featuresEn: [
        "✓ AMD EPYC processors",
        "✓ Full root access",
        "✓ AI Firewall management",
        "✓ Free domain for 1 year"
      ],
      links: {
        direct: CART_KVM_4_24,
        period_1: CART_KVM_4_24,
        period_12: CART_KVM_4_24,
        period_24: CART_KVM_4_24,
        period_48: CART_KVM_4_24,
        generalFallback: GENERAL_LINK
      }
    },
    {
      id: "vps-kvm-8",
      categoryId: "vps-hosting",
      order: 4,
      active: true,
      popular: false,
      darkCard: false,
      pricesAreNetReferral: true,
      nameAr: "KVM 8",
      nameEn: "KVM 8",
      taglineAr: "أقصى قوة حوسبة لـ ERP، قواعد البيانات العملاقة، والأنظمة المؤسسية.",
      taglineEn: "Flagship enterprise power for large clusters, ERP/Odoo, and AI workloads.",
      discountBadgeAr: "خصم 75%",
      discountBadgeEn: "75% off",
      discountBadgeStyle: "red",
      originalMonthlyUsd: 83.99,
      renewalMonthlyUsd: 65.99,
      pricesUsd: { "1": 27.99, "12": 21.59, "24": 20.79, "48": 20.79 },
      specs: [
        { icon: "cpu", labelAr: "المعالج", labelEn: "vCPU", valueAr: "8 أنوية vCPU", valueEn: "8 vCPU cores" },
        { icon: "ram", labelAr: "الذاكرة", labelEn: "RAM", valueAr: "32 GB رام", valueEn: "32 GB RAM" },
        { icon: "disk", labelAr: "التخزين", labelEn: "Storage", valueAr: "400 GB مساحة NVMe", valueEn: "400 GB NVMe disk space" },
        { icon: "net", labelAr: "الباندويث", labelEn: "Bandwidth", valueAr: "32 TB باندويث", valueEn: "32 TB bandwidth" }
      ],
      featuresAr: [
        "✓ روابط سلة مباشرة لـ 1 و 12 و 24 شهر",
        "✓ معالجات AMD EPYC",
        "✓ سرعة شبكة 1 Gbps",
        "✓ دومين مجاني لمدة سنة"
      ],
      featuresEn: [
        "✓ Direct Cart Links for 1m, 12m & 24m",
        "✓ AMD EPYC processors",
        "✓ 1 Gbps network speed",
        "✓ Free domain for 1 year"
      ],
      links: {
        direct: CART_KVM_8_24,
        period_1: CART_KVM_8_1,
        period_12: CART_KVM_8_12,
        period_24: CART_KVM_8_24,
        period_48: CART_KVM_8_24,
        generalFallback: GENERAL_LINK
      }
    },

    // -------------------- 3. WORDPRESS HOSTING --------------------
    {
      id: "wp-premium",
      categoryId: "wordpress-hosting",
      order: 1,
      active: true,
      popular: false,
      darkCard: false,
      pricesAreNetReferral: true,
      nameAr: "Premium WordPress",
      nameEn: "Premium WordPress",
      taglineAr: "مثالية للمدونات والمواقع الشخصية مع تثبيت ووردبريس تلقائياً ودومين مجاني.",
      taglineEn: "Everything you need to create your WordPress website with a free domain.",
      discountBadgeAr: "خصم 88%",
      discountBadgeEn: "88% off",
      discountBadgeStyle: "red",
      originalMonthlyUsd: 12.99,
      renewalMonthlyUsd: 10.99,
      pricesUsd: { "1": 11.99, "12": 2.39, "24": 1.99, "48": 1.59 },
      promoGiftAr: "الجمعة البيضاء: احصل على ضعف نقاط AI (500 بدلاً من 250)",
      promoGiftEn: "White Friday: Get 2x AI credits, 500 instead of 250",
      featuresAr: [
        "✓ 3 مواقع ووردبريس",
        "✓ دومين مجاني لمدة سنة كاملة",
        "✓ 20 GB مساحة تخزين SSD",
        "✓ تحديثات ووردبريس ذكية تلقائية",
        "✓ سرعة مضاعفة مع LiteSpeed Cache"
      ],
      featuresEn: [
        "✓ 3 WordPress websites",
        "✓ Domain – free for 1 year",
        "✓ 20 GB SSD storage",
        "✓ Smart WordPress auto-updates",
        "✓ LiteSpeed Cache acceleration"
      ],
      links: {
        direct: `https://www.hostinger.com/ae/wordpress-hosting?REFERRALCODE=${REF_CODE}`,
        period_1: `https://www.hostinger.com/ae/wordpress-hosting?REFERRALCODE=${REF_CODE}`,
        period_12: `https://www.hostinger.com/ae/wordpress-hosting?REFERRALCODE=${REF_CODE}`,
        period_24: `https://www.hostinger.com/ae/wordpress-hosting?REFERRALCODE=${REF_CODE}`,
        period_48: `https://www.hostinger.com/ae/wordpress-hosting?REFERRALCODE=${REF_CODE}`,
        generalFallback: GENERAL_LINK
      }
    },
    {
      id: "wp-business",
      categoryId: "wordpress-hosting",
      order: 2,
      active: true,
      popular: true,
      darkCard: true,
      pricesAreNetReferral: true,
      nameAr: "Business WordPress",
      nameEn: "Business WordPress",
      taglineAr: "أداء 5 أضعاف أسرع مع تخزين NVMe وأدوات ووردبريس بالذكاء الاصطناعي و CDN مجاني.",
      taglineEn: "Level up with 5x more power, NVMe storage, WordPress AI tools, and Free CDN.",
      discountBadgeAr: "عرض خاص - خصم 88%",
      discountBadgeEn: "Special offer - 88% off",
      discountBadgeStyle: "red",
      originalMonthlyUsd: 18.99,
      renewalMonthlyUsd: 16.99,
      pricesUsd: { "1": 13.99, "12": 3.19, "24": 2.79, "48": 2.23 },
      promoGiftAr: "الجمعة البيضاء: احصل على ضعف نقاط AI (1000 بدلاً من 500)",
      promoGiftEn: "White Friday: Get 2x AI credits, 1000 instead of 500",
      featuresAr: [
        "✓ عدد غير محدود من مواقع ووردبريس",
        "✓ دومين مجاني لمدة سنة كاملة",
        "✓ 50 GB مساحة NVMe فائقة السرعة",
        "✓ بيئة تجريبية (WordPress Staging) بضغطة زر",
        "✓ نسخ احتياطي يومي + شبكة CDN مجانية"
      ],
      featuresEn: [
        "✓ Unlimited WordPress websites",
        "✓ Domain – free for 1 year",
        "✓ 50 GB NVMe storage",
        "✓ 1-Click WordPress Staging tool",
        "✓ Daily backups + Free CDN included"
      ],
      links: {
        direct: `https://www.hostinger.com/ae/wordpress-hosting?REFERRALCODE=${REF_CODE}`,
        period_1: `https://www.hostinger.com/ae/wordpress-hosting?REFERRALCODE=${REF_CODE}`,
        period_12: `https://www.hostinger.com/ae/wordpress-hosting?REFERRALCODE=${REF_CODE}`,
        period_24: `https://www.hostinger.com/ae/wordpress-hosting?REFERRALCODE=${REF_CODE}`,
        period_48: `https://www.hostinger.com/ae/wordpress-hosting?REFERRALCODE=${REF_CODE}`,
        generalFallback: GENERAL_LINK
      }
    },
    {
      id: "wp-cloud-startup",
      categoryId: "wordpress-hosting",
      order: 3,
      active: true,
      popular: false,
      darkCard: false,
      pricesAreNetReferral: true,
      nameAr: "Cloud Startup WP",
      nameEn: "Cloud Startup WP",
      taglineAr: "موارد سحابية مخصصة للمواقع الكبيرة والمتاجر عالية الزيارات مع IP مخصص.",
      taglineEn: "Optimized for business websites and busy stores with a dedicated IP.",
      discountBadgeAr: "خصم 77%",
      discountBadgeEn: "77% off",
      discountBadgeStyle: "red",
      originalMonthlyUsd: 27.99,
      renewalMonthlyUsd: 25.99,
      pricesUsd: { "1": 24.99, "12": 7.99, "24": 7.19, "48": 6.39 },
      promoGiftAr: "الجمعة البيضاء: احصل على ضعف نقاط AI (2000 بدلاً من 1000)",
      promoGiftEn: "White Friday: Get 2x AI credits, 2000 instead of 1000",
      featuresAr: [
        "✓ عدد غير محدود من المواقع",
        "✓ 100 GB مساحة NVMe + عنوان IP مخصص",
        "✓ نسخ احتياطي يومي وعند الطلب",
        "✓ شبكة CDN مجانية + أولوية دعم 24/7"
      ],
      featuresEn: [
        "✓ Unlimited websites",
        "✓ 100 GB NVMe + Free Dedicated IP",
        "✓ Daily and on-demand backups",
        "✓ Free CDN + Priority 24/7 support"
      ],
      links: {
        direct: `https://www.hostinger.com/ae/wordpress-hosting?REFERRALCODE=${REF_CODE}`,
        period_1: `https://www.hostinger.com/ae/wordpress-hosting?REFERRALCODE=${REF_CODE}`,
        period_12: `https://www.hostinger.com/ae/wordpress-hosting?REFERRALCODE=${REF_CODE}`,
        period_24: `https://www.hostinger.com/ae/wordpress-hosting?REFERRALCODE=${REF_CODE}`,
        period_48: `https://www.hostinger.com/ae/wordpress-hosting?REFERRALCODE=${REF_CODE}`,
        generalFallback: GENERAL_LINK
      }
    },

    // -------------------- 4. WOOCOMMERCE HOSTING --------------------
    {
      id: "woo-business",
      categoryId: "woocommerce-hosting",
      order: 1,
      active: true,
      popular: false,
      darkCard: false,
      pricesAreNetReferral: true,
      nameAr: "Business WooCommerce",
      nameEn: "Business WooCommerce",
      taglineAr: "أطلق متجرك الإلكتروني الأول مع إعداد WooCommerce بالذكاء الاصطناعي و0% عمولة.",
      taglineEn: "Launch your online store with AI WooCommerce setup and 0% transaction fees.",
      discountBadgeAr: "خصم 88%",
      discountBadgeEn: "88% off",
      discountBadgeStyle: "red",
      originalMonthlyUsd: 18.99,
      renewalMonthlyUsd: 16.99,
      pricesUsd: { "1": 13.99, "12": 3.19, "24": 2.79, "48": 2.23 },
      featuresAr: [
        "✓ حتى 500 منتج بسهولة",
        "✓ 50 GB مساحة تخزين NVMe",
        "✓ دومين مجاني + SSL مجاني + CDN مجاني",
        "✓ نسخ احتياطي يومي لحماية الطلبات"
      ],
      featuresEn: [
        "✓ Ideal for up to 500 products",
        "✓ 50 GB NVMe storage",
        "✓ Free Domain + Free SSL + Free CDN",
        "✓ Daily backups for store orders"
      ],
      links: {
        direct: `https://www.hostinger.com/ae/woocommerce-hosting?REFERRALCODE=${REF_CODE}`,
        period_1: `https://www.hostinger.com/ae/woocommerce-hosting?REFERRALCODE=${REF_CODE}`,
        period_12: `https://www.hostinger.com/ae/woocommerce-hosting?REFERRALCODE=${REF_CODE}`,
        period_24: `https://www.hostinger.com/ae/woocommerce-hosting?REFERRALCODE=${REF_CODE}`,
        period_48: `https://www.hostinger.com/ae/woocommerce-hosting?REFERRALCODE=${REF_CODE}`,
        generalFallback: GENERAL_LINK
      }
    },
    {
      id: "woo-cloud-startup",
      categoryId: "woocommerce-hosting",
      order: 2,
      active: true,
      popular: true,
      darkCard: true,
      pricesAreNetReferral: true,
      nameAr: "Cloud Startup Woo",
      nameEn: "Cloud Startup Woo",
      taglineAr: "الخطة الأكثر مبيعاً للمتاجر النشطة وحملات الإعلانات الممولة مع موارد معزولة.",
      taglineEn: "Best seller for growing WooCommerce stores running paid ad campaigns.",
      discountBadgeAr: "عرض خاص - خصم 77%",
      discountBadgeEn: "Special offer - 77% off",
      discountBadgeStyle: "red",
      originalMonthlyUsd: 27.99,
      renewalMonthlyUsd: 25.99,
      pricesUsd: { "1": 24.99, "12": 7.99, "24": 7.19, "48": 6.39 },
      featuresAr: [
        "✓ آلاف المنتجات والزوار المتزامنين",
        "✓ 100 GB مساحة NVMe + 4 GB رام مخصصة",
        "✓ عنوان IP مخصص مجاني",
        "✓ أولوية قصوى في الدعم الفني 24/7"
      ],
      featuresEn: [
        "✓ Thousands of products & concurrent buyers",
        "✓ 100 GB NVMe + Dedicated Cloud RAM",
        "✓ Free Dedicated IP address",
        "✓ Priority 24/7 expert support"
      ],
      links: {
        direct: `https://www.hostinger.com/ae/woocommerce-hosting?REFERRALCODE=${REF_CODE}`,
        period_1: `https://www.hostinger.com/ae/woocommerce-hosting?REFERRALCODE=${REF_CODE}`,
        period_12: `https://www.hostinger.com/ae/woocommerce-hosting?REFERRALCODE=${REF_CODE}`,
        period_24: `https://www.hostinger.com/ae/woocommerce-hosting?REFERRALCODE=${REF_CODE}`,
        period_48: `https://www.hostinger.com/ae/woocommerce-hosting?REFERRALCODE=${REF_CODE}`,
        generalFallback: GENERAL_LINK
      }
    },
    {
      id: "woo-cloud-pro",
      categoryId: "woocommerce-hosting",
      order: 3,
      active: true,
      popular: false,
      darkCard: false,
      pricesAreNetReferral: true,
      nameAr: "Cloud Professional Woo",
      nameEn: "Cloud Professional Woo",
      taglineAr: "قوة سحابية مضاعفة للمتاجر الكبرى والكتالوجات الضخمة.",
      taglineEn: "Maximum checkout speed for high-volume online stores.",
      discountBadgeAr: "خصم 70%",
      discountBadgeEn: "70% off",
      discountBadgeStyle: "red",
      originalMonthlyUsd: 39.99,
      renewalMonthlyUsd: 34.99,
      pricesUsd: { "1": 39.99, "12": 14.39, "24": 12.79, "48": 11.99 },
      featuresAr: [
        "✓ 200 GB مساحة NVMe + 6 GB رام",
        "✓ 4 أنوية CPU مخصصة",
        "✓ عنوان IP مخصص مجاني + CDN",
        "✓ نسخ احتياطي يومي وعند الطلب"
      ],
      featuresEn: [
        "✓ 200 GB NVMe + 6 GB RAM",
        "✓ 4 Dedicated CPU cores",
        "✓ Free Dedicated IP + Global CDN",
        "✓ Daily & on-demand backups"
      ],
      links: {
        direct: `https://www.hostinger.com/ae/woocommerce-hosting?REFERRALCODE=${REF_CODE}`,
        period_1: `https://www.hostinger.com/ae/woocommerce-hosting?REFERRALCODE=${REF_CODE}`,
        period_12: `https://www.hostinger.com/ae/woocommerce-hosting?REFERRALCODE=${REF_CODE}`,
        period_24: `https://www.hostinger.com/ae/woocommerce-hosting?REFERRALCODE=${REF_CODE}`,
        period_48: `https://www.hostinger.com/ae/woocommerce-hosting?REFERRALCODE=${REF_CODE}`,
        generalFallback: GENERAL_LINK
      }
    },

    // -------------------- 5. CLOUD HOSTING --------------------
    {
      id: "cloud-startup",
      categoryId: "cloud-hosting",
      order: 1,
      active: true,
      popular: false,
      darkCard: false,
      pricesAreNetReferral: true,
      nameAr: "Cloud Startup",
      nameEn: "Cloud Startup",
      taglineAr: "قوة سحابية مخصصة للمشاريع المتنامية ومواقع الشركات.",
      taglineEn: "Dedicated cloud resources for growing business sites.",
      discountBadgeAr: "خصم 77%",
      discountBadgeEn: "77% off",
      discountBadgeStyle: "red",
      originalMonthlyUsd: 27.99,
      renewalMonthlyUsd: 25.99,
      pricesUsd: { "1": 24.99, "12": 7.99, "24": 7.19, "48": 6.39 },
      featuresAr: [
        "✓ 100 GB مساحة NVMe",
        "✓ 2 نواة CPU + 3 GB رام",
        "✓ دومين مجاني + IP مخصص مجاني",
        "✓ نسخ احتياطي يومي وعند الطلب"
      ],
      featuresEn: [
        "✓ 100 GB NVMe storage",
        "✓ 2 CPU cores + 3 GB RAM",
        "✓ Free Domain + Free Dedicated IP",
        "✓ Daily and on-demand backups"
      ],
      links: {
        direct: `https://www.hostinger.com/ae/cloud-hosting?REFERRALCODE=${REF_CODE}`,
        period_1: `https://www.hostinger.com/ae/cloud-hosting?REFERRALCODE=${REF_CODE}`,
        period_12: `https://www.hostinger.com/ae/cloud-hosting?REFERRALCODE=${REF_CODE}`,
        period_24: `https://www.hostinger.com/ae/cloud-hosting?REFERRALCODE=${REF_CODE}`,
        period_48: `https://www.hostinger.com/ae/cloud-hosting?REFERRALCODE=${REF_CODE}`,
        generalFallback: GENERAL_LINK
      }
    },
    {
      id: "cloud-professional",
      categoryId: "cloud-hosting",
      order: 2,
      active: true,
      popular: true,
      darkCard: true,
      pricesAreNetReferral: true,
      nameAr: "Cloud Professional",
      nameEn: "Cloud Professional",
      taglineAr: "الأكثر اختياراً للمشاريع الاحترافية والمتاجر ذات الزيارات المرتفعة.",
      taglineEn: "Most popular cloud tier for scaling high-traffic websites.",
      discountBadgeAr: "عرض خاص - خصم 70%",
      discountBadgeEn: "Special offer - 70% off",
      discountBadgeStyle: "red",
      originalMonthlyUsd: 39.99,
      renewalMonthlyUsd: 34.99,
      pricesUsd: { "1": 39.99, "12": 14.39, "24": 12.79, "48": 11.99 },
      featuresAr: [
        "✓ 200 GB مساحة NVMe",
        "✓ 4 أنوية CPU + 6 GB رام",
        "✓ دومين مجاني + IP مخصص مجاني",
        "✓ أولوية الدعم الفني 24/7"
      ],
      featuresEn: [
        "✓ 200 GB NVMe storage",
        "✓ 4 CPU cores + 6 GB RAM",
        "✓ Free Domain + Free Dedicated IP",
        "✓ Priority 24/7 expert support"
      ],
      links: {
        direct: `https://www.hostinger.com/ae/cloud-hosting?REFERRALCODE=${REF_CODE}`,
        period_1: `https://www.hostinger.com/ae/cloud-hosting?REFERRALCODE=${REF_CODE}`,
        period_12: `https://www.hostinger.com/ae/cloud-hosting?REFERRALCODE=${REF_CODE}`,
        period_24: `https://www.hostinger.com/ae/cloud-hosting?REFERRALCODE=${REF_CODE}`,
        period_48: `https://www.hostinger.com/ae/cloud-hosting?REFERRALCODE=${REF_CODE}`,
        generalFallback: GENERAL_LINK
      }
    },
    {
      id: "cloud-enterprise",
      categoryId: "cloud-hosting",
      order: 3,
      active: true,
      popular: false,
      darkCard: false,
      pricesAreNetReferral: true,
      nameAr: "Cloud Enterprise",
      nameEn: "Cloud Enterprise",
      taglineAr: "أقصى أداء سحابي للمؤسسات والمنصات الكبرى.",
      taglineEn: "Maximum cloud performance for mission-critical operations.",
      discountBadgeAr: "خصم 66%",
      discountBadgeEn: "66% off",
      discountBadgeStyle: "red",
      originalMonthlyUsd: 69.99,
      renewalMonthlyUsd: 59.99,
      pricesUsd: { "1": 69.99, "12": 26.39, "24": 23.99, "48": 23.99 },
      featuresAr: [
        "✓ 300 GB مساحة NVMe",
        "✓ 6 أنوية CPU + 12 GB رام",
        "✓ دومين مجاني + IP مخصص مجاني",
        "✓ أولوية قصوى في الدعم الفني 24/7"
      ],
      featuresEn: [
        "✓ 300 GB NVMe storage",
        "✓ 6 CPU cores + 12 GB RAM",
        "✓ Free Domain + Free Dedicated IP",
        "✓ Priority 24/7 expert support"
      ],
      links: {
        direct: `https://www.hostinger.com/ae/cloud-hosting?REFERRALCODE=${REF_CODE}`,
        period_1: `https://www.hostinger.com/ae/cloud-hosting?REFERRALCODE=${REF_CODE}`,
        period_12: `https://www.hostinger.com/ae/cloud-hosting?REFERRALCODE=${REF_CODE}`,
        period_24: `https://www.hostinger.com/ae/cloud-hosting?REFERRALCODE=${REF_CODE}`,
        period_48: `https://www.hostinger.com/ae/cloud-hosting?REFERRALCODE=${REF_CODE}`,
        generalFallback: GENERAL_LINK
      }
    },

    // -------------------- 6. PRO AGENCY HOSTING (/ae/pro) --------------------
    {
      id: "pro-agency-startup",
      categoryId: "pro",
      order: 1,
      active: true,
      popular: false,
      darkCard: false,
      pricesAreNetReferral: true,
      nameAr: "Agency Startup",
      nameEn: "Agency Startup",
      taglineAr: "للمستقلين والوكالات الناشئة مع عزل كامل لكل موقع عميل.",
      taglineEn: "For freelancers and growing agencies with per-website isolation.",
      discountBadgeAr: "خصم 77%",
      discountBadgeEn: "77% off",
      discountBadgeStyle: "red",
      originalMonthlyUsd: 27.99,
      renewalMonthlyUsd: 25.99,
      pricesUsd: { "1": 24.99, "12": 7.99, "24": 7.19, "48": 6.39 },
      featuresAr: [
        "✓ عزل كامل بين مواقع العملاء (Site Isolation)",
        "✓ 100 GB مساحة NVMe",
        "✓ مشاركة صلاحيات الإدارة مع العملاء",
        "✓ نسخ احتياطي يومي + CDN مجاني"
      ],
      featuresEn: [
        "✓ Full per-website container isolation",
        "✓ 100 GB NVMe storage",
        "✓ Seamless client access sharing",
        "✓ Daily backups + Free CDN"
      ],
      links: {
        direct: `https://www.hostinger.com/ae/pro?REFERRALCODE=${REF_CODE}`,
        period_1: `https://www.hostinger.com/ae/pro?REFERRALCODE=${REF_CODE}`,
        period_12: `https://www.hostinger.com/ae/pro?REFERRALCODE=${REF_CODE}`,
        period_24: `https://www.hostinger.com/ae/pro?REFERRALCODE=${REF_CODE}`,
        period_48: `https://www.hostinger.com/ae/pro?REFERRALCODE=${REF_CODE}`,
        generalFallback: GENERAL_LINK
      }
    },
    {
      id: "pro-agency-professional",
      categoryId: "pro",
      order: 2,
      active: true,
      popular: true,
      darkCard: true,
      pricesAreNetReferral: true,
      nameAr: "Agency Professional",
      nameEn: "Agency Professional",
      taglineAr: "الباقة المثالية للوكالات لإدارة عشرات العملاء بسرعة NVMe ودعم فوري.",
      taglineEn: "Ideal for agencies managing multiple high-traffic client websites.",
      discountBadgeAr: "عرض خاص - خصم 70%",
      discountBadgeEn: "Special offer - 70% off",
      discountBadgeStyle: "red",
      originalMonthlyUsd: 39.99,
      renewalMonthlyUsd: 34.99,
      pricesUsd: { "1": 39.99, "12": 14.39, "24": 12.79, "48": 11.99 },
      featuresAr: [
        "✓ استضافة حتى 200 موقع معزول",
        "✓ 200 GB مساحة NVMe + 6 GB رام",
        "✓ إدارة موحدة لكل حسابات العملاء",
        "✓ أولوية الدعم الفني 24/7"
      ],
      featuresEn: [
        "✓ Up to 200 isolated client websites",
        "✓ 200 GB NVMe + 6 GB RAM",
        "✓ Unified multi-client management",
        "✓ Priority 24/7 expert support"
      ],
      links: {
        direct: `https://www.hostinger.com/ae/pro?REFERRALCODE=${REF_CODE}`,
        period_1: `https://www.hostinger.com/ae/pro?REFERRALCODE=${REF_CODE}`,
        period_12: `https://www.hostinger.com/ae/pro?REFERRALCODE=${REF_CODE}`,
        period_24: `https://www.hostinger.com/ae/pro?REFERRALCODE=${REF_CODE}`,
        period_48: `https://www.hostinger.com/ae/pro?REFERRALCODE=${REF_CODE}`,
        generalFallback: GENERAL_LINK
      }
    },
    {
      id: "pro-agency-enterprise",
      categoryId: "pro",
      order: 3,
      active: true,
      popular: false,
      darkCard: false,
      pricesAreNetReferral: true,
      nameAr: "Agency Enterprise",
      nameEn: "Agency Enterprise",
      taglineAr: "أقصى سعة للوكالات الكبرى لإدارة حتى 300 موقع عميل معزول بالكامل.",
      taglineEn: "Maximum capacity for large agencies managing up to 300 isolated client sites.",
      discountBadgeAr: "خصم 66%",
      discountBadgeEn: "66% off",
      discountBadgeStyle: "red",
      originalMonthlyUsd: 69.99,
      renewalMonthlyUsd: 59.99,
      pricesUsd: { "1": 69.99, "12": 26.39, "24": 23.99, "48": 23.99 },
      featuresAr: [
        "✓ استضافة حتى 300 موقع معزول",
        "✓ 300 GB مساحة NVMe + 12 GB رام",
        "✓ 6 أنوية CPU مخصصة + IP مجاني",
        "✓ أولوية قصوى في الدعم الفني 24/7"
      ],
      featuresEn: [
        "✓ Up to 300 isolated client websites",
        "✓ 300 GB NVMe + 12 GB RAM",
        "✓ 6 Dedicated CPU cores + Free IP",
        "✓ Priority 24/7 expert support"
      ],
      links: {
        direct: `https://www.hostinger.com/ae/pro?REFERRALCODE=${REF_CODE}`,
        period_1: `https://www.hostinger.com/ae/pro?REFERRALCODE=${REF_CODE}`,
        period_12: `https://www.hostinger.com/ae/pro?REFERRALCODE=${REF_CODE}`,
        period_24: `https://www.hostinger.com/ae/pro?REFERRALCODE=${REF_CODE}`,
        period_48: `https://www.hostinger.com/ae/pro?REFERRALCODE=${REF_CODE}`,
        generalFallback: GENERAL_LINK
      }
    },

    // -------------------- 7. AI MANAGED VPS (/ae/ai-managed-vps) --------------------
    {
      id: "ai-vps-kvm-1",
      categoryId: "ai-managed-vps",
      order: 1,
      active: true,
      popular: false,
      darkCard: false,
      pricesAreNetReferral: true,
      nameAr: "AI Managed KVM 1",
      nameEn: "AI Managed KVM 1",
      taglineAr: "سيرفر VPS مُدار بمساعد الذكاء الاصطناعي Kodee بدون الحاجة لخبرة أوامر Linux.",
      taglineEn: "KVM 1 server managed effortlessly with Kodee AI Web Terminal.",
      discountBadgeAr: "خصم 74%",
      discountBadgeEn: "74% off",
      discountBadgeStyle: "red",
      originalMonthlyUsd: 19.99,
      renewalMonthlyUsd: 11.99,
      pricesUsd: { "1": 9.99, "12": 5.59, "24": 5.19, "48": 5.19 },
      specs: [
        { icon: "cpu", labelAr: "المعالج", labelEn: "vCPU", valueAr: "1 نواة vCPU", valueEn: "1 vCPU core" },
        { icon: "ram", labelAr: "الذاكرة", labelEn: "RAM", valueAr: "4 GB رام", valueEn: "4 GB RAM" },
        { icon: "disk", labelAr: "التخزين", labelEn: "Storage", valueAr: "50 GB مساحة NVMe", valueEn: "50 GB NVMe disk space" },
        { icon: "net", labelAr: "الباندويث", labelEn: "Bandwidth", valueAr: "4 TB باندويث", valueEn: "4 TB bandwidth" }
      ],
      featuresAr: ["✓ وكيل الذكاء الاصطناعي Kodee مدمج", "✓ تشخيص وإصلاح السيرفر بالمحادثة"],
      featuresEn: ["✓ Built-in Kodee AI server agent", "✓ Chat-based server troubleshooting"],
      links: {
        direct: CART_KVM_1_24,
        period_1: CART_KVM_1_24,
        period_12: CART_KVM_1_24,
        period_24: CART_KVM_1_24,
        period_48: CART_KVM_1_24,
        generalFallback: `https://www.hostinger.com/ae/ai-managed-vps?REFERRALCODE=${REF_CODE}`
      }
    },
    {
      id: "ai-vps-kvm-2",
      categoryId: "ai-managed-vps",
      order: 2,
      active: true,
      popular: true,
      darkCard: false,
      pricesAreNetReferral: true,
      nameAr: "AI Managed KVM 2",
      nameEn: "AI Managed KVM 2",
      taglineAr: "الأكثر طلباً: 8GB رام مع إدارة ذكية عبر AI لتشغيل التطبيقات و n8n.",
      taglineEn: "Most popular AI-managed VPS with 8 GB RAM and 100 GB NVMe.",
      discountBadgeAr: "عرض خاص - خصم 71%",
      discountBadgeEn: "Special offer - 71% off",
      discountBadgeStyle: "red",
      originalMonthlyUsd: 24.49,
      renewalMonthlyUsd: 14.99,
      pricesUsd: { "1": 12.99, "12": 7.59, "24": 7.03, "48": 7.03 },
      specs: [
        { icon: "cpu", labelAr: "المعالج", labelEn: "vCPU", valueAr: "2 أنوية vCPU", valueEn: "2 vCPU cores" },
        { icon: "ram", labelAr: "الذاكرة", labelEn: "RAM", valueAr: "8 GB رام", valueEn: "8 GB RAM" },
        { icon: "disk", labelAr: "التخزين", labelEn: "Storage", valueAr: "100 GB مساحة NVMe", valueEn: "100 GB NVMe disk space" },
        { icon: "net", labelAr: "الباندويث", labelEn: "Bandwidth", valueAr: "8 TB باندويث", valueEn: "8 TB bandwidth" }
      ],
      featuresAr: ["✓ وكيل الذكاء الاصطناعي Kodee مدمج", "✓ إعداد الحماية و Docker بأوامر المحادثة"],
      featuresEn: ["✓ Built-in Kodee AI server agent", "✓ Prompt-based Docker & firewall setup"],
      links: {
        direct: CART_KVM_2_24,
        period_1: CART_KVM_2_24,
        period_12: CART_KVM_2_24,
        period_24: CART_KVM_2_24,
        period_48: CART_KVM_2_24,
        generalFallback: `https://www.hostinger.com/ae/ai-managed-vps?REFERRALCODE=${REF_CODE}`
      }
    },
    {
      id: "ai-vps-kvm-4",
      categoryId: "ai-managed-vps",
      order: 3,
      active: true,
      popular: false,
      darkCard: false,
      pricesAreNetReferral: true,
      nameAr: "AI Managed KVM 4",
      nameEn: "AI Managed KVM 4",
      taglineAr: "16GB رام و 4 أنوية مع إدارة ذكية كاملة بالذكاء الاصطناعي.",
      taglineEn: "16 GB RAM & 4 vCPU cores with automated AI server management.",
      discountBadgeAr: "خصم 76%",
      discountBadgeEn: "76% off",
      discountBadgeStyle: "red",
      originalMonthlyUsd: 42.99,
      renewalMonthlyUsd: 31.99,
      pricesUsd: { "1": 19.99, "12": 11.49, "24": 10.39, "48": 10.39 },
      specs: [
        { icon: "cpu", labelAr: "المعالج", labelEn: "vCPU", valueAr: "4 أنوية vCPU", valueEn: "4 vCPU cores" },
        { icon: "ram", labelAr: "الذاكرة", labelEn: "RAM", valueAr: "16 GB رام", valueEn: "16 GB RAM" },
        { icon: "disk", labelAr: "التخزين", labelEn: "Storage", valueAr: "200 GB مساحة NVMe", valueEn: "200 GB NVMe disk space" },
        { icon: "net", labelAr: "الباندويث", labelEn: "Bandwidth", valueAr: "16 TB باندويث", valueEn: "16 TB bandwidth" }
      ],
      featuresAr: ["✓ وكيل الذكاء الاصطناعي Kodee مدمج", "✓ مراقبة الأداء والحماية على مدار الساعة"],
      featuresEn: ["✓ Built-in Kodee AI server agent", "✓ 24/7 AI performance & security monitoring"],
      links: {
        direct: CART_KVM_4_24,
        period_1: CART_KVM_4_24,
        period_12: CART_KVM_4_24,
        period_24: CART_KVM_4_24,
        period_48: CART_KVM_4_24,
        generalFallback: `https://www.hostinger.com/ae/ai-managed-vps?REFERRALCODE=${REF_CODE}`
      }
    },

    // -------------------- 8. GPU HOSTING (/ae/gpu-hosting) --------------------
    {
      id: "gpu-rtx-4090",
      categoryId: "gpu-hosting",
      order: 1,
      active: true,
      popular: false,
      darkCard: false,
      pricesAreNetReferral: true,
      billingUnitAr: "/ ساعة",
      billingUnitEn: "/ hr",
      nameAr: "NVIDIA RTX 4090",
      nameEn: "NVIDIA RTX 4090",
      taglineAr: "خيار اقتصادي فائق السرعة لتشغيل نماذج الذكاء الاصطناعي وتوليد الصور.",
      taglineEn: "High-efficiency GPU instance for AI inference, Stable Diffusion, and dev workloads.",
      discountBadgeAr: "توفير 52%",
      discountBadgeEn: "52% off",
      discountBadgeStyle: "red",
      originalMonthlyUsd: 0.79,
      renewalMonthlyUsd: 0.38,
      pricesUsd: { "1": 0.38, "12": 0.38, "24": 0.38, "48": 0.38 },
      specs: [
        { icon: "cpu", labelAr: "ذاكرة GPU", labelEn: "VRAM", valueAr: "24 GB GDDR6X", valueEn: "24 GB VRAM" },
        { icon: "ram", labelAr: "الذاكرة", labelEn: "System RAM", valueAr: "64 GB رام", valueEn: "64 GB RAM" },
        { icon: "disk", labelAr: "المعالج", labelEn: "vCPU", valueAr: "16 نواة vCPU", valueEn: "16 vCPU cores" },
        { icon: "net", labelAr: "التخزين", labelEn: "NVMe", valueAr: "200 GB NVMe", valueEn: "200 GB NVMe" }
      ],
      featuresAr: ["✓ محاسبة مرنة بالساعة", "✓ قوالب PyTorch و CUDA و Ollama جاهزة"],
      featuresEn: ["✓ Flexible hourly billing", "✓ Pre-configured PyTorch, CUDA & Ollama"],
      links: {
        direct: `https://www.hostinger.com/ae/gpu-hosting?REFERRALCODE=${REF_CODE}`,
        period_1: `https://www.hostinger.com/ae/gpu-hosting?REFERRALCODE=${REF_CODE}`,
        period_12: `https://www.hostinger.com/ae/gpu-hosting?REFERRALCODE=${REF_CODE}`,
        period_24: `https://www.hostinger.com/ae/gpu-hosting?REFERRALCODE=${REF_CODE}`,
        period_48: `https://www.hostinger.com/ae/gpu-hosting?REFERRALCODE=${REF_CODE}`,
        generalFallback: GENERAL_LINK
      }
    },
    {
      id: "gpu-l40s",
      categoryId: "gpu-hosting",
      order: 2,
      active: true,
      popular: true,
      darkCard: false,
      pricesAreNetReferral: true,
      billingUnitAr: "/ ساعة",
      billingUnitEn: "/ hr",
      nameAr: "NVIDIA L40S",
      nameEn: "NVIDIA L40S",
      taglineAr: "الأكثر توازناً لتشغيل وتدريب نماذج اللغات الكبيرة (LLMs) بذاكرة 48GB VRAM.",
      taglineEn: "Best value data-center GPU with 48 GB VRAM for LLM fine-tuning and inference.",
      discountBadgeAr: "عرض خاص - 50%",
      discountBadgeEn: "Special offer - 50% off",
      discountBadgeStyle: "red",
      originalMonthlyUsd: 1.79,
      renewalMonthlyUsd: 0.89,
      pricesUsd: { "1": 0.89, "12": 0.89, "24": 0.89, "48": 0.89 },
      specs: [
        { icon: "cpu", labelAr: "ذاكرة GPU", labelEn: "VRAM", valueAr: "48 GB GDDR6", valueEn: "48 GB VRAM" },
        { icon: "ram", labelAr: "الذاكرة", labelEn: "System RAM", valueAr: "128 GB رام", valueEn: "128 GB RAM" },
        { icon: "disk", labelAr: "المعالج", labelEn: "vCPU", valueAr: "24 نواة vCPU", valueEn: "24 vCPU cores" },
        { icon: "net", labelAr: "التخزين", labelEn: "NVMe", valueAr: "500 GB NVMe", valueEn: "500 GB NVMe" }
      ],
      featuresAr: ["✓ بدون رسوم نقل بيانات (Zero Egress Fees)", "✓ تشغيل فوري خلال ثوانٍ"],
      featuresEn: ["✓ Zero egress traffic fees", "✓ Instant deployment in seconds"],
      links: {
        direct: `https://www.hostinger.com/ae/gpu-hosting?REFERRALCODE=${REF_CODE}`,
        period_1: `https://www.hostinger.com/ae/gpu-hosting?REFERRALCODE=${REF_CODE}`,
        period_12: `https://www.hostinger.com/ae/gpu-hosting?REFERRALCODE=${REF_CODE}`,
        period_24: `https://www.hostinger.com/ae/gpu-hosting?REFERRALCODE=${REF_CODE}`,
        period_48: `https://www.hostinger.com/ae/gpu-hosting?REFERRALCODE=${REF_CODE}`,
        generalFallback: GENERAL_LINK
      }
    },
    {
      id: "gpu-h100",
      categoryId: "gpu-hosting",
      order: 3,
      active: true,
      popular: false,
      darkCard: false,
      pricesAreNetReferral: true,
      billingUnitAr: "/ ساعة",
      billingUnitEn: "/ hr",
      nameAr: "NVIDIA H100",
      nameEn: "NVIDIA H100",
      taglineAr: "معيار الصناعة لتدريب نماذج الذكاء الاصطناعي العميقة بذاكرة 80GB HBM3.",
      taglineEn: "Enterprise standard 80 GB HBM3 GPU for heavy deep learning training.",
      discountBadgeAr: "توفير 47%",
      discountBadgeEn: "47% off",
      discountBadgeStyle: "red",
      originalMonthlyUsd: 4.49,
      renewalMonthlyUsd: 2.39,
      pricesUsd: { "1": 2.39, "12": 2.39, "24": 2.39, "48": 2.39 },
      specs: [
        { icon: "cpu", labelAr: "ذاكرة GPU", labelEn: "VRAM", valueAr: "80 GB HBM3", valueEn: "80 GB HBM3 VRAM" },
        { icon: "ram", labelAr: "الذاكرة", labelEn: "System RAM", valueAr: "256 GB رام", valueEn: "256 GB RAM" },
        { icon: "disk", labelAr: "المعالج", labelEn: "vCPU", valueAr: "32 نواة vCPU", valueEn: "32 vCPU cores" },
        { icon: "net", labelAr: "التخزين", labelEn: "NVMe", valueAr: "1 TB NVMe", valueEn: "1 TB NVMe" }
      ],
      featuresAr: ["✓ أداء فائق لتدريب النماذج", "✓ صلاحية Root كاملة"],
      featuresEn: ["✓ Flagship tensor core performance", "✓ Full root SSH access"],
      links: {
        direct: `https://www.hostinger.com/ae/gpu-hosting?REFERRALCODE=${REF_CODE}`,
        period_1: `https://www.hostinger.com/ae/gpu-hosting?REFERRALCODE=${REF_CODE}`,
        period_12: `https://www.hostinger.com/ae/gpu-hosting?REFERRALCODE=${REF_CODE}`,
        period_24: `https://www.hostinger.com/ae/gpu-hosting?REFERRALCODE=${REF_CODE}`,
        period_48: `https://www.hostinger.com/ae/gpu-hosting?REFERRALCODE=${REF_CODE}`,
        generalFallback: GENERAL_LINK
      }
    },

    // -------------------- 9. WEB APPS HOSTING (/ae/web-apps-hosting) --------------------
    {
      id: "webapps-kvm-1",
      categoryId: "web-apps-hosting",
      order: 1,
      active: true,
      popular: false,
      darkCard: false,
      pricesAreNetReferral: true,
      nameAr: "App Starter (KVM 1)",
      nameEn: "App Starter (KVM 1)",
      taglineAr: "انشر تطبيقات Node.js و Python و Docker مع ربط GitHub التلقائي.",
      taglineEn: "Deploy Node.js, Python, Go, and Docker apps with Git integration.",
      discountBadgeAr: "خصم 74%",
      discountBadgeEn: "74% off",
      discountBadgeStyle: "red",
      originalMonthlyUsd: 19.99,
      renewalMonthlyUsd: 11.99,
      pricesUsd: { "1": 9.99, "12": 5.59, "24": 5.19, "48": 5.19 },
      specs: [
        { icon: "cpu", labelAr: "المعالج", labelEn: "vCPU", valueAr: "1 نواة vCPU", valueEn: "1 vCPU core" },
        { icon: "ram", labelAr: "الذاكرة", labelEn: "RAM", valueAr: "4 GB رام", valueEn: "4 GB RAM" },
        { icon: "disk", labelAr: "التخزين", labelEn: "Storage", valueAr: "50 GB NVMe", valueEn: "50 GB NVMe disk space" },
        { icon: "net", labelAr: "الباندويث", labelEn: "Bandwidth", valueAr: "4 TB باندويث", valueEn: "4 TB bandwidth" }
      ],
      featuresAr: ["✓ نشر تلقائي من GitHub", "✓ دعم كامل لـ Docker & Coolify"],
      featuresEn: ["✓ Automated GitHub deployments", "✓ Full Docker & Coolify support"],
      links: {
        direct: CART_KVM_1_24,
        period_1: CART_KVM_1_24,
        period_12: CART_KVM_1_24,
        period_24: CART_KVM_1_24,
        period_48: CART_KVM_1_24,
        generalFallback: `https://www.hostinger.com/ae/web-apps-hosting?REFERRALCODE=${REF_CODE}`
      }
    },
    {
      id: "webapps-kvm-2",
      categoryId: "web-apps-hosting",
      order: 2,
      active: true,
      popular: true,
      darkCard: false,
      pricesAreNetReferral: true,
      nameAr: "App Production (KVM 2)",
      nameEn: "App Production (KVM 2)",
      taglineAr: "الباقة المثالية لتطبيقات الإنتاج، قواعد البيانات، وواجهات البرمجة APIs.",
      taglineEn: "Most popular tier for production full-stack apps, databases, and APIs.",
      discountBadgeAr: "عرض خاص - خصم 71%",
      discountBadgeEn: "Special offer - 71% off",
      discountBadgeStyle: "red",
      originalMonthlyUsd: 24.49,
      renewalMonthlyUsd: 14.99,
      pricesUsd: { "1": 12.99, "12": 7.59, "24": 7.03, "48": 7.03 },
      specs: [
        { icon: "cpu", labelAr: "المعالج", labelEn: "vCPU", valueAr: "2 أنوية vCPU", valueEn: "2 vCPU cores" },
        { icon: "ram", labelAr: "الذاكرة", labelEn: "RAM", valueAr: "8 GB رام", valueEn: "8 GB RAM" },
        { icon: "disk", labelAr: "التخزين", labelEn: "Storage", valueAr: "100 GB NVMe", valueEn: "100 GB NVMe disk space" },
        { icon: "net", labelAr: "الباندويث", labelEn: "Bandwidth", valueAr: "8 TB باندويث", valueEn: "8 TB bandwidth" }
      ],
      featuresAr: ["✓ تشغيل عدة تطبيقات وقواعد بيانات", "✓ شهادات SSL مجانية تلقائية"],
      featuresEn: ["✓ Host multiple apps & databases", "✓ Automated Free SSL certificates"],
      links: {
        direct: CART_KVM_2_24,
        period_1: CART_KVM_2_24,
        period_12: CART_KVM_2_24,
        period_24: CART_KVM_2_24,
        period_48: CART_KVM_2_24,
        generalFallback: `https://www.hostinger.com/ae/web-apps-hosting?REFERRALCODE=${REF_CODE}`
      }
    },

    // -------------------- 10. APPLICATIONS HOSTING (/ae/applications) --------------------
    {
      id: "app-n8n",
      categoryId: "applications",
      order: 1,
      active: true,
      popular: true,
      darkCard: false,
      pricesAreNetReferral: true,
      nameAr: "n8n Automation Server",
      nameEn: "n8n Automation Server",
      taglineAr: "تثبيت n8n بضغطة زر مع عمليات أتمتة ووكلاء ذكاء اصطناعي غير محدودة.",
      taglineEn: "1-Click self-hosted n8n template with unlimited workflow executions.",
      discountBadgeAr: "عرض خاص - خصم 71%",
      discountBadgeEn: "Special offer - 71% off",
      discountBadgeStyle: "red",
      originalMonthlyUsd: 24.49,
      renewalMonthlyUsd: 14.99,
      pricesUsd: { "1": 12.99, "12": 7.59, "24": 7.03, "48": 7.03 },
      specs: [
        { icon: "cpu", labelAr: "المعالج", labelEn: "vCPU", valueAr: "2 أنوية vCPU", valueEn: "2 vCPU cores" },
        { icon: "ram", labelAr: "الذاكرة", labelEn: "RAM", valueAr: "8 GB رام", valueEn: "8 GB RAM" },
        { icon: "disk", labelAr: "التخزين", labelEn: "Storage", valueAr: "100 GB NVMe", valueEn: "100 GB NVMe disk space" },
        { icon: "net", labelAr: "العمليات", labelEn: "Workflows", valueAr: "غير محدودة", valueEn: "Unlimited executions" }
      ],
      featuresAr: ["✓ قالب n8n الرسمي جاهز بضغطة زر", "✓ ربط WhatsApp و OpenAI و Telegram بلا حدود"],
      featuresEn: ["✓ Official 1-Click n8n template", "✓ Unlimited AI agent & webhook workflows"],
      links: {
        direct: CART_KVM_2_24,
        period_1: CART_KVM_2_24,
        period_12: CART_KVM_2_24,
        period_24: CART_KVM_2_24,
        period_48: CART_KVM_2_24,
        generalFallback: `https://www.hostinger.com/ae/applications?REFERRALCODE=${REF_CODE}`
      }
    },
    {
      id: "app-odoo-erp",
      categoryId: "applications",
      order: 2,
      active: true,
      popular: false,
      darkCard: false,
      pricesAreNetReferral: true,
      nameAr: "Odoo & Supabase (KVM 4)",
      nameEn: "Odoo & Supabase (KVM 4)",
      taglineAr: "تثبيت فوري لأنظمة Odoo ERP، Supabase، أو WordPress Multisite.",
      taglineEn: "1-Click deployment for Odoo ERP, Supabase, Coolify, and GitLab.",
      discountBadgeAr: "خصم 76%",
      discountBadgeEn: "76% off",
      discountBadgeStyle: "red",
      originalMonthlyUsd: 42.99,
      renewalMonthlyUsd: 31.99,
      pricesUsd: { "1": 19.99, "12": 11.49, "24": 10.39, "48": 10.39 },
      specs: [
        { icon: "cpu", labelAr: "المعالج", labelEn: "vCPU", valueAr: "4 أنوية vCPU", valueEn: "4 vCPU cores" },
        { icon: "ram", labelAr: "الذاكرة", labelEn: "RAM", valueAr: "16 GB رام", valueEn: "16 GB RAM" },
        { icon: "disk", labelAr: "التخزين", labelEn: "Storage", valueAr: "200 GB NVMe", valueEn: "200 GB NVMe disk space" },
        { icon: "net", labelAr: "الباندويث", labelEn: "Bandwidth", valueAr: "16 TB باندويث", valueEn: "16 TB bandwidth" }
      ],
      featuresAr: ["✓ أكثر من 100 تطبيق جاهز للتثبيت الفوري", "✓ نسخ احتياطي أسبوعي مجاني"],
      featuresEn: ["✓ 100+ one-click application templates", "✓ Free weekly automated backups"],
      links: {
        direct: CART_KVM_4_24,
        period_1: CART_KVM_4_24,
        period_12: CART_KVM_4_24,
        period_24: CART_KVM_4_24,
        period_48: CART_KVM_4_24,
        generalFallback: `https://www.hostinger.com/ae/applications?REFERRALCODE=${REF_CODE}`
      }
    },

    // -------------------- 11. BUSINESS EMAIL (/ae/business-email) --------------------
    {
      id: "email-starter",
      categoryId: "business-email",
      order: 1,
      active: true,
      popular: false,
      darkCard: false,
      pricesAreNetReferral: true,
      nameAr: "Business Starter Email",
      nameEn: "Business Starter",
      taglineAr: "بريد احترافي باسم نطاقك للشركات الناشئة ورواد الأعمال.",
      taglineEn: "Professional custom domain email for startups and solo founders.",
      discountBadgeAr: "خصم 84%",
      discountBadgeEn: "84% off",
      discountBadgeStyle: "lavender",
      originalMonthlyUsd: 2.99,
      renewalMonthlyUsd: 1.99,
      pricesUsd: { "1": 1.99, "12": 0.79, "24": 0.59, "48": 0.47 },
      featuresAr: [
        "✓ 10 GB مساحة تخزين لكل بريد",
        "✓ 10 قواعد توجيه تلقائي (Forwarding)",
        "✓ حماية متقدمة ضد السبام والفيروسات",
        "✓ تطبيق ويب وموبايل متكامل"
      ],
      featuresEn: [
        "✓ 10 GB email storage per mailbox",
        "✓ 10 forwarding rules & aliases",
        "✓ Advanced anti-spam & antivirus",
        "✓ Webmail & mobile app access"
      ],
      links: {
        direct: `https://www.hostinger.com/ae/business-email?REFERRALCODE=${REF_CODE}`,
        period_1: `https://www.hostinger.com/ae/business-email?REFERRALCODE=${REF_CODE}`,
        period_12: `https://www.hostinger.com/ae/business-email?REFERRALCODE=${REF_CODE}`,
        period_24: `https://www.hostinger.com/ae/business-email?REFERRALCODE=${REF_CODE}`,
        period_48: `https://www.hostinger.com/ae/business-email?REFERRALCODE=${REF_CODE}`,
        generalFallback: GENERAL_LINK
      }
    },
    {
      id: "email-premium",
      categoryId: "business-email",
      order: 2,
      active: true,
      popular: true,
      darkCard: true,
      pricesAreNetReferral: true,
      nameAr: "Business Premium Email",
      nameEn: "Business Premium",
      taglineAr: "مساحة 5 أضعاف أكبر مع تتبع فتح الرسائل ومميزات للشركات النشطة.",
      taglineEn: "5x more storage, read receipts, and priority delivery for teams.",
      discountBadgeAr: "عرض خاص - خصم 67%",
      discountBadgeEn: "Special offer - 67% off",
      discountBadgeStyle: "red",
      originalMonthlyUsd: 5.99,
      renewalMonthlyUsd: 3.99,
      pricesUsd: { "1": 3.99, "12": 2.39, "24": 2.15, "48": 1.99 },
      featuresAr: [
        "✓ 50 GB مساحة تخزين لكل بريد",
        "✓ 50 قاعدة توجيه و 30 اسم بديل (Aliases)",
        "✓ إشعارات قراءة الرسائل (Read Receipts)",
        "✓ قوالب بريدية وتذكير متابعة تلقائي"
      ],
      featuresEn: [
        "✓ 50 GB email storage per mailbox",
        "✓ 50 forwarding rules & 30 aliases",
        "✓ Instant email read receipts",
        "✓ Follow-up reminders & email templates"
      ],
      links: {
        direct: `https://www.hostinger.com/ae/business-email?REFERRALCODE=${REF_CODE}`,
        period_1: `https://www.hostinger.com/ae/business-email?REFERRALCODE=${REF_CODE}`,
        period_12: `https://www.hostinger.com/ae/business-email?REFERRALCODE=${REF_CODE}`,
        period_24: `https://www.hostinger.com/ae/business-email?REFERRALCODE=${REF_CODE}`,
        period_48: `https://www.hostinger.com/ae/business-email?REFERRALCODE=${REF_CODE}`,
        generalFallback: GENERAL_LINK
      }
    },

    // -------------------- 12. EMAIL MARKETING (Hostinger Reach /ae/email-marketing) --------------------
    {
      id: "reach-grow-500",
      categoryId: "email-marketing",
      order: 1,
      active: true,
      popular: false,
      darkCard: false,
      pricesAreNetReferral: true,
      nameAr: "Reach Grow 500",
      nameEn: "Reach Grow 500",
      taglineAr: "مثالية للشركات الناشئة لإرسال النشرات البريدية المكتوبة بالذكاء الاصطناعي.",
      taglineEn: "Great for small businesses sending weekly AI-crafted campaigns.",
      discountBadgeAr: "خصم 76%",
      discountBadgeEn: "76% off",
      discountBadgeStyle: "red",
      originalMonthlyUsd: 5.99,
      renewalMonthlyUsd: 4.99,
      pricesUsd: { "1": 4.79, "12": 1.59, "24": 1.43, "48": 1.43 },
      featuresAr: [
        "✓ حتى 500 مشترك نشط شهرياً",
        "✓ إرسال 3,500 رسالة بريدية شهرياً",
        "✓ تصميم وكتابة الرسائل بالذكاء الاصطناعي",
        "✓ إزالة شعار Hostinger Reach"
      ],
      featuresEn: [
        "✓ Up to 500 unique recipients / mo",
        "✓ 3,500 monthly email sends",
        "✓ AI newsletter writer & designer",
        "✓ No Hostinger Reach watermark"
      ],
      links: {
        direct: `https://www.hostinger.com/ae/email-marketing?REFERRALCODE=${REF_CODE}`,
        period_1: `https://www.hostinger.com/ae/email-marketing?REFERRALCODE=${REF_CODE}`,
        period_12: `https://www.hostinger.com/ae/email-marketing?REFERRALCODE=${REF_CODE}`,
        period_24: `https://www.hostinger.com/ae/email-marketing?REFERRALCODE=${REF_CODE}`,
        period_48: `https://www.hostinger.com/ae/email-marketing?REFERRALCODE=${REF_CODE}`,
        generalFallback: GENERAL_LINK
      }
    },
    {
      id: "reach-pro-1000",
      categoryId: "email-marketing",
      order: 2,
      active: true,
      popular: true,
      darkCard: true,
      pricesAreNetReferral: true,
      nameAr: "Reach Pro 1,000",
      nameEn: "Reach Pro 1,000",
      taglineAr: "الأكثر اختياراً لنمو القوائم البريدية وأتمتة رسائل الترحيب والمبيعات.",
      taglineEn: "Most popular plan for automated email sequences and growing lists.",
      discountBadgeAr: "عرض خاص - خصم 82%",
      discountBadgeEn: "Special offer - 82% off",
      discountBadgeStyle: "red",
      originalMonthlyUsd: 11.99,
      renewalMonthlyUsd: 8.99,
      pricesUsd: { "1": 9.59, "12": 2.39, "24": 2.15, "48": 2.15 },
      featuresAr: [
        "✓ حتى 1,000 مشترك نشط شهرياً",
        "✓ إرسال 7,000 رسالة بريدية شهرياً",
        "✓ أتمتة رحلات العملاء (Automated Journeys)",
        "✓ تقارير تحليلية دقيقة للفتح والنقر"
      ],
      featuresEn: [
        "✓ Up to 1,000 unique recipients / mo",
        "✓ 7,000 monthly email sends",
        "✓ Automated drip journeys & triggers",
        "✓ Full open & click conversion analytics"
      ],
      links: {
        direct: `https://www.hostinger.com/ae/email-marketing?REFERRALCODE=${REF_CODE}`,
        period_1: `https://www.hostinger.com/ae/email-marketing?REFERRALCODE=${REF_CODE}`,
        period_12: `https://www.hostinger.com/ae/email-marketing?REFERRALCODE=${REF_CODE}`,
        period_24: `https://www.hostinger.com/ae/email-marketing?REFERRALCODE=${REF_CODE}`,
        period_48: `https://www.hostinger.com/ae/email-marketing?REFERRALCODE=${REF_CODE}`,
        generalFallback: GENERAL_LINK
      }
    },

    // -------------------- 13. GOOGLE WORKSPACE (/ae/google-workspace) --------------------
    {
      id: "gws-starter",
      categoryId: "google-workspace",
      order: 1,
      active: true,
      popular: true,
      darkCard: true,
      pricesAreNetReferral: true,
      nameAr: "Google Workspace Starter",
      nameEn: "Business Starter",
      taglineAr: "بريد Gmail احترافي باسم شركتك مع 30GB تخزين سحابي وأدوات Google الرسمية.",
      taglineEn: "Custom Gmail address (@yourdomain) with 30 GB Drive storage and Google Meet.",
      discountBadgeAr: "عرض خاص - خصم 32%",
      discountBadgeEn: "Special offer - 32% off",
      discountBadgeStyle: "red",
      originalMonthlyUsd: 7.00,
      renewalMonthlyUsd: 7.00,
      pricesUsd: { "1": 5.99, "12": 4.79, "24": 4.79, "48": 4.79 },
      featuresAr: [
        "✓ بريد Gmail احترافي باسم نطاقك",
        "✓ 30 GB مساحة تخزين Google Drive",
        "✓ اجتماعات Google Meet حتى 100 مشارك",
        "✓ مستندات Google Docs, Sheets, Slides"
      ],
      featuresEn: [
        "✓ Custom secure Gmail (@yourdomain)",
        "✓ 30 GB pooled storage per user",
        "✓ Google Meet video calls (100 participants)",
        "✓ Google Docs, Sheets, Slides & Calendar"
      ],
      links: {
        direct: `https://www.hostinger.com/ae/google-workspace?REFERRALCODE=${REF_CODE}`,
        period_1: `https://www.hostinger.com/ae/google-workspace?REFERRALCODE=${REF_CODE}`,
        period_12: `https://www.hostinger.com/ae/google-workspace?REFERRALCODE=${REF_CODE}`,
        period_24: `https://www.hostinger.com/ae/google-workspace?REFERRALCODE=${REF_CODE}`,
        period_48: `https://www.hostinger.com/ae/google-workspace?REFERRALCODE=${REF_CODE}`,
        generalFallback: GENERAL_LINK
      }
    },
    {
      id: "gws-standard",
      categoryId: "google-workspace",
      order: 2,
      active: true,
      popular: false,
      darkCard: false,
      pricesAreNetReferral: true,
      nameAr: "Google Workspace Standard",
      nameEn: "Business Standard",
      taglineAr: "مساحة 2 تيرابايت لكل مستخدم مع تسجيل اجتماعات Meet ومساعد Gemini AI.",
      taglineEn: "2 TB storage per user, Meet recordings, and collaborative team drives.",
      discountBadgeAr: "خصم 29%",
      discountBadgeEn: "29% off",
      discountBadgeStyle: "red",
      originalMonthlyUsd: 14.00,
      renewalMonthlyUsd: 14.00,
      pricesUsd: { "1": 11.99, "12": 9.99, "24": 9.99, "48": 9.99 },
      featuresAr: [
        "✓ 2 TB مساحة تخزين سحابية لكل مستخدم",
        "✓ اجتماعات Meet حتى 150 مشارك + تسجيل",
        "✓ مساحات عمل مشتركة للفريق (Shared Drives)",
        "✓ تكامل Gemini AI الذكي"
      ],
      featuresEn: [
        "✓ 2 TB pooled storage per user",
        "✓ Google Meet (150 participants + recording)",
        "✓ Shared team drives & appointment booking",
        "✓ Gemini AI productivity tools"
      ],
      links: {
        direct: `https://www.hostinger.com/ae/google-workspace?REFERRALCODE=${REF_CODE}`,
        period_1: `https://www.hostinger.com/ae/google-workspace?REFERRALCODE=${REF_CODE}`,
        period_12: `https://www.hostinger.com/ae/google-workspace?REFERRALCODE=${REF_CODE}`,
        period_24: `https://www.hostinger.com/ae/google-workspace?REFERRALCODE=${REF_CODE}`,
        period_48: `https://www.hostinger.com/ae/google-workspace?REFERRALCODE=${REF_CODE}`,
        generalFallback: GENERAL_LINK
      }
    }
  ],

  faqs: [
    {
      id: "faq-1",
      qAr: "كيف يتم تفعيل الخصم الإضافي 20% في سلة الشراء؟",
      aAr: "جميع الأسعار المعروضة في البطاقات تحمل شارة (Referral code applied) وهي شاملة لخصم الشركاء الإضافي (20%) فوق عروض الجمعة البيضاء من هوستنجر (حتى 88%). تنبيه هام: هذا الخصم يُفعّل تلقائياً وحصرياً عند فتح الرابط الكامل أو الضغط على زر (Choose plan / اختر الخطة) من موقعنا، ولا يعمل ككود منفصل يُكتب يدوياً في خانة الكوبونات.",
      qEn: "How is the extra 20% partner discount applied at checkout?",
      aEn: "All prices shown on our cards include the 'Referral code applied' badge, reflecting your extra 20% partner discount stacked on top of Hostinger's White Friday deals (up to 88% off). Important: This discount is activated automatically and exclusively by clicking 'Choose plan' or opening our full partner link — it does not work as a standalone code typed manually into a coupon box."
    },
    {
      id: "faq-2",
      qAr: "هل جميع منتجات هوستنجر الـ 13 متوفرة بالخصم؟",
      aAr: "نعم! يمكنك التنقل بين جميع أقسام ومنتجات هوستنجر الـ 13 من قائمة (Products) في الأعلى أو من شريط التبويبات: استضافة المواقع، ووردبريس، ووكومرس، استضافة الوكالات Pro، السحابة، خوادم KVM VPS، خوادم AI VPS، كروت GPU، تطبيقات الويب، التطبيقات الجاهزة (n8n)، البريد الاحترافي، التسويق البريدي Reach، و Google Workspace.",
      qEn: "Are all 13 Hostinger products available with the partner discount?",
      aEn: "Yes! Switch between all 13 official Hostinger product lines using the 'Products' menu or category tabs: Web Hosting, WordPress, WooCommerce, Pro Agency, Cloud, KVM VPS, AI Managed VPS, GPU Hosting, Web Apps, Applications (n8n), Business Email, Email Marketing, and Google Workspace."
    },
    {
      id: "faq-3",
      qAr: "هل يمكنني اختيار مدة الاشتراك (شهر، 12 شهر، 24 شهر، 48 شهر)؟",
      aAr: "بالتأكيد! يمكنك التبديل بين المدد المتاحة لكل منتج من أزرار المدة أعلى البطاقات لترى السعر الشهري وإجمالي الفاتورة اليوم، مع توجيه مباشر للسلة.",
      qEn: "Can I choose my billing cycle (1, 12, 24, or 48 months)?",
      aEn: "Yes! Use the billing duration selector above the cards to preview exact monthly rates and upfront totals for 1, 12, 24, or 48-month terms."
    },
    {
      id: "faq-4",
      qAr: "هل يشمل العرض ضمان استرداد الأموال لمدة 30 يوماً؟",
      aAr: "نعم، جميع باقات استضافة المواقع والسحابة وخوادم VPS مغطاة بضمان استرداد الأموال الرسمي من Hostinger لمدة 30 يوماً.",
      qEn: "Does this include Hostinger's 30-day money-back guarantee?",
      aEn: "Yes, all web, cloud, and VPS hosting plans are backed by Hostinger's official 30-day money-back guarantee."
    }
  ],

  analytics: {
    totalClicks: 0,
    clicksByPlan: {},
    recentClicks: []
  }
};

module.exports = defaultData;
