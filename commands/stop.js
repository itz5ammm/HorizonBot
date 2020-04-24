const discord = require("discord.js");

module.exports = {
  name: "stop",
  description: "Stop the music",
  execute(client, message, args) {
    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      return message.channel.send("YOU NEED TO BE IN VOICE CHANNEL :/");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("There is nothing playing that i could stop");
    }

    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();

    serverQueue.textChannel.send("**Stoped the song form playing music**");
  }
};
