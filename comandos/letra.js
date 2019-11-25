const Discord = require("discord.js");
var Weez = require("weez");
var weez = new Weez.WeezAPI("78WuxIEDuChXkYfVPdD2Uwv689FYah0VGVsU");

module.exports.run = async(bot, message, args) => {

let botmessage = args.join(" ");
if(!botmessage) return message.channel.send("Escribe la canción.")

let song = await weez.letra(botmessage)
if(song.botmessage) return message.channel.send('No se encontro la letra')

botf = botmessage.toUpperCase();
 let letra1= song.letra; 
 let img = song.imagen;
 if (!letra1) return message.channel.send("No se encontró la letra")
 	let letra1t = letra1.length;
 console.log(letra1t)
 if(letra1t>=2048) return message.channel.send("La letra es demasiado grande para enviarse")
const embed = new Discord.RichEmbed()
.setTitle(botf)
.setThumbnail(img)
.setTimestamp()
.setColor("#30042E")
.setDescription(letra1);

message.channel.send(embed);


// message.channel.send(letra1);
}

module.exports.help = {

	name: "letra"
}