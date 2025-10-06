"use client";
import React from "react";

export const RightPanel = () => {
  return (
    <aside className="bg-white/25 p-5 rounded-2xl shadow text-white">
      <div className="text-right">
        <p className="text-sm">SUN</p>
        <p className="text-lg font-semibold">8:00 PM GMT</p>
      </div>
      <div className="mt-4 space-y-3">
        <p>🌡️ Real Feel: 30°C</p>
        <p>💨 Wind: 0.8 km/hr</p>
        <p>🌧️ Chance of rain: 2%</p>
        <p>☀️ UV Index: 4</p>
      </div>
    </aside>
  );
};
