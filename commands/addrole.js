const discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "addrole",
  category: "Moderation",
  aliases: ["addroles"],
  description: "Aᴅᴅ Rᴏʟᴇ Tᴏ A Usᴇʀ.",
  usage: "<user> <role>",
  execute: async (client, message, args) => {
    let perm = message.member.hasPermission("MANAGE_ROLES");
    if (!perm) return message.channel.send("Yᴏᴜ Dᴏɴ'ᴛ Hᴀᴠᴇ Pᴇʀᴍs Tᴏ Usᴇ Tʜɪs.");

    let user = message.mentions.members.first();
    if (!user) return message.channel.send("Mᴇɴᴛɪᴏɴ Tʜᴇ Usᴇʀ.");

    let role = message.mentions.roles.first();
    if (!role) return message.channel.send("Mᴇɴᴛɪᴏɴ Tʜᴇ Rᴏʟᴇ.");

    let embed = new discord.MessageEmbed()
      .setColor("00FFFF")
      .setDescription(`${user}, +${role}`);

    user.roles.add(role);
    message.channel.send(embed);
  }
};
