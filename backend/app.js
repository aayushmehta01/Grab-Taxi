const dontenv = require('dotenv');
dontenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const connectDB = require('./db/db')
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.get('/', (req, res)=>{
    res.send('Aayush here');
});

app.use('/api/users', userRoutes);
app.use('/api/captain', captainRoutes);


module.exports = app;