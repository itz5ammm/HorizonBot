const { MessageEmbed } = require("discord.js");
const { COLOR } = require("../config.json");

module.exports = {
  name: "shuffle",
  description: "Shuffle your queue",
  execute(client, message, args) {
    let embed = new MessageEmbed().setColor(COLOR);

    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("YOU NEED TO BE IN VOICE CHANNEL :/");
      return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("There is nothing playing that i could loop");
      return message.channel.send(embed);
    }

    
    shuffleQueue(serverQueue)
    let title = [];

    serverQueue.songs.slice(0, 10).forEach(obj => {
      title.push(obj.title)
      
    });
    
    
    var num = 10;
    
    if(title.length < 10) num = title.length;
    embed.setTitle("NEW QUEUE")
    embed.setDescription(`This is a new shuffled queue`)
  var i;
    for(i = 0; i < num; i++) {
      embed.addField(`SONG ${i + 1}`, title[i])
    }
    message.channel.send(embed)
  }
}; //NOT WORKING FOR NOW


function shuffleQueue(queue) {
  for (let i = queue.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [queue[i], queue[j]] = [queue[j], queue[i]];
  }
}
