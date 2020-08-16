const math = require('mathjs');
const Discord = require('discord.js');

module.exports = {
  name: "math",
  description: "Evaluate math equations.",
  category: "Utility",
  execute(client, message, args) {
    
    let equation = args.join(" ");
    if(!equation) {
      return message.channel.send('Please provide something to evaluate!')
    }

  let resp;
  try {
    resp = math.evaluate(equation);
  } catch (e) {
    return message.channel.send(`Please enter a valid equation!`)
  }


  const embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle('Result:')
    .addField('Input', `\`\`\`js\n${args.join(' ')}\`\`\``)
    .addField('Output', `\`\`\`js\n${resp}\`\`\``);

  message.channel.send(embed).catch(console.log);

  }
};