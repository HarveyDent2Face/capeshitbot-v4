const Discord = require("discord.js");
const fs = module.require("fs");
let logs = JSON.parse(fs.readFileSync("./logs.json","utf8"));


module.exports.run = async(bot, message, args) => {
	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No tienes permisos para hacer eso pendejo");

	let messageArray = message.content.split(" ");
	let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	if(!bUser) return message.channel.send("No existe el usuario");
	let bReason = args.join(" ").slice(22);
	if(!bReason) return message.channel.send("Escribe la razón para banearlo");
	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("El usuario ha sido baneado");
	if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Esa persona no puede ser baneada");

	let banEmbed = new Discord.RichEmbed() 
	.setDescription("✴ Se ha ejecutado un castigo divino ✴")
	.setColor("#bc0000")
    .setThumbnail('https://static.comicvine.com/uploads/original/6/66303/2799823-screen_shot_2013_01_09_at_7.23.15_am.png')
	.addField("El usuario", `${bUser} , ${bUser.id}`)
	.addField("Ha sido baneado por", `<@${message.author.id}>` )
	.addField("En", message.channel)
	.addField("A la hora", message.createdAt)
	.setTimestamp()
	.addField("Por las razones", bReason);

        let logchido = logs[message.guild.id].logs;

		const incidentchannel = message.guild.channels.find(channel => channel.name === logchido);
	if(!incidentchannel) return message.channel.send("No puedo encontrar el canal de incidentes");

    	if(!incidentchannel && message.member.hasPermission('MANAGE_CHANNELS'))
	{
		await message.guild.createChannel('logs','text');
		

		//incidentchannel.send(warnEmbed);
	}

    bUser.ban(args.slice(1).join(" "))
    .then(user => {
            incidentchannel.send(banEmbed).catch(err => console.log(err));
        message.channel.send(`El usuario ${user} ha sido baneado.`);
    })
        .catch(err => {
            return message.channel.send(`Pasó algo estúpido ${err}`);
        });


}


	module.exports.help = {

	name: "ban"
}