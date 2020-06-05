const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
	orderId: {
		type: String,
		required: true
	},
	userId: {
		type: String,
		required: true
	},
	subTotal: {
		type: Number,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Order', OrderSchema);
