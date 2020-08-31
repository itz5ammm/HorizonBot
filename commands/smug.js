const superagent = require("snekfetch");
const Discord = require("discord.js");
const utils = require("utils");

module.exports = {
  name: "smug",
  category: "Action",
  description: "Smug",
  execute: async (client, message, args) => {
    if (!message.channel.nsfw)
      return message.channel.send(
        "You can use this command in an NSFW Channel!"
      );
    superagent
      .get("https://nekos.life/api/v2/img/smug")
      .end((err, response) => {
        const lewdembed = new Discord.RichEmbed()
          .setTitle("( ͡° ͜ʖ ͡°)")
          .setImage(response.body.url)
          .setColor(`RANDOM`)
          .setFooter(`( ͡° ͜ʖ ͡° )`)
          .setURL(response.body.url);
        message.channel.send(lewdembed);
      });
  }
};
