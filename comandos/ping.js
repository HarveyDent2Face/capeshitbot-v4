const Discord = require("discord.js");


module.exports.run = async (bot,message,args) =>
{
	message.channel.send("Conectando...").then(m=>{
	let ping = m.createdTimestamp - message.createdTimestamp
	let resultados = ["Funcionó", "Efesito", "Que no esté tan cagado :,v"]
	let respuesta = resultados[Math.floor(Math.random()*3)]

	m.edit(`${respuesta}: Latencia: ${ping}, latencia API: ${Math.round(bot.ping)}`)

	})


}

module.exports.help = {
	name: "ping"
}