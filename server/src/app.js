const express = require('express');
const cors = require('cors');

const planetRouter = require('./routes/planets/planets-router');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());// parse incoming json data from body of incoming requests 
app.use(planetRouter); //import and use planetRouter



module.exports = app;