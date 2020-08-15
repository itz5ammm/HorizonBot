const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const { COLOR } = require("../config.json");
module.exports = {
  name: "help",
  description: "All The Commands Are Displayed Here.",
  category: "Utility",
  execute(client, message, args) {
    let music = [];
    let utility = [];
    let fun = [];
    let prefix = "+";

    client.commands
      .filter(cmd => cmd.category === "Music")
      .forEach(cmd => music.push(cmd.name));
    client.commands
      .filter(cmd => cmd.category === "Utility")
      .forEach(cmd => utility.push(cmd.name));
    client.commands
      .filter(cmd => cmd.category === "Fun")
      .forEach(cmd => fun.push(cmd.name));

    let embed = new MessageEmbed()
      .setAuthor("✔ Cᴏᴍᴍᴀɴᴅ Sᴇᴄᴛɪᴏɴ", client.user.displayAvatarURL())
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(COLOR)
      .setDescription(`✓ Cᴏᴍᴍᴀɴᴅ Lɪsᴛ Oғ ${client.user.username}.`)
      .addField(
        `♪ Mᴜsɪᴄ Cᴏᴍᴍᴀɴᴅs`,
        "``" + prefix + music.join("``, " + "``" + prefix) + "``",
        true
      )
      .addField(
        `✯ Uᴛɪʟɪᴛʏ Cᴏᴍᴍᴀɴᴅs`,
        "``" + prefix + utility.join("``, " + "``" + prefix) + "``",
        true
      )
      .addField(
        `➜ Fᴜɴ Cᴏᴍᴍᴀɴᴅs`,
        "``" + prefix + fun.join("``, " + "``" + prefix) + "``",
        true
      );
    message.channel.send(embed).catch(console.log);

    /* let command = readdirSync("./commands");

    let i;
    for (i = 0; i < command.length; i++) {
      console.log(command[i]);

      const cmd = client.commands.get(command[i].replace(".js", ""));
      embed.addField(`**${cmd.name}**`, cmd.description, true);
      embed.setFooter(`
Made By 丂ᴀᴍ#2385 & тнєℓαѕтgαмєя18◥▶_◀◤#3502 `);
    }

    message.channel.send(embed);*/
  }
};
