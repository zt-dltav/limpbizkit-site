import { getTourDates } from "@/sanity/queries";
import { TickerTrack } from "./TickerTrack";

export async function Ticker() {
  const shows = await getTourDates();
  if (shows.length === 0) return null;

  const items = [...shows, ...shows];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-green overflow-hidden py-3.5">
      <TickerTrack items={items} />
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}