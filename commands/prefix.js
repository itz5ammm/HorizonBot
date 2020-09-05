const db = require("quick.db");
const { PREFIX } = require("../config.json");

module.exports = {
  name: "prefix",
  category: "Moderation",
  usage: "prefix <new-prefix>",
  description: "Change the guild prefix",
  execute: async (client, message, args) => {
    //PERMISSION
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send(
        "You are not allowed or do not have permission to change prefix"
      );
    }

    if (!args[0]) {
      return message.channel.send(
        "Please give the prefix that you want to set"
      );
    }

    if (args[1]) {
      return message.channel.send("You can not set prefix a double argument");
    }

    if (args[0].length > 3) {
      return message.channel.send(
        "You can not send prefix more than 3 characters"
      );
    }

    if (args.join("") === PREFIX) {
      db.delete(`prefixes_${message.guild.id}`);
      return await message.channel.send("Reset Prefix ✅");
    }

    db.set(`prefixes_${message.guild.id}`, args[0]);
    await message.channel.send(`Set Bot Prefix to ${args[0]}`);
  }
};
