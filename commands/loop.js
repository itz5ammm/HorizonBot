const { MessageEmbed } = require("discord.js");
const { COLOR } = require("../config.json");

module.exports = {
  name: "loop",
  description: "Lᴏᴏᴘ Yᴏᴜʀ Qᴜᴇᴜᴇ.",
  category: "Music",
  execute(client, message, args) {
    let embed = new MessageEmbed().setColor(COLOR);

    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("YOU NEED TO BE IN VOICE CHANNEL");
      return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("Tʜᴇʀᴇ Is Cᴜʀʀᴇɴᴛʟʏ Nᴏᴛʜɪɴɢ Pʟᴀʏɪɴɢ.");
      return message.channel.send(embed);
    }

    //OOOOF
    serverQueue.loop = !serverQueue.loop;

    embed.setDescription(
      `Loop is now **${serverQueue.loop ? "Eɴᴀʙʟᴇᴅ" : "Dɪsᴀʙʟᴇᴅ"}**`
    );
    embed.setThumbnail(client.user.displayAvatarURL());
    message.channel.send(embed);
  }
};
