module.exports = {
    name: 'play',
    description: "The play command.",
    execute(message, args) {
        /* **************************************************
    execute(message, args) {
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
         ************************************************** */
    }
};