const { MessageEmbed } = require("discord.js");

const { COLOR } = require("../config.json");

module.exports = {
  name: "queue",
  description: "Gᴇᴛ Nᴀᴍᴇs Oғ Aʟʟ Sᴏɴɢs Iɴ Qᴜᴇᴜᴇ.",
  alaises: "q",
  category: "Music",
  execute: (client, message, args) => {
    let embed = new MessageEmbed().setColor(COLOR);
    const { channel } = message.member.voice;

    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("YOU NEED TO BE IN VOICE CHANNEL.");
      return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("Tʜᴇʀᴇ Is Nᴏᴛʜɪɴɢ Iɴ Qᴜᴇᴜᴇ.");
      return message.channel.send(embed);
    }

    embed.setDescription(
      `${serverQueue.songs
        .map((song, index) => index + 1 + ". " + song.title)
        .join("\n\n")}`,
      { split: true }
    );
    embed.setThumbnail(client.user.displayAvatarURL());

    message.channel.send(embed);
  }
};
