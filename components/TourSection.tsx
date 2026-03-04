import { getTourDates } from "@/sanity/queries";
import { TourCard } from "./TourCard";

export async function TourSection() {
  const shows = await getTourDates();

  return (
    <section id="tour" className="px-6 md:px-12 lg:px-24 py-24">
      <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-green mb-2">
            2026 Festival Season
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-cream">
            On the Road
          </h2>
        </div>
        <a
          href="#"
          className="text-sm tracking-[0.18em] uppercase text-cream/50 hover:text-green transition-colors duration-200"
        >
          View All Dates →
        </a>
      </div>

      {shows.length === 0 ? (
        <div className="border border-white/10 p-12 text-center">
          <p className="font-display text-2xl text-cream/30">No Upcoming Shows</p>
          <p className="text-sm text-cream/20 mt-2 tracking-widest uppercase">
            Check back soon
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {shows.map((show) => (
            <TourCard key={show._id} show={show} />
          ))}
        </div>
      )}
    </section>
  );
}