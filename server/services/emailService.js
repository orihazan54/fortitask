const nodemailer = require('nodemailer');
const User = require('../models/User'); // המודל של המשתמש
const bcrypt = require('bcryptjs');

// Register User Function
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if all required fields are provided
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Encrypt the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create and save the new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // Send a registration email
    await sendRegistrationEmail(email, username);

    // Respond to the client
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error('Error during user registration:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Send Registration Email Function
const sendRegistrationEmail = async (email, username) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // האימייל שציינת ב-.env
        pass: process.env.EMAIL_PASS, // הסיסמה שנוצרה כאפליקציה ב-.env
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to FortiTask!',
      text: `Hello ${username},\n\nWelcome to FortiTask! Your account has been successfully created.\n\nBest regards,\nThe FortiTask Team`,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Registration email sent to ${email}`);
  } catch (error) {
    console.error('Error sending registration email:', error.message);
    throw error; // Re-throw the error to handle it in the calling function
  }
};

// Exporting the functions
module.exports = { registerUser, sendRegistrationEmail };
