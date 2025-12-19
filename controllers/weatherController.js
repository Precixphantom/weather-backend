
const weather = require('../models/weather');

const getWeather = async (req, res) => {
    try {
        const city = req.query.city;

        if (!city) {
            return res.status(400).json({error: "A City is required"});
        };

        const weatherData = await weather.getWeatherData(city);

        res.json(weatherData);
    }
    catch (err) {
        res.status(500).json({error: err.message});
    };
}

module.exports = {getWeather};