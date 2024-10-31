const express = require('express');
const cors = require('cors');
require('dotenv').config();
const petitDejeuneRoute = require('./src/routes/PetitDejeuneRoute');
const DejeuneRoute = require('./src/routes/DejeuneRoute');
const DinersRoute = require('./src/routes/DinersRoute');
const CountriesController = require('./src/routes/CountriesRoute');
const StatsController = require('./src/routes/StatsRoute');
const port = process.env.PORT || 3000;


// Middleware cors
const app = express(); 
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use(express.json());

app.use('/api/petitDejeune', petitDejeuneRoute);
app.use('/api/Dejeune', DejeuneRoute);
app.use('/api/Diners', DinersRoute);
app.use('/api/countries', CountriesController);
app.use('/api/stats', StatsController);



const linkApp = `http://localhost:${port}`;

app.listen(port, () => {
    console.log(`Server is running on port ${linkApp}`);
});
