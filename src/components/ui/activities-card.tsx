import { News, useWeatherAndNews } from "@/context/location-context";
import { Newspaper } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function ActivitiesCard() {
  const { news } = useWeatherAndNews();
  return (
    <section className="bg-[#DEAB4D] p-4 rounded-2xl shadow">
      <h2 className="text-white inline-flex items-center gap-2 text-lg font-semibold mb-3">
        <Newspaper className="size-5 text-white" /> Activities in your area
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {news &&
          news.length > 0 &&
          news.map((d: News) => (
            <div
              key={d.title}
              className="bg-white/20 rounded-xl overflow-hidden"
            >
              <Image
                src={d.urlToImage ? d.urlToImage : `/next.svg`}
                className="w-full h-[100px] object-cover"
                alt=""
                width={10}
                height={10}
              />
              <p className="text-start px-2  text-xs py-2 text-white">
                {d.title}.
              </p>
            </div>
          ))}
      </div>
      <div className="text-center w-full">
        {news.length === 0 && <h1>No news found in your location. </h1>}
      </div>
    </section>
  );
}
