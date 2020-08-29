const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  category: "Info",
  description: "Pɪɴɢɪɴɢ Tʜᴇ Bᴏᴛ",
  execute(client, message) {
    let embed = new MessageEmbed()
      .setTitle("Pᴏɴɢ!")
      .setColor("00FFFF")
      .setDescription(`Lᴀᴛᴇɴᴄʏ: ${client.ws.ping}ms.`);
    return message.channel.send(embed);
  }
};
