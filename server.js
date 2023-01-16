//sets all requirements
const express = require('express');
const path = require('path');
const api = require('./routes/index.js');
//sets port for localhost
const PORT = process.env.PORT || 3003;

//sets express app 
const app = express();
//enables middleware for parsing data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api);

app.use(express.static('public'));


//get request for notes page
app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, './public/notes.html'))
);
//get request for homepage
app.get('/*', (req, res) => 
    res.sendFile(path.join(__dirname, './public/index.html'))
);







// app.listen(3000)
app.listen(PORT, () => {
console.log(`im here`)
}
);