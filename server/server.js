const express = require('express');
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
require("dotenv").config()
require("./config/mongoose.config")

const port = process.env.PORT
app.use(cors());
app.use(bodyParser.json());

app.use('/auth', authRoutes);


app.listen(port, () => {
    console.log(`>>>>> Server is running on Port ${port} 🎈🎈🎈`)
})