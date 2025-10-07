"use client";

import { useWeatherAndNews } from "@/context/location-context";

export default function WeatherCard() {
  const { weather } = useWeatherAndNews();
  return (
    <section className="bg-[#DEAB4D] mt-6 p-4 rounded-2xl shadow">
      <h2 className="text-white text-lg font-semibold mb-3">
        🌤 24-hour forecast
      </h2>
      <div className="flex justify-between items-end text-white">
        {weather?.main &&
          Object.entries(weather.main).map(([key, value]) => (
            <div key={key} className="flex flex-col items-center">
              <p className="text-sm capitalize">{`${value}°`}</p>
              <div className="h-10 w-[2px] bg-white/40 mt-2"></div>
              <p className="text-sm capitalize">{key.replace(/_/g, " ")}</p>
            </div>
          ))}
      </div>
    </section>
  );
}
