const { MessageEmbed } = require("discord.js")
const { readdirSync } = require("fs")

module.exports = {
  name: "help",
  description: "Get all commands",
  execute (client, message, args) {
    
    
let embed = new MessageEmbed()
.setAuthor("HELP SECTION", client.user.avatarURL())
.setColor("RANDOM");
    
let command = readdirSync("./commands")    

console.log(command)
    
    
    
    
    
    
    
    
    
    
    
    
  }
}