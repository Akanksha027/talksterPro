const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const authenticateToken = require('../middlewares/authenticateToken'); // Import the middleware
const router = express.Router();

// Register route without hashing
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  console.log("Registering user:", username);

  const newUser = new User({ username, password }); // Save password as plain text

  try {
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to register user' });
  }
});

// Login route without hashing
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  console.log("Username:", username, "Password:", password);

  const user = await User.findOne({ username });
  if (!user) {
    console.log('User not found');
    return res.status(400).json({ error: 'Invalid credentials' });
  }

  // Directly compare the plain text passwords
  if (password !== user.password) {
    console.log('Password is incorrect');
    return res.status(400).json({ error: 'Invalid credentials' });
  }

  console.log('Login Successful');
  const token = jwt.sign({ userId: user._id }, 'guptt_raaz', { expiresIn: '98h' });
  res.status(200).json({ token });
});

// Profile route (Protected route)
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password'); // Don't return the password
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user); // Return user profile
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
