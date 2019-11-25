const mongoose = require("mongoose");

const tagScheme = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	canalid: String,
	canalnombre: String,
	canalserver: String,
})

module.exports = mongoose.model("Tag", tagScheme)