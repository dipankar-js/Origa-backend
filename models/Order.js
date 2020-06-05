const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
	orderId: {
		type: String,
		required: true
	},
	userId: {
		type: mongoose.Schema.ObjectId,
		ref: 'User',
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

OrderSchema.statics.getAverageBill = async function (user) {
	console.log('Calculating Average');

	const obj = await this.aggregate([
		{
			$match: { userId: user }
		},
		{
			$group: {
				_id: '$userId',
				averageBillValue: { $avg: '$subTotal' }
			}
		}
	]);

	console.log(obj);

	const userData = await this.model('User').findById(user);

	try {
		await this.model('User').findByIdAndUpdate(user, {
			avgBillValue: Math.ceil(obj[0].averageBillValue / 10) * 10,
			noOfOrders: userData.noOfOrders + 1
		});
	} catch (error) {
		console.log(error);
	}
};

OrderSchema.post('save', function () {
	this.constructor.getAverageBill(this.userId);
});

module.exports = mongoose.model('Order', OrderSchema);
