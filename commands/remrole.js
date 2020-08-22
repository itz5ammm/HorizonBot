const discord = require("discord.js");

module.exports = {
  name: "remrole",
  category: "Moderation",
  aliases: ["remroles"],
  description: "Rᴇᴍᴏᴠᴇs A Rᴏʟᴇ Fʀᴏᴍ Usᴇʀ.",
  usage: "<user> <role>",
  execute: async (client, message, args) => {
    let perm = message.member.hasPermission("MANAGE_ROLES");
    if (!perm) return message.channel.send("Yᴏᴜ Nᴇᴇᴅ Mᴀɴᴀɢᴇ Rᴏʟᴇ Pᴇʀᴍs.");

    let user = message.mentions.members.first();
    if (!user) return message.channel.send("Mᴇɴᴛɪᴏɴ Tʜᴇ Usᴇʀ.");

    let role = message.mentions.roles.first();
    if (!role) return message.channel.send("Mᴇɴᴛɪᴏɴ Tʜᴇ Rᴏʟᴇ.");

    if (!user.roles.has(role))
      return message.channel.send("Tʜɪs Usᴇʀ Dᴏᴇs Nᴏᴛ Hᴀᴠᴇ Tʜᴇ Rᴏʟᴇ.");

    let embed = new discord.MessageEmbed()
      .setColor("00FFFF")
      .setDescription(`${user}, -${role}`);

    user.roles.remove(role);
    message.channel.send(embed);
  }
};
