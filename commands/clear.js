const Discord = require("discord.js");
const { MessageEmbed } = require("disco
module.exports = {
  name: "purge",
  description: "Purge up to 99 messages.",
  execute: async (message, args) => {
if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    let embed = new MessageEmbed()
    .setColor("070707")
    .setDescription("You Don't Have Permission To Use This")
    message.channel.send(embed);
  }
    
  const amount = parseInt(args[0]) + 1;

    if (isNaN(amount)) {
      return message.reply("that doesn't seem to be a valid number.");
    } else if (amount < 1 || amount > 100) {
      return message.reply("you need to input a number between 1 and 99.");
    }

    message.channel
      .bulkDelete(amount, true)
      .then(deletedMessages => {
        // Filter the deleted messages with .filter()
        var botMessages = deletedMessages.filter(m => m.author.bot);
        var userPins = deletedMessages.filter(m => m.pinned);
        var userMessages = deletedMessages.filter(m => !m.author.bot);

        const embed = new Discord.RichEmbed()
          .setTitle("Success")
          .setColor(0x00ae86)
          .setFooter(
            "Guardian",
            "https://raw.githubusercontent.com/phantomdev-github/Resources/master/Discord%20Bots/Guardian/src/avatar.png"
          )
          .setThumbnail(
            "https://raw.githubusercontent.com/phantomdev-github/Resources/master/Discord%20Bots/Guardian/src/avatar.png"
          )
          .setTimestamp()
          .setURL(
            "https://github.com/phantomdev-github/Resources/tree/master/Discord%20Bots/Guardian"
          )
          .addField("Bot Messages Purged", botMessages.size, false)
          .addField("User Pins Purged", userPins.size, false)
          .addField("User Messages Purged", userMessages.size, false)
          .addField("Total Messages Purged", deletedMessages.size, false);

        message.channel.send(embed);
      })
      .catch(err => {
        console.error(err);
        message.channel.send(
          "there was an error trying to prune messages in this channel!"
        );
      });
  }
};
