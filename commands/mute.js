const fs = require("fs");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "mute",
  category: "Moderation",
  description: "mute a specific user",
  usage: "[tagged user] [mute time]",
  execute: async (client, message, args) => {
    if (!message.member.has.permission("MANAGE_MESSAGES")) {
      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescription("You cannot manage messages.");

      message.channel.send(embed);
    }

    let toMute =
      message.mentions.members.first() || message.guild.members.get(args[0]);

    if (!toMute) {
      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescription("You did not specifc a user mention ID!");

      message.channel.send(embed);
    }

    if (toMute.id == message.author.id) {
      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescription("You cannot mute yourself!");

      message.channel.send(embed);
    }

    if (toMute.highestRole.position >= message.member.highestRole.position) {
      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescription(
          "You cannot mute a member who is higher or has the same role as you!"
        );
    }

    let role = message.guild.roles.find(x => x.name === "Muted" || x => x.name ===) "MUTED
                    ;

    if (!role) {
      try {
        role = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions: []
        });

        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(role, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      } catch (e) {
        console.log(e.stack);
      }
    }

    if (toMute.roles.has(role.id)) {
      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescription("This user is already muted!");

      message.channel.send(embed);
    }

    if (isNaN(args[1])) {
      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescription("Mute time doesn't seem to be a valid number");

      message.channel.send(embed);
    }

    client.mutes[toMute.id] = {
      guild: message.guild.id,
      time: Date.now() + parseInt(args[1]) * 1000
    };

    fs.writeFile("./config.json", JSON.stringify(client.mute, null, 4), err => {
      if (err) {
        throw err;
      }
      message.channel.send("I have muted this user!");
    });

    await toMute.addRole(role);
  }
};
