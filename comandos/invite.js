const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>
{
	message.channel.send("Invite del bot: https://discordapp.com/oauth2/authorize?client_id=612516786629247001&permissions=8&scope=bot")
}

module.exports.help =
{
	name: "invite"
}