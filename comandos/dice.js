const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
	let authormsg = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	let randnum = (Math.round(Math.random()*5)+1);
	let mensajefinal = (" ")
	if(randnum==1) mensajefinal=("Suicídate")
	if(randnum==2) mensajefinal=("2 entradas para ver Papá Youtuber")
	if(randnum==3) mensajefinal=("3 doritos después")
	if(randnum==4) mensajefinal=("En esa posición pongo a tu madre")
	if(randnum==5) mensajefinal=("5 putazos te voy a dar")
	if(randnum==6) mensajefinal=("Señor Simpson usted es diabólico")
	
	let diceembed = new Discord.RichEmbed()
		.setTitle("🎲 Tira el dado 🎲")
		.setColor("#FF9900")
		.setThumbnail("https://vignette.wikia.nocookie.net/marvel_dc/images/0/00/Zatanna_014.jpg/revision/latest?cb=20161026174125")
		.addField(`...Tira el dado...`, message.author.tag)
		.addField(`...Y sale ${randnum}`, mensajefinal);

	message.channel.send(diceembed);


}

module.exports.help = {

	name: "dice"
}