const dontenv = require('dotenv');
dontenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./db/db')
const userRoutes = require('./routes/user.routes');

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    res.send('Aayush here');
});

app.use('/api/users', userRoutes);


module.exports = app;