const { MessageEmbed } = require("discord.js");

const { COLOR } = require("../config.json");
module.exports = {
  name: "volume",
  category: "Music",
  description: "Mᴀɴᴀɢᴇ Tʜᴇ Vᴏʟᴜᴍᴇ.",
  execute(client, message, args) {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send("Yᴏᴜ Aʀᴇ Nᴏᴛ Aʟʟᴏᴡᴇᴅ Tᴏ Cʜᴀɴɢᴇ Tʜᴇ Vᴏʟᴜᴍᴇ.");
    }

    let embed = new MessageEmbed().setColor(COLOR);

    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("YOU NEED TO BE IN VOICE CHANNEL");
      return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("Bᴏᴛ Is Nᴏᴛ Pʟᴀʏɪɴɢ Aɴʏᴛʜɪɴɢ.");
      return message.channel.send(embed);
    }

    if (!args[0]) {
      embed.setAuthor(`Tʜᴇ Cᴜʀʀᴇɴᴛ Vᴏʟᴜᴍᴇ Is ${serverQueue.volume}`);
      return message.channel.send(embed);
    }

    if (isNaN(args[0])) {
      embed.setAuthor("Pʟᴇᴀsᴇ Usᴇ Nᴜᴍᴇʀɪᴄᴀʟ Vᴀʟᴜᴇ Oɴʟʏ.");
      return message.channel.send(embed);
    }

    if (args[0] > 100) {
      embed.setAuthor("Yᴏᴜ Cᴀɴᴛ Iɴᴄʀᴇᴀsᴇ Vᴏʟᴜᴍᴇ Mᴏʀᴇ Tʜᴀɴ 100");
      return message.channel.send(embed);
    }

    serverQueue.volume = args[0];
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);
    embed.setDescription(`Sᴇᴛ Vᴏʟᴜᴍᴇ Tᴏ ${args[0]}`);
    embed.setThumbnail(client.user.displayAvatarURL());
    message.channel.send(embed);
  }
};
