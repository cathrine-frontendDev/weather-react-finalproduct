import React from "react";
import axios from "axios";
import "./weather.css";

export default function weather (){
    function handleResponse (response){
        console.log(response.data);
    }
    const apiKey="0eb691o00e3fb24a210b62tf2c42a9e3";
    let city="Johannesburg";
        let apiUrl=`https://api.shecodes.io/weather/v1/current?query={query}&key={key}`;
        axios.get(apiUrl).then(handleResponse);
    return (
        <div className="weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="Search" placeholder="Type a City" className="form-control" autoFocus="on"/>
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary"/>
                </div>
                </div>
            </form>
            <h1>Johannesburg</h1>
            <ul>
                <li>Sunday 13:15</li>
                <li>Partly Cloudy</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                    />
                    <span className="temperature">6</span>
                    <span className="unit">°C</span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation:11%</li>
                        <li>Humidity:80%</li>
                        <li>Wind:14km/h</li>
                    </ul>
                </div>
            </div>
            </div>
    );
}