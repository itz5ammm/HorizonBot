const discord = require("discord.js");
const db = require("quick.db");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "setnick",
  category: "Moderation",
  aliases: ["setnickname", "nick"],
  description: "Cʜᴀɴɢᴇ Sᴏᴍᴇᴏɴᴇ's Nɪᴄᴋɴᴀᴍᴇ.",
  execute: async (client, message, args) => {
    let perm = message.member.hasPermission("MANAGE_NICKNAMES");
    if (!perm) {
      let embed = new MessageEmbed()
        .setColor("00FFFF")
        .setDescription("Yᴏᴜ Dᴏɴᴛ Hᴀᴠᴇ Pᴇʀᴍs Tᴏ Usᴇ Tʜᴀᴛ");

      message.channel.send(embed);
    }

    let user = message.mentions.members.first();
    if (!user) {
      let embed = new MessageEmbed()
        .setColor("00FFFF")
        .setDescription("Mᴇɴᴛɪᴏɴ Tʜᴇ Usᴇʀ!");

      message.channel.send(embed);
    }
    let name = args.slice(1).join(" ");
    if (!name) {
      let embed = new MessageEmbed()
        .setColor("00FFFF")
        .setDescription("Mᴇɴᴛɪᴏɴ Tʜᴇ Nᴀᴍᴇ!");

      message.channel.send(embed);
    }

    user.setNickname(name);

    let embed = new MessageEmbed()
      .setColor("070707")
      .setDescription(`Sᴇᴛ Nɪᴄᴋɴᴀᴍᴇ Fᴏʀ **${user.user.tag}.**`);

    message.channel.send(embed);
  }
};
