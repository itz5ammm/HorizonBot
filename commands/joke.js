const { MessageEmbed } = require("discord.js");
let giveMeAJoke = require("give-me-a-joke");

module.exports = {
  name: "joke",
  Description: "Get A Random DadJoke",
  category: "Fun",
  execute: async (bot, message, args) => {
    giveMeAJoke.getRandomDadJoke(function(joke) {
      let embed = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription(joke);
   message.channel.send(embed);
    });
  }
};
