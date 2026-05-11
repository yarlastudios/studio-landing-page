import { ScrollReveal } from "@/components/ScrollReveal";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { Marquee } from "@/components/home/Marquee";
import { Work } from "@/components/home/Work";

export default function HomePage() {
  return (
    <main id="top">
      <ScrollReveal />
      <Hero />
      <Marquee />
      <Intro />
      <Work />
    </main>
  );
}