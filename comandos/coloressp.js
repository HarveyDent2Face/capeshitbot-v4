const Discord = require("discord.js");


module.exports.run = async(bot, message, args) => {

	let colors = message.guild.roles.filter(role=>role.name.startsWith(">"));
	if(colors.size<1) return message.channel.send("No hay colores especiales en este server")

	message.channel.send(colors.array().join(" "));


}

module.exports.help = {

	name: "spcolors"
}