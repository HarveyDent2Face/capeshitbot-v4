const Discord = require("discord.js");
const deads = new Discord.Attachment('../')

module.exports.run = async(bot, message, args) => {
	let autor = message.author.username;
	number = 6;	
	imageNumber = Math.floor (Math.random() * (number - 1 + 1)) +1;
	const fila = new Discord.Attachment("../DiscordBot/data/suicide/" + imageNumber + ".png")
	//message.channel.send(`¡¡¡**${autor} golpeó/pateó a ${designado}!!!**`,{files: ["../DiscordBot/data/golpes/" + imageNumber + ".png"]} )

	let suicidembed = new Discord.RichEmbed()
	.setTitle(`Oh no...`)
	.setDescription(`¡¡¡**${autor} se suicidó!!!**`)
	.attachFile(fila)
	.setColor('BLACK')
	.setImage('attachment://' + imageNumber + '.png')

	message.channel.send(suicidembed)
}

module.exports.help = {

	name: "suicide"
}
