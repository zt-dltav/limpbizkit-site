"use client";

import { TourDate } from "@/sanity/queries";

export function TickerTrack({ items }: { items: TourDate[] }) {
  return (
    <div
      className="flex w-max"
      style={{ animation: "ticker 42s linear infinite" }}
      onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
      onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
    >
      {items.map((show, i) => (
        <span
          key={`${show._id}-${i}`}
          className="text-[0.88rem] font-bold tracking-[0.13em] uppercase text-[#050a04] whitespace-nowrap px-12"
        >
          {show.festivalName}
          <span className="opacity-40 mx-2">★</span>
          {new Date(show.date + "T12:00:00").toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })}
          {" · "}
          {show.city}, {show.country}
        </span>
      ))}
    </div>
  );
}