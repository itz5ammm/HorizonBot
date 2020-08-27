const discord = require("discord.js");
const Disord = require("discord.js");
const ms = require("ms");

module.exports = {
  name: "hack",
  category: "Fun",
  aliases: ["hacksomeone"],
  description: "The totally real hack to hack users",
  usage: "<to hack>",
  execute: async (client, message, args) => {
    const embed1 = new discord.MessageEmbed()
      .setColor("RED")
      .setDescription("Specify who do you want to hack");
    if (!args[0]) return message.channel.send(embed1);

    let msg = embed = new MessageEmbed().setDescription(
      `Beginning hacking ${args[0]}`
    );
    message.channel.send(embed);

    let time1 = "3s";
    setTimeout(function() {
      msg.edit(`Searching for ${args[0]}'s email...`);
    }, ms(time1));

    let time2 = "6s";
    setTimeout(function() {
      msg.edit(`Email found, email is ${args[0]}@gmail.com`);
    }, ms(time2));

    let time3 = "9s";
    setTimeout(function() {
      msg.edit(`Searching for ${args[0]}'s password...`);
    }, ms(time3));

    let time4 = "12s";
    setTimeout(function() {
      msg.edit(`Password found, password is \`\`\**************\`\`\.`);
    }, ms(time4));

    let time5 = "15s";
    setTimeout(function() {
      msg.edit(`Deleting all information about ${args[0]}.`);
    }, ms(time5));

    let time6 = "18s";
    setTimeout(function() {
      msg.edit(
        `Finished hacking ${args[0]} with the totally real software hack.`
      );
    }, ms(time6));
  }
};
