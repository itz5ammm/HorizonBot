module.exports = {
  name: "play",
  description: "PLAY THE SOFTNESS OF THE SOUND",
  execute(client, message, args) {
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
const url = args[0];
    const urlcheck = videoPattern.test()
    
  }
}