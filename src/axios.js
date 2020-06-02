import axios from 'axios';

export const getWeather = (city) => {
    return axios(
        `https://simonlee-weather-api.herokuapp.com/api/weather/au/${city}`
    ).then((res) => {
        return res.data.data;
    });
};
