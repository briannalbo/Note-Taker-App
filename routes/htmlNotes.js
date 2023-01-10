const ROUTER = require('express').Router();
const tools =  require('../helpers/fsUtils');



ROUTER.get('/notes', (req, res) => {
    tools
    .getNotes()
    .then((notes) => {
       return res.json(notes)
    })
    .catch((err) => res.status(500).json(err))
});







ROUTER.post('/notes', (req, res) => {

    tools
    newNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
    

});

module.exports = ROUTER;