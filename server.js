const express = require('express');


const routeONE = require('./routes/htmlNotes');
const routeTWO = require('./routes/index.js')
// const clogger = ('./middleware/clog')
const PORT = process.env.PORT || 3002;

const app = express();





app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', routeONE)
app.use('/api', routeTWO);

// app.use(clogger);






// app.listen(3000)
app.listen(PORT, () => {
console.log(`im here`)
}
);