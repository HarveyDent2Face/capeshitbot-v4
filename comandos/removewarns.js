const Discord = require("discord.js");
const fs = require("fs");
let warns = JSON.parse(fs.readFileSync("./warns.json","utf8"));


module.exports.run = async(bot, message, args) => {

	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No tienes permisos para hacer eso pendejo");
	let wUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	if(!warns[wUser.id]) warns[wUser.id]={
		warns: 0
	};


		fs.writeFile("./warns.json",JSON.stringify(warns),(err)=>{

		if(err) console.log(err);
	});


     message.channel.send("Sanciones del usuario removidas con éxito.")

}

module.exports.help = {
	name: "delwarns"
}