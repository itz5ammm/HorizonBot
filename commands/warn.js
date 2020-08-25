const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "warn",
  category: "moderation",
  usage: "warn <@mention> <reason>",
  description: "Wᴀʀɴ Aɴʏᴏɴᴇ Iɴ Tʜᴇ Sᴇʀᴠᴇʀ.",
  execute: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send("Yᴏᴜ Dᴏɴ'ᴛ Hᴀᴠᴇ Pᴇʀᴍs Tᴏ Wᴀʀɴ Sᴏᴍᴇᴏɴᴇ.");
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send("Mᴇɴᴛɪᴏɴ Tʜᴇ Usᴇʀ Yᴏᴜ Wᴀɴᴛ Tᴏ Wᴀʀɴ.");
    }

    if (message.mentions.users.first().bot) {
      return message.channel.send("Yᴏᴜ Cᴀɴ'ᴛ Wᴀʀɴ A Bᴏᴛ.");
    }

    if (message.author.id === user.id) {
      return message.channel.send("Yᴏᴜ Cᴀɴ'ᴛ Wᴀʀɴ Yᴏᴜʀsᴇʟғ.");
    }

    if (user.id === message.guild.owner.id) {
      return message.channel.send("Yᴏᴜ Cᴀɴ'ᴛ Wᴀʀɴ Tʜᴇ Oᴡɴᴇʀ");
    }

    const reason = args.slice(1).join(" ");

    if (!reason) {
      return message.channel.send("Pʟᴇᴀsᴇ Pʀᴏᴠɪᴅᴇ Rᴇᴀsᴏɴ.");
    }

   
    
    if (warnings === null) {
      db.set(`warnings_${message.guild.id}_${user.id}`, 1);
      user.send(`Wᴀʀɴᴇᴅ Iɴ **${message.guild.name}** Fᴏʀ ${reason}`);

      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescription(
          `***Wᴀʀɴᴇᴅ ${message.mentions.users.first().username}*** | ${reason}`
        );
      message.channel.send(embed);
    } else if (warnings !== null) {
      db.add(`warnings_${message.guild.id}_${user.id}`, 1);
      user.send(`Wᴀʀʀɴᴇᴅ Iɴ **${message.guild.name}** | ${reason}`);

      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescription(
          `<a:verifwhite:737764673046315191>***${
          message.mentions.users.first().username
          } Wᴀs Wᴀʀɴᴇᴅ*** | ${reason}`
        );
      message.channel.send(embed);
    }
  }
};
