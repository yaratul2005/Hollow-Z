// worker.js
import botHandler from "./main.js";

// Export the bot fetch handler for Cloudflare Workers
export default {
  fetch: botHandler.fetch,
};
