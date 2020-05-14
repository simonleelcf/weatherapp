import React from "react";
import umberella from "../assets/icon/icon-umberella.png"
import wind from "../assets/icon/icon-wind.png"
import compass from "../assets/icon/icon-compass.png"
import {connect} from "react-redux";

function WeatherCondition(props) {
    return (
        <section className="weather-condition">
            <div className="weather-condition__location">{props.cityName}</div>
            <div className="weather-condition__clear">Clear</div>
    <div className="weather-condition__temp">{props.unit === "c"? props.current.maxCelsius : props.current.maxFahrenheit}{props.unit.toUpperCase()}</div>
            <div className="weather-condition__desc">
                <div>
                    <img src={umberella} />
                    <span className="citem">{props.current.humidity}</span>
                </div>
                <div>
                    <img src={wind} /> <span className="citem">{props.current.windSpeed}</span>
                </div>
                <div>
                    <img src={compass} /> <span className="citem">{props.current.windDirection}</span>
                </div>
            </div>
      </section>
    )
}


const mapStateToProps = state => ({
    unit: state.navigation.unit,
    cityName: state.weather.cityName,
    current: state.weather.current,
})

export default connect(mapStateToProps)(WeatherCondition);