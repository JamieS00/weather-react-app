import React from "react";
import "./Weather.css";

const Weather = () => {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control"
          />
          <input type="submit" value="Search" className="btn btn-primary" />
        </div>
      </form>
      <hr />
      <h1>New York</h1>
      <ul>
        <li> Wednesday 07:00 </li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="cloudy"
          />
          6°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity:72%</li>
            <li>Wind:13 km/h%</li>
          </ul>
        </div>
        <hr />
      </div>
    </div>
  );
};
export default Weather;
