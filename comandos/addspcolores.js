const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");

module.exports.run = async (bot,message,args) =>
{
	let msg = await message.channel.send("Generando los colores...");

	if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("No tienes permisos para hacer eso pendejo");


	message.guild.createRole({
  	name: '>Aurora',
  	color: '#e8c6f7',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)


	message.guild.createRole({
  	name: '>Forest',
  	color: '#072c18',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)


	message.guild.createRole({
  	name: '>Nimbus',
  	color: '#e7fffe',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)

	message.guild.createRole({
  	name: '>Petal',
  	color: '#a08f9f',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)


  	message.guild.createRole({
  	name: '>Candy',
  	color: '#ffeeee',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)


    	message.guild.createRole({
  	name: '>Poison',
  	color: '#250f31',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)


    	message.guild.createRole({
  	name: '>Wood',
  	color: '#6f5454',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)


      	message.guild.createRole({
  	name: '>Elf',
  	color: '#bcfabb',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)


        message.guild.createRole({
  	name: '>Ghost',
  	color: '#abafaf',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)


        message.guild.createRole({
  	name: '>Blood',
  	color: '#860e0e',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)


        message.guild.createRole({
  	name: '>Inferno',
  	color: '#f3b07b',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)


        message.guild.createRole({
  	name: '>Sunshine',
  	color: '#f7f3c6',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)


        message.guild.createRole({
  	name: '>River',
  	color: '#9abeb5',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)


        message.guild.createRole({
  	name: '>Blue Whale',
  	color: '#111135',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)


        message.guild.createRole({
  	name: '>Disco',
  	color: '#6f6f31',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)


        message.guild.createRole({
  	name: '>Fall',
  	color: '#5e7263',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)


        message.guild.createRole({
  	name: '>Africa',
  	color: '#1f1919',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)


        message.guild.createRole({
  	name: '>Trick',
  	color: '#ff5d04',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)


        message.guild.createRole({
  	name: '>Goom',
  	color: '#7bff00',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}` && message.channel.send("Colores creados con éxito")))
  .catch(console.error)
msg.delete();

}

module.exports.help = {
	name: "addspcolors"
}