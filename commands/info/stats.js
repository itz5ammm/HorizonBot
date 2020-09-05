const { MessageEmbed } = require("discord.js");
const { COLOR } = require("../config.json");
const ms = require("ms");

module.exports = {
  name: "stats",
  description: "Gᴇᴛ Tʜᴇ Dᴇᴛᴀɪʟᴇᴅ Iɴғᴏʀᴍᴀᴛɪᴏɴ Oғ Bᴏᴛ.",
  category: "Utility",
  execute(client, message, args) {
    console.log(client.queue.size);
    let embed = new MessageEmbed()
      .setColor(COLOR)
      .setThumbnail(client.user.displayAvatarURL())
      .setAuthor(`Sᴛᴀᴛs & Iɴғᴏ`, client.user.displayAvatarURL())
      .setDescription(
        `**${client.user.username}** Mᴜʟᴛɪ-Pᴜʀᴘᴏsᴇ Bᴏᴛ Mᴀᴅᴇ Bʏ ᴺᴼᵀ•丂ᴀᴍ#2385.`
      )
      .addField("Sᴇʀᴠᴇʀs", client.guilds.cache.size, true)
      .addField("Pʀᴇsᴄᴇɴᴄᴇ", client.user.presence.activities[0].name, true)
      .addField("Iᴅ", client.user.id, true)
      .addField("Uᴘᴛɪᴍᴇ", ms(client.uptime), true)
      .addField("Sᴛᴀᴛᴜs", client.user.presence.status, true)
      .addField("Tᴏᴛᴀʟ Usᴇʀs", client.users.cache.size, true)
      .addField("Nᴏ. Oғ Gᴜɪʟᴅ Iɴ Bᴏᴛ Is Pʟᴀʏɪɴɢ", client.queue.size)
      .addField("Bᴏᴛ Cʀᴇᴀᴛᴇᴅ Oɴ", client.user.createdAt)
      .setFooter(`Requested By: ${message.author.tag}`)
      .setTimestamp();
    console.log(client.user.presence);
    message.channel.send(embed);
  }
};
