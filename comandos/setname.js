const Discord = require("discord.js");

module.exports.run = async (bot,message,args) =>
{

 const name = args.join(' ');
            if (!name) return message.channel.send('Dame un nombre.');
            message.guild.setName(name, `Comando ejecutado por ${message.author.username}`)
                .catch(() => {
                    return message.channel.send('Algo ha salido mal.');
                });
            message.channel.send(`El nombre del server cambió a **${name}**.`);

}

module.exports.help = {
	name: "setname"
}