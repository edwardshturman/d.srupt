module.exports = {
    name: 'clubs',
    description: 'Sends list of d.street-supported clubs', // TODO: Refresh list of clubs for 2021-2022 school year
    execute (message, args) {
        const Discord = require('discord.js');

        // Divider
        message.channel.send('<:dlineleft:777449590718070795><:dlinecenter:777449590974185474><:dlineright:777449591179182110> <:dscord:777453385443573771> ***CLUBS*** <:dscord:777453385443573771> <:dlineleft:777449590718070795><:dlinecenter:777449590974185474><:dlineright:777449591179182110>');

        // Riot Club
        const riotEmbed = new Discord.MessageEmbed()
            .setColor('#ff3300')
            .setTitle('Riot Club')
            .setURL('https://riot.dcraft.net')
            .setDescription('Into League of Legends and/or Valorant? We\'ve got ya covered. Map play design thinking—whatever that means—comp strategy, and of course, HSEL (High School Esports League). Join the fun and sign up for Winter tryouts today!')
            .setThumbnail('https://dcraft.net/wp-content/uploads/2020/09/riot-club-background-from-valorant-site-circle.png');
        message.channel.send(riotEmbed);

        // G&A Club
        const gAndAEmbed = new Discord.MessageEmbed()
            .setColor('#ff3300')
            .setTitle('Game and Animation Club')
            .setDescription('Unity, Unreal, GameMaker Studio, we\'ve got it all. Whether you\'re a beginner looking to learn the ropes of game design, or a pro looking to compete with senio—I mean, help out the team, you\'ll do great. Stay tuned for signup info!')
            .setThumbnail('https://dcraft.net/wp-content/uploads/2020/11/GandAlogo-circular.png');
        message.channel.send(gAndAEmbed);

        // Hardware Club
        const hardwareClubEmbed = new Discord.MessageEmbed()
            .setColor('#ff3300')
            .setTitle('Hardware Club')
            .setURL('https://discord.gg/ncQAn43JXG')
            .setDescription('If you like PCs, Hardware Club is for you. We welcome any sort of technology-related discussion. Or, if you\'re interested in learning more about the inner workings of your PC and don\'t understand any of the jargon, we\'re here to help!')
            .setThumbnail("https://cdn.discordapp.com/icons/764654181012733953/d3d3c4d8f123ca750db6c4bbb3212b9e.webp?size=128");
        message.channel.send(hardwareClubEmbed);
    }
};
