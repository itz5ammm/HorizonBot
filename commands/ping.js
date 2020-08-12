//FIRST TEST HANDLER IS WORKING OR NOT
module.exports = {
  name: "ping",
  description: "Ping & Latency Of The Bot.",
  execute(client, message) {
    message.channel.send("Pong!)
                        
  }
};
