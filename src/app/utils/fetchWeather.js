export default async function fetchWeatherData(city) {
    const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) throw new Error("City not found");
      return await response.json();
    } catch (error) {
      console.error("Error fetching weather data:", error);
      return null;
    }
  }