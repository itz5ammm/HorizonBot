const discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "addrole",
  category: "Moderation",
  aliases: ["addroles"],
  description: "Aᴅᴅ Rᴏʟᴇ Tᴏ A Usᴇʀ.",
  usage: "<user> <role>",
  execute: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescription("Yᴏᴜ Dᴏɴ'ᴛ Hᴀᴠᴇ Pᴇʀᴍs Tᴏ Usᴇ Tʜɪs.");

      message.channel.send(embed);
    }
    let user = message.mentions.members.first();
    {
      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescription("Mᴇɴᴛɪᴏɴ Tʜᴇ Usᴇʀ.");

      message.channel.send(embed);
    }

    let role = message.mentions.roles.first();
    {
      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescription("Mᴇɴᴛɪᴏɴ Tʜᴇ Rᴏʟᴇ.");

      message.channel.send(embed);
    }
    let embed = new discord.MessageEmbed()
      .setColor("00FFFF")
      .setDescription(`${user}, +${role}`);

    user.roles.add(role);
    message.channel.send(embed);
  }
};
