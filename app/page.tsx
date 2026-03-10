import { Hero } from "@/components/Hero";
import { TourSection } from "@/components/TourSection";
import { MusicSection } from "@/components/MusicSection";
import { AboutSection } from "@/components/AboutSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <TourSection />
      <MusicSection />
      <AboutSection />
    </main>
  );
}