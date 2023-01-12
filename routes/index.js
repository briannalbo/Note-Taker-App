// const ROUTER = require('express').Router();
// const path = require('path');




// ROUTER.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
// });


// ROUTER.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/notes.html'));
// });

// // module.exports = ROUTER;

const express = require('express');

// Import our modular routers for /notes
const notesRouter = require('./notes');

const app = express();

app.use('/notes', notesRouter);

module.exports = app;