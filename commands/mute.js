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
        .setDescription("You Can't Mute Yourself.");
      message.channel.send(embed);
    }

    let reason = args.slice(1).join(" ");

    //TIME TO LET MUTED ROLE

    let muterole = message.guild.roles.cache.find(x => x.name === "Muted");

    if (!muterole) {
      let embed = new MessageEmbed()
        .setcolor("070707")
        .setDescription("This Server Does Not Have A `Muted` Role.");
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
      .setDescription(`***${user.user.tag} Was Muted*** | \`${reason}\``);
    message.channel.send(embed);

    user.send(`You Were Muted In **${message.guild.name}**: ${reason}.`);

    //WE ARE DONE HERE
  }
};
