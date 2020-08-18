const discord = require("discord.js");

module.exports = {
  name: "ban",
  category: "Moderation",
  description: "Bᴀɴ Aɴʏᴏɴᴇ Iɴ Oɴᴇ Sʜᴏᴛ.",
  usage: "ban <@user> <reason>",
  execute: async (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(
        `**${message.author.username}**, Yᴏᴜ Dᴏɴ'ᴛ Hᴀᴠᴇ Pᴇʀᴍs Tᴏ Usᴇ Tʜɪs.`
      );
    }

    if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(
        `**${message.author.username}**, I Dᴏɴ'ᴛ Hᴀᴠᴇ Pᴇʀᴍs Tᴏ Bᴀɴ Sᴏᴍᴇᴏɴᴇ.`
      );
    }

    const target = message.mentions.members.first();

    if (!target) {
      return message.channel.send(
        `**${message.author.username}**, Pʟᴇᴀsᴇ Mᴇᴍᴛɪᴏɴ Tʜᴇ Pᴇʀsᴏɴ Wʜᴏ Yᴏᴜ Wᴀɴᴛ Tᴏ Bᴀɴ.`
      );
    }

    if (target.id === message.author.id) {
      return message.channel.send(
        `**${message.author.username}**, Yᴏᴜ Cᴀɴ'ᴛ Bᴀᴍ Yᴏᴜʀsᴇʟғ!`
      );
    }

    if (!args[1]) {
      return message.channel.send(
        `**${message.author.username}**, Pʟᴇᴀᴢᴇ Gɪᴠᴇ Rᴇᴀsᴏɴ Tᴏ Bᴀɴ Mᴇᴍʙᴇʀ.`
      );
    }

    let embed = new discord.MessageEmbed()
      .setTitle("Action : Ban")
      .setDescription(`Banned ${target} (${target.id})`)
      .setColor("#ff2050")
      .setThumbnail(target.avatarURL)
      .setFooter(`Banned by ${message.author.tag}`);

    message.channel.send(embed);
    target.ban(args[1]);
  }
};
