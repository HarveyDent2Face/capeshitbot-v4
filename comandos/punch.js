const Discord = require("discord.js");
const deads = new Discord.Attachment('../')

module.exports.run = async(bot, message, args) => {
	let designado = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	let autor = message.author.username;
	if(designado===null) return message.channel.send("Designa al usuario");
	number = 9;	
	imageNumber = Math.floor (Math.random() * (number - 1 + 1)) +1;
	const fila = new Discord.Attachment("../DiscordBot/data/golpes/" + imageNumber + ".png")
	//message.channel.send(`¡¡¡**${autor} golpeó/pateó a ${designado}!!!**`,{files: ["../DiscordBot/data/golpes/" + imageNumber + ".png"]} )

	let punchembed = new Discord.RichEmbed()
	.setTitle(`¡Pelea, pelea!`)
	.setDescription(`¡¡¡**${autor} golpeó/pateó a ${designado}!!!**`)
	.attachFile(fila)
	.setColor('GREEN')
	.setImage('attachment://' + imageNumber + '.png')

	message.channel.send(punchembed)
}

module.exports.help = {

	name: "punch"
}
