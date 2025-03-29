import React from "react";

const WeatherForecastDay = (props) => {
  //props = props from forecast component

  const day = () => {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    return days[day];
  };
  return (
    <div className="WeatherForecastDay">
      <div className="Forecast-day">{day()}</div>
      <div className="Weather-icon">
        <img src={props.data.condition.icon_url} alt="weather icon" />
      </div>
      <span>
        <span className="Forecast-max">
          <strong>{Math.round(props.data.temperature.maximum)}°</strong>
        </span>
        {"   "}
        <span className="Forecast-min">
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </span>
    </div>
  );
};
export default WeatherForecastDay;
