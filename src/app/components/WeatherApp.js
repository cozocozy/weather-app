'use client';
import { useState } from 'react';
import fetchWeatherData from '../utils/fetchWeather';
import updateGlassEffect from '../utils/updateGlassEffect'; // Fungsi untuk efek glassmorph

export default function WeatherApp() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [glassClass, setGlassClass] = useState('bg-white/30 backdrop-blur-lg'); // Default glassmorph

  const fetchWeather = async () => {
    if (!city) return;
    const data = await fetchWeatherData(city);
    console.log(data);
    if (data) {
      setWeather(data);
      setGlassClass(updateGlassEffect(data.weather[0].main)); // Ubah efek glassmorph sesuai cuaca
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-r from-cyan-500 to-blue-500 p-4 transition-all duration-500">
      <div className={`${glassClass} shadow-lg rounded-xl p-6 w-90 text-center h-[30rem] transition-all`}>
        <h1 className="text-3xl font-bold text-white mb-4">Weather App</h1>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 w-full rounded-md bg-white/20 text-white placeholder-white text-center focus:outline-none focus:ring focus:ring-white"
        />
        <button
          onClick={fetchWeather}
          className="mt-4 px-4 py-2 w-full bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Get Weather
        </button>

        {weather && weather.main && (
          <div className="mt-6 p-4 bg-white/20 backdrop-blur-md rounded-lg text-white">
            <h2 className="text-2xl font-semibold">{weather.name}</h2>
            <p className="text-xl">{weather.main.temp}°C</p>
            <p className="text-lg capitalize">{weather.weather[0].description}</p>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} // Ikon cuaca sesuai API
              alt={weather.weather[0].description}
              className="mx-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
}
