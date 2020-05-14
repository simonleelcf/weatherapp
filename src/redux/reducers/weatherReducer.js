import {CHANGE_LIMIT, UPDATE_WEATHER, SETWEATHERLOADING, GETWEATHERFAILURE} from "../actions/weatherActions";

const initialState = {
    current: {},
    forecasts: [],
    limit: 5,
    cityName:"",
    isLoading: false,
    error: null,
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case  CHANGE_LIMIT:
            return {
                ...state,
                limit: action.payload.limit
            }
        case SETWEATHERLOADING:
            return{
                ...state,
                isLoading: true,
                error: null,
            }
        case GETWEATHERFAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            }
            
        case  UPDATE_WEATHER:
            return {
                ...state,
                current: action.payload.weather.current,
                forecasts: action.payload.weather.forecasts,
                cityName: action.payload.weather.cityName, 
                isLoading: false,
            }
        default:
            return state;
    }
}

export default reducer;