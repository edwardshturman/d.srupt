// Dependencies
const Discord = require('discord.js');
require('dotenv').config();
const fs = require('fs');

// Launch instance of Discord
const client = new Discord.Client({ partials: ['MESSAGE', 'GUILD_MEMBER', 'REACTION', 'USER'] });

// Prefix
const prefix = 'd.';

// Create collection of commands
client.commands = new Discord.Collection();

// Check for correct filetype (JavaScript) and require command files when running given command
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// Announce on launch
client.once('ready', () => {
    console.log('d.srupt is online!');
    client.user.setActivity('over you <3', { type: 'WATCHING' }).catch(console.error);
});

// Check to make sure a message starts with the d! prefix, and that it's not sent by a bot
client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot || message.author.id !== '373272898368176129') return; // Note: added check, return if not sent by me -Edward

    // identify arguments by a space in the command and properly format
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if (command === 'yt') {
        client.commands.get('yt').execute(message, args);
    } else if (command === 'verify') {
        client.commands.get('verify').execute(message, args);
    } else if (command === 'ranks') {
        client.commands.get('ranks').execute(message, args);
    } else if (command === 'help') {
        client.commands.get('help').execute(message, args);
    } else if (command === 'clubs') {
        client.commands.get('clubs').execute(message, args);
    } else if (command === 'interests') {
        client.commands.get('interests').execute(message, args);
    } else if (command === 'list') {
        client.commands.get('list').execute(message, args);
    } else if (command === 'scribe') {
        client.commands.get('scribe').execute(message, args);
    } else if (command === 'craft-server-info') {
        client.commands.get('info').execute(message, args);
    }

}).on('error', () => {
    console.log(error);
});

// ****************************** REACTION LISTENERS ******************************

// Interest groups

// Fetch interestGroupsEmbed in #interests channel
client.on('ready', () => {
    client.channels.cache.get('781416823367008266').messages.fetch('787039995105378326');
});

// Listen for reactions to the interestGroupsEmbed message and give roles upon reaction
client.on('messageReactionAdd', async (reaction, user) => {

    const message = reaction.message;
    const emoji = reaction.emoji;

    if (reaction.partial) {
        try {
            await reaction.fetch();
        } catch (error) {
            console.log('Something went wrong when fetching the message: ', error);
            return;
        }
    }

    if (message.id === '787039995105378326') {
        if (emoji.name === '💻') {
            message.guild.members.fetch(user.id).then(member => {
                member.roles.add('782480483228450827');
                console.log('Confirming [Interest: Dev] role given.');
            });

        } else if (emoji.name === '🎨') {
            message.guild.members.fetch(user.id).then(member => {
                member.roles.add('782480615454539777');
                console.log('Confirming [Interest: Design] role given.');
            });

        } else if (emoji.name === '🖊️') {
            message.guild.members.fetch(user.id).then(member => {
                member.roles.add('782480538975207424');

                console.log('Confirming [Interest: Productivity] role given.');
            });

        }
    }
});

// Listen for reaction removals on the interestGroupsEmbed message and take roles upon removal
client.on('messageReactionRemove', async (reaction, user) => {

    const message = reaction.message;
    const emoji = reaction.emoji;

    if (reaction.partial) {
        try {
            await reaction.fetch();
        } catch (error) {
            console.log('Something went wrong when fetching the message: ', error);
            return;
        }
    }

    if (message.id === '787039995105378326') {
        if (emoji.name === '💻') {
            message.guild.members.fetch(user.id).then(member => {
                member.roles.remove('782480483228450827');
                console.log('Confirming [Interest: Dev] role removed.');
            });

        } else if (emoji.name === '🎨') {
            message.guild.members.fetch(user.id).then(member => {
                member.roles.remove('782480615454539777');
                console.log('Confirming [Interest: Design] role removed.');
            });

        } else if (emoji.name === '🖊️') {
            message.guild.members.fetch(user.id).then(member => {
                member.roles.remove('782480538975207424');

                console.log('Confirming [Interest: Productivity] role removed.');
            });

        }
    }
});

// Login to the bot
client.login(process.env.TOKEN);
