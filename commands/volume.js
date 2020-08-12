const { MessageEmbed } = require("discord.js");

const { COLOR } = require("../config.json");
module.exports = {
  name: "volume",
  description: "Manage The Volume.",
  execute(client, message, args) {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("You're Not Allowed To Change The Volume.");
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
      embed.setAuthor("Bot Is Not Playing Anything");
      return message.channel.send(embed);
    }

    if (!args[0]) {
      embed.setAuthor(`The Current Volume is ${serverQueue.volume}`);
      return message.channel.send(embed);
    }

    if (isNaN(args[0])) {
      embed.setAuthor("Please Use Numerical Values Only");
      return message.channel.send(embed);
    }

    if (args[0] > 100) {
      embed.setAuthor("You Can't Increase Volume More Than 100.");
      return message.channel.send(embed);
    }

    serverQueue.volume = args[0];
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);
    embed.setDescription(`Seted Volume to ${args[0]}`);
    embed.setThumbnail(client.user.displayAvatarURL());
    message.channel.send(embed);
  }
};
