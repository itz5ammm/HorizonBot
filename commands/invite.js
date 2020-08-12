const { MessageEmbed } = require("discord.js");
const { inviteURL } = require("../config.json");
module.exports = {
  name: "invite",
  description: "Invite The Bot In Your Server.",
  execute(client, message, args) {
    let embed = new MessageEmbed()
      .setTitle("Invite Me!")
      .setColor("BLUE")
      .setDescription(`[CLICK ME](${inviteURL})`);

    return message.channel.send(embed);
  }
};
