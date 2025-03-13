import React from "react";

const DateFormat = (props) => {
  // console.log(props.date);
  let dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = dayOfWeek[props.date.getDay()];
  let hour = props.date.getHours();
  let minutes = props.date.getMinutes();

  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div className="date-format">
      {day} {hour}:{minutes}, {props.description}
    </div>
  );
};

export default DateFormat;
