module.exports = {
    name: 'interests',
    description: 'Sends list of interest groups with reaction roles.',
    execute (message, args) {
        const Discord = require('discord.js');
        message.channel.send('<:dlineleft:777449590718070795><:dlinecenter:777449590974185474><:dlineright:777449591179182110> <:dscord:777453385443573771> ***INTEREST GROUPS*** <:dscord:777453385443573771> <:dlineleft:777449590718070795><:dlinecenter:777449590974185474><:dlineright:777449591179182110>');
        const interestGroupsEmbed = new Discord.MessageEmbed()
            .setColor('#ff3300')
            .setTitle('d.tech Discord interest groups')
            // .setURL('https://community.dcraft.net/interest-groups')
            .setDescription('Think: clubs, but more open! Opt-in, opt-out whenever.')
            .addField(':computer: Development', 'stuff goes here', true)
            .addField(':art: Design', 'stuff also goes here', true)
            .addField(':gear: Productivity', 'guess what, stuff goes here too', true)
            .setFooter('React to opt-in or opt-out!', 'https://dcraft.net/wp-content/uploads/2020/09/d-scord-draft-copy.png');
        message.channel.send(interestGroupsEmbed).then(interestGroupsEmbed => {
            interestGroupsEmbed.react('💻')
                .then(interestGroupsEmbed.react('🎨'))
                .then(interestGroupsEmbed.react('⚙️'));
        });
    }
};
