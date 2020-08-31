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
    const hold = new Discord.RichEmbed()
      .setColor("070707")
      .setDescription(`${message.author} *Holds* ${user}'s Hands, ❤`, {
        embed: {
          image: {
            url: "https://media.giphy.com/media/TnUJHKyjwHXOM/giphy.gif"
          }
        }
      });
    message.channel.send(hold);
  }
};
