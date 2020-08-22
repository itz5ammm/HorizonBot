const discord = require("discord.js");

module.exports = {
  name: "addrole",
  category: "Moderation",
  aliases: ["addroles"],
  description: "Add a role to a user",
  usage: "<user> <role>",
  execute: async (client, message, args) => {
    let perm = message.member.hasPermission("MANAGE_ROLES");
    if (!perm)
      return message.channel.send(
        "Yᴏᴜ Nᴇᴇᴅ Mᴀɴᴀɢᴇ Rᴏʟᴇs Pᴇʀᴍ Tᴏ Usᴇ Tʜɪ Cᴏᴍᴍᴀɴᴅ."
      );

    let user = message.mentions.members.first();
    if (!user) return message.channel.send("Mᴇɴᴛɪᴏɴ Tʜᴇ Usᴇʀ.");

    let role = message.mentions.roles.first();
    if (!role) return message.channel.send("Mᴇɴᴛɪᴏɴ Tʜᴇ Rᴏʟᴇ.");

    let embed = new discord.MessageEmbed()
      .setColor("GREEN")
      .setDescription(`${user} has gotten the ${role}`);

    user.roles.add(role);
    message.channel.send(embed);
  }
};
