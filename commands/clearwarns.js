const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "clearwarns",
  aliases: ["cwarns"],
  usage: "cwarns <@user>",
  description: "Rᴇsᴇᴛ Wᴀʀɴs Oғ Tʜᴇ Mᴇɴᴛɪᴏɴᴇᴅ Usᴇʀ.",
  execute: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send("Yᴏᴜ Dᴏɴ'ᴛ Hᴀᴠᴇ Pᴇʀᴍs Tᴏ Usᴇ Tʜɪs.");
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send("Mᴇɴᴛɪᴏɴ Tʜᴇ Usᴇʀ.");
    }

    if (message.mentions.users.first().bot) {
      return message.channel.send("Bᴏᴛs Dᴏɴᴛ Hᴀᴠᴇ ᴀʀɴs.");
    }

    if (message.author.id === user.id) {
      return message.channel.send(
        "Yᴏᴜ'ʀᴇ Nᴏᴛ Aʟʟᴏᴡᴇᴅ Tᴏ Cʟᴇᴀʀ Yᴏᴜʀ Oᴡɴ Wᴀʀɴɪɴɢs."
      );
    }

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

    if (warnings === null) {
      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescription(
          `${message.mentions.users.first().username} do not have any warnings`
        );
      message.channel.send(embed);
    }

    let embed = new MessageEmbed()
      .setColor("070707")
      .setDescription(
        `:verifwhite: Cʟᴇᴀʀᴇᴅ ${warnings} Fᴏʀ ${message.mentions.users.first().username}`
      );
    message.channel.send(embed);
  }
};
