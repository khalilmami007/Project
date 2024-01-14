
const authController = require("../controllers/authController"); 
module.exports = (app) => {
// Registration route
app.post('/register', authController.register);

// Login route
app.post('/login', authController.login);

}