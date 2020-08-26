const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "info",
  category: "Info",
  description: "Get Info Of User",
  execute: async (bot, message, args) => {
    let inline = true;
    let resence = true;
    const status = {
      online: "Online",
      idle: "Idle",
      dnd: "Do Not Disturb",
      offline: "Offline"
    };

    const member =
      message.mentions.members.first() ||
      message.guild.members.get(args[0]) ||
      message.member;
    let target = message.mentions.users.first() || message.author;

    if (member.user.bot === true) {
      bot = "Yes";
    } else {
      bot = "No";
    }

    let embed = new MessageEmbed()
      .setAuthor(member.user.user.tag)
      .setThumbnail(target.displayAvatarURL)
      .setColor("00FFFF")
      .addField("Username", `${member.user.username}`, inline)
      .addField("Discriminator", `${member.user.discriminator}`, inline)
      .addField("ID", member.user.id, inline)
      .addField("Bot", `${bot}`, inline, true)
      .addField(
        "Status",
        `${status[member.user.presence.status]}`,
        inline,
        true
      )
      .addField("Created at", member.user.createdAt.toLocaleString(), true)
      .addField(
        "Roles",
        `${member.roles
          .filter(r => r.id !== message.guild.id)
          .map(roles => `\`${roles.name}\``)
          .join(" **|** ") || "No Roles"}`,
        true
      )
      .setFooter(`Requested By: ${message.author.tag}`)
      .setTimestamp();

    message.channel.send(embed);
  }
};
