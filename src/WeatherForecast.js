import React, { useState } from "react";
// import DateFormat from "./DateFormat";
import "./WeatherForecast.css";
import axios from "axios";

const WeatherForecast = (props) => {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  const handleResponse = (response) => {
    setForecast(response.data.daily);
    setLoaded(true);
  };

  //if loaded display else make api call & show forecast
  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col-3">
            <div className="Forecast-day">
              {/* <DateFormat date={props.data.date} />  */}
              {forecast[0].time}
            </div>
            <div className="Weather-icon">
              {/* <img src={props.data.icon} alt="weather icon" /> */}
              <img src={forecast[0].condition.icon_url} alt="weather icon" />
            </div>
            <span>
              <span className="Forecast-max">
                <strong>{Math.round(forecast[0].temperature.maximum)}°</strong>
              </span>
              {"   "}
              <span className="Forecast-min">
                {Math.round(forecast[0].temperature.minimum)}°
              </span>
            </span>
          </div>
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
