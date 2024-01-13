require('dotenv').config();  // Load environment variables from .env file

module.exports = {
  secret: process.env.JWT_SECRET || 'default_secret_key',  // Fallback to a default if not provided
  expiresIn: '1h',
};