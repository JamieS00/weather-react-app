import React from "react";
// import DateFormat from "./DateFormat";
import "./WeatherForecast.css";
import axios from "axios";

const WeatherForecast = (props) => {
  const handleResponse = (response) => {
    console.log(response.data);
  };
  //API call for forecast
  let apiKey = "4ddbb61eb5o419b8d734a63d7f1t0b56";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let forecastUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;
  axios.get(forecastUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-3">
          <div className="Forecast-day">
            {/* <DateFormat date={props.data.date} />  */}
            Thurs
          </div>
          <div className="Weather-icon">
            <img src={props.data.icon} alt="weather icon" />
          </div>
          <span>
            <span className="Forecast-max">
              <strong>54°</strong>
            </span>
            {"   "}
            <span className="Forecast-min">42°</span>
          </span>
        </div>
      </div>
    </div>
  );
};
export default WeatherForecast;
