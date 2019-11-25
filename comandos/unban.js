const Discord = require("discord.js");
const fs = module.require("fs");

module.exports.run = async(bot, message, args) => {
	if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No tienes permisos para hacer eso pendejo");

/*	let messageArray = message.content.split(" ");
	let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	if(!bUser) return message.channel.send("No existe el usuario");
	let bReason = args.join(" ").slice(22);
	if(!bReason) return message.channel.send("Escribe la razón para banearlo");
	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("El usuario ha sido baneado");
	if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Esa persona no puede ser baneada");
*/
let bannedMember = await bot.fetchUser(args[0]);
if (!bannedMember) return message.channel.send("No existe el usuario, no está baneado o no colocaste el ID de este. Por  favor, coloca el ID del usuario.")
let bReason = args.join(" ").slice(22);
if (!bReason) bReason="Sin razón";
try{

	message.guild.unban(bannedMember, {reason: bReason})
}
catch(e)
{

}


	let unbanEmbed = new Discord.RichEmbed()
	.setDescription("Unban")
	.setColor("#bc0000")
	.addField("El usuario", `${bannedMember} , ${bannedMember.id}`)
	.setThumbnail('https://static.comicvine.com/uploads/original/6/66303/2799823-screen_shot_2013_01_09_at_7.23.15_am.png')
	.addField("Ha sido desbaneado por", `<@${message.author.id}>` )
	.addField("En", message.channel)
	.addField("A la hora", message.createdAt)
	.addField("Por las razones", bReason);

		const incidentchannel = message.guild.channels.find(channel => channel.name === 'logs');
	if(!incidentchannel) return message.channel.send("No puedo encontrar el canal de incidentes");

    	if(!incidentchannel && message.member.hasPermission('MANAGE_CHANNELS'))
	{
		await message.guild.createChannel('logs','text');
		

		//incidentchannel.send(warnEmbed);
	}


incidentchannel.send(unbanEmbed)

}


	module.exports.help = {

	name: "unban"
}