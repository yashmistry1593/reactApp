import React, { Component } from "react";
import WeatherResult from "./weatherResult";
import WeatherForm from "./weatherForm";
import "./weather.css"

const API_KEY = "d4c730bc2d1f4907461b3cf8ef012c18"

class Weather extends Component {
    constructor() {
        super();
        this.state = {
            cityName: "",
            temperature: "",
            humidity: "",
            windSpeed: "",
            weatherIcon: "",
            description: "",
            displayResult: 0,
            cityArray: []
        }
    }
    
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    async handleSubmit(e) {
        e.preventDefault();
        debugger
        console.log(e)
        let city = this.capitalizeFirstLetter(e.target.cName.value);
        if (city == "") {
            alert("Please enter a city");
            return;
        } else if (!this.state.cityArray.includes(city)) {
            try {
                const api_call = await fetch(`//api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
                console.log(api_call)
                const data = await api_call.json();
                console.log(data);
                // console.log(JSON.stringify(data));
                // this.state.cityArray.push()
                // this.state.cityName = data.name
                console.log(this.state.cityArray)
                this.setState({
                    cityName: data.name,
                    temperature: Math.ceil(data.main.temp),
                    humidity: data.main.humidity,
                    windSpeed: data.wind.speed,
                    weatherIcon: data.weather[0].icon,
                    description: data.weather[0].description,
                    displayResult: 1,
                    cityArray: [...this.state.cityArray, data.name]
                })

            } catch (ex) {
                alert("Please enter a valid city name !");
            }
        }



    }

    // handleInputChange(e) {
    //     e.preventDefault();
    //     console.log("helooooo");
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

    deleteCity(index) {
        console.log(index)
        var newCityList = this.state.cityArray;
        newCityList.splice(index, 1);
        console.log(newCityList)
        this.setState({
            cityArray: newCityList
        })
    }
    displayResult() {
        return (
            <div>
                <WeatherResult {...this.state} />
                <div className="searches" id="mylist">
                    <span>Recent Searches : </span>
                    <ul className="citylistul">
                        {
                            this.state.cityArray.map((c, index) =>
                                <li key={index} className="weatherelement">
                                    {c}
                                    <span className="close" key={index} onClick={() => this.deleteCity(index)}>
                                    </span>
                                </li>)
                        }
                    </ul>
                </div>
            </div>
        );
    }
    render() {
        return (
            <div className="weather-container">
                <div className="banner">
                    <p>Welcome to Weather CheckApp</p>
                    <WeatherForm
                        {...this.state}
                        submitVal={event => this.handleSubmit(event)}
                    />
                </div >
                {this.state.displayResult == 1 ? this.displayResult() : null}

            </div>
        )
    }
}

export default Weather