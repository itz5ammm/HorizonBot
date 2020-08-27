const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "suggest",
  usage: "suggest <message>",
  description: "Send your Suggestion",
  category: "Utility",
  execute: async (client, message, args) => {
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
      let embed = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription("Mᴀᴋᴇ Sᴜʀᴇ Yᴏᴜ Hᴀᴠᴇ A Cʜᴀɴɴᴇʟ Nᴀᴍᴇᴅ `suggestion`");
      message.channel.send(embed);
    }

    let embed = new MessageEmbed()
      .setAuthor(
        "Sᴜɢɢᴇsᴛɪᴏɴ: " + message.author.tag,
        message.author.avatarURL()
      )
      .setThumbnail(message.author.avatarURL())
      .setColor("RANDOM")
      .setDescription(args.join(" "))
      .setTimestamp();

    channel.send(embed).then(m => {
      m.react("✅");
      m.react("❌");
    });

    embed = new MessageEmbed()
      .setColor("070707")
      .setDescription(`Sᴇɴᴛ Yᴏᴜʀ Sᴜɢɢᴇsᴛɪᴏɴ Tᴏ ${channel}`);

    message.channel.send(embed);
  }
};
