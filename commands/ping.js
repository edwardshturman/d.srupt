module.exports = {
    name: 'ping',
    description: 'Does exactly what you think it does',
    execute (message, args) {
        message.channel.send('Pong!');
    }
};
