import React from 'react';
import ForecastRow from "./ForecastRow";
import {format} from 'date-fns'; 
import {connect} from "react-redux"
import {changeLimitAction} from "../redux/actions/weatherActions";

class WeatherForecast extends React.Component {

    render() {
        const {limit} = this.props;
        const forecasts = this.props.forecasts.slice(0, limit);

        return (
            <section className="weather-forecast">
                <div className="forecast__switch">
                    <button 
                        className={`forecast__switch_0${limit===5 ? 'switch-active' : ''}`}
                        onClick={() => this.props.handleChangeLimit(5)}
                        >5 items</button>
                    <button 
                        className={`forecast__switch_1${limit===10 ? 'switch-active' : ''}`}
                        onClick={() => this.props.handleChangeLimit(10)}
                        >10 items</button>
                </div>
                {forecasts.map(forecast => {
					const date = new Date(forecast.time * 1000);
					const day = format(date, 'EEE');
					const time = format(date, 'HH:mm');

					return (
						<ForecastRow
                            unit={this.props.unit} 
							key={forecast.time}
							day={day}
							high={this.props.unit==="c"? forecast.maxCelsius : forecast.maxFahrenheit}
							low={this.props.unit==="c"? forecast.minCelsius : forecast.minFahrenheit}
							time={time}
						/>
					);
				})}
          </section>
        )
    }
}


const mapStateToProps = state => ({
    unit: state.navigation.unit,
    forecasts: state.weather.forecasts,
    limit: state.weather.limit,
})

const mapDispatchToProps = dispatch => ({
    handleChangeLimit : limit => dispatch(changeLimitAction(limit)),
})

export default connect(mapStateToProps, mapDispatchToProps)(WeatherForecast);