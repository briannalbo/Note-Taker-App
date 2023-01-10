const ROUTER = require('express').Router();
const path = require('path');

ROUTER.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

ROUTER.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});
// app.use('/notes', noteRoute);

module.exports = ROUTER;