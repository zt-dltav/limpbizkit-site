import { getTourDates } from "@/sanity/queries";
import { TourCard } from "./TourCard";

export async function TourSection() {
  const shows = await getTourDates();

  return (
    <section
      id="tour"
      style={{
        paddingInline: "clamp(1.5rem, 6vw, 10rem)",
        paddingBlock: "clamp(4rem, 8vw, 9rem)",
      }}
    >
      {/* Header row */}
      <div
        className="flex items-end justify-between flex-wrap"
        style={{ marginBottom: "clamp(2rem, 4vw, 4rem)", gap: "clamp(0.75rem, 1.5vw, 1.5rem)" }}
      >
        <div>
          <p
            className="uppercase text-green"
            style={{
              fontSize: "clamp(0.65rem, 0.6vw, 0.95rem)",
              letterSpacing: "0.3em",
              marginBottom: "clamp(0.4rem, 0.6vw, 0.75rem)",
            }}
          >
            2026 Festival Season
          </p>
          <h2
            className="font-display text-cream"
            style={{ fontSize: "clamp(2.5rem, 5vw, 6rem)", lineHeight: 1.05 }}
          >
            On the Road
          </h2>
        </div>
        <a
          href="#"
          className="uppercase text-cream/50 hover:text-green transition-colors duration-200"
          style={{
            fontSize: "clamp(0.75rem, 0.65vw, 1rem)",
            letterSpacing: "0.18em",
          }}
        >
          View All Dates →
        </a>
      </div>

      {/* Cards */}
      {shows.length === 0 ? (
        <div className="border border-white/10 text-center" style={{ padding: "clamp(2rem, 4vw, 4rem)" }}>
          <p className="font-display text-cream/30" style={{ fontSize: "clamp(1.2rem, 1.5vw, 2rem)" }}>
            No Upcoming Shows
          </p>
          <p
            className="text-cream/20 uppercase tracking-widest"
            style={{ fontSize: "clamp(0.65rem, 0.6vw, 0.9rem)", marginTop: "clamp(0.4rem, 0.6vw, 0.75rem)" }}
          >
            Check back soon
          </p>
        </div>
      ) : (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "clamp(0.75rem, 1.2vw, 1.5rem)" }}
        >
          {shows.map((show) => (
            <TourCard key={show._id} show={show} />
          ))}
        </div>
      )}
    </section>
  );
}
