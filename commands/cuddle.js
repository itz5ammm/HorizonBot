const Discord = require("discord.js");
const superagent = require("snekfetch");
const utils = require("utils");

module.exports = {
  name: "cuddle",
  category: "Action",
  description: "Allows you to cuddle another user",
  usage: "[command | user]",
  execute: async (client, message, args) => {
    //command
    if (message.guild === null) return;
    const user = message.mentions.users.first();
    if (!user) return message.reply("Mention someone to cuddle.");

    superagent
      .get("https://nekos.life/api/v2/img/cuddle")
      .end((err, response) => {
        const lewdembed = new Discord.MessageEmbed()
          .setImage(response.body.url)
          .setColor(`RANDOM`)
          .setDescription(
            message.author.toString() + " *cuddles* " + user.toString()
          )
          .setFooter(`Kawaiii!`)
          .setURL(response.body.url);
        message.channel.send(lewdembed);
      });
  }
};
