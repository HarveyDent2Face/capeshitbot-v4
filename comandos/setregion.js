const Discord = require("discord.js");

module.exports.run = async (bot,message,args) =>
{

 const name = args.join(' ');
            if (!name) return message.channel.send('Menciona una región para cambiar al server.');
            message.guild.setRegion(name, `Comando ejecutado por ${message.author.username}`)
                .catch(() => {
                    return message.channel.send('Algo ha salido mal.');
                });
            message.channel.send(`La región del server cambió a **${name}**.`);

}

module.exports.help = {
	name: "setregion"
}