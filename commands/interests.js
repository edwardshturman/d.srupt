module.exports = {
    name: 'interests',
    description: 'Sends list of interest groups with reaction roles.',
    execute (message, args) {
        const Discord = require('discord.js');
        message.channel.send('<:dlineleft:778112794120945724><:dlinecenter:778112794117406740><:dlineright:778112793882525717> <:dscord:778113952860209173> ***INTEREST GROUPS*** <:dscord:778113952860209173> <:dlineleft:778112794120945724><:dlinecenter:778112794117406740><:dlineright:778112793882525717>');
        const interestGroupsEmbed = new Discord.MessageEmbed()
            .setColor('#ff3300')
            .setTitle('d.tech Discord interest groups')
            // .setURL('https://community.dcraft.net/interest-groups')
            .setDescription('Think: clubs, but more open! Opt-in, opt-out whenever.')
            .addField(':computer: Development', 'stuff goes here', true)
            .addField(':art: Design', 'stuff also goes here', true)
            .addField(':gear: Productivity', 'guess what, stuff goes here too', true)
            .setFooter('React to opt-in or opt-out!', 'https://dcraft.net/wp-content/uploads/2020/09/d-scord-draft-copy.png');
        message.channel.send(interestGroupsEmbed);
    }
};
