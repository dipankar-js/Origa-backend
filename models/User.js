const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	userId: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	noOfOrders: {
		type: Number
	}
});

module.exports = mongoose.model('User', UserSchema);
