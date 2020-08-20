const {Client, Util} = require('discord.js');
const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const queue = new Map();

module.exports = {
    name: 'play',
    description: "The play command.",
<<<<<<< HEAD
    async execute(message, args) {
        /* **************************************************
=======
    execute(message, args) {
>>>>>>> parent of e0cd312... Testing separate command files again with play.js
        const ytdl = require('ytdl-core');
        const servers = {};
        function play(connection, message) {

            const server = servers[message.guild.id];

            message.react('👍');

            server.dispacher = connection.play(ytdl(server.queue[0], {filter: "audioonly"}));

            server.queue.shift();

            server.dispacher.on("finish", function(){
                if(server.queue[0]) {
                    play(connection, messsage);
                }

                else {
                    connection.disconnect();
                }
            })
        }

        if(!args[0]) {
            message.channel.send(':musical_note: `>>` Please provide a link to play!');
            return;
        }

        if(!message.member.voice.channel) {
            message.channel.send(':musical_note: `>>` You need to be connected to a voice channel to play!');
            return;
        }

        if(!servers[message.guild.id]) servers[message.guild.id] = {
            queue: []
        };

        const server = servers[message.guild.id];

        server.queue.push(args[0]);

        if(!message.member.voice.connection) message.member.voice.channel.join().then(function(connection) {
            connection.voice.setSelfDeaf(true);
            play(connection, message);
        })

    }
<<<<<<< HEAD
         ************************************************** */


        const serverQueue = queue.get(message.guild.id);
        const voiceChannel = message.member.voice.channel;

        // Checks to see if user is connected to a voice channel.
        if (!voiceChannel) return message.channel.send(':musical_note: `>>` You need to be connected to a voice channel to play!');

        // Checks for bot permissions to connect and play music (speak).
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send(':musical_note: `>>` I don\'t have permissions to connect to your voice channel!');
        if (!permissions.has('SPEAK')) return message.channel.send('I don\'t have permissions to play music (speak) in your voice channel!');

        /* ****************************** YouTube search
        try {
            const video = await youtube.getVideoByID(url);
        } catch {
            try {
                const videos = await youtube.searchVideos(searchString, 1);
                var video = await youtube.getVideoByID(videos[0].id);
            } catch {
                return message.channel.send(':musical_note: `>>` Could not find a song by that name!');

            }
        }

         YouTube search ****************************** */

        const songInfo = await ytdl.getInfo(args[0]);
        const song = {
            title: Util.escapeMarkdown(songInfo.videoDetails.title),
            url: songInfo.videoDetails.video_url,
            author: songInfo.videoDetails.author

            /* ****************************** YouTube search
            id: video.id,
            title: Util.escapeMarkdown(video.title),
            url: `https://www.youtube.com/watch?v=${video.id}`,
            author: video.channelTitle,
            authorThumbnail: video.channel.thumbnails
            YouTube search ****************************** */
        };

        if (!serverQueue) {
            const queueConstruct = {
                textChannel: message.channel,
                voiceChannel: voiceChannel,
                connection: null,
                songs: [],
                volume: 5,
                playing: true,
                lastRequest: message.channel.lastMessage
            };

            queue.set(message.guild.id, queueConstruct);

            queueConstruct.songs.push(song);

            try {
                message.react('👍');
                const connection = await voiceChannel.join();
                queueConstruct.connection = connection;
                queueConstruct.lastRequest = message.channel.lastMessage;
                await connection.voice.setSelfDeaf(true);
                play(message.guild, queueConstruct.songs[0]);
            } catch (error) {
                console.log(`There was an error connecting to the voice channel: ${error}`);
                queue.delete(message.guild.id);
            }
        } else {
            serverQueue.songs.push(song);
            message.react('👍');
            return message.channel.send(`:musical_note: \`>>\` **${song.title}** has been added to the queue!`)
        }

        return undefined;

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

    }

=======
>>>>>>> parent of e0cd312... Testing separate command files again with play.js
};