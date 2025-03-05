import React, {useState, useEffect} from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherForecast (props){
    let [loaded,setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
    setLoaded (false);
    }, [props.coordinates]);

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
                    <div className="col">
                   <WeatherForecastDay data={forecast[1]} />
                    </div> 
                    <div className="col">
                   <WeatherForecastDay data={forecast[2]} />
                    </div> 
                    <div className="col">
                   <WeatherForecastDay data={forecast[3]} />
                    </div> 
                    <div className="col">
                   <WeatherForecastDay data={forecast[4]} />
                    </div> 
              </div>
          </div>
            );
   
    } else {
        let apiKey="0eb691o00e3fb24a210b62tf2c42a9e3";
        let latitude=props.coordinates.latitude;
        let longitude=props.coordinates.longitude;
    let apiUrl=`https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;
      axios.get(apiUrl).then(handleResponse);
    
      return null; 
}
}