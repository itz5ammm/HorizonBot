const discord = require("discord.js");

module.exports = {
  name: "kick",
  category: "Moderation",
  aliases: ["kickuser"],
  description: "Kɪᴄᴋ A Usᴇʀ Fʀᴏᴍ Tʜᴇ Sᴇʀᴠᴇʀ.",
  usage: "<user> (reason)",
  execute: async (client, message, args) => {
    if (!message.member.hasPermission("KICK_MEMBERS"))
      return message.channel.send("Yᴏᴜ Dᴏɴ'ᴛ Hᴀᴠᴇ Pᴇʀᴍs Tᴏ Usᴇ Tʜɪs.");

    let logchannel = message.guild.channels.cache.find(
      ch => ch.name === "horizon-modlogs"
    );
    if (!logchannel) return message.channel.send("Cᴀɴ'ᴛ Fɪɴᴅ Tʜᴇ Lᴏɢ Cʜᴀɴɴᴇʟ.");

    let user = message.mentions.members.first();
    if (!user) return message.channel.send("Mᴇɴᴛɪᴏɴ Tʜᴇ Usᴇʀ.");

    let reason = args.slice(1).join(" ");
    if (!reason) reason = "Pʀᴏᴠɪᴅᴇ Tʜᴇ Rᴇᴀsᴏɴ.";

    if (user.hasPermission("KICK_MEMBERS"))
      return message.channel.send(
        "Yᴏᴜ Cᴀɴᴛ Kɪᴄᴋ Sᴏᴍᴇᴏɴᴇ Wʜᴏ Hᴀs Tʜᴇ Sᴀᴍᴇ/Hɪɢʜᴇʀ Pᴇʀᴍs."
      );
    let logembed = new discord.MessageEmbed()
      .setColor("00FFFF")
      .setTitle(`Usᴇʀ Kɪᴄᴋᴇᴅ | ${user.user.tag}`)
      .addField("Sᴛᴀғғ", `${message.author}`)
      .addField("Rᴇᴀsᴏɴ", `${reason}`);

    try {
      user.send(
        `Yᴏᴜ Hᴀᴠᴇ Bᴇᴇɴ Wᴀʀɴᴇᴅ Iɴ ${message.guild.name} Bʏ ${message.author} Fᴏʀ ${reason}.`
      );
    } catch (err) {
      console.log(err);
    }

    await user.kick();
    logchannel.send(logembed);
    message.channel.send(`${user} Wᴀs Kɪᴄᴋᴇᴅ.`);
  }
};
