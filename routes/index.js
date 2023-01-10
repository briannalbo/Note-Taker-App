const ROUTER = require('express').Router();
const path = require('path');

// ROUTER.get('/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, '../notes.html'));
// });

ROUTER.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});
// app.use('/notes', noteRoute);

ROUTER.get('/no', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

module.exports = ROUTER;