module.exports = {
    name: "clear",
    aliases: ["clear", "c"],
    description: "Clears chat",

    execute(message, args) {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            message.delete();
            let embed = new MessageEmbed()
            .setColor("070707")
            .('You Must Have Manage Message');
            return;
        };
        if (!args[1]) return message.channel.send('How many messages do you want to clear? (You provided none!)');
        if (isNaN(args[1])) return message.channel.send(`${args[1]} is not a number!`);
        message.channel.bulkDelete(args[1]);
    }
}