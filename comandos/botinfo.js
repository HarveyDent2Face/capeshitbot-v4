const Discord = require("discord.js");


module.exports.run = async(bot, message, args) => {

	const ownerID = '439635638640443400';
	const owner = bot.users.get(ownerID);

	//let botcreation = bot.createdAt();
	let infoEmbed = new Discord.RichEmbed()
	.setThumbnail("https://king-mag.com/files/2009/03/rorshachcartoon.jpg")
	.setTitle("**Información de CapeshitBot**")
	.setDescription("Todo lo que quieras saber del bot realizado por las malditas corporaciones")
	.setColor("RANDOM")
	.setTimestamp()
	.addField("¿De qué trata el bot?","CapeshitBot es un bot con temática de cómics. Desde DC, Vertigo, Indies, Marvel, etc. Si eres fan del noveno arte, este bot es el indicado para ti.")
	.addField("Para ver los comandos, escribe","cs!help")
	.addField("Fecha de creación","28 de agosto del 2019")
	.addField(`Creado por Dos Caras`, owner);
	//.addField(`Enlace de invitación. Comparte el bot con tus amigos.`, "Invite del bot: https://discordapp.com/oauth2/authorize?client_id=612516786629247001&permissions=8&scope=bot");	
//The Question#6872
	message.channel.send(infoEmbed);
	
}

module.exports.help = {

	name: "botinfo"
}