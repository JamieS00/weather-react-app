import React from "react";
import "./Weather.css";

const Weather = () => {
  return (
    <div className="Weather">
      <div className="weather-container">
        <form action="handleSubmit" className="weather-search-bar mb-4">
          <input type="search" placeholder="Enter a city..." />
          <input type="submit" value="Search" />
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
    </div>
  );
};
export default Weather;
