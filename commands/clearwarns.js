const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "clearwarn",
  aliases: ["cwarns"],
  usage: "clearwarn <@user>",
  description: "Rᴇsᴇᴛ Wᴀʀɴs Oғ Tʜᴇ Mᴇɴᴛɪᴏɴᴇᴅ Usᴇʀ.",
  execute: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescription("Yᴏᴜ Dᴏɴ'ᴛ Hᴀᴠᴇ Pᴇʀᴍs Tᴏ Usᴇ Tʜɪs.");
      message.channel.send(embed);
    }

    const user = message.mentions.members.first();

    if (!user) {
      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescription("Mention The User");

      message.channel.send(embed);
    }

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

    if (warnings === null) {
      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescription(`${user.user.tag} Don't Have Any Warnings`);
      message.channel.send(embed);
    }

    let embed = new MessageEmbed()
      .setColor("070707")
      .setDescription(`Cleared ${warnings} For ${user.user.tag}`);
    message.channel.send(embed);
  }
};
