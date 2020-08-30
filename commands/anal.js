const superagent = require("snekfetch");
const Discord = require("discord.js");

module.exports = {
  name: "anal",
  category: "Nsfw",
  description: "",
  execute: async (client, message, args, level) => {
    //command
    if (!message.channel.nsfw)
      return message.channel.send(
        "You can use this command in an NSFW Channel!"
      );
    superagent
      .get("https://nekos.life/api/v2/img/anal")
      .end((err, response) => {
        const lewdembed = new Discord.MessageEmbed()
          .setTitle("Hentai")
          .setImage(response.body.url)
          .setColor(`#000000`)
          .setFooter(`Requested By: ${message.authot.tag}`)
          .setTimestamp()
          .setURL(response.body.url);
        message.channel.send(lewdembed);
      });
  }
};
