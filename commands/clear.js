//THIS IS THE CODE FOR THE COMMAND ONLY 
  
    const messageArray = message.content.split(' '); 
const args = messageArray.slice(1); 
   const { MessageEmbed } = require("discord.js")

module.exports = {
name: "clear",
category: "Moderation",
description: "Clears Messages.",
usage: "clear <amount>",
execute: async (client, message, args) => {
       const deleteAmount = parseInt(args[0], 10);

    if (!message.member.permissions.has("MANAGE_MESSAGES")) { let embed = new MessageEmbed()
.setColor("070707")
.setDescription('Lack of Perms!'); 
    
message.channel.send(embed);
}
  {  let deleteAmount; 

   { if (isNaN(args[0]) || parseInt(args[0]) <= 0) { 
let embed = new MessageEmbed()
.setColor("070707")
.setDescription('Please put a number only!') } 

message.channel.send(embed);
}

    if (parseInt(args[0]) > 100) { 
        let embed = new MessageEmbed()
.setColor("070707")
.setDescription('You can only delete 100 messages at a time!') 
 message.channel.send(embed);
   } else { 
        deleteAmount = parseInt(args[0]); 
    } 

    message.channel.bulkDelete(deleteAmount + 1, true); {
    let embed = new MessageEmbed()
.setColor("070707")
.setDescription(`**Successfully** Deleted ***${deleteAmount}*** Messages.`)
message.channel.send(embed);
      }
   }
  }
  }