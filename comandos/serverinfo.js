const Discord = require("discord.js");


module.exports.run = async (bot,message,args) =>
{

	let avy = message.guild.iconURL;
	let servermebed = new Discord.RichEmbed()
	.setTitle("Información del servidor")
	.setThumbnail(avy)
	.setColor("#D1F1FB")
	.setTimestamp()
	.addField("El nombre del servidor es: ", `${message.guild.name}`,true)
	.addField("Creado en: ", `${message.guild.createdAt}`,true)
	.addField("ID del servidor: ", `${message.guild.id}`,true)
	.addField("Número de miembros: ",`${message.guild.memberCount}`,true)
	//.addField("Número de roles ",`${message.guild.roles}`,true)
	.addField("Región: ", `${message.guild.region}`,true)
	.addField("Creado por: ", `${message.guild.owner}`,true);

	await message.channel.send(servermebed);
}

module.exports.help = {
	name: "serverinfo"
}