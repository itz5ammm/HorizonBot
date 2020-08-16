const { MessageEmbed } = require("discord.js");
const got = require("got");

module.exports = {
  name: "meme",
  description: "Hᴀᴠᴇ Sᴏᴍᴇ Fᴜɴ.",
  category: "Fun",
  execute: async (client, message, args) => {
    const embed = new MessageEmbed();
    got("https://www.reddit.com/r/dankmemes/random/.json").then(response => {
      let content = JSON.parse(response.body);
      let permalink = content[0].data.children[0].data.permalink;
      let memeUrl = `https://reddit.com${permalink}`;
      let memeImage = content[0].data.children[0].data.url;
      let memeTitle = content[0].data.children[0].data.title;
      let memeUpvotes = content[0].data.children[0].data.ups;
      let memeDownvotes = content[0].data.children[0].data.downs;
      let memeNumComments = content[0].data.children[0].data.num_comments;
      embed.addField(`${memeTitle}`, `[View thread](${memeUrl})`);
      embed.setImage(memeImage);
      embed.setFooter(`
       👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments} | Cʀᴇᴅɪᴛs Tᴏ r/dankmemes
       `);
      embed.setColor("RANDOM");
      message.channel.send(embed);
    });
  }
};
