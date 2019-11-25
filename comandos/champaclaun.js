const Discord = module.require("discord.js");


module.exports.run = async(bot, message, args) => {

    //console.log("CAGADO");
	const file = new Discord.Attachment('../DiscordBot/data/janampa/gay.png');

	let embed = new Discord.RichEmbed()
	.attachFile(file)
	.setImage('attachment://gay.png')

	await message.channel.send({embed});
	
}

module.exports.help = {

	name: "claun"
}