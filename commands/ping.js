//FIRST TEST HANDLER IS WORKING OR NOT
module.exports = {
  name: "ping",
  description: "Pɪɴɢɪɴɢ Tʜᴇ Bᴏᴛ.",
  category: "Utility",
  execute(client, message, args) {
  
let embed = new MessageEmbed()
    .setColor("00FFFF")
    .setDescription(`🎶 Pᴏɴɢ! ${client.ws.ping}ms.`)
    .setFooter(`Requested By: ${message.author.tag}`)
    
return message.channel.send(embed);
  }
};
