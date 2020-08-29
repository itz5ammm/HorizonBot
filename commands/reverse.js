const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "reverse",
  description: "Reverse The Text",
  category: "Fun",
  usage: "reverse <text>",
  execute: function(bot, message, args) {
    if (args.length < 1) {
      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescription("You must input text to be reversed!");

      message.channel.send(embed);
    }

    let embed = new MessageEmbed().setColor("070707").setDescription(
      args
        .join(" ")
        .split("")
        .reverse()
        .join("")
    );

    message.channel.send(embed);
  }
};
