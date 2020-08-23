//FIRST TEST HANDLER IS WORKING OR NOT
module.exports = {
  name: "ping",
  description: "Pinging the bot",
  execute(client, message) {
    let diff = (Date.now() - start);
    let API = Math.round((bot.ping).toFixed())
    let embed = new MessageEmbed()
    .setTitle(`Pᴏɴɢ!`)
    .setColor(`00FFFF`)
    .addField("Lᴀᴛᴇɴᴄʏ", `${diff}ms`, true)
    .addField("API", `${API}ms`, true)
    .setFooter("Rᴇǫᴜᴇsᴇᴅ Bʏ: `${message.author.tag}
  }
};
