//FIRST TEST HANDLER IS WORKING OR NOT
module.exports = {
  name: "ping",
  description: "Pinging The Bot.",
  execute(client, message) {
    message.channel.send("Pong! 69.69ms");
  }
};
