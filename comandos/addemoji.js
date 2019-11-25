const Discord = require("discord.js");


module.exports.run = async (bot,message,args) =>
{

	if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`No tienes permisos para usar eso, **${message.author.username}**`);
 	let emoji = args[0];
 	let nombre = args[1];
 	if(!nombre) return message.channel.send("Escribe un nombre para el emoji");
 	if(!emoji) return message.channel.send("Pon una URL.");
 		message.guild.createEmoji(emoji, nombre);
 		message.channel.send("Emoji creado con éxito.");
}

module.exports.help = {
	name: "addemoji"
}