const express = require('express');
const dotenv = require('dotenv');
dotenv.config();


const weatherRoute = require('./routes/weatherRoute');


const app = express();

app.use(express.json());

app.use('/', weatherRoute);

app.listen(process.env.PORT, () => {
    console.log(`Running on port ${process.env.PORT}`);
});
