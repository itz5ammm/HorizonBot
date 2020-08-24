module.exports = {
  name: "reverse",
  description: "Reverse The Text",
  category: "Fun",
  usage: "reverse <text>",
  execute: function(bot, msg, args) {
    if (args.length < 1) {
      throw "You must input text to be reversed!";
    }
    msg.reply(
      args
        .join(" ")
        .split("")
        .reverse()
        .join("")
    );
  }
};
