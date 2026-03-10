import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Ticker } from "@/components/Ticker";
import { spaceMono } from "./fonts";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Limp Bizkit — Official Site",
  description: "Nu metal legends. Jacksonville, FL. Est. 1995.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet" />
      </head>
      <body className={`${spaceMono.className} pb-16`}>
        <Nav />
        {children}
        <Ticker />
        <Analytics />
      </body>
    </html>
  );
}
