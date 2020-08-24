const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "embed",
  category: "Fun",
  description: "Get The Message In Embed",
  usage: "embed | <Test>",
  execute: async (bot, message, args) => {
    if (message.author.id !== "606305489772609558") return;

    const cmd = args.join(" ").split(" | ");

    let embed = new MessageEmbed()
      .setTitle(cmd[0])
      .setColor("00FFFF")
      .setDescription(cmd[2])
      .setTimestamp();

    message.channel.send(embed);

    message.delete();
  }
};
