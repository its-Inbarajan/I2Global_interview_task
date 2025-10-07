"use client";
import { useWeatherAndNews } from "@/context/location-context";
import React from "react";

export const RightPanel = () => {
  const { weather } = useWeatherAndNews();
  return (
    <aside className="bg-[#DEAB4D] p-5 rounded-2xl shadow text-white">
      <div className="text-right">
        <p className="text-lg font-semibold">
          {" "}
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </p>
      </div>
      <div className="mt-4 space-y-3">
        <p>🌡️ Real Feel: {weather?.main.temp}°C</p>
        <p>💨 Wind: {weather?.wind.speed} km/hr</p>
        <p>🌧️ Base: {weather?.base}</p>
        <p>☀️ UV Index: 4</p>
      </div>
    </aside>
  );
};
