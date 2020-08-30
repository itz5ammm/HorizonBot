const Discord = require("discord.js");
const bot = new Discord.Client();
const snekfetch = require("snekfetch");

module.exports = {
  name: "hentai",
  category: "Nsfw",
  description: "Get Hentai.",
  execute: async (client, message, args) => {
    const { body } = await snekfetch.get("https://nekos.life/api/lewd/neko");

    if (message.channel.nsfw)
      return message.channel.send(`neko(body`);
  }
};
