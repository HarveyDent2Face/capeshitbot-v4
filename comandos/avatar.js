const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	let msg = await message.channel.send("Generando el avatar...");
	let authormsg = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	let avy1 = message.author.displayAvatarURL;
	if(authormsg === null)
	{
		let autorembed = new Discord.RichEmbed()
		.setTitle(`Su avatar, señor ${message.author.username}`)
		.addField("URL: ", avy1.toString())
		.setImage(avy1)
		.setTimestamp()
		.setColor("#E4F5B8")

		message.channel.send(autorembed)
	}
	/*await message.channel.send({files:[
	{
		attachment: message.author.displayAvatarURL,
		name: "avatar.png"
	}]

});*/
	if (authormsg != null) 	
	{
		let userembed = new Discord.RichEmbed()
		.setTitle(`El avatar de ${authormsg.user.username}`)
		.addField("URL: ",authormsg.user.displayAvatarURL)
		.setImage(authormsg.user.displayAvatarURL)
		.setTimestamp()
		.setColor("#E4F5B8")

		message.channel.send(userembed)
	}
	/*await message.channel.send({files:[
	{
		attachment: authormsg.user.displayAvatarURL,
		name: "avatar.png"
	}]

});*/
	msg.delete();
}
module.exports.help = {
	name: "avatar"
}