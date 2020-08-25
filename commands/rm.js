const { MessageEmbed } = require("discord.js");
const { COLOR } = require("../config.json");
module.exports = {
  name: "rm",
  description: "Rᴇᴍᴏᴠᴇ Tʜᴇ Sᴏɴɢ Fʀᴏᴍ Qᴜᴇᴜᴇ.",
  aliases: "remove",
  category: "Music",
  execute(client, message, args) {
    let embed = new MessageEmbed().setColor(COLOR);
    const { channel } = message.member.voice;
    if (!channel) {
      embed.setAuthor("YOU ARE NOT IN VOICE CHANNEL");
      return message.channe.send(embed);
    }

    const serverQueue = client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("Tʜᴇ Qᴜᴇᴜᴇ Is Eᴍᴘᴛʏ.");
      return message.channel.send(embed);
    }

    if (isNaN(args[0])) {
      embed.setAuthor("Pʟᴇᴀsᴇ Usᴇ Nᴜᴍᴇʀɪᴄ Vᴀʟᴜᴇ Oɴʟᴜ");
      return message.channel.send(embed);
    }

    if (args[0] > serverQueue.songs.length) {
      embed.setAuthor("Uɴᴀʙʟᴇ Tᴏ Fɪɴᴅ Tʜᴇ Sᴏɴɢ.");
      return message.channel.send(embed);
    }

    serverQueue.songs.splice(args[0] - 1, 1);
    embed.setDescription("REMOVED THE SONG FROM QUEUE");
    embed.setThumbnail(client.user.displayAvatarURL());
    return message.channel.send(embed);
  }
};
