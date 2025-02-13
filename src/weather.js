import React,{useState}from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./weather.css";

export default function Weather (props){
    const 
    [weatherData,setWeatherData]=useState({ready:false});
    const
    [city, setCity]=useState(props.defaultCity);

    function handleResponse (response){
        console.log(response.data);
        setWeatherData({
            ready:true,

            temperature:response.data.temperature.current,

            humidity:response.data.temperature.humidity,

            date:new Date (response.data.time *1000),

            description:response.data.condition.description,

            icon:response.data.weather.icon,

            wind:response.data.wind.speed,

            city:response.data.city,
        });
    }

    function search() {
        const
    apiKey="0eb691o00e3fb24a210b62tf2c42a9e3";
    let
    apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse); 
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);

    }
    if (weatherData.ready) {
    return (
        <div className="weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                <input 
                type="Search" 
                placeholder="Type a City"
                 className="form-control" 
                 autoFocus="on"
                 onChange={handleCityChange}
                 />
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary"/>
                </div>
                </div>
            </form>
            <WeatherInfo data={weatherData} />
            </div>
    );
} else {
   search();
}
}