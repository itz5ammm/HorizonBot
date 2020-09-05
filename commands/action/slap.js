const Discord = require("discord.js");
const superagent = require("snekfetch");
const utils = require("utils");

module.exports = {
  name: "slap",
  category: "Action",
  description: "Allows you to slap a user",
  usage: "[command | user]",
  execute: async (client, message, args) => {
    //command
    const user = message.mentions.users.first();
    if (!user) return message.reply("Mention someone to slap!");

    superagent
      .get("https://nekos.life/api/v2/img/slap")
      .end((err, response) => {
        const lewdembed = new Discord.MessageEmbed()
          .setImage(response.body.url)
          .setColor(`RANDOM`)
          .setDescription(
            message.author.toString() + " *Slaps* " + user.toString()
          )
          .setFooter(`rip`)
          .setURL(response.body.url);
        message.channel.send(lewdembed);
      });
  }
};
