const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Register route
router.post('/signup', async (req, res) => {
  console.log('Request body:', req.body);
  const { username, email, password } = req.body;

  try {
    // יצירת משתמש חדש
    const user = new User({ username, email, password });
    await user.save();

    // החזרת תגובה עם פרטי המשתמש
    res.status(201).json({
      message: 'User registered successfully!',
      user: { username: user.username, email: user.email }
    });
  } catch (err) {
    console.error('Error saving user:', err.message);
    res.status(500).json({
      message: 'Server error',
      error: err.message
    });
  }
});

module.exports = router;
