//This command will be required package discord.js
const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const config = require("../config.json");
const fs = require("fs");

exports.run = async (client, message, args) => {
  // Modification
  let crafty = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if (!crafty[message.guild.id]) {
    crafty[message.guild.id] = {
      prefix: config.prefix
    };
  }

  //if (!args[0]) {
  //gw solat dulu//ya. udah selese nig.//ndk bisa
  //dah//thx
  let embed1 = new RichEmbed();
  let embed = new RichEmbed()
    .setAuthor(
      `Zetsuya | ぜつや`,
      `https://images-ext-1.discordapp.net/external/ajWUSzEm6V_PVGGct42J3h8swrQEirySEBKq9J4-5WU/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/604652011857641484/b92a72f9537a38687d19939b056090e5.png`
    )
    .setColor(`#ecd4fc`)
    .setThumbnail(client.user.avatarURL)
    .addField(
      "If you have a question / bug report please report them on",
      "[Discord](https://discord.gg/Xdcbk2X)\n_ _",
      `false`
    )
    .addField(
      "Documentation can be found at",
      "[Glitch](https://glitch.com/edit/#!/join/930aa243-4c2e-4fa0-bfcd-918699362692
      "false"
    )
    .addField(
      `Are you don't know how to use this bot? do :`,
      `${crafty[message.guild.id].prefix}cmds`,
      `false`
    ) //Kenapa? ~andra//pen biar prefix per server nya muncul///oh wait
    .setFooter(
      "Clxud BeatZ Bot | This bot is still under Development"
    )
    .setTimestamp();
  message.channel.send(embed);
  message.delete();
};
exports.conf = {
  //Auto fokus anjir. uwau. anying speaker w rusak.z
  aliases: ["h"]
};

exports.help = {
  name: "Help"
};
