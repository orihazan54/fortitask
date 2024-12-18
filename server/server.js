const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');


const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL }));

// Routes
app.use('/api/users', require('./routes/userRoutes'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



app.use(cors({
  origin: ['http://localhost:3000', 'https://www.fortitask.org'], // מקורות מותרים
  credentials: true
}));