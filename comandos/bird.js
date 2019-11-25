const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) =>
{
	let {body} = await superagent
	.get(`https://random.birb.pw/tweet`);

	let birdembed = new Discord.RichEmbed()
	.setColor("#ff9900")
	.setTitle("Pajarito")
	.setImage(body.file);

	message.channel.send(birdembed);


}

module.exports.help = {
	name: "bird"
}