const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");

module.exports.run = async(bot, message, args) => {

let msg = await message.channel.send("Generando los colores...");


if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("No tienes permisos para hacer eso pendejo");
	/*let wUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	if(!wUser) return message.channel.send("No existe el usuario");
	let WReason = args.join(" ").slice(22);
	if(!WReason) return message.channel.send("Escribe la razón para warnearlo");
	if(wUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Esa persona no puede ser wareada, tiene más roles que tú");
*/

message.guild.createRole({
  name: '#Rojo',
  color: 'RED',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)

message.guild.createRole({
  name: '#Azul',
  color: 'BLUE',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)
message.guild.createRole({
  name: '#Verde',
  color: 'GREEN',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)
message.guild.createRole({
  name: '#Violeta',
  color: 'PURPLE',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)
message.guild.createRole({
  name: '#Naranja',
  color: 'ORANGE',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)
message.guild.createRole({
  name: '#Rosa',
  color: 'LUMINOUS_VIVID_PINK',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)
message.guild.createRole({
  name: '#Blanco',
  color: 'WHITE',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)
message.guild.createRole({
  name: '#Dorado',
  color: 'GOLD',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)
message.guild.createRole({
  name: '#Negro',
  color: 'BLACK',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)
message.guild.createRole({
  name: '#Gris',
  color: 'GREY',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)
message.guild.createRole({
  name: '#Azul Verdoso',
  color: 'AQUA',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)
message.guild.createRole({
  name: '#Azul Verdoso Oscuro',
  color: 'DARK_AQUA',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)
message.guild.createRole({
  name: '#Agua Marina',
  color: 'NAVY',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)
message.guild.createRole({
  name: '#Verdoso',
  color: 'DARK_GREEN',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)
message.guild.createRole({
  name: '#Mostaza',
  color: 'DARK_GOLD',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)
message.guild.createRole({
  name: '#Celeste',
  color: '#2271b3',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)
message.guild.createRole({
  name: '#Magenta',
  color: 'DARK_VIVID_PINK',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)
message.guild.createRole({
  name: '#Azul Oscuro',
  color: 'DARK_BLUE',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)
message.guild.createRole({
  name: '#Morado',
  color: 'DARK_PURPLE',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)
message.guild.createRole({
  name: '#Gris Oscuro',
  color: 'DARKER_GREY',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)
message.guild.createRole({
  name: '#Plata',
  color: 'LIGHT_GREY',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)
message.guild.createRole({
  name: '#Agua Marina Oscura',
  color: 'DARK_NAVY',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)
message.guild.createRole({
  name: '#Marrón',
  color: '#804000',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)
message.guild.createRole({
  name: '#Naranja Oscuro',
  color: 'DARK_ORANGE',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}` && message.channel.send("Colores creados con éxito")))
  .catch(console.error)
msg.delete();

//message.channel.send("Colores creados con éxito")
/*
message.guild.createRole({
  name: '#Rojo',
  color: 'RED',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)
message.guild.createRole({
  name: '#Rojo',
  color: 'RED',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)
message.guild.createRole({
  name: '#Rojo',
  color: 'RED',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)
message.guild.createRole({
  name: '#Rojo',
  color: 'RED',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)
message.guild.createRole({
  name: '#Rojo',
  color: 'RED',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)
message.guild.createRole({
  name: '#Rojo',
  color: 'RED',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)
message.guild.createRole({
  name: '#Rojo',
  color: 'RED',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)
message.guild.createRole({
  name: '#Rojo',
  color: 'RED',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)
message.guild.createRole({
  name: '#Rojo',
  color: 'RED',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)
message.guild.createRole({
  name: '#Rojo',
  color: 'RED',
})
  .then(role => console.log(`Creado nuevo role ${role.name} con el color color ${role.color}`))
  .catch(console.error)
*/
}


module.exports.help = {

	name: "addcolores"
}
/*
[
  'DEFAULT',
  'WHITE',
  'AQUA',
  'GREEN',
  'BLUE',
  'PURPLE',
  'LUMINOUS_VIVID_PINK',
  'GOLD',
  'ORANGE',
  'RED',
  'GREY',
  'DARKER_GREY',
  'NAVY',
  'DARK_AQUA',
  'DARK_GREEN',
  'DARK_BLUE',
  'DARK_PURPLE',
  'DARK_VIVID_PINK',
  'DARK_GOLD',
  'DARK_ORANGE',
  'DARK_RED',
  'DARK_GREY',
  'LIGHT_GREY',
  'DARK_NAVY',
  'RANDOM',
]
*/

/*
.FLAGSSTATIC
Numeric permission flags. All available properties:

ADMINISTRATOR (implicitly has all permissions, and bypasses all channel overwrites)
CREATE_INSTANT_INVITE (create invitations to the guild)
KICK_MEMBERS
BAN_MEMBERS
MANAGE_CHANNELS (edit and reorder channels)
MANAGE_GUILD (edit the guild information, region, etc.)
ADD_REACTIONS (add new reactions to messages)
VIEW_AUDIT_LOG
PRIORITY_SPEAKER
VIEW_CHANNEL
READ_MESSAGES (deprecated)
SEND_MESSAGES
SEND_TTS_MESSAGES
MANAGE_MESSAGES (delete messages and reactions)
EMBED_LINKS (links posted will have a preview embedded)
ATTACH_FILES
READ_MESSAGE_HISTORY (view messages that were posted prior to opening Discord)
MENTION_EVERYONE
USE_EXTERNAL_EMOJIS (use emojis from different guilds)
EXTERNAL_EMOJIS (deprecated)
CONNECT (connect to a voice channel)
SPEAK (speak in a voice channel)
MUTE_MEMBERS (mute members across all voice channels)
DEAFEN_MEMBERS (deafen members across all voice channels)
MOVE_MEMBERS (move members between voice channels)
USE_VAD (use voice activity detection)
CHANGE_NICKNAME
MANAGE_NICKNAMES (change other members' nicknames)
MANAGE_ROLES
MANAGE_ROLES_OR_PERMISSIONS (deprecated)
MANAGE_WEBHOOKS
MANAGE_EMOJIS
*/