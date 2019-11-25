const Discord = require("discord.js");
const deads = new Discord.Attachment('../')

module.exports.run = async(bot, message, args) => {
	let designado = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	let autor = message.author.username;
	number = 8;
	imageNumber = Math.floor (Math.random() * (number - 1 + 1)) +1;
	message.channel.send(`**Kalakas**`,{files: ["../DiscordBot/data/kalakas/" + imageNumber + ".png"]} )

}

module.exports.help = {

	name: "kalakas"
}
