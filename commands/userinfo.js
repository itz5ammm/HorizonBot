const discord = require("discord.js");
const moment = require("moment");
const db = require("quick.db");

const flags = {
  DISCORD_EMPLOYEE: "Dɪsᴄᴏʀᴅ Eᴍᴘʟᴏʏᴇᴇ",
  DISCORD_PARTNER: "Dɪsᴄᴏʀᴅ Pᴀʀᴛɴᴇʀ",
  BUGHUNTER_LEVEL_1: "Bᴜɢ Hᴜɴᴛᴇʀ (Lᴇᴠᴇʟ 1)",
  BUGHUNTER_LEVEL_2: "Bᴜɢ Hᴜɴᴛᴇʀ (Lᴇᴠᴇʟ 2)",
  HYPESQUAD_EVENTS: "HʏᴘᴇSǫᴜᴀᴅ Eᴠᴇɴᴛs",
  HOUSE_BRAVERY: "Hʏᴘᴇsǫᴜᴀᴅ Bʀᴀᴠᴇʀʏ",
  HOUSE_BRILLIANCE: "Hʏᴘᴇsǫᴜᴀᴅ Bʀɪʟʟɪᴀɴᴄᴇ",
  HOUSE_BALANCE: "Hʏᴘᴇsǫᴜᴀᴅ Bᴀʟᴀɴᴄᴇ",
  EARLY_SUPPORTER: "Eᴀʀʟʏ Sᴜᴘᴘᴏʀᴛᴇʀ",
  TEAM_USER: "Tᴇᴀᴍ Usᴇʀ",
  SYSTEM: "Sʏsᴛᴇᴍ",
  VERIFIED_BOT: "Vᴇʀɪғɪᴇᴅ Bᴏᴛ",
  VERIFIED_DEVELOPER: "Vᴇʀɪғɪᴇᴅ Bᴏᴛ Dᴇᴠᴇʟᴏᴘᴇʀ"
};

module.exports = {
  name: "userinfo",
  category: "Info",
  aliases: ["whois"],
  description: "Cʜᴇᴄᴋ Iɴғᴏ Aʙᴏᴜᴛ Yᴏᴜʀsᴇʟғ Oʀ Oᴛʜᴇʀ Mᴇᴍʙᴇʀ.",
  usage: "(member)",
  execute: async (bot, message, args) => {
    let user;
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
      user = message.author;
    }

    const member = message.guild.member(user);
    const userFlags = member.user.flags.toArray();
    const embed = new discord.MessageEmbed()
      .setColor("00FFFF")
      .setThumbnail(user.displayAvatarURL())
      .addField(`${user.tag}`, `${user}`, true)
      .addField("Iᴅ:", `${user.id}`, true)
      .addField("Sᴛᴀᴛᴜs:", `${member.user.presence.status}`, true)
      .addField("Iɴ Sᴇʀᴠᴇʀ", message.guild.name, true)
      .addField(
        "Fʟᴀɢs:",
        ` ${userFlags.length ? userFlags.map(flag => flags[flag]) : "None"}`
      )

      .addField(
        "Jᴏɪɴᴇᴅ Aᴛ:",
        `${moment.utc(user.joinedAt).format("dddd, MMMM Do YYYY")}`,
        true
      )
      .addField(
        "Aᴄᴄᴏᴜɴᴛ Cʀᴇᴀᴛᴇᴅ Oɴ:",
        `${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY")}`,
        true
      )
      .addField(
        "Rᴏʟᴇs:",
        member.roles.cache.map(roles => `${roles}`).join(", "),
        true
      )
      .setFooter(`Requested By: ${message.author.tag}`)
      .setTimestamp();
    message.channel.send({ embed });
  }
};
