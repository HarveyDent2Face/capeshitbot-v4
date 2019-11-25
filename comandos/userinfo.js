const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) =>
{
let designado = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
let avy = message.author.displayAvatarURL;
//let avdesignado = designado.user.displayAvatarURL;
let esbot = message.author.bot;


if(!designado){
let embedf = new Discord.RichEmbed()
	.setThumbnail(avy)
	.setAuthor(message.author.username)
	.setTitle("**Bienvenido a la información de usuario**")
	.setDescription("Hola. Esta es su información.")
	.setColor("#985986")
	.setTimestamp()
	.addField("✻Nombre completo", message.author.tag)
	.addField("✻ID", message.author.id)
	.addField("✻¿Bot?", esbot)
	//.addField("✻¿Verificado?", message.author.verified)
	.addField("✻Fecha de creación", message.author.createdAt)
	//.addField("Roles del usuario: ", message.author.roles)
message.channel.send({embed: embedf});};

if(designado!=null){
	let esbotuser = designado.user.bot;
let embed2 = new Discord.RichEmbed()
	.setThumbnail(designado.user.displayAvatarURL)
	.setTitle("**Bienvenido a la información de usuario**")
	.setAuthor(designado.user.username)
	.setDescription("Este es la info del usuario")
	.setColor("#985986")
	.setTimestamp()
	
	.addField("✻Nombre completo", designado.user.tag)
	.addField("✻ID", designado.user.id)
	.addField("✻¿Bot?", esbotuser)
	//.addField("✻¿Verificado?", designado.user.verified)
	.addField("✻Fecha de creación", designado.user.createdAt)
	//.addField("Roles del usuario: ", designado.user.roles)
	message.channel.send({embed: embed2});};

}

module.exports.help = {
	name: "userinfo"
}


