const { MessageEmbed } = require("discord.js");
const { COLOR } = require("../config.json");
const ms = require("ms");

module.exports = {
  name: "stats",
  description: "Get The Detailed Information Of Bot.",
  execute(client, message, args) {
    console.log(client.queue.size);
    let embed = new MessageEmbed()
      .setColor(COLOR)
      .setThumbnail(client.user.displayAvatarURL())
      .setAuthor(`STATS & INFO`, client.user.displayAvatarURL())
      .setDescription(
        `My Name Is **${client.user.username}** And My Work Is To Play Music.`
      )
      .addField("SERVERS", client.guilds.cache.size, true)
      .addField("PRESENCE", client.user.presence.activities[0].name, true)
      .addField("ID", client.user.id, true)
      .addField("UPTIME", ms(client.uptime), true)
      .addField("STATUS", client.user.presence.status, true)
      .addField("TOTAL MEMBERS", client.users.cache.size, true)
      .addField("NO. OF GUILD IN BOT IS PLAYING", client.queue.size);
    console.log(client.user.presence);
    message.channel.send(embed);
  }
};
