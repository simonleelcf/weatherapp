import React from 'react';
import './App.css';
import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Main from "./components/Main"
import Footer from "./components/Footer"

import {connect} from "react-redux";
import {getWeatherAction} from "../src/redux/actions/weatherActions";

import Loader from "./components/Loader";
import Error from "./components/Error"; 

class App extends React.Component {


  componentDidMount() {
    this.props.getWeather("brisbane");
  }

  renderLoaderOrError() {
    return this.props.isLoading? <Loader /> : this.props.error === null?<Main /> : < Error />
  }

  render() {
    return (
      <div className="weather-channel__container">
        <Header />
        <Navigation />
        {this.renderLoaderOrError()}
        <Footer />
      </div>
    );
  }

}

const mapStateToProps = state => ({
  isLoading: state.weather.isLoading,
  error : state.weather.error,
})

const mapDispatchToProps = dispatch => ({
  getWeather: city => dispatch(getWeatherAction(city)),
})

export default connect(mapStateToProps , mapDispatchToProps)(App);
