module.exports = {
    name: 'suggest',
    description: 'Suggestion command',
    execute(message, args) {
        const Discord = require('discord.js');
        const serverSuggestionsChannel = message.guild.channels.cache.get('881976684105072650');
        const mcSuggestionsChannel = message.guild.channels.cache.get('610552731555594240');
        if (!serverSuggestionsChannel) return message.channel.send('Server suggestions channel does not exist!');
        if (!mcSuggestionsChannel) return message.channel.send('d.craft suggestions channel does not exist!');
        if (!args[0]) return message.delete();

        let messageArgs = args.join(' ');
        if (args[0] === 'mc') {
            const embed = new Discord.MessageEmbed()
                .setColor('#ff3300')
                .setAuthor(message.member.displayName, message.author.displayAvatarURL({dynamic: true}))
                .setTitle('New suggestion:')
                .setDescription(args.slice(1).join(' '));
            mcSuggestionsChannel.send(embed)
                .then((msg) => {
                    msg.react('👍');
                    msg.react('👎');
                    message.delete();
                }).catch((err) => {
                    throw err;
            });
        }
        else if (args[0] !== 'mc') {
            const embed = new Discord.MessageEmbed()
                .setColor('#ff3300')
                .setAuthor(message.member.displayName, message.author.displayAvatarURL({dynamic: true}))
                .setTitle('New suggestion:')
                .setDescription(messageArgs);

            serverSuggestionsChannel.send(embed)
                .then((msg) => {
                    msg.react('👍');
                    msg.react('👎');
                    message.delete();
                }).catch((err) => {
                throw err;
            });
        }
    }
};