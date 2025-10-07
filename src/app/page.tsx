"use client";
import { Fallback } from "@/components/ui/fallback";
import { RightPanel } from "@/components/ui/right-panel";
// import { useWeatherAndNews } from "@/context/location-context";
import React, { Suspense } from "react";

const ActivitiesCard = React.lazy(
  () => import("@/components/ui/activities-card")
);
const WeatherCard = React.lazy(() => import("@/components/ui/weather-card"));

export default function Home() {
  // const { loading } = useWeatherAndNews();

  // if (loading) {
  //   return <Fallback />;
  // }

  return (
    <>
      <Suspense fallback={<Fallback />}>
        <div className="overflow-y-auto no-scrollbar col-span-9 ml-22 pr-2 scrollbar-thin scrollbar-thumb-white/20">
          <ActivitiesCard />
          <WeatherCard />
          <div className="h-[600px]" /> {/* Example filler for scroll */}
        </div>

        {/* Right Sidebar (Sticky) */}
        <div className="hidden lg:block col-span-3 sticky top-10 self-start">
          <RightPanel />
        </div>
      </Suspense>
    </>
  );
}
