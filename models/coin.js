const mongoose = require("mongoose");

const moneyScheme = mongoose.Schema({
	UserID: String,
	serverID: String,
	money: Number
})

module.exports = mongoose.model("Money", moneyScheme)