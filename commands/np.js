const { MessageEmbed } = require("discord.js");

const { COLOR } = require("../config.json");

module.exports = {
  name: "np",
  description: "Gᴇᴛ Tʜᴇ Nᴀᴍᴇ Oғ Tʜᴇ Cᴜʀʀᴇɴᴛ Sᴏɴɢ.",
  aliases: "nowplaying",
  category: "Music",
  execute(client, message, args) {
    let embed = new MessageEmbed().setColor(COLOR);

    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("YOU NEED TO BE IN VOICE CHANNEL");
      return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("Tᴇʀᴇ Is Cᴜʀʀᴇɴᴛʟʏ Nᴏᴛʜɪɴɢ Pʟᴀʏɪɴɢ.");
      return message.channel.send(embed);
    }

    embed
      .setDescription(`**NOW PLAYING** - ${serverQueue.songs[0].title}`)
      .setThumbnail(serverQueue.songs[0].thumbnail);
    message.channel.send(embed);
  }
};
