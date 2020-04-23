const { Util } = require("discord.js")
const { YOUTUBE_API_KEY } = require("../config.json")
const ytdl = require("ytdl-core")
const YoutubeAPI = require("simple-youtube-api")
const youtube = new YoutubeAPI(YOUTUBE_API_KEY)


module.exports = {
  name: "play",
  description: "PLAY THE SOFTNESS OF THE SOUND",
  async execute(client, message, args) {
    //FIRST OF ALL WE WILL ADD ERROR MESSAGE AND PERMISSION MESSSAGE
    if(!args.length) { //IF AUTHOR DIDENT GIVE URL OR NAME
      return message.channel.send("WRONG SYNTAX : Type `play <URL> or text`")
    }
    
    const { channel } = message.member.voice;
    if(!channel) { //IF AUTHOR IS NOT IN VOICE CHANNEL
      return message.channel.send("YOU NEED TO BE IN VOICE CHANNEL :/")
    }
    
    //WE WILL ADD PERMS ERROR LATER :(
    
    const targetsong = args.join(" ") 
     const videoPattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
    const playlistPattern = /^.*(youtu.be\/|list=)([^#\&\?]*).*/gi;
    const urlcheck = videoPattern.test(args[0])
    
    if(!videoPattern.test(args[0]) && !playlistPattern.test(args[0])) {
      return message.channel.send("PLAYLIST CANNOT BE PLAYED")
    }
    
    const serverQueue = message.client.queue.get(message.guild.id);
    
    const queueBase = {
      textChannel : message.channel,
      channel,
      connection: null,
      songs: [],
      loop: false,
      volume: 100,
      playing: true
    }
    
    let songData = null
    let song = null
    
    if(urlcheck) {
      try {
       songData = await ytdl.getInfo(args[0]);
        song = {
          title: songData.title,
          url: songData.video_url,
          duration: songData.length_seconds
        }
        
      } catch (error) {
        if(message.include === "copyright") {
          return message.reply("THERE IS COPYRIGHT CONTENT IN VIDEO -_-")
          .catch(console.error)
        } else {
          console.error(error);
        }
        
      }
    } else {
      
    }
    
    
    
  }}