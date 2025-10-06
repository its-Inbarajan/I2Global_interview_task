"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    // <div className="absolute inset-0 z-50 top-7/12   left-2 md:left-14">
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
    // </div>
  );
};
