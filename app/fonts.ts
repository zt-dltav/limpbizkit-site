// app/fonts.ts
import { Anton, Space_Mono } from "next/font/google";

export const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

export const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});