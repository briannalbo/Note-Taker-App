const express = require("express");


const path = require('path');
const { clog } = require('./middleware/clog')
const api = require('./routes/index.js')
const data = require('./db/db.json')
const PORT = process.env.PORT || 3000;

const app = express();

app.use(clog);
const fs = require('fs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', api);

app.use(express.static("public"));

app.get("/", (req, res) => {
res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"))
});

app.get("api/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) {
            console.log(err);
        } 
        else{
            console.log("data: " + data);
            res.json(JSON.parse(data));
        }
    });
});

app.post("/api/notes", (req, res) => {
    const { title, text } = req.body;
    if (title && text) {
        var newNote = { title, text,};
        fs.readFile("./db/db.json", "utf8", (err, data) => {
            if (err) {
                console.log(err);
            }
            else {
                const allNotes = JSON.parse(data);
            allNotes.push(newNote);
            fs.writeFile("./db/db.json", JSON.stringify(allNotes, null, 4), (writeErr) =>
            writeErr
            ? console.error(writeErr)
            : console.info("success")
            );
            }
        }
)};
});

// app.listen(3000)
app.listen(PORT, () => {
console.log(`im here`)
}
);