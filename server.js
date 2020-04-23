const discord = require("discord.js")
const client = new discord.Client({ disableEveryone: true, disabledEvents: ["TYPING_START"] });
const { readdirSync } = require("fs");
const { join } = require("path");


//CLIENT EVENTS
client.on("ready", () => {
  console.log('Ready TO play some soft songs')
  client.user.setActivity("x!help | Musix")
})

client.on("warn", info => console.log(info));

client.on("error", console.error)

client.on("message", message => {
   if (message.author.bot) return;
  if (!message.guild) return;
});




//DONT DO ANYTHING WITH THIS TOKEN lol
client.login("NjQwMTk3ODA2MzEyOTE0OTYz.XqGITA.andWQ59uXgafpdOYlyz1q3xAgTE")