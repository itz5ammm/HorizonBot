const Discord = require("discord.js");
module.exports = {
  name: "kick",
  category: "Moderation",
  description: "kick a members",
  execute: async (client, message, args, guild) => {
    let kicked =
      message.mentions.users.first() || client.users.resolve(args[0]);
    let reason = args.slice(1).join(" ");

    // MESSAGES

    if (!kicked) {
      let kickinfoembed = new Discord.MessageEmbed()
        .setTitle("Cᴏᴍᴍᴀɴᴅ: kick")
        .setDescription(
          `**Dᴇsᴄʀɪᴘᴛɪᴏɴ:** Kick a member. \n` +
            "**Sᴜʙ Cᴏᴍᴍᴀɴᴅs:**\n" +
            "\n" +
            "**Usage:**\n" +
            "+kick [user] (reason) \n" +
            "**Exᴀᴍᴘʟᴇs:** \n" +
            "+kick <@597253939469221891> spam"
        )
        .setColor("#00FFFF");
      message.channel.send(kickinfoembed);

      return;
    }

    if (message.author === kicked) {
      let sanctionyourselfembed = new Discord.MessageEmbed()
        .setDescription(`You Can't Kick Yourself.`)
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

    if (!message.member.permissions.has("KICK_MEMBERS")) {
      let nopermsembed = new Discord.MessageEmbed()
        .setDescription(
          "You do not have permission `KICK MEMBERS` contact an administrator"
        )
        .setColor("00FFF");
      message.channel.send(nopermsembed);

      return;
    }

    if (!message.guild.me.permissions.has("KICK_MEMBERS")) {
      let botnopermsembed = new Discord.MessageEmbed()
        .setDescription(
          "I do not have `KICK MEMBERS` permission, please contact an administrator"
        )
        .setColor("#00FFFF");
      message.channel.send(botnopermsembed);

      return;
    }

    message.guild.member(kicked).kick(reason);

    let successfullyembed = new Discord.MessageEmbed()
      .setDescription(`***${kicked.tag} was Kicked***.`)
      .setColor("#00FFFF");

    message.channel.send(successfullyembed);
  }
};
