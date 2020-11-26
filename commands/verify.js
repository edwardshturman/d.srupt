module.exports = {
    name: 'verify',
    description: 'Verifies a user.',
    execute (message, args) {
        if (message.member.roles.cache.has('720001375093653524')) {
            /* const user = message.author;

            function getUserFromMention(mention) {
                if (!mention) return;

                if (mention.startsWith('<@') && mention.endsWith('>')) {
                    mention = mention.slice(2, -1);

                if (mention.startsWith('!')) {
                    mention = mention.slice(1);
                }

                return client.users.cache.get(mention);
                mention.${user}.roles.add('720001375093653524').catch(console.error); */

            // mention.roles.add(720001375093653524).catch(console.error);

            const member = message.mentions.members.first();
            member.roles.add('720001375093653524').catch(console.error);

            function postcheck () {
                if (member.roles.cache.has('720001375093653524')) {
                    message.channel.send(`Added ${member} to the [Verified] list per request of ${message.member}. :thumbsup:`);
                } else if (!member.roles.cache.has('720001375093653524')) {
                    message.channel.send(`Could not add ${member} to the [Verified] list!`);
                }
            }
            setTimeout(postcheck, 300);

            // }
            // }
        } else {
            message.channel.send('You do not have sufficient permissions! Attempted command: **d.verify**');
        }
    }
};
