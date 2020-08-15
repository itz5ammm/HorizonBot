const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const member = message.member;
  const cmd = args.join(" ").split(" | ");

  let emb = new Discord.RichEmbed()
    .addField(`${member.user.tag} Says`, cmd[0], true)
    .setColor(`RANDOM`)
    .setTimestamp();

  message.channel.send(emb);

  message.delete();
};
module.exports.help = {
  name: "embed"
};
