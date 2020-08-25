const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "suggest",
  usage: "suggest <message>",
  description: "Send your Suggestion",
  category: "Utility",
  execute: (client, message, args) => {
    if (!args.length) {
      return message.channel.send("Gɪᴠᴇ A Sᴜɢɢᴇsᴛɪᴏɴ.");
    }

    let channel = message.guild.channels.cache.find(
      x =>
        x.name === "suggestion" ||
        x.name === "suggestions" ||
        x.name === "suggest"
    );

    if (!channel) {
      return message.channel.send(
        "Mᴀᴋᴇ Sᴜʀᴇ Yᴏᴜ Hᴀᴠᴇ A Cʜᴀɴɴᴇʟ Nᴀᴍᴇᴅ `suggestion`"
      );
    }

    let embed = new MessageEmbed()
      .setAuthor(
        "Sᴜɢɢᴇsᴛɪᴏɴ: " + message.author.tag,
        message.author.avatarURL()
      )
      .setThumbnail(message.author.avatarURL())
      .setColor("#070707")
      .setDescription(args.join(" "))
      .setTimestamp();

    channel.send(embed).then(m => {
      m.react("✅");
      m.react("❌");
    });

    message.channel.send("Sᴇɴᴛ Yᴏᴜʀ Sᴜɢɢᴇsᴛɪᴏɴ Tᴏ" + channel)
  }
};
