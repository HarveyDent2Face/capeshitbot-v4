const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

let authormsg = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if (authormsg === null) return message.reply("Escribe un usuario");
let randnum = Math.round(Math.random()*101);
let mensajefinal = (" ")
if (randnum>=0 && randnum<=10) mensajefinal=("Hijo de puta te salvaste")
if (randnum>=11 && randnum<=30) mensajefinal=("🏳️‍🌈")
if (randnum>=31 && randnum<=60) mensajefinal=("🏳️‍🌈🏳️‍🌈")	
if (randnum>=61 && randnum<=99) mensajefinal=("🏳️‍🌈🏳️‍🌈🏳️‍🌈")	
if (randnum===100) mensajefinal=("🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈")

if(!args[0]) return message.reply("Designa al usuario");
let question = args.slice(0).join(" ");
	let gayembed = new Discord.RichEmbed()
	.setAuthor(message.author.tag)
	.setColor("#FF9900")
	.addField(`¿Qué tan gay es?`, authormsg)
	.addField(`es ${randnum} % gay `, mensajefinal);

	message.channel.send(gayembed);

}

module.exports.help = {
	name: "howgay"
}

//>