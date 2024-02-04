// App.js
import React, { useState } from 'react';
import WeatherForm from './WeatherForm';
import WeatherDetails from './WeatherDetails';
import Forecast from './Forecast';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [unit, setUnit] = useState('metric'); // default to Celsius

  const fetchWeatherData = async (city) => {
    try {
      
      const apiKey = '1523501dbca833bec307a055ca304d30';
      const endpoint = 'https://api.openweathermap.org/data/2.5';
      const weatherResponse = await fetch(`${endpoint}/weather?q=${city}&units=${unit}&appid=${apiKey}`);
      const weatherJson = await weatherResponse.json();

      if (weatherJson.cod === '404') {
        throw new Error('City not found');
      }

      setWeatherData(weatherJson);

      const forecastResponse = await fetch(`${endpoint}/forecast?q=${city}&units=${unit}&appid=${apiKey}`);
      const forecastJson = await forecastResponse.json();
      setForecastData(forecastJson);
    } catch (error) {
      console.error(error.message);
      alert('City not found. Please enter a valid city.');
      setWeatherData(null);
      setForecastData(null);
    }
  };

  return (
    <div className="app">
      <WeatherForm fetchWeatherData={fetchWeatherData} setUnit={setUnit} />
      {weatherData && <WeatherDetails data={weatherData} unit={unit} />}
      {forecastData && <Forecast data={forecastData} unit={unit} />}
    </div>
  );
};

export default App;





