module.exports = {
    name: 'help',
    description: "Displays available commands.",
    execute(message, args) {
        const Discord = require('discord.js');
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ff3300')
            .setTitle('d.srupt help')
            //.setURL('https://community.dcraft.net/support')
            //.setAuthor('Edward', 'https://dcraft.net/wp-content/uploads/2020/06/server-icon-dark-circle.png')
            //.setDescription('Here are the available d.craft ranks and their features!')
            //.setThumbnail('https://dcraft.net/wp-content/uploads/2020/06/dtechlogo-transparent.png')
            /*.addFields(
                {name: 'A field!', value: 'A value!'},
                {name: '\u200B', value: '\u200B'},
                {name: 'Inline field!', value: 'Inline value!', inline: true},
                {name: 'Inline field!', value: 'Inline value!', inline: true},
            )*/
            .addField('d.ping', 'does what you think it does', false)
            .addField('d.yt', 'sends a link to the glorious d.craft YouTube', false)
            .addField('d.verify', 'super high level tactic, remember it, yeah?', false)
            .addField('d.play // d.skip // d.stop // d.np // d.q // d.pause // d.resume', 'low-level "music commands"', false)
            .addField('d.ranks', 'displays d.craft ranks', false)
            .addField('d.help', 'listed here to make bot look more feature-filled', false)

            //.setImage('https://dcraft.net/wp-content/uploads/2020/05/2020-01-16_19.10.07.png')
            //.setTimestamp()
            //.setFooter('For more information, click the d.craft ranks title above!', 'https://dcraft.net/wp-content/uploads/2020/03/server-icon-dark-outline-1.png');
        message.channel.send(exampleEmbed);
    }
};