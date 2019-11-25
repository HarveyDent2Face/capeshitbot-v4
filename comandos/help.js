const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) =>
{
	let decideembed = new Discord.RichEmbed()
	.setTitle("**Comandos de CapeshitBot**")
	.setColor("#d4af37")
	.setDescription("Bienvenido a la selección de comandos. El prefix por defecto es cs!, si necesitas soporte contacta con The Question.")
	.setThumbnail("https://vignette.wikia.nocookie.net/marvel_dc/images/4/4f/Booster_Gold_v.2_32_virgin.jpg/revision/latest?cb=20140613214714")
	.addField("★ Para ver los comandos for fun","```cs!help 1```")
	.addField("★ Para ver los comandos de moderación","```cs!help 2```")
	.addField("★ Para ver los comandos de información","```cs!help 3```")
	.addField("★ Para ver los comandos de control (roles y canales)","```cs!help 4```")
	.setImage('https://www.syfy.com/sites/syfy/files/styles/1200x680/public/wire/legacy/Booster-Gold-Superman.jpg')		


	let funembed = new Discord.RichEmbed()
	.setTitle("★★★ **Comandos for fun** ★★★")
	.setColor("#A3F9EA")
	.addField("ball","Pregúntale a la bola tu destino...",true)
	.addField("cat","Muestra un gato random",true)
	.addField("coin","Tira una moneda",true)
	.addField("dog","Muestra un perro random",true)
	.addField("howgay","¿Cuán gay eres?",true)
	//.addField("invite","Obtienes la invitación de este server")
	.addField("kalakas","Muestra un kalakas random",true)
	.addField("kill","Mata a un usuario",true)
	.addField("punch","Golpea a un usuario",true)
	.addField("suicide","Te suicidas",true)
	.addField("kiss","Besa a un usuario",true)
	.addField("react","Reacciona al comentario",true)
	.addField("confession","Haz una confesión",true)
	//.addField("test","Testea el bot")
	.addField("vote","Crea una votación",true)
	.addField("love","Descubre si eres la pareja ideal de alguien (Casi listo...)",true)
	.addField("say","El bot dirá lo que el usuario diga",true)
	.addField("trump","Trump escribirá lo que pongas",true)
	.addField("gay","Vuelve gay a un usuario",true)
	.addField("letra","Muestra la letra de una canción",true)
	.addField("triggered","Triggered a un usuario",true)
	.setImage('http://pm1.narvii.com/5720/60561aeef4c4a01c4ce43ddfde0a3c705674e90e_00.jpg')
	//.addField("userinfo","muestra la info del usuario o el de otro usuario. Para que lo muestre, solo hazle ping")

	let modembed = new Discord.RichEmbed()
	.setTitle("**Comandos de moderación**")
	.setDescription("Necesitas permisos para poder usarlos")
	.setColor("#1A7915")
	.setImage("https://media.wired.com/photos/593472f5a88f414d9a8ca6e5/master/pass/spectre_06.jpg")
	.addField("mute","Silencia a un usuario",true)
	.addField("unmute","Unmutea a un usuario",true)
	.addField("warn","Advierte a un usuario",true)
	.addField("kick","Kickea a un usuario",true)
	.addField("ban","Banea a un usuario",true)
	.addField("unban","Quita el ban de un usuario. Para usarlo, prefix+unban ID del usuario.",true)
	.addField("clear","Limpia mensajes",true)
	.addField("prefix","Cambia el prefix",true)
	.addField("addemoji","Agrega un emoji",true)
	.addField("delete_emoji","Borra un emoji",true)
	.addField("delmutes","Borra el número de mutes de un user",true)
	.addField("delwarns","Borra el número de warns de un user",true)

	let infoembed = new Discord.RichEmbed()
	.setTitle("**Comandos de información**")
	.setDescription("Aquí encuentras los comandos para saber sobre ciertas características del server")
	.setColor("#C13CF6 ")
	.setImage("https://www.syfy.com/sites/syfy/files/styles/1200x680/public/wire/legacy/oracle4.png")
	.addField("help","Muestra los comandos",true)
	.addField("userinfo","Muestra la información de un usuario", true)
	.addField("avatar","Muestra tu avatar o el de otro usuario. Para que lo muestre, solo hazle ping",true)
	.addField("botinfo","Muestra la información del bot", true)
	.addField("serverinfo","Muestra la información del servidor", true)
	.addField("infoemoji","Muestra la información de un emoji", true)
	.addField("colors","Muestra los colores que se han añadido con el comando addcolores o que empiezen con #", true)
	.addField("invite","Genera una invitación del bot", true)
	.addField("ping","Muestra el ping y la latencia", true)
	.addField("test","Comprueba que el bot esté bien", true)

	let rolesembed = new Discord.RichEmbed()
	.setTitle("**Comandos de control**")
	.setDescription("Aquí encuentras comandos para el control de roles y canales, necesitas permisos de moderación para usarlos")
	.setColor("#00FF42")
	.setImage("https://img1.looper.com/img/gallery/a-familiar-face-is-being-eyed-to-play-riddler-in-the-batman/intro-1565023656.jpg")
	.addField("setlogs","Elige un canal para logs. En este, se direccionarán las sanciones", true)
	.addField("setconfessions","Elige un canal donde las confesiones irán", true)
	.addField("addrole","Añade un rol", true)
	.addField("removerole","Quita un rol", true)
	.addField("setwelcomes","Designa un canal para mostrar las bienvenidas",true)
	.addField("seticon","Cambia el ícono del server",true)
	.addField("setnames","Cambia el nombre del servidor",true)
	.addField("addcolores","Añade los colores a tu server como roles, necesitas permisos", true)


	if(!args[0]) return message.channel.send(decideembed);
	if(args[0]==1) return message.channel.send(funembed);
	if(args[0]==2) return message.channel.send(modembed);
	if(args[0]==3) return message.channel.send(infoembed);
	if(args[0]==4) return message.channel.send(rolesembed);
}

module.exports.help =
{
	name: "help"
}