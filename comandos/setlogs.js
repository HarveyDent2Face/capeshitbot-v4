const Discord = require("discord.js");
const fs = require("fs");
//let logs = JSON.parse(fs.readFileSync("./logs.json","utf8"));


module.exports.run = async(bot, message, args) => {
function getChannelFromMention(mention) {

    if (!mention) return;
    if (mention.startsWith('<#') && mention.endsWith('>')) {
        mention = mention.slice(2, -1);
        console.log(mention)
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
			return message.reply('Menciona un canal para crear los logs');
		}

		//return message.channel.send(`${canal.name}`);
		const supercanal = canal.name;
		let logs = JSON.parse(fs.readFileSync("./logs.json","utf8"));
		//const idvaina = getChannelFromMention("id");
	logs[message.guild.id] = {
		logs: supercanal,
		id: canal.id
		
	};

	fs.writeFile("./logs.json",JSON.stringify(logs),(err)=>{

		if(err) console.log(err);
	});
    	
    	message.channel.send(`Canal de logs definido: ${canal.name}`);
		//return message.channel.send(`${canal.name}`);
	}
	


}

module.exports.help = {

	name: "setlogs"
}