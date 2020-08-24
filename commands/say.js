module.exports = {
  name: "say",
  category: "Fun",
  description: "Say The Message Through The Bot",
  usage: "say <text>",
  execute: async (bot, message, args) => {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => {});
    message.channel.send(sayMessage);
  }
};
