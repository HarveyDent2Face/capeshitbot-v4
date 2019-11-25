const Discord = require("discord.js");


module.exports.run = async (bot,message,args) =>
{
		if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`No tienes permisos para usar eso, **${message.author.username}**`);

	const clean = (str) => str.replace(/:/g, String.fromCharCode(8203)).toLowerCase();
const emojiRaw = args[0];
console.log(emojiRaw) //str.replace(/[^0-9]/g, String.fromCharCode(8203)).toLowerCase();
const emoji = emojiRaw.replace(/(?<=:).*?(?=:)/g, '').replace(/[:\s><]/g, '');
console.log(emoji)
//const clean = (str: string): string => str.replace(/(?<=:).*?(?=:)/g, '').replace(/[:\s><]/g, '');

let razon = args[1];
 	if(!razon) return message.channel.send("Escribe una razón para borrarlo");
 	if(!emoji) return message.channel.send("Pon un emoji para borrar");
 		message.guild.deleteEmoji(emoji, razon);
 		message.channel.send("Emoji removido con éxito.");

}

module.exports.help = {
	name: "delete_emoji"
}