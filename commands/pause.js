const { MessageEmbed } = require("discord.js");

const { COLOR } = require("../config.json");

module.exports = {
  name: "pause",
  description: "Pᴀᴜsᴇ Tʜᴇ Cᴜʀʀᴇɴᴛ Pʟᴀʏɪɴɢ Sᴏɴɢ.",
  category: "Music",
  execute(client, message, args) {
    const { channel } = message.member.voice;
    let embed = new MessageEmbed().setColor(COLOR);

    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("YOU NEED TO BE IN VOICE CHANNEL");
      return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("Tʜᴇʀᴇ Is Cᴜʀʀᴇɴᴛʟʏ Nᴏᴛʜɪɴɢ Pʟᴀʏɪɴɢ.");
      return message.channel.send(embed);
    }

    if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause(true);

      embed.setDescription("✅ | Pᴀᴜsᴇᴅ Tʜᴇ Pʟᴀʏᴇʀ.");
      embed.setThumbnail(client.user.displayAvatarURL());
      return message.channel.send(embed);
    }
  }
};
