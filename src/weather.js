import React,{useState}from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./weather.css";

export default function Weather (){
    const 
    [weatherData,setWeatherData]=useState({ready:false});

    function handleResponse (response){
        console.log(response.data);
        setWeatherData({
            ready:true,

            temperature:response.data.temperature.current,

            humidity:response.data.temperature.humidity,

            date:new Date (response.data.time *1000),

            description:response.data.condition.description,

            iconUrl:response.data.condition.iconUrl,

            wind:response.data.wind.speed,

            city:response.data.city
        });
    }
    if (weatherData.ready) {
    
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
            <h1>{weatherData.city}</h1>
            <ul>
                <li>
                    <FormattedDate date={weatherData.date}/>
                    </li>
                <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img 
                    src={weatherData.iconUrl}
                    alt={weatherData.description}
                    />
                    <span className="temperature">
                    {Math.round(weatherData.temperature)}
                    </span>
                    <span className="unit">°C</span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity:{weatherData.humidity}%</li>
                        <li>Wind:{weatherData.wind}km/h</li>
                    </ul>
                </div>
            </div>
            </div>
    );
} else {
    const
    apiKey="0eb691o00e3fb24a210b62tf2c42a9e3";
    let city="Johannesburg";
    let
    apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
}
}