const express = require('express');
const path = require('path');
const routeOne = require('./db/db.json');
const PORT = 3000;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));

app.get("/", (req, res) => {
res.send("Hi")
});

app.get(routeOne, (req, res) => {
    res.send("cool")
});

// app.listen(3000)
app.listen(PORT, () => {
console.log(`im here`)
}
);