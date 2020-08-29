const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "clear",
  description: "Clears Messages Of Mentioned Amount.",
  category: "Moderation",
  execute: async (client, message, args) => {
    const deleteCount = parseInt(args[0]) + 1;

    // get the delete count, as an actual number.
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      let embed = new MessageEmbed()
        .setColor("070707")
        .setDescription("Yᴏᴜ Dᴏɴ'ᴛ Hᴀᴠᴇ Pᴇʀᴍs Tᴏ Usᴇ Tʜɪs.");
      message.channel.send(embed);
    } else {
      // Ooooh nice, combined conditions. <3
      if (!deleteCount || deleteCount < 1 || deleteCount > 100) {
        let embed = new MessageEmbed()
          .setColor("070707")
          .setDescription("Pʀᴏᴠɪᴅᴇ Tʜᴇ Nᴜᴍʙᴇʀ Oғ Mᴇssᴀɢᴇs.");
        message.channel.send(embed);
      }

      await message.channel.bulkDelete(deleteCount).catch(console.log);
    }
  }
};
