import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

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
        <main className="flex-1 overflow-hidden rounded-xl px-14 pt-4 bg-[#D69E36]">
          {children}
        </main>
      </body>
    </html>
  );
}
