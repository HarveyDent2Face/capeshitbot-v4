const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

	if(!args[1]) return message.reply("Escribe una pregunta");
	let replies =["Sí", "No", "¿Quién sabe?", "Nel Prro", "Supongo", "Seh, ¿por qué no?", "No puto", "Deja de preguntar mamadas", "Si no tienes nada que poner, no pongas nada, al chile duérmete otro rato", "Quizás", "Das asco", "Seh", "No, borren el server", "Me vale verga tu pregunta","¿Qué clase de pregunta es esa?", "Tu pregunta es una mierda", "Te digo que sí por lástima", "No, mátate putito", "yo k c no soi 100tifiko", "Calla cagada", "Es muy posible", "Totalmente de acuerdo", "Mentira", "Solo un joto preguntaría eso", "Nah", "Por supuesto que sí"];

	let result = Math.floor((Math.random() * replies.length));
	let question = args.slice(0).join(" ");

	let ballembed = new Discord.RichEmbed()
	.setColor("#FF9900")
	.setThumbnail('https://imgix-media.wbdndc.net/cms/filer_public/e6/c5/e6c53101-b846-4fee-aaeb-7184ea6d33d6/drfate-profile-jldark_2_11-v1-401x600-masthead.jpg')
	.setTitle("🎱 Pregúntale a Doctor Fate 🎱")
	.addField("Pregunta", question)
	.addField("Respuesta", replies[result]);

	message.channel.send(ballembed);
}

module.exports.help = {

	name: "ball"
}
//designed.user.displayAvatarURL