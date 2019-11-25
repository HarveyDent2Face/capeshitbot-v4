module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No tienes permisos para hacer eso");


         let toMute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
         if(!toMute) return message.channel.send("No mencionaste al usuario");
         let role = await message.guild.roles.find(r => r.name === "muteado");


         if(!role || !toMute.roles.has(role.id)) return message.channel.send("El usuario no estaba muteado");

         await toMute.removeRole(role);
         message.channel.send("El usuario ha sido desmuteado");


}

module.exports.help = {
name: "unmute"

}