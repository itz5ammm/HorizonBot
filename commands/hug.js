const utils = require("utils");

const Discord = require("discord.js");
const superagent = require("snekfetch");

module.exports = {
  name: "hug",
  category: "Action",
  description: "Allows you to hug another user",
  usage: "[command | user]",
  execute: async (client, message, args) => {
    //command
    const user = message.mentions.users.first();
    if (!user) return message.reply("Mention someone to give a hug to.");

    superagent.get("https://nekos.life/api/v2/img/hug").end((err, response) => {
      const lewdembed = new Discord.MessageEmbed()
        .setImage(response.body.url)
        .setColor(`RANDOM`)
        .setDescription(
          message.author.toString() + " *hugs* " + user.toString()
        )
        .setFooter(`Kawaiii!`)
        .setURL(response.body.url);
      message.channel.send(lewdembed);
    });
  }
};
