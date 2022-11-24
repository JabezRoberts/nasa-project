const express = require('express');
const cors = require('cors');
const morgan = require('morgan');


const planetRouter = require('./routes/planets/planets-router');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(morgan('combined'));

app.use(express.json());// parse incoming json data from body of incoming requests 
app.use(express.static(path.join(__dirname, '..', 'public')));//serve client side static content 
app.use(planetRouter); //import and use planetRouter
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});



module.exports = app;