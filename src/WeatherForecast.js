import React from "react";
import DateFormat from "./DateFormat";
import "./WeatherForecast.css";

const WeatherForecast = (props) => {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-3">
          <div className="Forecast-day">
            <DateFormat date={props.data.date} />
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
    </div>
  );
};
export default WeatherForecast;
