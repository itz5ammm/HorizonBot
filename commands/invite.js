const { MessageEmbed } = require("discord.js");
const { inviteURL } = require("../config.json");
module.exports = {
  name: "invite",
  description: "Invite The Bot In Your Server.",
  execute(client, message, args) {
    let embed = new MessageEmbed()
      .setTitle("Invite Me!")
      .setColor("RANDOM")
      .setDescription(
        `[CLICK ME](https://discord.com/api/oauth2/authorize?client_id=742375154654380082&permissions=8&scope=bot)`,
        true
      );

    return message.channel.send(embed);
  }
};
