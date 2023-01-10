const notes = require('express').Router();
const path = require('path');

notes.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

notes.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});
// app.use('/notes', noteRoute);

module.exports = notes;