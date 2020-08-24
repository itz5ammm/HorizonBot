const Discord = require("discord.js");

module.exports = {
  name:"sinfo",
  category: "Utility",
  aliases: [ "serverinfo" ], 
  description: "Get The Server Info", 
  usage: "sinfo",
execute: async (bot, message, args) => {
  const verlvl = {
    0: "None",
    1: "Low",
    2: "Medium",
    3: "(╯°□°）╯︵ ┻━┻",
    4: "(ノಠ益ಠ)ノ彡┻━┻"
  }

    let inline = true
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setColor("#00ffff")
    .setThumbnail(sicon)
    .setAuthor(message.guild.name)
    .addField("Nᴀᴍᴇ", message.guild.name, inline)
    .addField("Iᴅ", message.guild.id, inline)
    .addField("Oᴡɴᴇʀ", message.guild.owner, inline)
    .addField("Rᴇɢɪᴏɴ", message.guild.region, inline)
    .addField("Vᴇʀɪғɪᴄᴀᴛɪᴏɴ Lᴇᴠᴇʟ", verlvl[message.guild.verificationLevel],inline)
    .addField("Mᴇᴍʙᴇʀs", `<:user:424958082691629057> ${message.guild.memberCount}`, inline)
    .addField("Rᴏʟᴇs", message.guild.roles.size, inline)
    .addField("Cʜᴀɴɴᴇʟs", message.guild.channels.size, inline)
    .addField("Jᴏɪɴᴇᴅ Aᴛ", message.member.joinedAt)
    .addField("Cʀᴇᴀᴛᴇᴅ Aᴛ", ${message.guild.createdAt})
    .setFooter();

    message.channel.send(serverembed);

    message.delete();
}
}
