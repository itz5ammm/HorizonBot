const db = require("quick.db");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "warnings",
  description: "Get the warnings of yours or mentioned person",
  category: "Moderation",
  execute: (client, message, args) => {
    const user = message.mentions.members.first() || message.author;

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

    if (warnings === null) warnings = 0;

    let embed = new MessageEmbed()
      .setColor("070707")
      .setDescription(`${user} Hᴀs **${warnings}** Wᴀʀɴs.`);
    message.channel.send(embed);
  }
};
