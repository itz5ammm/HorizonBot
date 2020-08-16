const math = require('mathjs');
const Discord = require('discord.js');
var fs = require('fs'); //FileSystem
let conf = JSON.parse(fs.readFileSync("./config.json", "utf8")); //Config file

module.exports = {
name: "math",
description: "Do math!",
run: async (client, message, args) => {

  if (!args[0]) return message.channel.send({
    embed: {
      "description": "Enter some maths, can't wait to solve it!",
      "color": 0xff2222
    }
  })

  let resp;
  try {
    resp = math.evaluate(args.join(' '));
  } catch (e) {
    return message.channel.send({
      embed: {
        "description": "I-i think I can't do that...",
        "color": 0xff2222
      }
    })
  }


  const embed = new Discord.MessageEmbed()
    .setColor(0xffffff)
    .setTitle('Result:')
    .addField('Input', `\`\`\`js\n${args.join(' ')}\`\`\``)
    .addField('Output', `\`\`\`js\n${resp}\`\`\``);

  message.channel.send(embed);
}
}