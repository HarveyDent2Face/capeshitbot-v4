const Discord = require ("discord.js");
module.exports.run = async(bot, message, args) => {

let authormsg = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
let randnum = Math.round(Math.random()*1);
let mensajefinal = (" ")
let mensajedecs = (" ")
if(randnum===0) mensajefinal=("Cara")
if(randnum===1) mensajefinal=("Sello");
let lanzador = message.author.tag
if(randnum===0) mensajedecs=("Vives")
if(randnum===1) mensajedecs=("Mueres");

let coinEmbed = new Discord.RichEmbed()
	.setTitle("🙂 La moneda de Dos Caras 😡")
	.setDescription("Cara, vives. Sello, mueres.")
	.setColor("#FF9900")
	.setThumbnail("https://vignette.wikia.nocookie.net/marvel_dc/images/4/4e/Two-Face_0002.jpg/revision/latest?cb=20110522193536")
	.addField(`Lanza la moneda`, lanzador)
	.addField(`Y el resultado es...`, mensajefinal)
	.setTimestamp()
	.addField(`Al parecer...`, mensajedecs);

	message.channel.send(coinEmbed);



}

module.exports.help = {
	name: "coin"
}