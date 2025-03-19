import React, { useState } from "react";

const WeatherTemp = (props) => {
  let [unit, setUnit] = useState("celsius");

  const showCelsius = (event) => {
    event.preventDefault();
    setUnit("celsius");
  };

  const showFahrenheit = (event) => {
    event.preventDefault();
    setUnit("fahrenheit");
  };
  if (unit === "celsius") {
    return (
      <div className="WeatherTemp">
        <span className="temperature">{props.celsius}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemp">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="unit">
          {" "}
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
};
export default WeatherTemp;
