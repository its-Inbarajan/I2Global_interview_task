import axios from "axios";

export async function getWeather(lat: number, lon: number) {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );
    if (response.statusText !== "OK") {
      throw new Error("Something went wrong!");
    }
    console.log(response.data);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}
