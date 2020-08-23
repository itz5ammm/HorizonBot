const { MessageEmbed, Client } = require("discord.js");

module.exports = {
  name: "ping",
  description: "Pɪɴɢɪɴɢ Tʜᴇ Bᴏᴛ",
  execute(bot, client, message) {
    let diff = (Date.now() - start);
    let API = Math.round(bot.ping.toFixed());
    let embed = new MessageEmbed()
      .setTitle("Pᴏɴɢ!")
      .setColor("00FFFF")
      .addField("Lᴀᴛᴇɴᴄʏ", `${diff}ms`, true)
      .addfield("API", `${API}ms`, true)
      .setFooter("Requested By:", `
    return message.channel.send(embed);
  }
};
