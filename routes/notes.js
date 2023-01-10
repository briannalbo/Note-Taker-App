const notes = require('express').Router();
const tools =  require('../helpers/fsUtils');
const path = require('path');


notes.get('./public/notes', (req, res) => {
    tools
    .getNotes()
    .then((data) => {
       return res.json(data)
    })
    .catch((err) => res.status(500).json(err))
});







notes.post("./public/notes", (req, res) => {

    tools
    .newNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
    

});

module.exports = notes;