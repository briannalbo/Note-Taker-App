const express = require("express");


const path = require('path');
const { clog } = require('./middleware/clog')
const api = require('./routes/index.js')
const data = require('./db/db.json')
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api', api);

app.use(express.static('public'));

app.get("/", (req, res) => {
res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get(routeOne, (req, res) => {
    res.send("cool")
});

// app.listen(3000)
app.listen(PORT, () => {
console.log(`im here`)
}
);