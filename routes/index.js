const express = require('express');

const noteRoute = require('./public/notes');
const app = express();

app.use('/notes', noteRoute);

module.exports = app;