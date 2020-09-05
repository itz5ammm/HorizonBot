const Discord = require("discord.js");
const db = require("quick.db");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "setwelcome",
  category: "Moderation",
  usage: "setwelcome <#channel>",
  description: "Set the welcome channel",
  execute: (client, message, args) => {
    let channel = message.mentions.channels.first();

    if (!channel) {
      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescription("Please Mention the channel first");

      message.channel.send(embed);
    }

    //Now we gonna use quick.db

    db.set(`welchannel_${message.guild.id}`, channel.id);

    let embed = new MessageEmbed()
      .setColor("070707")
      .setDescription(`${channel} Is Set As Welcome Channel.`);
    message.channel.send(embed);
  }
};
