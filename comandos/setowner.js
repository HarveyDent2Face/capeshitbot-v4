const Discord = require("discord.js");

module.exports.run = async (bot,message,args) =>
{

let name = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
 const persona = name.user.id;
 console.log(name);
console.log(name.user.id);
 console.log(persona);
            if (!name) return message.channel.send('Menciona al usuario al cual cederle la posesión del server.');
            message.guild.setOwner(name.user.id, `Comando ejecutado por ${message.author.username}`)
                .catch(() => {
                    return message.channel.send('Algo ha salido mal.');
                });
            message.channel.send(`El nuevo owner ahora es **${name}**.`);

}

module.exports.help = {
	name: "setowner"
}