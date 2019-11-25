const fs = module.require("fs");
const Discord = require("discord.js");
let mutes = JSON.parse(fs.readFileSync("./mutes.json","utf8"));
let logs = JSON.parse(fs.readFileSync("./logs.json","utf8"));
const ms = require("ms");


module.exports.run = async(bot, message, args) => {
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No tienes permisos para hacer eso pendejo");
	let toMute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	if(!toMute) return message.channel.send("No existe el usuario");
	let mReason = args.join(" ").slice(22);
	if(!mReason) return message.channel.send("Escribe la razón para warnearlo");
	if(toMute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Esa persona no puede ser warneada, tiene más roles que tú");
    if(toMute.id === message.author.id) return message.channel.send("No puedes mutearte a tí mismo papu");
	let role = await message.guild.roles.find(r => r.name === "muteado");
         

         if(!role){
              try{
            role = await message.guild.createRole({
                 name: "muteado",
                 color: "#000000",
                 permissions: [] 
             });



message.guild.channels.forEach(async(channel, id) => {
                 await channel.overwritePermissions(role,{
                     SEND_MESSAGES: null,
                     ADD_REACTIONS: null
                 });
                 });
         }catch(e)
         {
             console.log(e.stack);
         }

	}


	let mutetime = args[1]
	if(!mutetime) return message.channel.send("Indica el tiempo de mute.");

	await(toMute.addRole(role.id));

	        fs.writeFile("./mutes.json", JSON.stringify(bot.mutes, null,4), err =>{
         	if(err) throw err;
         	message.reply(`El usuario <@${toMute.id}> ha sido muteado por ${ms(ms(mutetime))}`);
         });
	

	setTimeout(function(){
		toMute.removeRole(role.id);
		message.channel.send(`<@${toMute.id}> ha sido desmuteado`)
	}, ms(mutetime));

	 let muteEmbed = new Discord.RichEmbed()
    .setTitle("**He muteado a un usuario**")
    .setDescription("Se ha ejecutado un mute")
    .setColor("#c0c0c0")
    .setThumbnail('https://static.comicvine.com/uploads/original/6/66303/2799823-screen_shot_2013_01_09_at_7.23.15_am.png')
    .addField("Usuario muteado", toMute)
    .addField("Muteado en", message.channel)
    .addField("Muteado por", message.author.username)
    .addField("Por", mReason)
    .setTimestamp()


    let logchido = logs[message.guild.id].logs;
    const incidentchannel = message.guild.channels.find(channel => channel.name === logchido);
    if(!incidentchannel) return message.channel.send("No puedo encontrar el canal de incidentes");

    if(!incidentchannel && message.member.hasPermission('MANAGE_CHANNELS'))
    {
        await message.guild.createChannel('logs','text');
        
    }
        incidentchannel.send(muteEmbed);

         
    }


module.exports.help = {

	name: "tempmute"
}