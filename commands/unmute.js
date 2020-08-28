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
      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescription("Mᴀᴋᴇ Sᴜʀᴇ I Hᴀᴠᴇ Tʜᴇ `Manage Messages` Pᴇʀᴍ.");

      message.channel.send(embed);
    }

    const user = message.mentions.members.first();

    if (!user) {
      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescription(`Mᴇɴᴛɪᴏɴ Tʜᴇ Usᴇʀ Tᴏ Uɴᴍᴜᴛᴇ.`);

      message.channel.send(embed);
    }

    let muterole = message.guild.roles.cache.find(x => x.name === "Muted");

    if (user.roles.cache.has(muterole)) {
      return message.channel.send("Mᴇɴᴛɪᴏɴᴇᴅ Usᴇʀ Is Nᴏᴛ Mᴜᴛᴇᴅ.");
    }

    user.roles.remove(muterole);

    let embed = new MessageEmbed()
      .setColor("070707")
      .setDescription(`***${user.tag} Is Uɴᴍᴜᴛᴇᴅ.***`);
    message.channel.send(embed);

    user.send(`You are now unmuted from **${message.guild.name}**`);
  }
};
