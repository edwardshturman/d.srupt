module.exports = {
    name: 'ranks',
    description: 'Fetches d.craft ranks',
    execute (message, args) {
        const Discord = require('discord.js');
        const ranksEmbed = new Discord.MessageEmbed()
            .setColor('#ff3300')
            .setTitle('d.craft ranks')
            .setURL('https://community.dcraft.net/support')
            .setDescription('Here are the available d.craft ranks and their features!')
            .addField('Dragon', ':notes: `Control music in Discord`\n:speech_balloon: `Color and format in chat`\n:art: `Sign color and formatting`\n:sparkles: `Special prefix`\n<:elytra:742960266702094436> `Elytra at spawn`\n:crescent_moon: `See the building in its beautiful nighttime mode!`\n:moneybag: `Low on d.coins? No problem! Now you\'re able to take out a loan.`\n<:enderchest:742961065628794911> `Enjoy your own portable Enderchest in non-survival gamemodes`\n<:firework:742961394110038106> `Access fireworks via commands!`\n:star2: `Priority server joining`\n:hash: `Access to early updates channel and ability to comment on updates before they launch`\n<:canvascbl:742961937020878930> `See grades via CanvasCBL`', true)
            .addField('Hydra', '**Everything in Dragon, plus:**\n:pen_ballpoint: `Nickname editing`\n<:crafting_table:742964601943228506> `Show crafting recipe by command`\n<:grass_block:742965330418204746> `You know those 20 x 20 plots? Say goodbye—we\'re giving you your own world!`', true)
            .addField('Leviathan', '**Everything in Hydra, plus:**\n:bell: `Coordinate updates with mods`\n:mega: `Design server-wide announcements—subject to review`', true)
            .setFooter('For more information, click the d.craft ranks title above!', 'https://dcraft.net/wp-content/uploads/2020/03/server-icon-dark-outline-1.png');
        message.channel.send(ranksEmbed);
    }
};
