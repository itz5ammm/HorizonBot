const Discord = require("discord.js");
const client = new Discord.Client();
const snekfetch = require("snekfetch");

module.exports = {
  name: "kiss",
  category: "Action",
  description: "Kiss A User",

  execute: async (client, message, args) => {
    if (message.mentions.users.size < 1)
      return message.channel.send("you can't kiss nobody");
    let user = message.guild.member(message.mentions.users.first());
    snekfetch
      .get("https://nekos.life/api/kiss")
      .set("Key", "dnZ4fFJbjtch56pNbfrZeSRfgWqdPDgf")
      .then(r =>
        message.channel.send(
          `${message.author} Kisses ${user} ❤`,
          {
            embed: {
              image: {
                url: r.body.url
              }
            }
          }
        )
      )
      .catch(console.error);
  }
};
