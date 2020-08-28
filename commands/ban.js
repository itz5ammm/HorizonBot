const discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "ban",
  category: "moderation",
  description: "Ban anyone with one shot whithout knowing anyone xD",
  usage: "ban <@user> <reason>",
  execute: async (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) {
      return;
      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescription(
          `**${message.author.tag}**, Yᴏᴜ Dᴏɴ'ᴛ Hᴀᴠᴇ Pᴇʀᴍs Tᴏ Bᴀɴ Sᴏᴍᴇᴏɴᴇ.`
        );
    }

    if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
      return;
      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescription(
          `**${message.author.tag}**, Mᴀᴋᴇ Sᴜʀᴇ I Hᴀᴠᴇ Tʜᴇ Rᴇǫᴜɪʀᴇᴅ Pᴇʀᴍs.`
        );

      message.channel.send(embed);
    }

    const target = message.mentions.members.first();

    const reason = args.slice(1).join(" ");

    if (!target) {
      return;
      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescription(
          `**${message.author.tag}**, Mᴇɴᴛɪᴏɴ Tʜᴇ Usᴇʀ Yᴏᴜ Wᴀɴᴛ Tᴏ Bᴀɴ.`
        );

      message.channel.send(embed);
    }

    if (target.id === message.author.id) {
      return;
      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescription(`**${message.author.tag}**, Yᴏᴜ Cᴀɴ'ᴛ Bᴀɴ Yᴏᴜʀsᴇʟғ.`);

      message.channel.send(embed);
    }

    if (!args[1]) {
      return message.channel.send(
        `**${message.author.username}**, Please Give Reason To ban Member`
      );
    }

    let embed = new discord.MessageEmbed()
      .setTitle("Action : Ban")
      .setDescription(`***${target} was Banned.*** (${target.id})`)
      .setColor("#ff2050")
      .setThumbnail(target.avatarURL)
      .setFooter(`Banned by ${message.author.tag}`);

    message.channel.send(embed);
    target.ban(args[1]);
  }
};
