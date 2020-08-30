const Discord = require("discord.js");
const client = new Discord.Client();
const snekfetch = require("snekfetch");

module.exports = {
  name: "cuddle",
  category: "Action",
  description: "Cuddle Someone.",
  execute: async (client, message, args) => {
    if (message.mentions.users.size < 1)
      return message.channel.send("you can't Cuddle nobody");
    let user = message.guild.member(message.mentions.users.first());
   snekfetch
   .get("https://nekos.life/api/cuddle)")
   .set("key", "
    message.channel.send(
      `${message.author.username} *Cuddles* ${user}. Cuteee! ❤`,
      {
        embed: {
          image: {
            url: "https://i.imgur.com/0yAIWbg.gif"
          }
        }
      }
    );
  }
};
