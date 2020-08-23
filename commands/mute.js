const discord = require("discord.js");

module.exports = {
  name: "mute",
  category: "Moderation",
  aliases: ["muteuser"],
  description: "Mᴜᴛᴇ A Usᴇʀ.",
  usage: "<user> (reason)",
  execute: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message.channel.send(
        "Yᴏᴜ Nᴇᴇᴅ Mᴀɴᴀɢᴇ Rᴏʟᴇ Pᴇʀᴍɪssɪᴏɴ Tᴏ Usᴇ Tʜɪs."
      );

    let logchannel = message.guild.channels.cache.find(
      ch => ch.name === "horizon-modlogs"
    );
    if (!logchannel)
      return message.channel.send(
        "Cᴀɴ'ᴛ Fɪɴᴅ Tʜᴇ Lᴏɢ Cʜᴀɴɴᴇʟ Mᴀᴋᴇ Sᴜʀᴇ Tʜᴇʀᴇ ɪs A Cʜᴀɴɴᴇʟ Nᴀᴍᴇᴅ `horizon-modlogs`."
      );

    let role = message.guild.roles.cache.find(rl => rl.name === "Muted");
    if (!role) return message.channel.send("Cᴀɴ'ᴛ Fɪɴᴅ Tʜᴇ Mᴜᴛᴇᴅ Rᴏʟᴇ.");
    let user = message.mentions.members.first();
    if (!user) return message.channel.send("Mᴇɴᴛɪᴏɴ Tʜᴇ Usᴇʀ.");

    let reason = args.slice(1).join(" ");
    if (!reason) reason = "Nᴏ Rᴇᴀsᴏɴ Pʀᴏᴠɪᴅᴇᴅ";

    if (user.hasPermission("MANAGE_ROLES"))
      return message.channel.send(
        "Yᴏᴜ Cᴀɴ'ᴛ Mᴜᴛᴇ Sᴏᴍᴇᴏɴᴇ Wɪᴛʜ Sᴀᴍᴇ Oʀ Hɪɢʜᴇʀ Pᴇʀᴍs."
      );
    let logembed = new discord.MessageEmbed()
      .setColor("00FFFF")
      .setTitle(`Usᴇʀ Mᴜᴛᴇᴅ | ${user.user.tag}`)
      .addField("Sᴛᴀғғ", `${message.author}`)
      .addField("Rᴇᴀsᴏɴ", `${reason}`);

    try {
      user.send(
        `Yᴏᴜ Hᴀᴠᴇ Bᴇᴇɴ Mᴜᴛᴇᴅ Iɴ ${message.guild.name} Bʏ ${message.author.tag} Fᴏʀ ${reason}`
      );
    } catch (err) {
      console.log(err);
    }

    await user.roles.add(role);
    logchannel.send(logembed);
    message.channel.send(`${user} Is Mᴜᴛᴇᴅ.`);
  }
};
