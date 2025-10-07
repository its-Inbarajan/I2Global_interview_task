"use client";
import type { News } from "@/context/location-context";
import { useWeatherAndNews } from "@/context/location-context";
import Image from "next/image";
import React from "react";

export default function News() {
  const { news } = useWeatherAndNews();
  return (
    <div className="col-span-12 ml-20 overflow-y-auto no-scrollbar mt-2">
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-3 gap-6 px-2 py-2">
        {news?.map((item: News) => (
          <div
            key={item.title}
            className="max-w-sm bg-[#DEAB4D] rounded overflow-hidden shadow-lg"
          >
            <Image
              className="w-full h-1/2"
              src={item.urlToImage ? item.urlToImage : "/next.svg"}
              alt="Sunset in the mountains"
              width={50}
              height={50}
            />
            <div className="px-6 py-4">
              <div className="font-semibold text-lg mb-2">{item.title}</div>
              <p className="text-gray-700 text-base mb-0 font-normal">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
      {news.length === 0 && (
        <div className="flex justify-center items-center">
          <h1>No news found in your location.</h1>
        </div>
      )}
    </div>
  );
}
