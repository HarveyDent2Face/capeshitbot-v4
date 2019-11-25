const Discord = require("Discord.js");

module.exports.run = async(bot, message, args) => {


	if(!message.member.hasPermissions("MANAGE_MESSAGES")) return message.reply("F");
	if(!args[0]) return message.channel.send("F");
	message.channel.bulkDelete(args[0]).then(() => {
		message.channel.send(`Borrados ${args[0]} mensajes. `).then(msg => msg.delete(5000));
	})
}

module.exports.help = {

	name: "clear"
}