const discord = require("discord.js");
const ms = require("ms");

module.exports = {
  name: "giveaway",
  category: "Utility",
  aliases: [""],
  description: "Giveaway something",
  execute: async (client, message, args) => {
    if (!args[0]) return message.channel.send(`You did not specify your time!`);
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m")
    )
      return message.channel.send(
        `The time needs to have days (d) or hours (h) or minutes (m)`
      );
    if (isNaN(args[0][0]))
      return message.channel.send(`It must be a number you know that?`);

    let prize = args.slice(1).join(" ");
    if (!prize) return message.channel.send(`No prize specified!`);

    let Embed = new discord.MessageEmbed()
      .setTitle(`New giveaway!`)
      .setDescription(
        `Host: ${message.author}\nTime: ${args[0]}\nPrize: ${prize}`
      )
      .setTimestamp(Date.now() + ms(args[0]))
      .setColor(`BLUE`);
    let m = await message.channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        const embed = new discord.MessageEmbed()
          .setColor("RED")
          .setDescription("No winners");
        m.edit(embed);
        return message.channel.send(
          `Couldnt generate a winner as there is no one in that giveaway!`
        );
      }

      let winner = m.reactions.cache
        .get("🎉")
        .users.cache.filter(b => !b.bot)
        .random();

      const embed = new discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`Winner: ${winner}!`);
      m.edit(embed);

      message.channel.send(`The winner of the giveaway is ${winner}`);
    }, ms(args[0]));
  }
};
