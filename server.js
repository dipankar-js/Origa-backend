const express = require('express');
const dotenv = require('dotenv');

const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

const app = express();

// Body parser
app.use(express.json());

// Connect to database
connectDB();

// Route files
const users = require('./routes/users');
const orders = require('./routes/orders');

// Mount routes
app.use('/api/users', users);
app.use('/api/orders', orders);

const PORT = process.env.PORT || 4000;

app.listen(4000, () => {
	console.log(`Server listening at port ${PORT}`);
});
