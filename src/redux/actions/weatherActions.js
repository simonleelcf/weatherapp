import {getWeather} from "../../axios";

export const CHANGE_LIMIT = "CHANGE_LIMIT";
export const UPDATE_WEATHER = "UPDATE_WEATHER";
export const SETWEATHERLOADING = "SETWEATHERLOADING";
export const GETWEATHERFAILURE = "GETWEATHERFAILURE";

export const changeLimitAction = (limit) => ({
    type: CHANGE_LIMIT,
    payload: {
        limit
    }
})

export const updateWeatherAction = (weather) => ({
    type:UPDATE_WEATHER,
    payload:{
        weather
    }
})

export const setWeatherLoadingAction = () => ({
    type: SETWEATHERLOADING
})

export const getWeatherFailureAction = error => ({
    type: GETWEATHERFAILURE,
    payload: {
        error,
    }
})

export const getWeatherAction = city => (dispatch, getState) => {
    dispatch(setWeatherLoadingAction());
    getWeather(city)
        .then(data => {
        const weather = {
            cityName: data.city.name,
            current: data.current,
            forecasts: data.forecast.slice(0, 10),
          }
          dispatch(updateWeatherAction(weather))
        })
        .catch(error => {
            dispatch(getWeatherFailureAction(error))
        })
}

