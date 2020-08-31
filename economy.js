const config = require("./config.json");
/*
If you want to make discord-economy guild based you have to use message.author.id + message.guild.id as ID for example:
eco.Daily(message.author.id + message.guild.id)
 
This will create a unique ID for each guild member
*/

//Requiring Packages
const Discord = require("discord.js"); //This can also be discord.js-commando or other node based packages!
const eco = require("discord-economy");
const { MessageEmbed } = require("discord.js");
//Create the bot client
const client = new Discord.Client();

//Set the prefix and token of the bot.
const settings = {
  prefix: "+"
};

//Whenever someone types a message this gets activated.
//(If you use 'await' in your functions make sure you put async here)
client.on("message", async message => {
  //This reads the first part of your message behind your prefix to see which command you want to use.
  var command = message.content
    .toLowerCase()
    .slice(settings.prefix.length)
    .split(" ")[0];

  //These are the arguments behind the commands.
  var args = message.content.split(" ").slice(1);

  //If the message does not start with your prefix return.
  //If the user that types a message is a bot account return.
  if (!message.content.startsWith(settings.prefix) || message.author.bot)
    return;

  if (command === "balance") {
    var output = await eco.FetchBalance(message.author.id);
    const balance = new Discord.RichEmbed()
      .setColor("070707")
      .setDescription(
        `Hey ${message.author.tag}! You own ${output.balance} coins.`
      );
    message.channel.send(balance);
  }

  if (command === "daily") {
    var output = await eco.Daily(message.author.id);
    //output.updated will tell you if the user already claimed his/her daily yes or no.

    if (output.updated) {
      var profile = await eco.AddToBalance(message.author.id, 100);
      const daily = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(
        `You claimed your daily coins successfully! You now own ${profile.newbalance} coins.`
      );
    message.channel.send(daily);
    
    } else {
      let embed = new MessageEmbed()
      .setColor("RANDOM")
          .setDescription(
        `Sorry, you already claimed your daily coins!\nBut no worries, over ${output.timetowait} you can daily again!`
      );
   message.channel.send(embed);
    }
  }

  if (command === "leaderboard") {
    //If you use discord-economy guild based you can use the filter() function to only allow the database within your guild
    //(message.author.id + message.guild.id) can be your way to store guild based id's
    //filter: x => x.userid.endsWith(message.guild.id)

    //If you put a mention behind the command it searches for the mentioned user in database and tells the position.
    if (message.mentions.users.first()) {
      var output = await eco.Leaderboard({
        filter: x => x.balance > 50,
        search: message.mentions.users.first().id
      });
    const leaderboard = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(
        `The user ${
          message.mentions.users.first().tag
        } is ${output} on the leaderboard!`
      );
    message.channel.send(leaderboard);
    
    } else {
      eco
        .Leaderboard({
          limit: 3, //Only takes top 3 ( Totally Optional )
          filter: x => x.balance > 50 //Only allows people with more than 100 balance ( Totally Optional )
        })
        .then(async users => {
          //make sure it is async

          if (users[0])
            var firstplace = await client.fetchUser(users[0].userid); //Searches for the user object in discord for first place
          if (users[1])
            var secondplace = await client.fetchUser(users[1].userid); //Searches for the user object in discord for second place
          if (users[2])
            var thirdplace = await client.fetchUser(users[2].userid); //Searches for the user object in discord for third place

          let leaboard = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setDescription(`My Global leaderboard:
 
1 - ${(firstplace && firstplace.tag) || "Nobody Yet"} : ${(users[0] &&
            users[0].balance) ||
            "None"}
2 - ${(secondplace && secondplace.tag) || "Nobody Yet"} : ${(users[1] &&
            users[1].balance) ||
            "None"}
3 - ${(thirdplace && thirdplace.tag) || "Nobody Yet"} : ${(users[2] &&
            users[2].balance) ||
            "None"}`);
       message.channel.send(leaboard);
     
      });
  }
}
  
  if (command === "transfer") {
    var user = message.mentions.users.first();
    var amount = args[1];

    if (!user) {
      let embed = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription("Mention the user you want to send money to!");
      
      message.channel.send(embed);
      }
    
    if (!amount) { 
      let embed = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription("Specify the amount you want to pay!");

      message.channel.send(embed);
      }
    
    var output = await eco.FetchBalance(message.author.id);
    if (output.balance < amount) {
      let embed = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription(
        "You have fewer coins than the amount you want to transfer!"
      );
message.channel.send(embed);
    }
  
    var transfer = await eco.Transfer(message.author.id, user.id, amount);
    let embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(
      `Transfering coins successfully done!\nBalance from ${message.author.tag}: ${transfer.FromUser}\nBalance from ${user.tag}: ${transfer.ToUser}`
    );
 message.channel.send(embed);
  
  }

  if (command === "coinflip") {
    var flip = args[0]; //Heads or Tails
    var amount = args[1]; //Coins to gamble

    if (!flip || !["heads", "tails"].includes(flip)) {
      let embed = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription("Please specify the flip, either heads or tails!");
      message.channel.send(embed);
      }
    
    if (!amount) { 
      let embed = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription("Specify the amount you want to gamble!");
message.channel.send(embed);
      }
      
    var output = await eco.FetchBalance(message.author.id);
    if (output.balance < amount) {
      let embed = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription(
        "You have fewer coins than the amount you want to gamble!"
      );
message.channel.send(embed);
      }
    
    var gamble = await eco
      .Coinflip(message.author.id, flip, amount)
      .catch(console.error);
    let embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`You ${gamble.output}! New balance: ${gamble.newbalance}`);
 
  message.channel.send(embed);
  }

  if (command === "dice") {
    var roll = args[0]; //Should be a number between 1 and 6
    var amount = args[1]; //Coins to gamble

    if (!roll || ![1, 2, 3, 4, 5, 6].includes(parseInt(roll)))
      return message.reply(
        "Specify the roll, it should be a number between 1-6"
      );
    if (!amount) return message.reply("Specify the amount you want to gamble!");

    var output = eco.FetchBalance(message.author.id);
    if (output.balance < amount)
      return message.reply(
        "You have fewer coins than the amount you want to gamble!"
      );

    var gamble = await eco
      .Dice(message.author.id, roll, amount)
      .catch(console.error);
    message.reply(
      `The dice rolled ${gamble.dice}. So you ${gamble.output}! New balance: ${gamble.newbalance}`
    );
  }

  if (command === "work") {
    //I made 2 examples for this command! Both versions will work!

    var output = await eco.Work(message.author.id);
    //50% chance to fail and earn nothing. You earn between 1-100 coins. And you get one out of 20 random jobs.
    if (output.earned == 0)
      return message.reply(
        "Awh, you did not do your job well so you earned nothing!"
      );
    message.channel.send(`${message.author.username}
You worked as a \` ${output.job} \` and earned :money_with_wings: ${output.earned}
You now own :money_with_wings: ${output.balance}`);

    var output = await eco.Work(message.author.id, {
      failurerate: 30,
      money: Math.floor(Math.random() * 500),
      jobs: [
        "cashier",
        "shopkeeper",
        "stripper",
        "manager",
        "bartender",
        "pornstar"
      ]
    });
    //10% chance to fail and earn nothing. You earn between 1-500 coins. And you get one of those 3 random jobs.
    if (output.earned == 0)
      return message.reply(
        "Awh, you did not do your job well so you earned nothing!"
      );

    message.channel.send(`${message.author.username}
You worked as a \` ${output.job} \` and earned :money_with_wings: ${output.earned}
You now own :money_with_wings: ${output.balance}`);
  }

  if (command === "slots") {
    var amount = args[0]; //Coins to gamble

    if (!amount) return message.reply("Specify the amount you want to gamble!");

    var output = await eco.FetchBalance(message.author.id);
    if (output.balance < amount)
      return message.reply(
        "You have fewer coins than the amount you want to gamble!"
      );

    var gamble = await eco
      .Slots(message.author.id, amount, {
        width: 3,
        height: 1
      })
      .catch(console.error);
    message.channel.send(gamble.grid); //Grid checks for a 100% match vertical or horizontal.
    message.reply(`You ${gamble.output}! New balance: ${gamble.newbalance}`);
  }
});

//Your secret token to log the bot in. (never show this to anyone!)
client.login(config.token);
