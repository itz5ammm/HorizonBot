const discord = require("discord.js"); // fixed enjoi
const client = new discord.Client({
  disableEveryone: true,
  disabledEvents: ["TYPING_START"]
});
const { readdirSync } = require("fs");
const { join } = require("path");
const { TOKEN, PREFIX } = require("./config.json");

//CLIENT EVENTS
client.on("ready", () => {
  console.log("Ready to play song | Bot created by SAM");
  client.user.setActivity("+help | Horizon - A Cᴏᴏʟ Mᴜʟᴛɪ-ᴘᴜʀᴘᴏsᴇ Bᴏᴛ.");
});

client.on("warn", info => console.log(info));

client.on("error", console.error);

//DEFINIING
client.commands = new discord.Collection();
client.prefix = PREFIX;
client.queue = new Map();
client.vote = new Map();
client.capitalize = string => {
  let str = "";
  string = string.split(" ");
  for (let i = 0; i < string.length; i++) {
    str +=
      string[i].charAt(0).toUpperCase() +
      string[i].slice(1).toLowerCase() +
      " ";
    if (i == string.length - 1) {
      string = str.split("-");
      str = "";
      for (let i = 0; i < string.length; i++) {
        str += string[i].charAt(0).toUpperCase() + string[i].slice(1) + "-";
        if (i == string.length - 1) {
          return str.slice(0, -2);
        }
      }
    }
  }
};

//LETS LOAD ALL FILES
const cmdFiles = readdirSync(join(__dirname, "commands")).filter(file =>
  file.endsWith(".js")
);
for (const file of cmdFiles) {
  const command = require(join(__dirname, "commands", file));
  client.commands.set(command.name, command);
} //LOADING DONE

//WHEN SOMEONE MESSAGE
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.guild) return;

  if (message.content.startsWith(PREFIX)) {
    //IF MESSSAGE STARTS WITH MINE BOT PREFIX

    const args = message.content
      .slice(PREFIX.length)
      .trim()
      .split(/ +/); //removing prefix from args
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) {
      return;
    }

    try {
      //TRY TO GET COMMAND AND EXECUTE
      client.commands.get(command).execute(client, message, args);

      //COMMAND LOGS
      const o = client.channels.cache.get("748919962235568330");
      const embed = new discord.MessageEmbed()
        .setTitle("Cᴏᴍᴍᴀɴᴅ Lᴏɢ.")
        .setDescription(
          `Gᴜɪʟᴅ: **\`${message.guild.name}\`**
Cʜᴀɴɴᴇʟ: **\`${message.channel.name}\`**
Exᴇᴄᴜᴛᴏʀ: **${message.author.tag}** 
Cᴏᴍᴍᴀɴᴅ Usᴇᴅ: **\`${client.commands.get(command).name}\`**`
        )
        .setColor("00FFFF")
        .setThumbnail(message.author.avatarURL())
        .setTimestamp();
      o.send(embed);
    } catch (err) {
      //IF IT CATCHES ERROR

      console.log(err);
      const o = client.channels.cache.get("749268670609621122");
      const embed = new discord.MessageEmbed()
        .setTitle("Cᴏᴍᴍᴀɴᴅ Eʀʀᴏʀ.")
        .setDescription(
          `Gᴜɪʟᴅ: **\`${message.guild.name}\`**
Cʜᴀɴɴᴇʟ: **\`${message.channel.name}\`**
Cᴏᴍᴍᴀɴᴅ Nᴀᴍᴇ: **\`${client.commands.get(command).name}\`**
Eʀʀᴏʀ: ${err}`
        )
        .setColor("00FFFF")
        .setThumbnail(message.author.avatarURL())
        .setTimestamp();
      o.send(embed);
    }
  }
});

client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(PREFIX)) return;

  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content
    .slice(PREFIX.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  // Get the command
  let command = client.commands.get(cmd);
  // If none is found, try to find it by alias
  if (!command) command = client.commands.get(client.aliases.get(cmd));

  // If a command is finally found, run the command
  if (command) command.run(client, message, args);
});

//DONT DO ANYTHING WITH THIS TOKEN lol
client.login(TOKEN);

const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.sendStatus(200);
});
app.listen(3000);
