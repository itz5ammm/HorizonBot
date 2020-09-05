const discord = require("discord.js");
const weather = require("weather-js"); //npm i weather-js
module.exports = {
  name: "weather",
  category: "Info",
  aliases: [""],
  description: "Gᴇᴛ Tʜᴇ Wᴇᴀᴛʜᴇʀ Oғ A Cᴇʀᴛᴀɪɴ Pʟᴀᴄᴇ.",
  execute: async (client, message, args) => {
    weather.find({ search: args.slice(0).join(" "), degreeType: "C" }, function(
      error,
      result
    ) {
      //C is celicius
      if (error) return console.log(error);
      if (!args[0])
        return message.channel.send(
          "Pʟᴇᴀsᴇ Sᴘᴇᴄɪғʏ Tʜᴇ Pʟᴀᴄᴇ Tᴏ Cʜᴇᴄᴋ Wᴇᴀᴛʜᴇʀ."
        );

      if (result === undefined || result.length === 0)
        return message.channel.send("Iɴᴠᴀʟɪᴅ Lᴏᴄᴀᴛɪᴏɴ");

      const current = result[0].current;
      const location = result[0].location;

      let weatherembed = new discord.MessageEmbed()
        .setColor("00ffff")
        .setDescription(`${current.skytext}`)
        .setAuthor(`Wᴇᴀᴛʜᴇʀ Fᴏʀ ${current.observationpoint}`)
        .setThumbnail(current.imageURL)
        .addField(`Dᴇɢʀᴇᴇ Tʏᴘᴇ`, `Celcius`)
        .addField(`Tᴇᴍᴘᴇʀᴀᴛᴜʀᴇ`, `${current.temperature}°`) // Spelling mistake sorry
        .addField(`TɪᴍᴇZᴏɴᴇ`, `UTC ${location.timezone}`) //In discord its by default UTC
        .addField(`Wɪɴᴅ`, current.winddisplay)
        .addField(`Hᴜᴍɪᴅɪᴛʏ`, `${current.humidity}%`)
        .addField(`Fᴇᴇʟs Lɪᴋᴇ`, `${current.feelslike}°`);

      message.channel.send(weatherembed);
    });
  }
};
