const { MessageEmbed } = require("discord.js");

const { COLOR } = require("../config.json");

module.exports = {
  name: "resume",
  description: "Rᴇsᴜᴍᴇ Tʜᴇ Pʟᴀʏᴇʀ.",
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
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      embed.setAuthor("✅ | Rᴇsᴜᴍɪɴɢ Nᴏᴡ.");
      embed.setThumbnail(client.user.displayAvatarURL());
      return message.channel.send(embed);
    }
    embed.setDescription("Tʜᴇʀᴇ Is Nᴏᴛʜɪɴɢ Tᴏ Pʟᴀʏ.");
    message.channel.send(embed);
  }
};
