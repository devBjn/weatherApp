import axios from "axios";

export async function fetchWeather(city, setError) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`;
  try {
    const res = await axios.get(url);
    console.log(res.data);
    setError("");
    return res.data;
  } catch (err) {
    setError("City not found !!!");
    return err;
  }
}
