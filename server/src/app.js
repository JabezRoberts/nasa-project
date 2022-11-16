const express = require('express');

const app = express();

app.use(express.json());// parse incoming json data from body of incoming requests 

module.exports = app;