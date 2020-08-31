const Discord = require('discord.js');
const { OWNER_ID } = require('../../config.json');

exports.help = {
  name: "reboot",
  description: "This will reboot the bot instance.",
  usage: "reboot",
execute: async (client, message, args) => {
  
  OWNER_ID.forEach(async function(owner) {
    if(message.author.id !== owner) return;

    const reboot = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription("**Rebooting...**").then(m => {
        setTimeout(() => {
            m.edit("**Rebooting...**").then(ms => {
                setTimeout(() => {
                    ms.edit("**Done.**")
                }, 1000)
            })
        }, 1000);

message.channel.send(reboot);
    })
    
    .then(message => process.exit())
    .then(() => client.login(process.env.AKARI))
  });
 }
}