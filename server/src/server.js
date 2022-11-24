// const express = require('express');

// const app = express();
// app.listen();
// show a different and more flexible way of creating an express server below - it allows us to put all our express code into a separate file => app.js

const http = require('http');

const app = require('./app');

const { loadPlannetsData } = require('./models/planets-model');

const PORT = process.env.PORT || 8000; //front end create react app serves on port 3000 so we change to 8000. process.env.PORT sets it to the default port for the backend. it specifically the server uses it to specify which port it should run on as an environment variable

const server = http.createServer(app);


async function startServer() {
    await loadPlannetsData();
    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}... `);
    });
}

startServer();