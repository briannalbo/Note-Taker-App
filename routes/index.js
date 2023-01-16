// Import modular routers for /notes
const express = require('express');
const notesRouter = require('./notes');

const app = express();

app.use('/notes', notesRouter);
//exports express application using '/notes' and the notes.js file to the server file
module.exports = app;