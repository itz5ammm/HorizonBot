const { MessageEmbed } = require("discord.js");
const { COLOR } = require("../config.json");

const discord = require("discord.js");

module.exports = {
  name: "stop",
  description: "Sᴛᴏᴘs Tʜᴇ Pʟᴀʏᴇʀ.",
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
      embed.setAuthor("Tʜᴇʀᴇ ɪs Nᴏᴛʜɪɴɢ Pʟᴀʏɪɴɢ.");
      return message.channel.send(embed);
    }

    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
  }
};
