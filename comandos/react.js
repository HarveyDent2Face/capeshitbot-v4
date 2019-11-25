const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

	let emoji = message.guild.emojis.find('name', "ned");
	message.react('🤡');

}

module.exports.help = {
	name: "react"
}
//https://discordapp.com/oauth2/authorize?client_id=612516786629247001&permissions=8&scope=bot