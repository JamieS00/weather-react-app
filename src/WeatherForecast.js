import React, { useState, useEffect } from "react";
// import DateFormat from "./DateFormat";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

const WeatherForecast = (props) => {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  //when the coordinates change then set loaded to false
  useEffect(() => {
    setLoaded(false); //call api
  }, [props.coordinates]);

  const handleResponse = (response) => {
    setForecast(response.data.daily);
    setLoaded(true);
  };

  //if loaded display else make api call & show forecast
  if (loaded) {
    // console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map((item, index) => {
            if (index > 0) {
              return (
                <div className="col-2" key={index}>
                  <WeatherForecastDay data={item} />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  } else {
    //API call for forecast
    let apiKey = "4ddbb61eb5o419b8d734a63d7f1t0b56";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let forecastUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;
    axios.get(forecastUrl).then(handleResponse);
    return null;
  }
};
export default WeatherForecast;
