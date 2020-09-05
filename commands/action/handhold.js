const Discord = require("discord.js");
const client = new Discord.Client();
const snekfetch = require("snekfetch");

module.exports = {
  name: "handhold",
  category: "Action",
  description: "Hold Hands With Anyone.",
  execute: async (client, message, args) => {
    if (message.mentions.users.size < 1)
      return message.channel.send("you can't hold hands with nobody");
    let user = message.guild.member(message.mentions.users.first());
    message.channel.send(
      `\`${message.author.tag}\` *Holds* \`${user.user.tag}\`'s Hands, ❤`,
      {
        embed: {
          image: {
            url: "https://media.giphy.com/media/TnUJHKyjwHXOM/giphy.gif"
          }
        }
      }
    );
  }
};
