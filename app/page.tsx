import { ScrollReveal } from "@/components/ScrollReveal";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { Marquee } from "@/components/home/Marquee";
import { Work } from "@/components/home/Work";
import { Services } from "@/components/home/Services";
import { Process } from "@/components/home/Process";
import { Stats } from "@/components/home/Stats";
import { Testimonials } from "@/components/home/Testimonials";
import { Journal } from "@/components/home/Journal";
import { CTA } from "@/components/home/CTA";

export default function HomePage() {
  return (
    <main id="top">
      <ScrollReveal />
      <Hero />
      <Marquee />
      <Intro />
      <Work />
      <Services />
      <Process />
      <Stats />
      <Testimonials />
      <Journal />
      <CTA />
    </main>
  );
}
