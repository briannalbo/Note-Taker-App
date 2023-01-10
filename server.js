const express = require('express');


const routeONE = require('./routes/apiRoutes.js');
const routeTWO = require('./routes/htmlRoutes.js');
// const clogger = ('./middleware/clog')
const PORT = process.env.PORT || 3003;

const app = express();





app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', routeTWO)
app.use('/api', routeONE);

// app.use(clogger);






// app.listen(3000)
app.listen(PORT, () => {
console.log(`im here`)
}
);