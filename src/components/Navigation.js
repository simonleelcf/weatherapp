import React from 'react';
import {connect} from "react-redux";
import {changeInputAction, toggleUnitAction} from "../redux/actions/navigationActions";
import {getWeatherAction} from "../redux/actions/weatherActions"

function Navigation(props) {
    return (
        <nav>
            <div className="nav-div">
                <input className="search-input" value={props.input} onChange={event => props.changeInput(event.target.value)}/>
                <button className="search-btn" onClick={() => props.handleSearch(props.input)}><i className="fa fa-search"></i></button>

                <button className="temp-switch" onClick={props.toggleUnit}>
                    <i                          
                    className="fa fa-thermometer-empty"
                    aria-hidden="true"
                    ></i>
                    <sup>&deg;</sup>{props.unit.toUpperCase()}
                </button>
            </div>
        </nav>
    )
}

const mapStateToProps = state => ({
    input: state.navigation.input,
    unit: state.navigation.unit,
  })
  
const mapDispatchToProps = dispatch => ({
    changeInput: input => (dispatch(changeInputAction(input))),
    toggleUnit: () => (dispatch(toggleUnitAction())),
    handleSearch: city => dispatch(getWeatherAction(city)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
