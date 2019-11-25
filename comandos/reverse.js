const Discord = require("discord.js");


module.exports.run = async (bot,message,args) =>
{

        const text = args.join(' ').split('').reverse().join('');
        if (!text) return message.channel.send('Escribe algo.');
        await message.channel.send(text);

}

module.exports.help = {
	name: "reverse"
}