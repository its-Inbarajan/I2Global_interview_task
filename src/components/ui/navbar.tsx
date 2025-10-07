"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./drawer";
import Button from "./button";
import { useApp } from "@/context/app-context";

export const Navbar = () => {
  const { unit, setUnit, categories, setCategories } = useApp();
  // Example handlers
  const handleUnitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUnit(e.target.value as "C" | "F");
  };

  const handleCategoryChange = (category: string) => {
    setCategories(
      categories.includes(category)
        ? categories.filter((c) => c !== category)
        : [...categories, category]
    );
  };

  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="absolute inset-0 z-0 w-fit top-7/12 left-2 self-start md:left-14">
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
            href={"/news"}
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
          <Drawer>
            <DrawerTrigger asChild>
              <div className="w-10 h-10 transition-all duration-500 ease-in-out justify-center items-center flex hover:bg-yellow-400 rounded-full">
                <Image
                  src={"/setting.svg"}
                  alt="setting"
                  className="size-5"
                  width={10}
                  height={10}
                />
              </div>
            </DrawerTrigger>
            <form noValidate onSubmit={handleSubmission}>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Settings</DrawerTitle>
                  <DrawerDescription>
                    Customize your preferences below.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="px-4 py-2 space-y-6 max-w-md mx-auto w-full">
                  {/* Temperature Unit Selection */}
                  <div>
                    <label className="block font-medium mb-2 text-sm text-gray-700">
                      Temperature Unit
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-1">
                        <input
                          type="radio"
                          name="unit"
                          value="C"
                          checked={unit === "C"}
                          onChange={handleUnitChange}
                          className="accent-yellow-500"
                        />
                        Celsius (°C)
                      </label>
                      <label className="flex items-center gap-1">
                        <input
                          type="radio"
                          name="unit"
                          value="F"
                          checked={unit === "F"}
                          onChange={handleUnitChange}
                          className="accent-yellow-500"
                        />
                        Fahrenheit (°F)
                      </label>
                    </div>
                  </div>
                  {/* News Category Selection */}
                  <div className="flex flex-wrap gap-3">
                    {["technology", "sports", "business"].map((cat) => (
                      <label key={cat} className="capitalize">
                        <input
                          type="checkbox"
                          value={cat}
                          checked={categories.includes(cat)}
                          onChange={() => handleCategoryChange(cat)}
                        />
                        {cat}
                      </label>
                    ))}
                  </div>
                </div>
                <DrawerFooter className="max-w-md mx-auto w-full">
                  <Button
                    type="submit"
                    className="w-sm py-2 hover:bg-transparent hover:text-black hover:ring-1 hover:ring-black transition-all duration-500 ease-in-out px-2"
                  >
                    Save
                  </Button>
                  <DrawerClose asChild>
                    <div>
                      <Button
                        type="button"
                        className="w-sm py-2 hover:bg-transparent hover:text-black hover:ring-1 hover:ring-black transition-all duration-500 ease-in-out px-2"
                      >
                        Cancel
                      </Button>
                    </div>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </form>
          </Drawer>
        </div>
      </div>
    </div>
  );
};
