const Discord = require("discord.js");
const mongoose = require('mongoose');

const Tag = require("../models/tagmodel.js")

module.exports.run = async(bot, message, args) => {

	mongoose.connect("mongodb://localhost:27017/tag",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

	let tagc = args[0];
	if (!tagc) return message.channel.send("Escribe el nombre de tu tag.")
	let nombre = args.join([1]);
	if(!nombre) return message.channel.send("Escribe el tag.")
	let usuario = message.author.username;

	const newTag = new Tag({
		_id: mongoose.Types.ObjectId(),
		nombre: nombre,
		tag: tagc,
		user: usuario,
	})

	newTag.save()
	message.channel.send("Tag guardado con éxito.")
}

module.exports.help = {

	name: "tag"
}