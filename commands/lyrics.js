const { MessageEmbed } = require("discord.js");
const Genius = new (require("genius-lyrics")).Client(
  "ZD_lLHBwRlRRfQvVLAnHKHksDHQv9W1wm1ZAByPaYo1o2NuAw6v9USBUI1vEssjq"
);
const { COLOR } = require("../config.json");

module.exports = {
  name: "lyrics",
  description: "Gᴇᴛ Lʏʀɪᴄs Oғ Aɴʏ Sᴏɴɢ.",
  aliases: [ "ly" ],
  category: "Music",
  async execute(client, message, args) {
    let embed = new MessageEmbed()
      .setDescription("Lᴏᴏᴋɪɴɢ Fᴏʀ Lʏʀɪᴄs ...")
      .setColor("RED");

    if (!args.length) {
      return message.channel.send("Pʟᴇᴀsᴇ Gɪᴠᴇ Tʜᴇ Sᴏɴɢ Nᴀᴍᴇ!");
    }

    const msg = await message.channel.send(embed);
    try {
      const songs = await Genius.tracks.search(args.join(" "));
      const lyrics = await songs[0].lyrics();

      if (lyrics.length > 5000) {
        msg.delete();
        return message.channel.send("Cᴀɴɴᴏᴛ Fɪɴᴅ Tʜᴇʏ Lʏʀɪᴄs Fᴏʀ Tʜɪs Sᴏɴɢ.");
      }
      if (lyrics.length < 2048) {
        const lyricsEmbed = new MessageEmbed()
          .setColor(COLOR)
          .setDescription(lyrics.trim());
        return msg.edit(lyricsEmbed);
      } else {
        // lyrics.length > 2048
        const firstLyricsEmbed = new MessageEmbed()
          .setColor(COLOR)
          .setDescription(lyrics.slice(0, 2048));
        const secondLyricsEmbed = new MessageEmbed()
          .setColor(COLOR)
          .setDescription(lyrics.slice(2048, lyrics.length));
        msg.edit(firstLyricsEmbed);
        message.channel.send(secondLyricsEmbed);
        return;
      }
    } catch (e) {
      embed.setDescription("Got err : " + e);
      msg.edit(embed);
      console.log(e);
    }
  }
};
