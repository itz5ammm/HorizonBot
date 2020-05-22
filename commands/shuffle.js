const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../config.json")

module.exports = {
  name: "shuffle",
  description: "Shuffle your queue",
  execute (client, message, args) {
    
    let embed = new MessageEmbed()
    .setColor(COLOR)
    
   const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("YOU NEED TO BE IN VOICE CHANNEL :/")
      return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("There is nothing playing that i could loop")
      return message.channel.send(embed);
    }
    
    shuffleQueue()
    
    
    
  }
}