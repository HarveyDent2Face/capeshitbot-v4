const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("../DiscordBot/warns.json","utf8"));
let logs = JSON.parse(fs.readFileSync("./logs.json","utf8"));


module.exports.run = async(bot, message, args) => {

	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No tienes permisos para hacer eso pendejo");
	let wUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	if(!wUser) return message.channel.send("No existe el usuario");
	let WReason = args.join(" ").slice(22);
	if(!WReason) return message.channel.send("Escribe la razón para warnearlo");
	if(wUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Esa persona no puede ser warneada, tiene más roles que tú");
	//if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("El usuario ha sido kickeado");

	if(!warns[wUser.id]) warns[wUser.id]={
		warns: 0
	};

	warns[wUser.id].warns++;

	fs.writeFile("../DiscordBot/warns.json",JSON.stringify(warns),(err)=>{

		if(err) console.log(err);
	});

	let warnEmbed = new Discord.RichEmbed()
	.setTitle("**He advertido a un usuario**")
	.setDescription("Se ha ejecutado un warn")
	//.setAuthor(message.author.username)
	.setColor("#c0c0c0")
	.setThumbnail('https://static.comicvine.com/uploads/original/6/66303/2799823-screen_shot_2013_01_09_at_7.23.15_am.png')
	.addField("Usuario warneado", wUser)
	.addField("Warneado en", message.channel)
	.addField("Advertido por", message.author.username)
	.addField("Número de advertencias", warns[wUser.id].warns)
	.addField("Razón", WReason)
	.setTimestamp()

	let logchido = logs[message.guild.id].logs;
	const incidentchannel = message.guild.channels.find(channel => channel.name === logchido);
	if(!incidentchannel) return message.channel.send("No puedo encontrar el canal de incidentes");

	if(!incidentchannel && message.member.hasPermission('MANAGE_CHANNELS'))
	{
		await message.guild.createChannel('logs','text');
		

		//incidentchannel.send(warnEmbed);
	}
	//if(!incidentchannel) return message.channel.send("No puedo encontrar el canal de incidentes");

	incidentchannel.send(warnEmbed);
    /*wUser.warn(args.slice(1).join(" "))
    .then(user => {
            incidentchannel.send(warnEmbed).catch(err => console.log(err));
        //message.channel.send(`El usuario ${user} ha sido warneado.`);
    })
        .catch(err => {
            return message.channel.send(`Pasó algo estúpido ${err}`);
        });

*/

}

module.exports.help = {

	name: "warn"
}
