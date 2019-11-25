const agree = "✅"
const disagree = "❎"
const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
	let botmessage = args.join(" ");
	message.delete().catch();
	if(!botmessage) message.channel.send("No pusiste nada para votar pendejo");
	let msg = await message.channel.send(botmessage);
	await msg.react(agree);	
	await msg.react(disagree);
	const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 15000});
	message.channel.send(`Votación completada\n\n${agree}: ${reactions.get(agree).count-1}\n${disagree}: ${reactions.get(disagree).count-1}`);

}

module.exports.help = {

	name: "vote"
}