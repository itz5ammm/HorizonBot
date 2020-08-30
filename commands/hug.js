const Discord = require("discord.js");
const client = new Discord.Client();
const snekfetch = require("snekfetch");
const { MessageEmbed } = require("dicord.js")


module.exports = {
  name: "hug",
  category: "Action",
  description: "Give User A Warm Hug",
  execute: async (client, message, args) => {
    if (message.mentions.users.size < 1)
      return message.channel.send("you can't hug nobody");
    let user = message.guild.member(message.mentions.users.first());
    snekfetch
      .get("https://nekos.life/api/hug")
      .set("Key", "dnZ4fFJbjtch56pNbfrZeSRfgWqdPDgf")
      .then(r =>
        let embed = new MessageEmbed()
    .setTitle(`${message.author} Hugs ${user} ❤`)
   message.channel.send(embed);
      {
      embed: {
            image: {
              url: r.body.url
           
            }
          }
        })
 
    );
  }
};
