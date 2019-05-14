import React, { Component } from "react";

class WeatherForm extends Component {

    render() {
        return (
            <div className="querybox">
                <form onSubmit={(e) => this.props.submitVal(e)}>
                    <input type="text" name="cName" className="cityInput" />
                    <button type="submit" className="mybtn" id="getweather">Get Weather</button>
                </form>
                <p>{this.props.cityName}</p>
            </div>
        )
    }

}

export default WeatherForm