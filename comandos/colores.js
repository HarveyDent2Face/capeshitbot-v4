const Discord = require("discord.js");


module.exports.run = async(bot, message, args) => {

	let colors = message.guild.roles.filter(role=>role.name.startsWith("#"));
	if(colors.size<1) return message.channel.send("No hay colores en este server")

	message.channel.send(colors.array().join(" "));

	/*let str = args.join(" ");
	let role = colors.find(role=>role.name.toLowerCase()===str.toLowerCase());

	if(!role) return message.channel.send("Este color no existe")
		try
	{
		await message.member.removeRole(colors)
		await message.member.addRole(colors)

	}
	catch(e)
	{

	}
	*/
}

module.exports.help = {

	name: "colors"
}