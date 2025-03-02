const dontenv = require('dotenv');
dontenv.config();

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res)=>{
    res.send('Aayush here');
});

module.exports = app;