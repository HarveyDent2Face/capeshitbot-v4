const {Discord, Attachment} = module.require("discord.js");

var Weez = require("weez");
var weez = new Weez.WeezAPI("78WuxIEDuChXkYfVPdD2Uwv689FYah0VGVsU");

module.exports.run = async (bot, message, args) => {
    
let authormsg = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	if(authormsg === null)
 {
 
let img = await weez.rainbow(message.author.displayAvatarURL);
 
message.channel.send({files: [img]});
}

if(authormsg!=null){
let img = await weez.rainbow(authormsg.user.displayAvatarURL);
 
message.channel.send({files: [img]});
}
}
module.exports.help = {
    name: "gay"

}