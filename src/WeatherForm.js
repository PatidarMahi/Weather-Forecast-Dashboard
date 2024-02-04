import React, { useState } from 'react';

const WeatherForm = ({ fetchWeatherData, setUnit }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (city.trim() === '') {
      alert('Please enter a city.');
      return;
    }

    fetchWeatherData(city);
   
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Get Weather</button>
      <label>
        <input
          type="radio"
          value="metric"
          checked={setUnit === 'metric'}
          onChange={() => setUnit('metric')}
        />
        Celsius
      </label>
      <label>
        <input
          type="radio"
          value="imperial"
          checked={setUnit === 'imperial'}
          onChange={() => setUnit('imperial')}
        />
        Fahrenheit
      </label>
    </form>
  );
};

export default WeatherForm;







