const express = require('express');

const noteRoute = require('./htmlNotes').default;
const app = express();

app.use('/notes', noteRoute);

module.exports = app;