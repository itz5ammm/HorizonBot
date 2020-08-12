const { MessageEmbed } = require("discord.js");
const { inviteURL } = require("../config.json");
module.exports = {
  name: "invite",
  description: "Invite The Bot In Your Server",
  execute(client, message, args) {
    let embed = new MessageEmbed()
      .setTitle("Invite Me!")
      .setColor("CYAN")
      .setDescription(`[CLICK ME](${inviteURL})`); //Looks Cool

    return message.channel.send(embed);
  }
};
