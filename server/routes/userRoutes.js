const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    console.log("Signup request received:", req.body); // Debug
    if (!username || !email || !password || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role,
      permissions: [],
    });

    await newUser.save();
    console.log("User created:", newUser); // Debug
    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    console.error("Server error during signup:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
