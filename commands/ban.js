const discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ban",
  category: "Moderation",
  description: "Ban Anyone From The Server",
  usage: "ban <@user> <reason>",
  execute: async (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) {
      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescription(
          `**${message.author.tag}**, You Don't Have Perms To Ban Someone.`
        );
      message.channel.send(embed);
    }

    if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescription(
          `**${message.author.tag}**, I Don't Have Perms To Ban Someone.`
        );
      message.channel.send(embed);
    }

    const target = message.mentions.members.first();

    if (!target) {
      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescription(`**${message.author.tag}**, Mention The User.`);
      message.channel.send(embed);
    }

    if (target.id === message.author.id) {
      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescription(`**${message.author.tag}**, You Can't Ban Yourself.`);
      message.channel.send(embed);
    }

    let embed = new discord.MessageEmbed()
      .setTitle("Action : Ban")
      .setDescription(`***${target.user.tag} was Banned***.`)
      .setColor("#00FFFF")
      .setThumbnail(target.avatarURL)
      .setFooter(`Banned by ${message.author.tag}`);

    message.channel.send(embed);
    target.ban(args[1]);
  }
};
