const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "warn",
  category: "moderation",
  usage: "warn <@mention> <reason>",
  description: "Warn The Rule Breakers",
  execute: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescriptipn("You Need The Manage Messages Perm.");
    }

    const user = message.mentions.members.first();

    if (!user) {
      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescription("Mention The User.");

      message.channel.send(embed);
    }

    const reason = args.slice(1).join(" ");

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

    if (warnings === null) {
      db.set(`warnings_${message.guild.id}_${user.id}`, 1);
      user.send(`Warned In **${message.guild.name}:** ${reason}`);
      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescription(`***${user.user.tag} was Warned.***  | ${reason}`);
      message.channel.send(embed);
    } else if (warnings !== null) {
      db.add(`warnings_${message.guild.id}_${user.id}`, 1);
      user.send(
        `You have been warned in **${message.guild.name}** | ${reason}`
      );

      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescription(`***${user.user.tag}was Warned.***  | ${reason}`);
      message.channel.send(embed);
    }
  }
};
