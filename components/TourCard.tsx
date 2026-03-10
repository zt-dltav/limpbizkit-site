import { TourDate } from "@/sanity/queries";

const TYPE_LABELS: Record<TourDate["type"], string> = {
  "festival":             "Festival",
  "festival-headlining":  "Festival · Co-Headlining",
  "support":              "Support",
  "headline":             "Headline",
};

function formatDateRange(date: string, endDate?: string): string {
  const start = new Date(date + "T12:00:00");
  const fmt = (d: Date) =>
    d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  if (!endDate) return `${fmt(start)}, ${start.getFullYear()}`;
  const end = new Date(endDate + "T12:00:00");
  return `${fmt(start)}–${end.getDate()}, ${start.getFullYear()}`;
}

export function TourCard({ show }: { show: TourDate }) {
  return (
    <div
      className="flex flex-col border border-white/10 bg-white/[0.02] hover:border-green/40 transition-colors duration-200"
      style={{
        gap: "clamp(0.5rem, 0.75vw, 1.25rem)",
        padding: "clamp(1rem, 1.5vw, 2.5rem)",
      }}
    >
      {/* Type label */}
      <div
        className="uppercase text-green/70"
        style={{ fontSize: "clamp(0.6rem, 0.7vw, 1.1rem)", letterSpacing: "0.2em" }}
      >
        {TYPE_LABELS[show.type]}
      </div>

      {/* Festival / show name */}
      <div
        className="font-display leading-tight text-cream"
        style={{ fontSize: "clamp(1.1rem, 1.6vw, 2.6rem)" }}
      >
        {show.festivalName}
      </div>

      {/* Headliner (support slots only) */}
      {show.type === "support" && show.headliner && (
        <div
          className="text-pink/80 uppercase tracking-widest"
          style={{ fontSize: "clamp(0.6rem, 0.7vw, 1.1rem)" }}
        >
          w/ {show.headliner}
        </div>
      )}

      {/* Date */}
      <div
        className="text-cream/60 font-mono"
        style={{
          fontSize: "clamp(0.7rem, 0.8vw, 1.25rem)",
          marginTop: "clamp(0.1rem, 0.25vw, 0.4rem)",
        }}
      >
        {formatDateRange(show.date, show.endDate)}
      </div>

      {/* Venue / city */}
      <div
        className="text-cream/50"
        style={{ fontSize: "clamp(0.7rem, 0.8vw, 1.25rem)" }}
      >
        {show.venue ? `${show.venue} · ` : ""}{show.city}, {show.country}
      </div>

      {/* Ticket link */}
      {show.ticketUrl ? (
        <a
          href={show.ticketUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto uppercase text-cream/60 border-b border-cream/20 w-fit hover:text-green hover:border-green transition-colors duration-200"
          style={{
            fontSize: "clamp(0.6rem, 0.7vw, 1.1rem)",
            letterSpacing: "0.18em",
            paddingTop: "clamp(0.75rem, 1vw, 1.5rem)",
            paddingBottom: "2px",
          }}
        >
          Get Tickets →
        </a>
      ) : (
        <span
          className="mt-auto uppercase text-cream/30"
          style={{
            fontSize: "clamp(0.6rem, 0.7vw, 1.1rem)",
            letterSpacing: "0.18em",
            paddingTop: "clamp(0.75rem, 1vw, 1.5rem)",
          }}
        >
          Tickets TBA
        </span>
      )}
    </div>
  );
}
