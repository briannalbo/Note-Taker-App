const notes = require('express').Router();
const uuidv1 = require('uuidv1');
const { readFromFile, writeToFile, readAndAppend } =  require('../helpers/fsUtils');



notes.get('/', (req, res) => {
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));

});






notes.get('/:note_id', (req, res) => {
  const noteID = req.params.note_id;
  readFromFile("./db/db.json")
    .then((data) => JSON.parse(data))
    .then((json) => {
 const result = json.filter((note) => note.note_id === noteID);
    return result.length > 0
      ? res.json(result)
     : res.json("invalid note id.");
     });
});
    
notes.delete('/:note_id', (req, res) => {
  const noteID = req.params.note_id;
  readFromFile("./db/db.json")
    .then((data) => JSON.parse(data))
    .then((json) => {
      // Make a new array of all notes except the one with the ID provided in the URL
      const result = json.filter((note) => note.id !== noteID);

      // Save that array to the filesystem
      writeToFile("./db/db.json", result);

      // Respond to the DELETE request
      res.json(`Item ${noteID} has been deleted`);
    });
});

notes.post('/', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text,
        id: uuidv1(),
      };
  
      readAndAppend(newNote, './db/db.json');
      res.json(`Note added successfully 🚀`);
    } else {
      res.error("Error in adding note");
    }
});





module.exports = notes;