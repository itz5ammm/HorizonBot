const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "mute",
  description: "Mute anyone who break rules",
  category: "moderation",
  usage: "mute <@mention> <reason>",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "Sorry but you do not have permission to mute anyone"
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("Missing Perms, Make Sure I Have The MANAGE_ROLES Perm.");

    const user = message.mentions.members.first();
    
    if(!user) {
      return message.channel.send("Please mention the member to who you want to mute")
    }
    
    if(user.id === message.author.id) {
      return message.channel.send("Can't Mute, The User Is A Mod/Admin.");
    }
    
    
    let reason = args.slice(1).join(" ")
    
    
    if(!reason) {
      return message.channel.send("Please Give the reason to mute the member")
    }
    
  //TIME TO LET MUTED ROLE
    
    let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
    
    
      if(!muterole) {
      return message.channel.send("This server do not have role with name `Muted`")
    }
    
    
   if(user.roles.cache.has(muterole)) {
      return message.channel.send("Given User is already muted")
    }
    
  
    
    
    user.roles.add(muterole)
    
let embed = new MessageEmbed()
    .setTitle("Muted")
    .setColor("00FFFF")
    .setDescription(`**${message.mentions.users.first().username}** Was Muted | \`${reason}\``)
    .setFooter(`Case: Mute`)
    .setTimestamp();
    
user.send(`You Were Muted In **${message.guild.name}** | \`${reason}\``)
    
    
//WE ARE DONE HERE 
    
  }
}
  };
