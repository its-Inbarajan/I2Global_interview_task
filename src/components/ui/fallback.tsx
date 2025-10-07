"use client";
import React from "react";

export const Fallback = () => {
  return (
    <div className="flex fixed z-50 justify-center items-center bg-black inset-0 min-h-screen w-screen flex-row gap-2">
      <div className="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
    </div>
  );
};
