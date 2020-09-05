const { MessageEmbed } = require("discord.js");
const { inviteURL } = require("../config.json");
module.exports = {
  name: "invite",
  description: "Iɴᴠɪᴛᴇ Tʜᴇ Bᴏᴛ Tᴏ Yᴏᴜʀ Sᴇʀᴠᴇʀ.",
  category: "Info",
  execute(client, message, args) {
    let embed = new MessageEmbed()
      .setTitle("Aᴅᴅ Tʜᴇ Bᴏᴛ Tᴏ Yᴏᴜʀ Sᴇʀᴠᴇʀ!")
      .setColor("BLACK")
      .setDescription(
        `[Invite Here](https://discord.com/api/oauth2/authorize?client_id=742375154654380082&permissions=8&scope=bot)`,
        true
      )
      .addField(
        "Jᴏɪɴ Sᴜᴘᴘᴏʀᴛ Sᴇʀᴠᴇʀ!",
        `[Join Here](https://discord.gg/UuXQMBm)`,
        true
      );

    return message.channel.send(embed);
  }
};
