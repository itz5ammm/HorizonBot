const db = require("quick.db");
const discord = require("discord.js");

module.exports = {
  name: "status",
  description: "Change the bot status",
  usage: "status <here>",
  execute: async (client, message, args) => {
    //OWNER ONLY COMMAND
    if (!message.author.id === "606305489772609558") {
      return message.channel.send(
        "Tʜɪs Cᴏᴍᴍᴀɴᴅ Cᴀᴍ Bᴇ Oɴʟʏ Exᴇᴄᴜᴛᴇᴅ Bʏ Tʜᴇ Oᴡɴᴇʀ"
      );
    }
    //ARGUMENT
    if (!args.length) {
      return message.channel.send("Pʟᴇᴀsᴇ Gɪᴠᴇ A Sᴛᴀᴛᴜs Mᴇssᴀɢᴇ.");
    }

    db.set(`status`, args.join(" "));
    await message.channel.send("Uᴘᴅᴀᴛᴇᴅ Bᴏᴛ Sᴛᴀᴛᴜs.");
    process.exit(1);
  }
};
