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


	if(rUser.roles.has(gRole.id));
	await rUser.addRole(gRole.id);

	try
	{
		rUser.send(`Te han dado el rol ${gRole.name}`)
		message.channel.send(`Añadido exitosamente el rol ${gRole.name} a <@${rUser.id}>`)
	}
	catch(e){
	
		message.channel.send(`Añadido exitosamente el rol ${gRole.name} a <@${rUser.id}>`)
	}


}

module.exports.help = {

	name: "addrole"
}