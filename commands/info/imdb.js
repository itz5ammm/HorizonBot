const discord = require("discord.js");
const imdb = require("imdb-api");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "imdb",
  description: "Get the information about series and movie",
  category: "Info",
  usage: "imdb <name>",
  execute: async (client, message, args, color) => {
    if (!args.length) {
      let embed = new MessageEmbed()
        .setColor("00FFFF")
        .setDescription("Pʟᴇᴀsᴇ Gɪᴠᴇ Nᴀᴍᴇ Oғ A Mᴏᴠɪᴇ Oʀ Sᴇʀɪᴇs.");
      message.channel.send(embed);
    }

    const imob = new imdb.Client({ apiKey: "5e36f0db" }); //You need to paste you imdb api

    let movie = await imob.get({ name: args.join(" ") });

    let embed = new discord.MessageEmbed()
      .setTitle(movie.title)
      .setColor("RANDOM")
      .setThumbnail(movie.poster)
      .setDescription(movie.plot)
      .setFooter(`Rᴀᴛɪɴɢ: ${movie.rating}`)
      .addField("Cᴏᴜɴᴛʀʏ", movie.country, true)
      .addField("Lᴀɴɢᴜᴀɢᴇs", movie.languages, true)
      .addField("Tʏᴘᴇ", movie.type, true)
      .setFooter(`Requested By: ${message.author.tag}`)
      .setTimestamp();
    message.channel.send(embed);
  }
};
