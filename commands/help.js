const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const { COLOR } = require("../config.json");
module.exports = {
  name: "help",
  description: "All The Commands Are Displayed Here.",
  execute(client, message, args) {
    let embed = new MessageEmbed()
      .setAuthor("COMMANDS SECTION", client.user.displayAvatarURL())
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(COLOR)
      .setDescription(`Commands List Of ${client.user.username}.`);
    let command = readdirSync("./commands");

    let i;
    for (i = 0; i < command.length; i++) {
      console.log(command[i]);

      const cmd = client.commands.get(command[i].replace(".js", ""));
      embed.addField(`**${cmd.name}**`, cmd.description, true);
      embed.setFooter(`
Made By 丂ᴀᴍ#2385 & тнєℓαѕтgαмєя18◥▶_◀◤#3502 `);
    }

    message.channel.send(embed);
  }
};
