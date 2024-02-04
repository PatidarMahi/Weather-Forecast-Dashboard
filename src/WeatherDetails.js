// WeatherDetails.js
import React from 'react';

const WeatherDetails = ({ data, unit }) => {
  const { main, wind, weather } = data;

  return (
    <div className="weather-details">
      <h2>{data.name}</h2>
      <p>Temperature: {main.temp}°{unit === 'metric' ? 'C' : 'F'}</p>
      <p>Min/Max Temperature: {main.temp_min}°{unit === 'metric' ? 'C' : 'F'} / {main.temp_max}°{unit === 'metric' ? 'C' : 'F'}</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind: {wind.speed} m/s, {wind.deg}°</p>
      <p>Description: {weather[0].description}</p>
      <img src={`http://openweathermap.org/img/w/${weather[0].icon}.png`} alt="Weather Icon" />
    </div>
  );
};

export default WeatherDetails;







