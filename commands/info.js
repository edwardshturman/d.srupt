module.exports = {
    name: 'info',
    description: 'Sends d.craft server info', // NOTE: deprecated, replaced with manually sending screenshots + info
    execute (message, args) {
        const Discord = require('discord.js');

        // Server IP
        const ipEmbed = new Discord.MessageEmbed()
            .setColor('#9B4F07')
            .setTitle('IP')
            .setDescription('**dcraft.net**')
            .setThumbnail("https://dcraft.net/wp-content/uploads/2020/09/server-icon-darker-circle.png");
        message.channel.send(ipEmbed);

        // Divider
        message.channel.send('<:dlineleft:777449590718070795><:dlinecenter:777449590974185474><:dlineright:777449591179182110> <:dscord:777453385443573771> ***SERVERS*** <:dscord:777453385443573771> <:dlineleft:777449590718070795><:dlinecenter:777449590974185474><:dlineright:777449591179182110>');

        // Main world info
        const schoolServerEmbed = new Discord.MessageEmbed()
            .setColor('#ff3300')
            .setTitle('School')
            .setDescription('See the build that started it all. We built the campus, Oracle, Rollins, and more.')
            .setThumbnail('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/281/school_1f3eb.png');
        message.channel.send(schoolServerEmbed);

        // Factions info
        const factionsServerEmbed = new Discord.MessageEmbed()
            .setColor('#ff3300')
            .setTitle('Factions')
            .setDescription('Stick around for long enough and one of the mods might drop you some Netherite gear (*cough* Aidan)')
            .setThumbnail('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/281/crossed-swords_2694-fe0f.png');
        message.channel.send(factionsServerEmbed);

        // Survival info
        const survivalServerEmbed = new Discord.MessageEmbed()
            .setColor('#ff3300')
            .setTitle('Survival')
            .setDescription('Chill Towny world with no out-of-borders PVP — for those that want a more peaceful Factions')
            .setThumbnail("https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/93/Grass_Block_JE7_BE6.png/revision/latest?cb=20200830143209");
        message.channel.send(survivalServerEmbed);

        // Minigames info
        const minigamesServerEmbed = new Discord.MessageEmbed()
            .setColor('#ff3300')
            .setTitle('Minigames')
            .setDescription('Bedwars, Skyblock, and CTF')
            .setThumbnail("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/281/bed_1f6cf-fe0f.png");
        message.channel.send(minigamesServerEmbed);
    }
};
