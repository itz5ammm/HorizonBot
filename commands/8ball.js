const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  
    //!8ball Question
  !if(!args[1]) return message.reply("Please Enter A Full Question With 2 Or More Words.");
  let replies = ["Yes.", "No.", "I Don't Know.", "I'm Not Sure."];
  
  let result = Math.floor((Math.random() * replies.length));
  let questions = args.join(" ");
  
  let ballembed = new Discord.RichEmbed()
  
  .setAuthor(message.author.username)
  .setColor("ff00ff")
  .addField("Question", question)
  .addField("Answer", replies[result]);
  
  message.channel.send(ballembed)
  
  message.delete