const Discord = require("discord.js");
const Canvas = require('canvas');


module.exports.run = async (bot,message,args) =>
{

	let randnum = Math.round(Math.random()*101);
	let lUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	if(!lUser) return message.channel.send("Menciona a tu crush")
	let mensajefinal = (" ")
	let barra = (" ")
	if (randnum>=0 && randnum<=10) mensajefinal=("No son nada compatibles, diría que son enemigos jurados")
	if (randnum>=11 && randnum<=20) mensajefinal=("Ehm, no lo creo...")
	if (randnum>=21 && randnum<=30) mensajefinal=("Puede ser, pero no le veo futuro")
	if (randnum>=31 && randnum<=40) mensajefinal=("Mejor quédense como amigos")
	if (randnum>=41 && randnum<=50) mensajefinal=("Van por buen camino")
	if (randnum>=51 && randnum<=60) mensajefinal=("Si lo hablan bien, es posible que lleguen a algo")
	if (randnum>=61 && randnum<=70) mensajefinal=("Veo futuro en ustedes dos")
	if (randnum>=71 && randnum<=80) mensajefinal=("Seguro llegan a algo, se siente el amor a leguas")
	if (randnum>=81 && randnum<=90) mensajefinal=("Creo que realmente puede funcionar algo entre ustedes dos")	
	if (randnum>=91 && randnum<=99) mensajefinal=("Son enormemente compatibles, les veo un gran futuro juntos")	
	if (randnum===100) mensajefinal=("¿Son novios? A ver cojan")

	if (randnum>=0 && randnum<=10) barra=("**..........**")
	if (randnum>=11 && randnum<=20) barra=("**█.........**")
	if (randnum>=21 && randnum<=30) barra=("**██........**")
	if (randnum>=31 && randnum<=40) barra=("**███.......**")
	if (randnum>=41 && randnum<=50) barra=("**████......**")
	if (randnum>=51 && randnum<=60) barra=("**█████.....**")
	if (randnum>=61 && randnum<=70) barra=("**██████....**")
	if (randnum>=71 && randnum<=80) barra=("**███████...**")
	if (randnum>=81 && randnum<=90) barra=("**████████..**")	
	if (randnum>=91 && randnum<=99) barra=("**█████████.**")	
	if (randnum===100) barra=("███████████")

	let loveEmbed = new Discord.RichEmbed()
	.setAuthor(message.author.tag)
	.setDescription(`
		${randnum} [${barra}]
		**Ustedes dos son** ${randnum}% compatibles...
		${mensajefinal}`)
	.setColor("#d4af37")
	.setTimestamp()
	//.addField(`Al parecer ustedes dos son: `, randnum)

	message.channel.send(loveEmbed);
	const canvas = Canvas.createCanvas(737, 300);
	const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage('../DiscordBot/data/canvas/love.png');
    const avatar = await Canvas.loadImage(message.author.displayAvatarURL);
    const avatar2 = await Canvas.loadImage(lUser.user.displayAvatarURL);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

/*
    ctx.beginPath();
    ctx.arc(575, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip(); 
*/
	ctx.drawImage(avatar2, 475, 25, 200, 200);

/*
	ctx.beginPath();
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();
*/
	ctx.drawImage(avatar, 25, 25, 200, 200);

	

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'avatar.png');

    await message.channel.send(attachment);



}

module.exports.help = {
	name: "love"
}