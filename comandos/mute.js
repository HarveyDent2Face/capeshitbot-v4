const fs = module.require("fs");
const Discord = require("discord.js");
let mutes = JSON.parse(fs.readFileSync("./mutes.json","utf8"));
let logs = JSON.parse(fs.readFileSync("./logs.json","utf8"));


module.exports.run = async (bot, message, args) => {
 if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No tienes permisos para hacer eso pendejo");


         let toMute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
         if(!toMute) return message.channel.send("No dijiste el usuario pendejo");
         let mReason = args.join(" ").slice(22);
         if(!mReason) return message.channel.send("Escribe la razón para mutearlo");
         if(toMute.id === message.author.id) return message.channel.send("No puedes mutearte a tí mismo papu");
        if(toMute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Esa persona no puede ser warneada, tiene más roles que tú");
         //if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.send("El usuario al que tratas de mutear tiene más rango que tú");
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
                     SEND_MESSAGES: false,
                     ADD_REACTIONS: false
                 });
                 });
         }catch(e)
         {
             console.log(e.stack);
         }

         }

         if(toMute.roles.has(role.id)) return message.channel.send("El usuario ya está muteado");

         bot.mutes[toMute.id] = {
         	guild: message.guild.id,
            //mutes: 0,
         	time: Date.now() + parseInt(args[1]) * 1000
         }

         //mutes[toMute.id].mutes++;

         fs.writeFile("./mutes.json", JSON.stringify(bot.mutes, null,4), err =>{
         	if(err) throw err;
         	message.channel.send("El usuario está muteado");
         });

         await toMute.addRole(role);
         let muteEmbed = new Discord.RichEmbed()
    .setTitle("**He muteado a un usuario**")
    .setDescription("Se ha ejecutado un mute")
    //.setAuthor(message.author.username)
    .setColor("#c0c0c0")
    .setThumbnail('https://static.comicvine.com/uploads/original/6/66303/2799823-screen_shot_2013_01_09_at_7.23.15_am.png')
    .addField("Usuario muteado", toMute)
    .addField("Muteado en", message.channel)
    .addField("Muteado por", message.author.username)
    //.addField("Número de mutes", mutes[toMute.id].mutes)
    .addField("Razón", mReason)
    .setTimestamp()

        let logchido = logs[message.guild.id].logs;


    const incidentchannel = message.guild.channels.find(channel => channel.name === logchido);
    if(!incidentchannel) return message.channel.send("No puedo encontrar el canal de incidentes");

    if(!incidentchannel && message.member.hasPermission('MANAGE_CHANNELS'))
    {
        await message.guild.createChannel('logs','text');
        

        //incidentchannel.send(warnEmbed);
    }
        incidentchannel.send(muteEmbed);

         
     }
    

module.exports.help = {
name: "mute"

}