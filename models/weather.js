const axios = require('axios');

const API_KEY = process.env.WEATHER_API_kEY;

async function getWeatherData(city) {
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = response.data;
        return {
            city: data.name,
            temperature: data.main.temp,
            description: data.weather[0].description,
            humidity: data.main.humidity
        };
    }
    catch (error) {
        throw new Error("Failed to fetch weather data");
    }
}

module.exports = {getWeatherData};