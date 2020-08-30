const Discord = require("discord.js");
const client = new Discord.Client();
const snekfetch = require("snekfetch");

module.exports = {
  name: "poke",
  category: "Action",
  description: "Poke A User.",
  execute: async (client, message, args) => {
    if (message.mentions.users.size < 1)
      return message.channel.send("you can't poke nobody");
    let user = message.guild.member(message.mentions.users.first());
    message.channel.send(
      `${user} You got a poke from ${message.author.username} ❤`,
      {
        embed: {
          image: {
            url: "https://i.imgur.c1om/XMuJ7K8.gif"
          }
        }
      }
    );
  }
};
