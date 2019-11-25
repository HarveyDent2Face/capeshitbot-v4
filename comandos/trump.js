const {Discord, Attachment} = module.require("discord.js");

var Weez = require("weez");
var weez = new Weez.WeezAPI("78WuxIEDuChXkYfVPdD2Uwv689FYah0VGVsU");

module.exports.run = async (bot, message, args) => {
    

 
let botmessage = args.join(" ");
mf = await weez.trump(botmessage);
await message.channel.send({files: [mf]})

}
module.exports.help = {
    name: "trump"

}