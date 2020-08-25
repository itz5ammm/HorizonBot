const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "mute",
  description: "Mute anyone who break rules",
  category: "Moderation",
  usage: "mute <@mention> <reason>",
  execute: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      let embed = new MessageEmbed()
        .setColor("00ffff")
        .setDescription(
          "Missing Perms, Make Sure You Have The `MANAGE ROLES` Perm."
        );
      message.channel.send(embed);
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescription("Make Sure I Have Perms To Manage Roles.");
      message.channel.send(embed);
    }

    const user = message.mentions.members.first();

    if (!user) {
      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescription("Mention The User.");
      message.channel.send(embed);
    }

    if (user.id === message.author.id) {
      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescription("Yᴏᴜ Cᴀɴ'ᴛ Mᴜᴛᴇ Yᴏᴜʀsᴇʟғ.");
      message.channel.send(embed);
    }

    let reason = args.slice(1).join(" ");

    //TIME TO LET MUTED ROLE

    let muterole = message.guild.roles.cache.find(x => x.name === "Muted");

    if (!muterole) {
      let embed = new MessageEmbed()
        .setcolor("070707")
        .setDescription("Tʜɪs Sᴇʀᴠᴇʀ Dᴏᴇs Nᴏᴛ Hᴀᴠᴇ A Rᴏʟᴇ Cᴀʟʟᴇᴅ `Muted`.");
      message.channel.send(embed);
    }

    if (user.roles.cache.has(muterole)) {
      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescription("User is already muted.");
      message.channel.send(embed);
    }

    user.roles.add(muterole);

    let embed = new MessageEmbed()
      .setColor("070707")
      .setDescription(
        `***${user
        } Wᴀs Mᴜᴛᴇᴅ*** | \`${reason}\``
      );
    message.channel.send(embed);

    user.send(`You are muted in **${message.guild.name}** For \`${reason}\``);

    //WE ARE DONE HERE
  }
};
