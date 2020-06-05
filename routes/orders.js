const express = require('express');
const Order = require('../models/Order');

const router = express.Router();

router.route('/').get(async (req, res) => {
	const orders = await Order.find();
	res.status(200).json({
		success: true,
		data: orders
	});
});

router.route('/').post(async (req, res) => {
	const order = await Order.create(req.body);

	res.status(201).json({
		success: true,
		data: order
	});
});

module.exports = router;
