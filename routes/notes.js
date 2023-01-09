const notes = require("express").Router();
const {readFromFile, readAndAppend, writeToFile} = require("../helpers/fsUtils");


notes.get('/', (req, res) => {
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
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

notes.post("/", (req, res) => {
    const { title, text } = req.body;
    if(req.body) {
        const newNote = { title, text, id: uuidv4() };
        readAndAppend(newNote, "./db/db.json");
        res.json(`note added!`);
    }
    else {
        res.error("There was a problem");
    }
});

module.exports = notes;