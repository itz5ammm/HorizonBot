const discord = require("discord.js");
const { NovelCovid } = require("novelcovid");
const track = new NovelCovid();

module.exports = {
  name: "covid",
  category: "Fun",
  description: "Gᴇᴛ Tʜᴇ Sᴛᴀᴛs Oғ Cᴏᴠɪᴅ.",
  usage: "covid <country>",
  aliases: ["covid", "covid19"],
  run: async (client, message, args) => {
    if (!args.length) {
      return message.channel.send("Pʟᴇᴀsᴇ Gɪᴠᴇ Nᴀᴍᴇ Oғ Tʜᴇ Cᴏᴜɴᴛʀʏ.");
    }

    if (args.join(" ") === "all") {
      let corona = await track.all(); //it will give global cases

      let embed = new discord.MessageEmbed()
        .setTitle("Gʟᴏʙᴀʟ Cᴀsᴇs")
        .setColor("#ff2050")
        .setDescription("Sᴏᴍᴇᴛɪᴍᴇs Cᴀsᴇs Dɪғғᴇʀ Fʀᴏᴍ Sᴍᴀʟʟ Aᴍᴏᴜɴᴛ.")
        .addField("Tᴏᴛᴀʟ Cᴀsᴇs", corona.cases, true)
        .addField("Tᴏᴛᴀʟ Dᴇᴀᴛʜs", corona.deaths, true)
        .addField("Tᴏᴛᴀʟ Rᴇᴄᴏᴠᴇʀʏ", corona.recovered, true)
        .addField("Tᴏᴅᴀʏs Cᴀsᴇs", corona.todayCases, true)
        .addField("Tᴏᴅᴀʏs Dᴇᴀᴛʜ", corona.todayDeaths, true)
        .addField("Aᴄᴛɪᴠᴇ Cᴀsᴇs", corona.active, true);

      return message.channel.send(embed);
    } else {
      let corona = await track.countries(args.join(" ")); //change it to countries

      let embed = new discord.MessageEmbed()
        .setTitle(`${corona.country}`)
        .setColor("#ff2050")
        .setDescription("Sᴏᴍᴇᴛɪᴍᴇs Cᴀsᴇs Mᴀʏ Dɪғғᴇʀᴇ Fʀᴏᴍ Sᴍᴀʟʟ Aᴍᴏᴜɴᴛs.")
        .addField("Tᴏᴛᴀʟ Cᴀsᴇs", corona.cases, true)
        .addField("Tᴏᴛᴀʟ Dᴇᴀᴛʜs", corona.deaths, true)
        .addField("Tᴏᴛᴀʟ Rᴇᴄᴏᴠᴇʀᴇᴅ", corona.recovered, true)
        .addField("Tᴏᴅᴀʏs Cᴀsᴇs", corona.todayCases, true)
        .addField("Tᴏᴅᴀʏs Dᴇᴀᴛʜs", corona.todayDeaths, true)
        .addField("Aᴄᴛɪᴠᴇ Cᴀsᴇs", corona.active, true);

      return message.channel.send(embed);
    }
  }
};
