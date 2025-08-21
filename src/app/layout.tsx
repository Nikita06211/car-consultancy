import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navbar from "@/components/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Auto Wisdom | Expert Car Listings & Vehicle Insights",
  description:
    "Discover premium car listings and expert automotive insights at Auto Wisdom. Get detailed specifications, comparisons, and professional recommendations to make smarter vehicle choices.",
  keywords: [
    "Auto Wisdom",
    "car listings",
    "vehicle insights",
    "car specifications",
    "buy cars online",
    "premium vehicles",
    "automotive consulting",
    "car reviews",
  ],
  authors: [{ name: "Auto Wisdom" }],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navbar/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
