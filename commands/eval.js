const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "eval",
  description: "Eᴠᴀʟᴜᴀᴛᴇs Cᴏᴍᴍᴀɴᴅs (Bᴏᴛ Oᴡɴᴇʀ Oɴʟʏ!)",
  usage: "eval <code>",
  execute(client, message, args) {
    let owners = [
      "488245609539829781",
      "606305489772609558",
      "481502279103676458"
    ];
    if (!owners.includes(message.author.id)) {
      return message.channel.send(`Only the bot-devs can run this command!`);
    }

    let e;
    let color;
    let to_eval = args.join(" ");
    if (!to_eval) {
      return message.channel.send(`Please give a code to evaluate!`);
    }

    try {
      e = eval(to_eval);
      color = 0x00ff00;
    } catch (err) {
      e = err;
      color = 0xff0000;
    }

    let embed = new MessageEmbed()
      .setTitle(`Eval`)
      .setAuthor(message.author.username, message.author.avatarURL())
      .addField("Input", "```js" + "\n" + to_eval + "```")
      .addField("Output", "```js" + "\n" + e + "```")
      .setColor(color);
    message.channel.send(embed);
  }
};
