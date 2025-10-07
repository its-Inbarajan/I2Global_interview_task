import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Weather } from "@/components/ui/weather";
import { LocationProvider } from "@/context/location-context";
import { AppProvider } from "@/context/app-context";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Weather and News Application",
  description: "I2Global Interview Task based on Weather and News.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}  antialiased flex min-h-screen `}>
        <LocationProvider>
          <AppProvider>
            <main className="flex-1 overflow-hidden rounded-xl px-14 pt-4 bg-[#D69E36] brightness-100">
              <div
                className="
              grid grid-cols-1 lg:grid-cols-[1fr_350px]
              gap-4 h-[calc(100vh-2rem)]
              overflow-hidden
              "
              >
                <Weather />
                {children}
                <Navbar />
              </div>
            </main>
          </AppProvider>
        </LocationProvider>
      </body>
    </html>
  );
}
