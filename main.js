// main.js
// main.js
import { Bot } from "@grammyjs/edge";
import { loadFeatures } from "./utils/featureLoader.js";
import { TELEGRAM_BOT_TOKEN } from "./config/env.js";

// Initialize bot
const bot = new Bot(TELEGRAM_BOT_TOKEN);

// Load all features dynamically
await loadFeatures(bot);

// Start bot (for local dev/testing)
if (typeof addEventListener === "undefined") {
  bot.start();
}

export default {
  fetch: (req, env, ctx) => bot.handle(req, env, ctx),
};
