const Genius = new (require("genius-lyrics"))("ApavK7sxIw4WfaTNVe1g9Hc8civ8WqGW0NWx_akrti6Bcg3Nc7ILibv9LoVDoT0-");

module.exports = {
  name: "lyrics", 
  description: "Get lyrics of Song",
  execute (client, message, args) {
    
     const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      return message.channel.send("YOU NEED TO BE IN VOICE CHANNEL :/");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("There is nothing that bot is playing");
    }
    
    
    //NOw we gonna see on playing song
  Genius.tracks.search(serverQueue.songs[0].title)
.then(results => {
    const song = results[0];
    song.lyrics()
    .then(lyrics => {
      
      
      if(lyrics.length > 2000) {
          message.channel.send(lyrics.slice(0, 2000))
      }
      
      
        message.channel.send(lyrics)
    })
}).catch(err => message.channel.send("Unable to find lyrics"));
    
    
  }
}