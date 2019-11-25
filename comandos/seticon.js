const Discord = require("discord.js");


module.exports.run = async (bot,message,args) =>
{

 if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`No tienes permisos para usar eso, **${message.author.username}**`);
 const icon = args[0];
     if (!icon) return message.channel.send('Dame una URL.');
     message.guild.setIcon(icon)
                .catch(() => {
                    return message.channel.send('Algo ha salido mal.');
                });
     


}

module.exports.help = {
	name: "seticon"
}