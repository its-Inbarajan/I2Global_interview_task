"use client";
import ActivitiesCard from "@/components/ui/activities-card";
import { RightPanel } from "@/components/ui/right-panel";
import WeatherCard from "@/components/ui/weather-card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div
      className="
        grid grid-cols-1 lg:grid-cols-[1fr_350px]
        gap-4 h-[calc(100vh-2rem)]
        overflow-hidden
      "
    >
      <div className="col-span-12">
        <div className="flex items-center h-8/12 mt-2.5 justify-between">
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
                New work
              </span>
            </div>

            <span className="font-semibold text-4xl ml-2 leading-6 tracking-wide text-white">
              Cloudy
            </span>
            <div className="flex flex-col ml-2 gap-1.5 mt-10">
              <span className="font-semibold text-white leading-5 tracking-wide text-5xl">
                26°C
              </span>
              <span className="font-normal text-white leading-5 tracking-wide text-xs">
                Sunday | 12 Dec 2025
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
      <div className="col-span-1">
        <div className="px-3 py-2 bg-white/25 rounded-[40px]  flex-col justify-center items-center gap-3 inline-flex">
          <div className="bg-white rounded-[40px] justify-center items-center inline-flex">
            <Link
              href={"/"}
              title="Profile"
              className="w-10 h-10 justify-center items-center inline-flex"
            >
              <Image
                src={"/next.svg"}
                alt="prfile"
                width={10}
                height={10}
                className="rounded-full object-fit w-6 h-6"
              />
            </Link>
          </div>

          <div className="justify-center items-center inline-flex">
            <Link
              href={"/"}
              title="weather"
              className="w-10 h-10 transition-all duration-500 ease-in-out justify-center items-center flex hover:bg-yellow-400 rounded-full"
            >
              <Image
                src={"/weather.svg"}
                alt="weather"
                width={10}
                height={10}
                className="size-5"
              />
            </Link>
          </div>
          <div className="justify-center items-center inline-flex">
            <Link
              href={"/"}
              title="News"
              className="w-10 h-10 transition-all duration-500 ease-in-out justify-center items-center flex hover:bg-yellow-400 rounded-full"
            >
              <Image
                src={"/newspaper.svg"}
                alt="newspaper"
                className="size-5"
                width={10}
                height={10}
              />
            </Link>
          </div>
          <div className=" justify-center items-center inline-flex">
            <Link
              href={"/"}
              title="Setting"
              className="w-10 h-10 transition-all duration-500 ease-in-out justify-center items-center flex hover:bg-yellow-400 rounded-full"
            >
              <Image
                src={"/setting.svg"}
                alt="setting"
                className="size-5"
                width={10}
                height={10}
              />
            </Link>{" "}
          </div>
        </div>
      </div>

      <div className="overflow-y-auto no-scrollbar col-span-8 pr-2 scrollbar-thin scrollbar-thumb-white/20">
        <ActivitiesCard />
        <WeatherCard />
        <div className="h-[600px]" /> {/* Example filler for scroll */}
      </div>

      {/* Right Sidebar (Sticky) */}
      <div className="hidden lg:block col-span-3 sticky top-10 self-start">
        <RightPanel />
      </div>
    </div>
  );
}
