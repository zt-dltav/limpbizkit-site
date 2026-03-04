import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Ticker } from "@/components/Ticker";
import { spaceMono } from "./fonts";

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
      <body className={`${spaceMono.className} pb-16`}>
        <Nav />
        {children}
        <Ticker />
      </body>
    </html>
  );
}