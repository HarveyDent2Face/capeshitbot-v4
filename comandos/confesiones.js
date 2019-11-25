const Discord = require("discord.js");


module.exports.run = async(bot, message, args) => {

	let confesion = args.join(" ");
	let confesiona = args.join(" ");
	let a = args.join(" ");
	let usuario = message.author.username;
	message.delete().catch();
	let confessionchannel = message.guild.channels.find(channel => channel.name === '│💬│confesiones');
	if(!confessionchannel) return message.channel.send("No puedo encontrar el canal de incidentes");

	let conembed = new Discord.RichEmbed()
	//.setAuthor(message.author.username)
	.setDescription(`Hey Sue, huelo una confesión...`)
	.setColor('RANDOM')
	.setThumbnail("https://www.superherodb.com/pictures2/portraits/10/050/1381.jpg")
	.addField(`Por ${usuario}`,confesion)
	.setTimestamp();

	let conaembed = new Discord.RichEmbed()
	.setDescription(`Alguien ha confesado algo`)
	.setColor('RANDOM')
	.setThumbnail("https://www.superherodb.com/pictures2/portraits/10/050/1381.jpg")
	.addField("Por anónimo",confesiona)
	.setTimestamp();

	if(args[0]!=="an") confessionchannel.send(conembed)

	if(args[0]=="an") confessionchannel.send(conaembed)



	
}

module.exports.help = {

	name: "confession"
}