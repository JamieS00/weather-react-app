import React, { useState } from "react";
import "./Weather.css";

import WeatherInfo from "./WeatherInfo";

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
        <WeatherInfo data={weatherData} />
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
