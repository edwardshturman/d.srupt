module.exports = {
    name: 'stop',
    description: 'The stop command.',
    execute (message, args) {
        const servers = {};
        const server = servers[message.guild.id];

        if (message.member.voice.connection) {
            for (const i = server.queue.length - 1; i >= 0; i--) {
                server.queue.splice(i, 1);
            }

            server.dispacher.end();
        }

        if (message.guild.voice.connection) {
            message.guild.voice.connection.disconnect();
            message.channel.send(':musical_note: `>>` Stopping queue! :wave:');
        }
    }
};
