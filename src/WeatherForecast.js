import React, {useState} from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherForecast (props){
    let [loaded,setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    
    }

    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    <div className="col">
                   <WeatherForecastDay data={forecast[0]} />
                    </div>
                </div>
            </div>
            );
   
    } else {
        let apiKey="0eb691o00e3fb24a210b62tf2c42a9e3";
        let latitude=props.coordinates.latitude;
        let longitude=props.coordinates.longitude;
    let apiUrl=`https://api.openweather.org/data/3.0/onecall?lat=${latitude}$lon=${longitude}&appid=${apiKey}$units=metric`
      axios.get(apiUrl).then(handleResponse);
    
      return null; 
}
}