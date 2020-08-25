const discord = require("discord.js");
const got = require("got");

module.exports = {
  name: "food",
  category: "Info",
  aliases: ["foodporn"],
  description: "Sends a random yummy food picture",
  usage: "food",
  execute: async (client, message, args) => {
    got("https://www.reddit.com/r/foodporn/random/.json")
      .then(response => {
        let content = JSON.parse(response.body);
        let memeImage = content[0].data.children[0].data.url;
        let memeTitle = content[0].data.children[0].data.title;

        const MemeEmbed = new discord.MessageEmbed()
          .setColor("RANDOM")
          .setTitle(`${memeTitle}`)
          .setImage(memeImage);

        message.channel.send(MemeEmbed);
      })
      .catch(console.error);
  }
};
