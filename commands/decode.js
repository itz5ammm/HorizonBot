const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "decode",
  category: "Fun",
  description: "Decode Anything",
  execute: async (client, message, args) => {
    if (!args[0]) {
      let embed = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription("What you want me to decode?");

      message.channel.send(embed);
    }
    let Decodemsg = args.slice(0).join(" ");

    let decoded = "";
    let arr = Decodemsg.match(/.{1,8}/g);
    for (var i = 0; i < arr.length; i++) {
      decoded += String.fromCharCode(parseInt(arr[i], 2).toString(10));
    }

    const ok = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Dᴇᴄᴏᴅᴇᴅ")
      .setDescription(decoded);
    message.delete().catch();
    message.channel.send(ok);
  }
};
