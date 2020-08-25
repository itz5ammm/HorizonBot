const discord = require("discord.js");

module.exports = {
  name: "ban",
  category: "Moderation",
  aliases: ["banuser"],
  description: "Bᴀɴ A Usᴇʀ Fʀᴏᴍ Tʜᴇ Usᴇʀ",
  usage: "<user> (reason)",
  execute: async (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send("Yᴏᴜ Dᴏɴ'ᴛ Hᴀᴠᴇ Pᴇʀᴍs Tᴏ Bᴀɴ.");


    let user = message.mentions.members.first();
    if (!user) return message.channel.send("Mᴇɴᴛɪᴏɴ Tʜᴇ Usᴇʀ.");

    let reason = args.slice(1).join(" ");
    if (!reason) reason = "Nᴏ Rᴇᴀsᴏɴ Pʀᴏᴠɪᴅᴇᴅ.";

    if (user.hasPermission("BAN_MEMBERS"))
      return message.channel.send("Yᴏᴜ Dᴏɴ'ᴛ Hᴀᴠᴇ Pᴇʀᴍs Tᴏ Bᴀɴ Mᴇᴍʙᴇʀs.");
   
    let logembed = new discord.MessageEmbed()
      .setColor("00FFFF")
      .setTitle(`Usᴇʀ Bᴀɴɴᴇᴅ | ${user.user.tag}`)
      .addField("Sᴛᴀғғ", `${message.author}`)
      .addField("Rᴇᴀsᴏɴ", `${reason}`);

    try {
      user.send(
        `Bᴀɴɴᴇᴅ Fʀᴏᴍ ${message.guild.name} Bʏ ${message.author.tag} Fᴏʀ ${reason}`
      );
    } catch (err) {
      console.log(err);
    }

    await user.ban();
    logchannel.send(logembed);
    message.channel.send(`${user} Wᴀs Bᴀɴɴᴇᴅ.`);
  }
};
