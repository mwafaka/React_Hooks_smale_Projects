import React from "react";

const Weather = props => (
  <div>
    {props.city && props.country && (
      <p>
        Location: {props.city} , {props.country}
      </p>
    )}
    {props.temperature && <p>Temperature: {props.temperature}</p>}
    {props.humidity && <p> Humidity: {props.humidity}</p>}
    {props.description && <p> Conditions: {props.description}</p>}
    {props.error && <h3>Error : {props.error}</h3>}
  </div>
);

export default Weather;
