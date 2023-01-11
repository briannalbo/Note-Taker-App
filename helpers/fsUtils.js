const fs = require('fs');
const util = require('util');
const uuidv1 = require('uuidv1');

const readFromFile = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

function read() {
  readFromFile('db/db.json', 'utf-8', (err, data) => {
    res.json(JSON.parse(data))
})
  return readFromFile('db/db.json', 'utf8');
};

function write(note) {
  return writeFileAsync('db/db.json', JSON.stringify(note));
};

function getNotes(note) {
  return this.read().then((note) => {
    let parsedNotes;

    try {
      parsedNotes = [].concat(JSON.parse(note));
    }
      catch (err) {
        parsedNotes = [];
      }
    

  return parsedNotes; 
    })
  }


function newNote(note){
  const { title, text } = note; 

  const nextNote = { title, text, id: uuidv1() };

  return getNotes(note)
  .then((notes) => [...notes, nextNote])
  .then((updatedNotes) => this.write(updatedNotes))
  .then(() => nextNote);
};



module.exports = { read, write, getNotes, newNote }