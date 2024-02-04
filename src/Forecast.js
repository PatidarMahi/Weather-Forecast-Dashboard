// Forecast.js
import React from 'react';

const Forecast = ({ data, unit }) => {
  const { list } = data;

  return (
    <div className="forecast">
      <h2>5-Day Forecast</h2>
      <div className="forecast-list">
        {list.slice(0, 5).map((item) => (
          <div key={item.dt} className="forecast-item">
            <p>Date: {item.dt_txt}</p>
            <p>Average Temperature: {item.main.temp}°{unit === 'metric' ? 'C' : 'F'}</p>
            <p>Description: {item.weather[0].description}</p>
            <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt="Weather Icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;







