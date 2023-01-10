const express = require("express");

const tools = require('./helpers/fsUtils');
const path = require('path');
const { clog } = require('./middleware/clog')
const routeTWO = require('./routes/index.js')
const  api = require('./db/db.json')
const PORT = process.env.PORT || 3002;

const app = express();

app.use(clog);


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/routes', routeTWO);

app.use(express.static("public"));




// app.listen(3000)
app.listen(PORT, () => {
console.log(`im here`)
}
);