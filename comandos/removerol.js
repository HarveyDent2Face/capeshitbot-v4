const Discord = require("discord.js");


module.exports.run = async(bot, message, args) => {

	if(!message.member.hasPermissions("MANAGE_MEMBERS")) return message.channel.send("No puedes hacer eso puto");
	let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	if(!rUser) return message.channel.send("No existe el usuario");
	let roleq = args.join(" ").slice(22);
	//console.log(roleq)
	if(!roleq) return message.channel.send("Especifica el rol");

	let rolef = roleq.match(/\d+/gi).join('');
	//console.log(rolef);

	const gRole = message.guild.roles.find(role => role.id === rolef);
	//console.log(gRole)
	if(!gRole) return message.reply("No pude encontrar el rol")

	if(!rUser.roles.has(gRole.id)) return message.channel.send("No tiene ese rol");
	await(rUser.removeRole(gRole.id));

	try
	{
		rUser.send(`Te han quitado el rol ${gRole.name} por pendejo`)
		message.channel.send(`Removido el rol ${gRole.name} con éxito a <@${rUser.id}>`)
	}
	catch(e){
	
		message.channel.send(`Removido exitosamente el rol ${gRole.name} a <@${rUser.id}>`)
	}


}

module.exports.help = {

	name: "removerole"
}