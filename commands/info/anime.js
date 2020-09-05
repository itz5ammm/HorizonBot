const { get } = require("request-promise-native");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "anime",
  category: "Info",
  aliases: ["kitsu"],
  description: "Get anime information",
  usage: "anime <anime_name>",
  execute: (client, message, args) => {
    if (!args.length) {
      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescripton("Pʟᴇᴀsᴇ Gɪᴠᴇ A Aɴɪᴍᴇ Nᴀᴍᴇ.");
      message.channel.send(embed);
    }
    //DEFINE OPTIONS

    let option = {
      url: `https://kitsu.io/api/edge/anime?filter[text]=${args.join(" ")}`,
      method: `GET`,
      headers: {
        "Content-Type": "application/vnd.api+json",
        Accept: "application/vnd.api+json"
      },
      json: true
    };

    message.channel.send("Fetching The Info").then(msg => {
      get(option).then(body => {
        try {
          let embed = new MessageEmbed()
            .setTitle(body.data[0].attributes.titles.en)
            .setColor("RED")
            .setDescription(body.data[0].attributes.synopsis)
            .setThumbnail(body.data[0].attributes.posterImage.original)
            .addField("Rᴀᴛɪɴɢs", body.data[0].attributes.averageRating)
            .addField("Tᴏᴛᴀʟ Eᴘɪsᴏᴅᴇs", body.data[0].attributes.episodeCount);
          //.setImage(body.data[0].attributes.coverImage.large)
          //try it

          message.channel.send(embed);
          msg.delete();
        } catch (err) {
          msg.delete();
          return message.channel.send("Uɴᴀʙʟᴇ Tᴏ Fɪɴᴅ Tʜɪs Aɴɪᴍᴇ.");
        }
      });
    });
  }
};
