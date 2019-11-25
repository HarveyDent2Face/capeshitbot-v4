const Discord = require("discord.js");
const fs = require("fs");


module.exports.run = async(bot, message, args) => {

	if(!message.member.hasPermissions("MANAGE_SERVER")) return message.channel.send("No puedes hacer eso puto");
	if(!args[0] || args[0 == "help"]) return message.channel.send("para cambiar el prefix: cs!prefix <El nuevo prefix>");

	let prefixes = JSON.parse(fs.readFileSync("../DiscordBot/prefixes.json","utf8"));

	prefixes[message.guild.id] = {
		prefixes: args[0]
	};

	fs.writeFile("../DiscordBot/prefixes.json",JSON.stringify(prefixes),(err)=>{

		if(err) console.log(err);
	});

	let prefixEmbed = new Discord.RichEmbed()
	.setColor("RANDOM")
	.setTitle("Prefix cambiado")
	.setDescription(`Cambiado a ${args[0]}`);

	message.channel.send(prefixEmbed);
	console.log(`El nuevo prefix es ${args[0]}`)
}

module.exports.help = {
	name: "prefix"
}