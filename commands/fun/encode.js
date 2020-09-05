const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "encode",
  category: "Fun",
  description: "Encode Stuff.",
  execute: async (client, message, args) => {
    if (!args[0]) return message.channel.send("What you want me to encode?");

    let Encodemsg = args.slice(0).join(" ");

    let encoded = "";
    for (var i = 0; i < Encodemsg.length; i++) {
      let bin = Encodemsg[i].charCodeAt().toString(2);
      encoded += Array(8 - bin.length + 1).join("0") + bin;
    }

    const boomer = new Discord.MessageEmbed()
      .setTitle("Eɴᴄᴏᴅᴇᴅ")
      .setColor("RANDOM")
      .setDescription(encoded);

    message.delete().catch();
    message.channel.send(boomer);
  }
};
