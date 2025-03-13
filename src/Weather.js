import React, { useState } from "react";
import DateFormat from "./DateFormat";
import "./Weather.css";

import axios from "axios";

// *************GOALS******************
// 1. track user input
// 2. Do something when search is click
// 3. make an API cal
// 4. display temp, desc, hum, & wind

const Weather = (props) => {
  let [weatherData, setweatherData] = useState({ ready: false });

  const handleResponse = (response) => {
    // console.log(response.data);
    setweatherData({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      date: new Date(response.data.time * 1000),
    });
  };

  //When its true display
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </form>
        <hr />
        <h1 className="mb-1">{weatherData.city}</h1>
        <ul>
          <li>
            <DateFormat date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="d-flex align-items-center">
              <img src={weatherData.icon} alt={weatherData.description} />
              <div>
                <span className="temperature">{weatherData.temperature}</span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              {/* <li>Precipitation: 15%</li> */}
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h%</li>
            </ul>
          </div>
          <hr />
        </div>
      </div>
    );
  } else {
    let APIkey = "4ddbb61eb5o419b8d734a63d7f1t0b56";

    let url = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${APIkey}&units=metric`;
    axios.get(url).then(handleResponse);

    return "Loading...";
  }
};

export default Weather;
