const db = require("quick.db");

module.exports = {
  name: "blacklist",
  category: "Moderation",
  aliases: ["bl"],
  description: "Blacklists a user from using the bot.",
  usage: "<@user>",
  execute: async (client, message, args) => { 
      const db = require('quick.db')
let owners = [
      "606305489772609558",
     "504635146553524234",
    ];
    if (!owners.includes(message.author.id)) {
      return message.channel.send(`Only the bot-devs can run this command!`);
    }
    let user = message.mentions.users.first() || message.guilds.members.cache.get(args[0])
if (!user) return message.channel.send('Provide a user to blacklist')
if (owners.includes(user.id)) return message.channel.send("I can't blacklist my owner") 
db.set("bl_" + user.id, true)

message.channel.send(`Successfully blacklisted ${user.username}`)

}

}