const discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const client = new discord.Client({
  disableEveryone: true
});

module.exports = {
  name: "say",
  category: "Fun",
  description: "Say The Message Through The Bot",
  usage: "say <text>",
  execute: async (bot, message, args) => {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => {});
    let embed = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription(sayMessage);
    message.channel.send(embed);
  }
};
