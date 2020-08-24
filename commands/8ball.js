const discord = require("discord.js");

module.exports = {
  name: "8ball",
  category: "Fun",
  aliases: ["eightball"],
  description: "Asᴋ Mᴇ A Qᴜᴇsᴛɪᴏɴ I'ʟʟ Aɴsᴡᴇʀ Iᴛ.",
  usage: "<question>",
  execute: async (client, message, args) => {
    let replies = ["Yes", "No", "Maybe", "Ask Someone Else", "I Don't Know"];

    let question = args.slice(0).join(" ");
    const embed1 = new discord.MessageEmbed()
      .setColor("00FFFF")
      .setDescription("Asᴋ Mᴇ Tʜᴇ Qᴜᴇsᴛɪᴏɴ.");
    if (!question) return message.channel.send(embed1);

    let result = Math.floor(Math.random() * replies.length);

    let embed = new discord.MessageEmbed()
      .setColor("#00FFFF")
      .addField("Yᴏᴜʀ Qᴜᴇsᴛɪᴏɴ", `${question}`)
      .addField("Mʏ Aɴsᴡᴇʀ", `${replies[result]}`);
    message.channel.send(embed);
  }
};
