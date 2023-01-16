//sets/imports all required files
const notes = require('express').Router();
//requires package that gives unique ids
const uuidv1 = require('uuidv1');
//imports all fs tools from helpers folder to enable reading, writing, and read&appending data
const { readFromFile, writeToFile, readAndAppend } =  require('../helpers/fsUtils');


//get route that reads data from db file, parses it 
notes.get('/', (req, res) => {
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));

});

//get route for specific notes
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

//delte route for specific notes
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

//post route for adding a new note
notes.post('/', (req, res) => {
    console.log(req.body);
//sets note title and text equal to req.body
    const { title, text } = req.body;
  //declares format of a 'new note' 
  //incorporates uuidv1 to assign unique ids to each note
    if (req.body) {
      const newNote = {
        title,
        text,
        id: uuidv1(),
      };
  //adds new note to the database
      readAndAppend(newNote, './db/db.json');
      res.json(`Note added successfully 🚀`);
    } else {
      res.error("Error in adding note");
    }
});

//exports express app 'notes' to allow all of the above routes to be used 
module.exports = notes;