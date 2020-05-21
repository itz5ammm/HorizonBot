const { MessageEmbed } = require("discord.js")




module.exports = {
  name: "skip",
  description: "Skip the song or shift yourself to next song",
  execute(client, message, args) {
    if(!message.member.hasPermission("ADMINISTRATOR"))
    
    
    
let embed = new MessageEmbed()
.setColor("RANDOM");


    const { channel } = message.member.voice;

       
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("YOU NEED TO BE IN VOICE CHANNEL :/")
      return message.channel.send(embed);
    }
    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("There is nothing playing that i could skip")
      return message.channel.send(embed);
    }

    serverQueue.connection.dispatcher.end();
    embed.setDescription("✔ | Skipping The Song")
    embed.setThumbnail(client.user.displayAvatarURL())
    message.channel.send(embed);
  }
};
