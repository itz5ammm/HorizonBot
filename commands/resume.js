const { MessageEmbed } = require("discord.js");

const { COLOR } = require("../config.json");

module.exports = {
  name: "resume",
  description: "Resume The Current Playing Song.",
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
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      embed.setAuthor("✅ | Resuming Now.");
      embed.setThumbnail(client.user.displayAvatarURL());
      return message.channel.send(embed);
    }
    embed.setDescription("There Is Nothing To Play.");
    message.channel.send(embed);
  }
};
