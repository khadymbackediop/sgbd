const express = require('express');
const connectDB = require('./db');
const authors = require('./routes/authors');

const app = express();

// Connect to Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/authors', authors);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
