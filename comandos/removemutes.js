const Discord = require("discord.js");
const fs = require("fs");
let mutes = JSON.parse(fs.readFileSync("./mutes.json","utf8"));
let warns = JSON.parse(fs.readFileSync("../DiscordBot/warns.json","utf8"));


module.exports.run = async(bot, message, args) => {

	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No tienes permisos para hacer eso pendejo");
	let toMute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
         bot.mutes[toMute.id] = {
         	guild: message.guild.id,
            mutes: 0,
         	time: Date.now() + parseInt(args[1]) * 1000
         }

     message.channel.send("Sanciones del usuario removidas con éxito.")

}

module.exports.help = {
	name: "delmutes"
}