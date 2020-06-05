const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.route('/').get(async (req, res) => {
	const users = await User.find();
	res.status(200).json({
		success: true,
		data: users
	});
});
router.route('/').post(async (req, res) => {
	const user = await User.create(req.body);

	res.status(201).json({
		success: true,
		data: user
	});
});

module.exports = router;
