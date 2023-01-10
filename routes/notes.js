const notes = require('express').Router();
const tools =  require('../helpers/fsUtils');


notes.get('./public/notes', (req, res) => {
    tools
    .getNotes()
    .then((data) => {
       return res.json(data)
    })
    .catch((err) => res.status(500).json(err))
});

notes.get('/:id', (req, res) => {
    const noteID = req.params.id;
    readFromFile("./db/db.json")
    .then((data) => JSON.parse(data))
    .then((json) => {
        const result = json.filter((note) => note.id === noteID);
        return result.length > 0
        ? res.json(result)
        : res.json("Note not found");
    });

});



notes.delete('/:id', (req, res) => {
    const noteID = req.params.id;
    readFromFile('./db/db.json')
      .then((data) => JSON.parse(data))
      .then((json) => {
        // Make a new array of all notes except the one with the ID provided in the URL
        const result = json.filter((note) => note.id !== noteID);
  
        // Save that array to the filesystem
        writeToFile('./db/db.json', result);
  
        // Respond to the DELETE request
        res.json(`Item ${noteID} has been deleted 🗑️`);
      });
  });

notes.post("/", (req, res) => {
    console.log(req.body);
    const { title, text } = req.body;

    if(req.body) {
        const newNote = { title, text, id: uuid() };
        readAndAppend(newNote, './db/db.json');
        res.json(`note added!`);
    }
    else {
        res.err("There was a problem");
    }
});

module.exports = notes;