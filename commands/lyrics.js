const { MessageEmbed } = require("discord.js")
const Genius = new (require("genius-lyrics")).Client("ZD_lLHBwRlRRfQvVLAnHKHksDHQv9W1wm1ZAByPaYo1o2NuAw6v9USBUI1vEssjq");
const { COLOR } = require("../config.json");

module.exports = {
  name: "lyrics",
  description: "Get lyrics of song :v",
  async execute (client, message, args) {
    let embed = new MessageEmbed()
    .set
    
     try {
          const songs = await Genius.tracks.search(args.join(" "));
          const lyrics = await songs[0].lyrics();
          console.log(lyrics);
     } catch(e) {
          console.log(e);
     }
    
    
  }
  
}