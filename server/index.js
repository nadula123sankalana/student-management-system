// server/app.js

const express = require('express');
const connectDB = require('./config/db');
const courseRoutes = require('./routes/courseRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/courses', courseRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
