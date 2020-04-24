module.exports = {
  name: "np",
  description: "send the name of on going song",
  execute (client, message, args) {
    
      const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      return message.channel.send("YOU NEED TO BE IN VOICE CHANNEL :/");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("Bot is not playing anything");
    }
    
    message.channel.send(serverQueue.songs[0].title)

    
    
    
  }
}