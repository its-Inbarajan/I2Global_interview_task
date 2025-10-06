"use client";

import React from "react";

type AppContextType = {
  unit: "C" | "F";
  setUnit: (val: "C" | "F") => void;
  categories: string[];
  setCategories: (val: string[]) => void;
};

const AppContext = React.createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [unit, setUnit] = React.useState<"C" | "F">("C");
  const [categories, setCategories] = React.useState<string[]>([]);

  const value = {
    unit,
    setUnit,
    categories,
    setCategories,
  };
  return <AppContext value={value}>{children}</AppContext>;
};

export const useApp = () => {
  const weather = React.useContext(AppContext);
  if (!weather) {
    throw new Error("useApp must be use inside AppProvider.");
  }
  return weather;
};
