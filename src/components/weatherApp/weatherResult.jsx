import React, { Component } from "react";
import Droplet from './weatherImages/Droplet.svg';
import Wind from './weatherImages/Wind.svg';

class WeatherResult extends Component {

    render() {

        return (
            <div className="resultbox">
                <h1 className="location" >{this.props.cityName}</h1>
                <div className="climate_bg">
                    <img src={"http://openweathermap.org/img/w/" + this.props.weatherIcon + ".png"} />
                    <p className="description">{this.props.description}</p>
                </div>
                <p className="temperature" >{this.props.temperature} &#176;C</p>
                <div className="info_bg">
                    <img className="dropicon" src={Droplet} />
                    <p className="humidity" >{this.props.humidity} &#37;</p>
                    <img className="windicon" src={Wind} />
                    <div className="windspeed" >{this.props.windSpeed} km/hr</div>
                </div>
            </div>
        )
    }

}

export default WeatherResult