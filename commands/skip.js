module.exports = {
    name: 'skip',
    description: 'The skip command.',
    execute (message, args) {
        const servers = {};
        const server = servers[message.guild.id];

        if (server.dispacher) server.dispacher.end();
        message.channel.send('Skipping!');
    }
};
