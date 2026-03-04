import { TourDate } from "@/sanity/queries";

const TYPE_LABELS: Record<TourDate["type"], string> = {
  "festival":             "Festival",
  "festival-headlining":  "Festival · Co-Headlining",
  "support":              "Support",
  "headline":             "Headline",
};

function formatDateRange(date: string, endDate?: string): string {
  const start = new Date(date + "T12:00:00"); // avoid timezone shifts
  const fmt = (d: Date) =>
    d.toLocaleDateString("en-US", { month: "short", day: "numeric" });

  if (!endDate) return `${fmt(start)}, ${start.getFullYear()}`;

  const end = new Date(endDate + "T12:00:00");
  return `${fmt(start)}–${end.getDate()}, ${start.getFullYear()}`;
}

export function TourCard({ show }: { show: TourDate }) {
  return (
    <div className="flex flex-col gap-3 p-6 border border-white/10 bg-white/[0.02] hover:border-green/40 transition-colors duration-200">
      <div className="text-[0.72rem] tracking-[0.2em] uppercase text-green/70">
        {TYPE_LABELS[show.type]}
      </div>

      <div className="font-display text-2xl leading-tight text-cream">
        {show.festivalName}
      </div>

      {show.type === "support" && show.headliner && (
        <div className="text-xs text-pink/80 tracking-widest uppercase">
          w/ {show.headliner}
        </div>
      )}

      <div className="text-sm text-cream/60 font-mono mt-1">
        {formatDateRange(show.date, show.endDate)}
      </div>

      <div className="text-sm text-cream/50">
        {show.venue ? `${show.venue} · ` : ""}{show.city}, {show.country}
      </div>

      {show.ticketUrl ? (
        <a
          href={show.ticketUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto pt-4 text-xs tracking-[0.18em] uppercase text-cream/60 border-b border-cream/20 pb-0.5 w-fit hover:text-green hover:border-green transition-colors duration-200"
        >
          Get Tickets →
        </a>
      ) : (
        <span className="mt-auto pt-4 text-xs tracking-[0.18em] uppercase text-cream/30">
          Tickets TBA
        </span>
      )}
    </div>
  );
}