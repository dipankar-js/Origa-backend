const express = require('express');
const dotenv = require('dotenv');

const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

const app = express();

// Body parser
app.use(express.json());

// Connect to database
connectDB();

const PORT = process.env.PORT || 4000;

app.listen(4000, () => {
	console.log(`Server listening at port ${PORT}`);
});
