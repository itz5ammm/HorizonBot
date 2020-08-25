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
    if (!perm) return message.channel.send("Yᴏᴜ Dᴏɴᴛ Hᴀᴠᴇ Pᴇʀᴍs Tᴏ Usᴇ Tʜᴀᴛ");

    let user = message.mentions.members.first();
    if (!user) return message.channel.send("Mᴇɴᴛɪᴏɴ Tʜᴇ Usᴇʀ!");

    let name = args.slice(1).join(" ");
    if (!name) return message.channel.send("Mᴇɴᴛɪᴏɴ Tʜᴇ Nᴀᴍᴇ!");

    user.setNickname(name);

    let embed = new MessageEmbed()
      .setColor("070707")
      .setDescription(`Sᴇᴛ Nɪᴄᴋɴᴀᴍᴇ Fᴏʀ ${user.user.tag}.`);

    message.channel.send(embed);
  }
};
