import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";


export default function WeatherForecast (props){
    function handleResponse(response) {
        console.log(response.data);
    }


    let apiKey="0eb691o00e3fb24a210b62tf2c42a9e3";
    let latitude=props.coordinates.lat;
    let longitude=props.coordinates.lon;
    let apiUrl=`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}$units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return (
    <div className="WeatherForecast">
        <div className="row">
            <div className="col">
           <div className="WeatherForecast-day">Thu</div> 
            <WeatherIcon code="clear-sky-day" size={36}/>
            <div className="WeatherForecast-temperatures">
          <span className="WeatherForecast-temperature-max">11°
            </span> 
            <span className="WeatherForecast-temperature-min">7°
            </span>
            </div>
            </div>
        </div>
    </div>
    );
}