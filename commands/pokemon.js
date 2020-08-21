const { get } = require("request-promise-native");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "pokemon",
  description: "Get any pokemon description",
  category: "Fun",
  usage: "pokemon <name>",
  execute(client, message, args) {
    const options = {
      url: `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokemon=${args.join(
        " "
      )}`,
      json: true
    };

    message.channel.send("Fetching Informtion for API").then(msg => {
      get(options).then(body => {
        let embed = new MessageEmbed()
          .setAuthor(
            body.name,
            `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${body.images.typeIcon}`
          )
          .setDescription(body.info.description)
          .setThumbnail(
            `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${body.images.photo}`
          )
          .setColor("#00ffff")
          .setFooter(
            `Weakness of Pokémon - ${body.info.weakness}`,
            `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${body.images.weaknessIcon}`
          );

        message.channel.send(embed);
        msg.delete();
      });
    });
  }
};
