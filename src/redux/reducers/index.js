 import {combineReducers} from "redux";
 import navigationReducer from "./navigationReducer";
 import weatherReducer from "./weatherReducer";

 const reducers = combineReducers({
     navigation: navigationReducer,
     weather: weatherReducer,
 })

 export default reducers; 