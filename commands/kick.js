const discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "kick",
  category: "Moderation",
  description: "Kick Anyone From The Server.",
  usage: "kick <@user> <reason>",
  execute: async (client, message, args) => {
    if (!message.member.hasPermission("KICK_MEMBERS")) {
      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescription(
          `**${message.author.tag}**, You Don't Have Enough Perms To Kick Someone.`
        );

      message.channel.send(embed);
    }

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescription(
          `**${message.author.tag}**, Make Sure The Bot Has Kick Members Permission.`
        );

      message.channel.send(embed);
    }

    let target = message.mentions.members.first();

    if (!target) {
      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescription(
          `**${message.author.tag}**, Mention The User You Want To Kick.`
        );

      message.channel.send(embed);
    }

    if (target.id === message.author.id) {
      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescription(`**${message.author.tag}**, You Can't Kick Yourself.`);

      message.channel.send(embed);
    }

    let embed = new discord.MessageEmbed()
      .setTitle("Action: Kick")
      .setDescription(`***${target.user.tag} was Kicked.***`)
      .setColor("#070707")
      .setFooter(`Kicked by: ${message.author.tag}`);

    message.channel.send(embed);

    target.kick(args[1]);
  }
};
