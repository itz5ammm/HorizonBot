//FIRST TEST HANDLER IS WORKING OR NOT
module.exports = {
  name: "ping",
  description: "Pinging The Bot.",
  category: "Utility",
  execute(client, message) {
    message.channel.send("Pong! 69ms");
  }
};
