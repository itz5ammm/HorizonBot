const { MessageEmbed } = require("discord.js")
const moment = require("moment")



module.exports = {
  name: "stats",
  description: "Get the detailed information of bot",
  execute(client, message, args) {
    
    let embed = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`STATS AND INFORMATION`, client.user.displayAvatarURL())
    .setDescription(`My name is **${client.user.username}** and My work is to play Music`)
    .addField("SERVERS", client.guilds.cache.size, true)
    .addField("ID", client.user.id)
    .addField("PRESENCE", client.user.presence.name)
    .addField("UPTIME", client.uptime, true);
    
    message.channel.send(embed)
  }
};
