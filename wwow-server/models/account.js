var mongoose = require('mongoose');

var AccountSchema = new mongoose.Schema({
	email: {
		type: String,
		unique: true,
		required: true,
		trim: true
	},
	salt: {
		type: String,
		unique: false,
		required: true,
		trim: true
	},
	hash: {
		type: String,
		required: true
	}
});
var Account = mongoose.model('Account', AccountSchema);
module.exports = Account;