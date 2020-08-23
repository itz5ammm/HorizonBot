const discord = require("discord.js");

const { Embed } = require("discord.js");

module.exports = {
  name: "warn",
  category: "Moderation",
  aliases: ["warnuser"],
  description: "Wᴀʀɴ A Mᴇᴍʙᴇʀ Iɴ Sᴇʀᴠᴇʀ",
  usage: "<user> (reason)",
  execute: async (client, message, args) => {
    let perm = message.member.hasPermission("MANAGE_MESSAGES");
    if (!perm) return message.channel.send("Yᴏᴜ Dᴏɴ'ᴛ Hᴀᴠᴇ Pᴇʀᴍ Tᴏ Usᴇ Tʜɪs.");

    let logchannel = message.guild.channels.cache.find(
      ch => ch.name === "horizon-modlogs"
    );
    if (!logchannel)
      return message.channel.send("Cᴏᴜʟᴅɴᴛ Fɪɴᴅ Tʜᴇ Lᴏɢ Cʜᴀɴɴᴇʟ.");

    let user = message.mentions.members.first();
    if (!user) return message.channel.send("Mᴇɴᴛɪᴏɴ Tʜᴇ Usᴇʀ.");

    let reason = args.slice(1).join(" ");
    if (!reason) reason = "Not specifed";

    let logembed = new discord.MessageEmbed()
      .setColor("00FFFF")
      .setTitle(`Usᴇʀ Wᴀʀɴᴇᴅ | ${user.user.tag}`)
      .addField("Sᴛᴀғғ", `${message.author.tag}`)
      .addField("Rᴇᴀsᴏɴ", `${reason}`);

    try {
      user.send(
        `Yᴏᴜ Hᴀᴠᴇ Bᴇᴇɴ Wᴀʀɴᴇᴅ Iɴ ${message.guild.name} Bʏ ${message.author.tag} Fᴏʀ ${reason}`
      );
    } catch (err) {
      console.log(err);
    }
    message.channel.send(`${user} Hᴀs Bᴇᴇɴ Sᴜᴄᴄᴇssғᴜʟʟʏ Wᴀʀɴᴇᴅ.`);
    logchannel.send(logembed);
  }
};
