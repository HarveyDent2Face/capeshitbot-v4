const Discord = require("discord.js");


module.exports.run = async(bot, message, args) => {

let authormsg = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

let randnum1 = Math.round(Math.random()*101);
let randnum2 = Math.round(Math.random()*101);
let randnum3 = Math.round(Math.random()*101);
let randnum4 = Math.round(Math.random()*101);
let mensajefinal = (" ")
let mensajefinal2 = (" ")
let mensajefinal3 = (" ")
let mensajefinal4 = (" ")


if(randnum1===0) mensajefinal=("Ja, perdedor.")
if (randnum1>=1 && randnum1<=10) mensajefinal=("No tienes oportunidad en el amor")
if (randnum1>=11 && randnum1<=30) mensajefinal=("Es poco probable que tengas alguna oportunidad en el amor")
if (randnum1>=31 && randnum1<=60) mensajefinal=("Es posible que encuentres a tu crush")	
if (randnum1>=61 && randnum1<=99) mensajefinal=("Tienes muy altas oportunidades en el amor")	
if (randnum1===100) mensajefinal=("PUSSY DESTROYER")

if(randnum2===0) mensajefinal2=("Considera prostituirte")
if (randnum2>=1 && randnum2<=10) mensajefinal2=("Debes de vivir bajo un puente")
if (randnum2>=11 && randnum2<=30) mensajefinal2=("Pobre de mierda")
if (randnum2>=31 && randnum2<=60) mensajefinal2=("Te irá bien en el dinero")	
if (randnum2>=61 && randnum2<=99) mensajefinal2=("Te irá excelente en el dinero")	
if (randnum2===100) mensajefinal2=("WELCOME TO THE HOTEL CALIFORNIA")

if(randnum3===0) mensajefinal3=("Salado de mierda")
if (randnum3>=1 && randnum3<=10) mensajefinal3=("Es más probable que DC respete su continuidad a que tengas suerte hoy")
if (randnum3>=11 && randnum3<=30) mensajefinal3=("Te irá regular hoy, nada malo pasará al menos ;)")
if (randnum3>=31 && randnum3<=60) mensajefinal3=("Estás bien, de seguro encuentras una moneda tirada")	
if (randnum3>=61 && randnum3<=99) mensajefinal3=("Usted ha subido de nivel, suerte +1")	
if (randnum3===100) mensajefinal3=("Dime dónde vives")

if(randnum4===0) mensajefinal4=("Vendí uno de tus riñones por la deep web")
if (randnum4>=1 && randnum4<=10) mensajefinal4=("Ve al médico por amor de dios, es muy probable que tengas sida")
if (randnum4>=11 && randnum4<=30) mensajefinal4=("A lo mucho pescas un resfriado")
if (randnum4>=31 && randnum4<=60) mensajefinal4=("Te irá bien en la salud")	
if (randnum4>=61 && randnum4<=99) mensajefinal4=("Te irá muy bien, estás bien sano")	
if (randnum4===100) mensajefinal4=("The Man of Steel")

/*
let amor = randnum1
let dinero = randnum2
let suerte = randnum3
let salud = randnum4
*/

if(authormsg===null){
let authorembed = new Discord.RichEmbed()
.setTitle("El horóscopo de Orión")
.setThumbnail("https://vignette.wikia.nocookie.net/marvel_dc/images/f/ff/Orion_009.jpg/revision/latest?cb=20100413202701")
.setColor("#E669FF")
.setTimestamp()
.setDescription(`${message.author.username} ha preguntado por su horóscopo`)
.addField(`Amor: ${randnum1}%`, mensajefinal)
.addField(`Dinero: ${randnum2}%`, mensajefinal2)
.addField(`Suerte: ${randnum3}%`, mensajefinal3)
.addField(`Salud: ${randnum4}%`, mensajefinal4)

message.channel.send(authorembed)

}

if(authormsg!=null){
let uembed = new Discord.RichEmbed()
.setTitle("El horóscopo de Orión")
.setThumbnail("https://vignette.wikia.nocookie.net/marvel_dc/images/f/ff/Orion_009.jpg/revision/latest?cb=20100413202701")
.setColor("#E669FF")
.setTimestamp()
.setDescription(`El usuario ${message.author.username} ha preguntado por el horóscopo de ${authormsg.user.username}`)
.addField(`Amor: ${randnum1}%`, mensajefinal)
.addField(`Dinero: ${randnum2}%`, mensajefinal2)
.addField(`Suerte: ${randnum3}%`, mensajefinal3)
.addField(`Salud: ${randnum4}%`, mensajefinal4)

message.channel.send(uembed)


}
}

module.exports.help = {

	name: "horoscopo"
}