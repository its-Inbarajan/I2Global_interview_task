"use client";
import { useWeatherAndNews } from "@/context/location-context";
import Image from "next/image";
import React from "react";

export const Weather = () => {
  const { location, weather } = useWeatherAndNews();
  return (
    <div className="col-span-12 h-1/2">
      <div className="flex items-center  mt-2.5 justify-between">
        <div className="flex flex-col justify-self-start gap-7">
          <div className="flex items-center gap-3">
            <Image
              src={"/location.svg"}
              alt="location"
              width={10}
              height={10}
              className="size-10"
            />

            <span className="font-medium leading-5 tracking-wider text-xl text-white">
              {weather?.name}, {location}
            </span>
          </div>
          <div className="flex flex-col gap-1 justify-start">
            <span className="font-semibold  text-4xl ml-2 leading-6 tracking-wide text-white">
              {weather?.weather[0]?.main}
            </span>
            <span className="font-normal capitalize text-xs ml-2 leading-6 tracking-wide text-white">
              {weather?.weather[0]?.description}
            </span>
          </div>
          <div className="flex flex-col ml-2 space-y-2 gap-1.5 mt-10">
            <span className="font-semibold text-white leading-5 tracking-wide text-5xl">
              {weather?.main?.temp}°C
            </span>
            <span className="font-normal text-white leading-5 tracking-wide text-xs">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
        <div className="w-2xs max-w-full">
          <Image
            src={"/cloud.png"}
            alt="cloud"
            width={100}
            height={100}
            className="w-full h-full aspect-square"
          />
        </div>
      </div>
    </div>
  );
};
