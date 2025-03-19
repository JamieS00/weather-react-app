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
  let [city, setCity] = useState(props.defaultCity); //weather comp

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

  const search = () => {
    let APIkey = "4ddbb61eb5o419b8d734a63d7f1t0b56";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${APIkey}&units=metric`;
    axios.get(url).then(handleResponse);
  };

  //2.Runs when search btn is click
  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(city);
    search();
  };

  //1.track user input
  const updateCity = (event) => {
    // console.log(event.target.value);
    setCity(event.target.value);
  };

  //When its true display
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="d-flex">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control  me-4"
              autoFocus="on"
              onChange={updateCity}
            />
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
};

export default Weather;
