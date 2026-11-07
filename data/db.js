const fs = require("fs");
const path = require("path");
const defaultData = require("./defaultData");

const STORE_PATH = path.join(__dirname, "store.json");

function loadStore() {
  try {
    if (!fs.existsSync(STORE_PATH)) {
      fs.writeFileSync(STORE_PATH, JSON.stringify(defaultData, null, 2), "utf8");
      return JSON.parse(JSON.stringify(defaultData));
    }
    const raw = fs.readFileSync(STORE_PATH, "utf8");
    const parsed = JSON.parse(raw);

    // Ensure evergreen countdown stays active if autoResetWhenExpired is enabled
    if (parsed.countdown && parsed.countdown.autoResetWhenExpired) {
      const targetMs = new Date(parsed.countdown.targetDate).getTime();
      if (isNaN(targetMs) || targetMs <= Date.now()) {
        const hours = Number(parsed.countdown.evergreenHours) || 221;
        parsed.countdown.targetDate = new Date(Date.now() + hours * 3600 * 1000).toISOString();
        saveStore(parsed);
      }
    }

    return parsed;
  } catch (err) {
    console.error("Error loading store.json, falling back to defaultData:", err);
    return JSON.parse(JSON.stringify(defaultData));
  }
}

function saveStore(data) {
  try {
    const tmpPath = STORE_PATH + ".tmp";
    fs.writeFileSync(tmpPath, JSON.stringify(data, null, 2), "utf8");
    fs.renameSync(tmpPath, STORE_PATH);
    return true;
  } catch (err) {
    console.error("Error saving store.json:", err);
    return false;
  }
}

function resetStore() {
  const fresh = JSON.parse(JSON.stringify(defaultData));
  fresh.countdown.targetDate = new Date(Date.now() + (9 * 86400 + 5 * 3600 + 37 * 60) * 1000).toISOString();
  saveStore(fresh);
  return fresh;
}

function recordClick(event) {
  const store = loadStore();
  if (!store.analytics) {
    store.analytics = { totalClicks: 0, clicksByPlan: {}, recentClicks: [] };
  }
  store.analytics.totalClicks = (store.analytics.totalClicks || 0) + 1;
  const key = event.planId || "general";
  store.analytics.clicksByPlan[key] = (store.analytics.clicksByPlan[key] || 0) + 1;

  store.analytics.recentClicks.unshift({
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    timestamp: new Date().toISOString(),
    planId: event.planId || "general",
    planName: event.planName || "General Referral Link",
    period: event.period || "24",
    linkType: event.linkType || "direct",
    targetUrl: event.targetUrl || store.general.generalLink,
    lang: event.lang || "ar",
    utmSource: event.utmSource || "",
    utmCampaign: event.utmCampaign || "",
    gclid: event.gclid || "",
    device: event.device || "desktop"
  });

  // Keep last 250 clicks in history
  if (store.analytics.recentClicks.length > 250) {
    store.analytics.recentClicks = store.analytics.recentClicks.slice(0, 250);
  }

  saveStore(store);
}

module.exports = {
  loadStore,
  saveStore,
  resetStore,
  recordClick
};

