const discord = require("discord.js");

module.exports = {
  name: "avatar",
  category: "Fun",
  aliases: ["av", "useravatar"],
  description: "Check Someones Avatar.",
  execute: async (client, message, args) => {
    const user = message.mentions.users.first() || message.author;
    const avatarEmbed = new discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(user.tag)
      .setImage(user.displayAvatarURL({ dynamic: true, size: 2048 }))
      .setFooter(`Requested By: ${message.author.tag}`)
      .setTimestamp();
    message.channel.send(avatarEmbed);
  }
};
