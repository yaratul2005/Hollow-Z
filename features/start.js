
// features/start.js
export default function (bot) {
  bot.command("start", (ctx) =>
    ctx.reply("👋 Welcome to Hollow Z! I'm alive and ready to serve you.")
  );
}
