const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) =>
{
	let {body} = await superagent
	.get(`https://aws.random.cat/meow`);

	let catembed = new Discord.RichEmbed()
	.setColor("#ff9900")
	.setTitle("Lindo gatito")
	.setImage(body.file);

	message.channel.send(catembed);


}

module.exports.help = {
	name: "cat"
}
/*https://random.birb.pw*/

