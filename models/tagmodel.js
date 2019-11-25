const mongoose = require("mongoose");

const tagScheme = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	nombre: String,
	tag: String,
	user: String,
})

module.exports = mongoose.model("Tag", tagScheme)