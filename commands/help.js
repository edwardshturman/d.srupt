module.exports = {
    name: 'help',
    description: 'Displays available commands.',
    execute (message, args) {
        const Discord = require('discord.js');
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ff3300')
            .setTitle('d.srupt help')
            // .setURL('https://community.dcraft.net/bots')
            .setThumbnail('https://dcraft.net/wp-content/uploads/2020/09/d.srupt-v3.png')
            .addField('d.ping', 'does what you think it does', false)
            .addField('d.yt', 'sends a link to the glorious d.craft YouTube', false)
            .addField('d.verify', 'super high level tactic, remember it, yeah?', false) // testing, use role check from command and remove in production
            .addField('d.play // d.skip // d.stop // d.np // d.q // d.pause // d.resume', 'low-level "music commands"', false)
            .addField('d.ranks', 'displays d.craft ranks', false) // maybe mod-only
            .addField('d.clubs', 'displays list of d.tech gaming clubs d.games supports', false) // mod-only, remove in production
            .addField('d.list', 'displays list of d.games servers', false) // mod-only, remove in production
            .addField('d.help', 'listed here to make bot look more feature-filled', false);

        message.channel.send(exampleEmbed);
    }
};
