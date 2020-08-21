const discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "setnick",
  category: "Moderation",
  aliases: ["setnickname", "nick"],
  description: "Cʜᴀɴɢᴇ Sᴏᴍᴇᴏɴᴇ's Nɪᴄᴋɴᴀᴍᴇ.",
  execute: async (client, message, args) => {
    let perm = message.member.hasPermission("ADMINISTRATOR");
    if (!perm) return message.channel.send("Yᴏᴜ Dᴏɴᴛ Hᴀᴠᴇ Pᴇʀᴍs ᴏ ᴏ Tʜᴀᴛ");

    let user = message.mentions.members.first();
    if (!user) return message.channel.send("Mᴇɴᴛɪᴏɴ Tʜᴇ Usᴇʀ!");

    let name = args.slice(1).join(" ");
    if (!name) return message.channel.send("Mᴇɴᴛɪᴏɴ Tʜᴇ Nᴀᴍᴇ!");

    user.setNickname(name);

    message.channel.send(`${user.user.tag}'s name have changed to ${name}`);
  }
};
