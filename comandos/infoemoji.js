const Discord = require("discord.js");


module.exports.run = async (bot,message,args) =>
{
	let emoji = args[0];
	const emojiid = emoji.replace(/(?<=:).*?(?=:)/g, '').replace(/[:\s><]/g, '');
	const emojiurl = `https://cdn.discordapp.com/emojis/${emojiid}.png`;
	const emojiCA = message.guild.emojis.createdAt;
	//const emojinombre = emoji.guild.name;
	const creador = emojiid.client;

	let emojiembed = new Discord.RichEmbed()
	.setColor("GREEN")
	//.attachFile(emojiurl)
	.setImage(emojiurl)
	.setTimestamp()
	//.addField(`Nombre del emoji: `,`${emojinombre}`)
	.addField('ID del emoji: ',`${emojiid}`)
	.addField('URL: ', `${emojiurl}`)

	message.channel.send(emojiembed)
}

module.exports.help = {
	name: "infoemoji"
}