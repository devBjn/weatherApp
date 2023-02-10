import { useState } from "react";
import { fetchWeather } from "./api";
import "./App.css";
import WeatherCard from "./Components/WeatherCard";

function App() {
  const [weather, setWeather] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const weather = await fetchWeather(city, setError);
      console.log(weather);
      setWeather(weather);
    } catch (error) {
      setError("City not found !!!");
    }
  };
  const handleOnChange = (e) => {
    setCity(e.target.value);
  };
  return (
    <div className="App">
      <h1 className="app_heading">Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter city" onChange={handleOnChange} />
        <button type="submit">Search</button>
      </form>
      {error ? (
        <p className="error">{error}</p>
      ) : (
        <WeatherCard weather={weather} />
      )}
    </div>
  );
}

export default App;
