// const express = require('express');

// const app = express();
// app.listen();
// show a different and more flexible way of creating an express server below - it allows us to put all our express code into a separate file => app.js

const http = require('http');

const mongoose = require('mongoose');

const app = require('./app');

const { loadPlannetsData } = require('./models/planets-model');

const PORT = process.env.PORT || 8000; //front end create react app serves on port 3000 so we change to 8000. process.env.PORT sets it to the default port for the backend. it specifically the server uses it to specify which port it should run on as an environment variable

const MONGO_URL = 'mongodb+srv://admin:H14RJGDKMv75xuMc@nasacluster.ltdrsnx.mongodb.net/nasa?retryWrites=true&w=majority';

const server = http.createServer(app);

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

async function startServer() {
    await mongoose.connect(MONGO_URL, {
        useNewUrlParse: true,
        useFindAndModiy: false,
        useCreateIndex: true,
        useUnifiedTopology: true
    });
    await loadPlannetsData();
    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}... `);
    });
}

startServer();