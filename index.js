// Dependencies
const Discord = require('discord.js');
require('dotenv').config();
const fs = require('fs');
const queue = new Map();
const ytdl = require('ytdl-core');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyA_hyjvOfEU9u5PvhO1rUHF7d-PQdAkG5A');


// Launch instance of Discord
const client = new Discord.Client();

// Prefix
const prefix = 'd.';

// Create collection of commands
client.commands = new Discord.Collection();

// Check for correct filetype (JavaScript) and require command files when running given command
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
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
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    // for music
    const serverQueue = queue.get(message.guild.id);

    // identify arguments by a space in the command and properly format
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    // for YouTube search
    const searchString = args.slice(1).join(' ');
    const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if (command === 'yt') {
        client.commands.get('yt').execute(message, args);
    } else if (command === 'verify') {
        client.commands.get('verify').execute(message, args);
    } else if (command === 'play') {
        client.commands.get('play').execute(message, args);
    } else if (command === 'skip') {
        client.commands.get('skip').execute(message, args);
    } else if (command === 'stop') {
        client.commands.get('stop').execute(message, args);
    } else if (command === 'ranks') {
        client.commands.get('ranks').execute(message, args);
    } else if (command === 'help') {
        client.commands.get('help').execute(message, args);
    }

// ****************************** MUSIC ******************************

    else if (command === 'stop') {
        const {Client, Util} = require('discord.js');
        const ytdl = require('ytdl-core');
        const voiceChannel = message.member.voice.channel;

        if (!message.member.voice.channel) return message.channel.send(':musical_note: `>>` You need to be connected to a voice channel to stop!');
        if (!serverQueue) return message.channel.send(':musical_note: `>>` There is nothing in the queue to stop!');
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end();
        message.channel.send(':musical_note: `>>` Music stopped!');
        return undefined
    }

    else if (command === 'skip') {
        const {Client, Util} = require('discord.js');
        const voiceChannel = message.member.voice.channel;
        const queue = new Map();


        if (!message.member.voice.channel) return message.channel.send(':musical_note: `>>` You need to be in a voice channel to skip!');
        if (!serverQueue) return message.channel.send(':musical_note: `>>` There is nothing in the queue to skip!');

        serverQueue.connection.dispatcher.end();
        message.channel.send(':musical_note: `>>` Skipping current song!');
        return undefined
    }

    else if (command === 'volume') {
        if (!message.member.voice.channel) return message.channel.send(':musical_note: `>>` You need to be in a voice channel to change volume!');
        if (!serverQueue) return message.channel.send(':musical_note: `>>` There is nothing playing to change volume for!');
        if (!args[0]) return message.channel.send(`:musical_note: \`>>\` Current volume is at **${serverQueue.volume}.**`);
        if (isNaN(args[0])) return message.channel.send(':musical_note: `>>` That\'s not a valid number to change the volume to!');
        serverQueue.volume = args[0];
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5);
        message.channel.send(`:musical_note: \`>>\` Changed the volume to **${args[0]}**!`);
        return undefined
    }

    else if (command === 'np') {
        if (!serverQueue) return message.channel.send(':musical_note: `>>` There is nothing playing at the moment!');
        const whatIsPlayingEmbed = new Discord.MessageEmbed()
            .setColor('#ff3300')
            .setTitle(`Now Playing: ${serverQueue.songs[0].title}`)
            .setAuthor(`${serverQueue.songs[0].author.name/*.channelTitle*/}`, `${serverQueue.songs[0].author.avatar}`)
            //.setDescription(`**${song.title}**`)
            .setFooter(`Requested by: ${serverQueue.lastRequest.member.displayName}`, `${serverQueue.lastRequest.author.avatarURL()}`);

        message.channel.send(whatIsPlayingEmbed);

        return undefined
    }

    else if (command === 'q') {
        if(!serverQueue) return message.channel.send(':musical_note: `>>` There is nothing in the queue!');
        const queueEmbed = new Discord.MessageEmbed()
            .setColor('#ff3300')
            .setTitle(`Song Queue`)
            //.setAuthor(`${song.author.name}`, `${song.author.avatar}`)
            .setDescription(`${serverQueue.songs.map(song => `:musical_note: \`>>\` ${song.title}`).join('\n')}`);
            //.setFooter(`Requested by: ${serverQueue.textChannel.lastMessage.member.displayName}`, `${serverQueue.textChannel.lastMessage.author.avatarURL()}`);
        message.channel.send(queueEmbed);
    }

    else if (command === 'pause') {
        if (!message.member.voice.channel) return message.channel.send(':musical_note: `>>` You must be in a voice channel to pause!');
        if (!serverQueue) return message.channel.send(':musical_note: `>>` There is nothing playing to pause at the moment!');
        if (!serverQueue.playing) return message.channel.send(':musical_note: `>>` The music is already paused!');
        serverQueue.playing = false;
        serverQueue.connection.dispatcher.pause();
        message.channel.send(':musical_note: `>>` Paused!');
        return undefined
    }

    else if (command === 'resume') {
        if (!message.member.voice.channel) return message.channel.send(':musical_note: `>>` You must be in a voice channel to resume!');
        if (!serverQueue) return message.channel.send(':musical_note: `>>` There is nothing playing to resume at the moment!');
        if (serverQueue.playing) return message.channel.send(':musical_note: `>>` The music is already playing!');
        serverQueue.playing = true;
        serverQueue.connection.dispatcher.resume();
        message.channel.send(':musical_note: `>>` Resumed!');
        return undefined
    }

});

function play(guild, song) {
    const serverQueue = queue.get(guild.id);

    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return
    }

    const dispatcher = serverQueue.connection.play(ytdl(song.url, {filter: "audioonly"}))
        .on('finish', () => {
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
        })
        .on('error', error => {
            console.log(error);
        });

    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

    const nowPlayingEmbed = new Discord.MessageEmbed()
        .setColor('#ff3300')
        .setTitle(`Now Playing: ${song.title}`)
        .setAuthor(`${song.author.name}`, `${song.author.avatar}`)
        //.setDescription(`**${song.title}**`)
        .setFooter(`Requested by: ${serverQueue.lastRequest.member.displayName}`, `${serverQueue.lastRequest.author.avatarURL()}`);

    serverQueue.textChannel.send(nowPlayingEmbed);

}

// Login to the bot
client.login(process.env.TOKEN);