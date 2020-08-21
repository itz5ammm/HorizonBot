const discord = require("discord.js");
const weather = require("weather-js"); //npm i weather-js
module.exports = {
  name: "weather",
  category: "Utility",
  aliases: [""],
  description: "Get the weather inap a certain country",
  execute: async (client, message, args) => {
    weather.find({ search: args.slice(0).join(" "), degreeType: "C" }, function(
      error,
      result
    ) {
      //C is celicius
      if (error) return console.log(error);
      if (!args[0])
        return message.channel.send(
          "Please specify a place to check the weather in"
        );

      if (result === undefined || result.length === 0)
        return message.channel.send("Not a valid location");

      const current = result[0].current;
      const location = result[0].location;

      let weatherembed = new discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`${current.skytext}`)
        .setAuthor(`Weather for ${current.observationpoint}`)
        .setThumbnail(current.imageURL)
        .addField(`Degree Type`, `Celcius`)
        .addField(`Temperature`, `${current.temperature}`) // Spelling mistake sorry
        .addField(`TimeZone`, `UTC ${location.timezone}`) //In discord its by default UTC
        .addField(`Wind`, current.winddisplay)
        .addField(`Humidity`, `${current.humidity}%`)
        .addField(`Feels Like`, `${current.feelslike}°`);

      message.channel.send(weatherembed);
    });
  }
};
