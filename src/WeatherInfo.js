import React from "react";
import DateFormat from "./DateFormat";
import WeatherTemp from "./WeatherTemp";

const WeatherInfo = (props) => {
  return (
    <div className="WeaatherInfo">
      <h1 className="mb-1">{props.data.city}</h1>
      <ul>
        <li>
          <DateFormat date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex align-items-center">
            <img src={props.data.icon} alt={props.data.description} />
            <div>
              <WeatherTemp celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            {/* <li>Precipitation: 15%</li> */}
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h%</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default WeatherInfo;
