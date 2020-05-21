const { MessageEmbed } = require("discord.js")

let embed = new MessageEmbed()
.setColor("RANDOM");


module.exports = {
  name: "pause",
  description: "pause the song",
  execute (client, message, args) {
  const { channel } = message.member.voice;
   
    
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("YOU NEED TO BE IN VOICE CHANNEL :/")
      return message.channel.send(embed);
    }
    
    
    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("There is nothing playing that i could pause")
      return message.channel.send(embed);
    }
    
    if(serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause(true)
      
      embed.setDescription("✅ | Paused The Current Playing Song")
      embed.setThumbnail(client.user.avatarURL())
      return message.channel.send(embed)
  }  
  }
}