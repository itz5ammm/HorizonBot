const discord = require("discord.js");

module.exports = {
  name: "poll",
  category: "Utility",
  aliases: ["createpoll"],
  description: "Create a poll so users can vote",
  execute: async (client, message, args) => {
    let text = args.slice(0).join(" "); //This is the text that will be in the poll
    if (!text)
      return message.channel.send(
        "You need to tell me what to create as a poll"
      ); //If he doesn't specify a text it will stop and tell him to type a text for the poll

    const embed = new discord.MessageEmbed() //Creating an embed because it looks better for everything and just cleaner.
      .setTitle("Pᴏʟʟ!") //This is a title and it is a "New Poll", you can cange it if you'd like or remove it
      .setColor("00ffff")
      .setDescription(`${text}`) //This is where the text will be sent, i would like to remind you that in embed titles and in titles and in footers you cannot have any mentions thats why im using a description
      .setFooter(`Requested By: ${message.author.tag}`)
      .setTimestamp();

    let pollmessage = await message.channel.send(embed); //Using await so after the message is sent to be able to be able to do actions to it

    pollmessage.react("👍"); //If it comes like a square copy it from the discord and paste it in, ill do that and come back (You can change all reactions)
    pollmessage.react("👎");
  }
};
