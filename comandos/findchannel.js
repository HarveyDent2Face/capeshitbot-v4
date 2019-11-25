const Discord = require("discord.js");


module.exports.run = async(bot, message, args) => {

function getChannelFromMention(mention) {

    if (!mention) return;
    if (mention.startsWith('<#') && mention.endsWith('>')) {
        mention = mention.slice(2, -1);
        if (mention.startsWith('!')) {
            mention = mention.slice(1);
        }
        return bot.channels.get(mention);
    }
}

if (args[0]) {
		const canal = getChannelFromMention(args[0]);
		//const supercanal = canal.name;
		if (!canal) {
			return message.reply('Menciona un canal');
		}

		//return message.channel.send(`${canal.name}`);
		const supercanal = canal.name;
		return message.channel.send(supercanal);
	}
}

module.exports.help = {

	name: "findchannel"
}