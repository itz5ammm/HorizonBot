const utils = require("utils");

const Discord = require("discord.js");
const superagent = require("snekfetch");

module.exports = {
  name: "kiss",
  category: "Action",
  description: "Allows you to kiss another user",
  usage: "[command | user]",
  execute: async (client, message, args) => {
    //command
    const user = message.mentions.users.first();
    if (!user) return message.reply("Mention someone to kiss");

    superagent
      .get("https://nekos.life/api/v2/img/kiss")
      .end((err, response) => {
        const lewdembed = new Discord.MessageEmbed()
          .setImage(response.body.url)
          .setColor(`RANDOM`)
          .setDescription(
            message.author.toString() + " *Kisses* " + user.toString()
          )
          .setFooter(`Kawaiii!`)
          .setURL(response.body.url);
        message.channel.send(lewdembed);
      });
  }
};
