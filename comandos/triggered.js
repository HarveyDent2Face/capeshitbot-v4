const {Discord, Attachment} = module.require("discord.js");

var Weez = require("weez");
var weez = new Weez.WeezAPI("78WuxIEDuChXkYfVPdD2Uwv689FYah0VGVsU");

module.exports.run = async (bot, message, args) => {
    

 let authormsg = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

	if(authormsg === null)
 {
	let imgt = await weez.triggered(message.author.displayAvatarURL)
	let img = new Attachment(await imgt, 'triggered.gif')
 
	message.channel.send({files: [img]})
 }


 	if(authormsg!=null){
	let imgt = await weez.triggered(authormsg.user.displayAvatarURL)
	let img = new Attachment(await imgt, 'triggered.gif')
 
	message.channel.send({files: [img]})
}

}
module.exports.help = {
    name: "triggered"

}