import { Hero } from "@/components/Hero";
import { TourSection } from "@/components/TourSection";
import { MusicSection } from "@/components/MusicSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <TourSection />
      <MusicSection />
    </main>
  );
}