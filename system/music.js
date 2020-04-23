//I WILL BE BACK AFTER 5 min
const ytdlDiscord = require("ytdl-core-discord");

module.exports = {
  async play(song, message) {
    const queue = message.client.queue.get(message.guild.id)
    
    if(!song) {
      queue.channel.leave();
      message.client.queue.delete(message.guild.id)
      return message.textChannel.send("Music Queue is Ended Now 😌")
    }
    
    try {
      var stream = ytdlDiscord(song.url, {
        filter: "audioonly",
        quality: "highestaudio"
      })
    } catch (error) {
      if(queue) {
        queue.songs.shift()
        module.exports.play(queue.songs[0], message)
      }
      
      if(error.message.includes === "copyright") {
        return message.channel.send("THIS VIDEO CONTAINS COPYRIGHT CONTENT")
      } else {
        console.error(error)
      }
    }
    
    const dispatcher = queue.connection
    .play(stream, {type: "opus"}).on("finish", () => {
      if(queue.loop) {
        let lastsong = queue.songs.shift()
        queue.songs.push(lastsong)
        module.exports.play(queue.songs[0], message)
      } else {
        queue.songs.shift()
        module.exports.play(queue.songs[0], message)
      }
    }).on("error", console.error)
    dispatcher.setVolumeLogarithmic(queue.volume / 100); //VOLUME
    
    
    try {
      var playingMsg = await queue.textChannel.send(`**STARTED PLAYING** - [${song.title}](${song.url})`)
      
    } catch (error) {
      console.error(error)
    }  
    
  }
}