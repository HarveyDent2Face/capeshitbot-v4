const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    console.log("Todo funciona bien, test completado");
    const file = new Discord.Attachment('../DiscordBot/data/alive/norip.png');

    let embed = new Discord.RichEmbed()
    .attachFile(file)
    .setColor("RANDOM")
    .setImage('attachment://norip.png')

    await message.channel.send({embed});


}
module.exports.help = {
    name: "test"

}