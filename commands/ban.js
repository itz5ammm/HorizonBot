const Discord = require("discord.js");
module.exports = {
  name: "ban",
  category: "Moderation",
  description: "ban a member",
  execute: async (client, message, args, guild) => {
    let banned =
      message.mentions.users.first() || client.users.resolve(args[0]);
    let reason = args.slice(1).join(" ");

    // MESSAGES

    if (!banned) {
      let baninfoembed = new Discord.MessageEmbed()
        .setTitle("Cᴏᴍᴍᴀɴᴅ: ban")
        .setDescription(
          `**Dᴇsᴄʀɪᴘᴛɪᴏɴ:** Ban a member, optional time limit. \n` +
            "**Sᴜʙ Cᴏᴍᴍᴀɴᴅs:**\n" +
            "+ban save | Ban a user and save their messages in chat. \n" +
            "**Usᴀɢᴇ:**\n" +
            "+ban [user] (limit) (reason) \n" +
            "+ban save [user] (limit) (reason) \n" +
            "**Exᴀᴍᴘʟᴇ:** \n" +
            "+ban <@597253939469221891> 48h spam \n" +
            "+ban save <@597253939469221891> 48h spam "
        )
        .setColor("#00FFFF");
      message.channel.send(baninfoembed);

      return;
    }

    if (message.author === banned) {
      let sanctionyourselfembed = new Discord.MessageEmbed()
        .setDescription(`You Can't Ban Yourself.`)
        .setColor("#00FFFF");
      message.channel.send(sanctionyourselfembed);

      return;
    }

    if (!reason) {
      let noreasonembed = new Discord.MessageEmbed()
        .setDescription(`Enter a reason`)
        .setColor("#00FFFF");
      message.channel.send(noreasonembed);

      return;
    }

    if (!message.member.permissions.has("BAN_MEMBERS")) {
      let nopermsembed = new Discord.MessageEmbed()
        .setDescription(
          "You do not have permission `BAN MEMBERS` contact an administrator"
        )
        .setColor("#00FFFF");
      message.channel.send(nopermsembed);

      return;
    }

    if (!message.guild.me.permissions.has("BAN_MEMBERS")) {
      let botnopermsembed = new Discord.MessageEmbed()
        .setDescription(
          "I do not have `BAN MEMBERS` permission, please contact an administrator"
        )
        .setColor("#00FFFF");
      message.channel.send(botnopermsembed);

      return;
    }

    message.guild.members.ban(banned, { reason: reason });

    let successfullyembed = new Discord.MessageEmbed()
      .setTitle(`***${banned.tag} was Banned successfully.***`)
      .setColor("#00FFFF");

    message.channel.send(successfullyembed);
  }
};
