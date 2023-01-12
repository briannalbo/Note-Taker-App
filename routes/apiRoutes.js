const ROUTER = require('express').Router();
const uuidv1 = require('uuidv1');
const { readFromFile, writeToFile, readAndAppend } =  require('../helpers/fsUtils');



ROUTER.get('/notes', (req, res) => {
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));

});







ROUTER.get('/notes', (req, res) => {
    notes.get("/:note_id", (req, res) => {
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
    
});

ROUTER.post('/notes', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text,
        note_id: uuidv1(),
      };
  
      readAndAppend(newNote, "./db/db.json");
      res.json(`Note added successfully 🚀`);
    } else {
      res.error("Error in adding note");
    }
});



module.exports = ROUTER;