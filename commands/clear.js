const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "clear",
  description: "Clears Messages Of Mentioned Amount.",
  category: "Moderation",
  execute: async (client, message, args) => {
    const deleteCount = parseInt(args[0], 10);

    // get the delete count, as an actual number.
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescription("You don't have the permissions to use this command!");
      message.channel.send(embed);
    } else {
      // Ooooh nice, combined conditions. <3
      if (!deleteCount || deleteCount < 2 || deleteCount > 100) {
        let embed = new MessageEmbed()
          .setColor("070707")
          .setDescription("Provide The Number Of Messages.");
        message.channel.send(embed);
      }

      await message.channel.bulkDelete(deleteCount);
    }
  }
};
