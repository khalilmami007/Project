// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authenticateToken = require('../middleware/authenticationMiddleware');

// Registration route
router.post('/api/register', authController.register);

// Login route
router.post('/login', authController.login);

// Logout route (if needed)
router.post('/logout', authenticateToken, authController.logout);

module.exports = router;
