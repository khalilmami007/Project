// controllers/authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const jwtConfig = require('../config/jwt');

// Registration
exports.register = async (req, res) => {
  try {
    // Implement registration logic here
    res.json({ message: "Registration successful" });
  } catch (error) {
    console.error('Registration failed', error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    // Implement login logic here
    res.json({ token: 'your_generated_token' });
  } catch (error) {
    console.error('Login failed', error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Logout (Note: In a token-based system, there's no traditional "logout" on the server-side.
// You may handle logout on the client side by removing the token.)
exports.logout = (req, res) => {
  // Implement logout logic here
  res.status(200).json({ message: 'Logout successful' });
};
// Helper function to validate password
// validatePassword = (password, hashedPassword) => {
//   return bcrypt.compareSync(password, hashedPassword);
//   }
  