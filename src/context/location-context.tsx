"use client";
import { getNews } from "@/hooks/useNews";
import { getWeather } from "@/hooks/useWeather";
import { filterNewsByWeather } from "@/utils/weatherLogic";
import React from "react";

interface weatherTypes {
  description?: string;
  icon?: string;
  id?: number;
  main?: string;
}

export interface Weather {
  weather: weatherTypes[];
  name: string;
  base: string;
  main: {
    temp: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
  };
  wind: {
    deg: number;
    gust: number;
    speed: number;
  };
}
type WeatherAndNews = {
  weather: Weather | null;
  news: News[];
  loading: boolean;
  location: string;
};

export type News = {
  title: string;
  description: string;
  urlToImage: string;
  author: string;
  content: string;
};
const LocationContext = React.createContext<WeatherAndNews | null>(null);

export const LocationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [location, setLocation] = React.useState<string>("");
  const [weather, setWeather] = React.useState<Weather | null>(null);
  const [news, setNews] = React.useState<News[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setLoading(true);

    navigator.geolocation.getCurrentPosition(async (pos) => {
      const data = await getWeather(pos.coords.latitude, pos.coords.longitude);
      setLocation(data.sys.country);
      const allNews = await getNews(data?.sys?.country);
      setWeather(data);
      setNews(
        filterNewsByWeather(data.weather[0].description, allNews?.articles)
      );
      setLoading(false);
    });
  }, []);

  return (
    <LocationContext value={{ weather, loading, news, location }}>
      {children}
    </LocationContext>
  );
};

export const useWeatherAndNews = () => {
  const weather = React.use(LocationContext);
  if (!weather) {
    throw new Error("useLocation must be use inside LocationProvider.");
  }
  return weather;
};
