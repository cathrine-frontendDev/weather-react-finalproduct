import React from "react";
import "./weather.css";

export default function weather (){
    return (
        <div className="weather">
            <form>
                <input type="Search" placeholder="Type a City"/>
                <input type="submit" value="Search"/>
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
                    6°C|°F
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