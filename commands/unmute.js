const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "unmute",
  category: "Moderation",
  execute: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "Sorry but you do not have permission to unmute anyone"
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("I do not have permission to manage roles.");
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send(
        "Please mention the member to who you want to unmute"
      );
    }

    let muterole = message.guild.roles.cache.find(x => x.name === "Muted");

    if (user.roles.cache.has(muterole)) {
      return message.channel.send("Mᴇɴᴛɪᴏɴᴇᴅ Usᴇʀ Is Nᴏᴛ Mᴜᴛᴇᴅ.");
    }

    user.roles.remove(muterole);

    let embed = new MessageEmbed()
      .setColor("070707")
      .setDescription(
        `**${message.mentions.users.first().username}** is unmuted`
      );
    message.channel.send(embed);

    user.send(`You are now unmuted from **${message.guild.name}**`);
  }
};
