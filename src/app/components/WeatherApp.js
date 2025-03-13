'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import fetchWeatherData from '../utils/fetchWeather';
import updateGlassEffect from '../utils/updateGlassEffect';

export default function WeatherApp() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [glassClass, setGlassClass] = useState('bg-white/30 backdrop-blur-lg');

  const fetchWeather = async () => {
    if (!city) return;
    const data = await fetchWeatherData(city);
    if (data) {
      setWeather(null); 
      setTimeout(() => {
        setWeather(data);
        setGlassClass(updateGlassEffect(data.weather[0].main));
      }, 300);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 p-4 transition-all duration-500">
      <div className={`${glassClass} shadow-lg rounded-xl p-6 w-90 text-center h-[30rem] transition-all`}>
        <h1 className="text-3xl font-bold text-white mb-4">Weather App</h1>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="font-sans p-2 w-full rounded-md bg-white/20 text-white placeholder-white text-center focus:outline-none focus:ring focus:ring-white"
        />
        <button
          onClick={fetchWeather}
          className="font-sans mt-4 px-4 py-2 w-full bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Get Weather
        </button>

        {weather && weather.main && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="font-sans mt-6 p-4 bg-white/20 backdrop-blur-md rounded-lg text-white"
          >
            <h2 className="font-sans text-2xl font-semibold">{weather.name}</h2>
            <p className="font-sans text-xl">{weather.main.temp}°C</p>
            <p className="font-sans text-lg capitalize">{weather.weather[0].description}</p>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
              className="mx-auto"
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}
