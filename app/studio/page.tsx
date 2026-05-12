import { ScrollReveal } from "@/components/ScrollReveal";
import { Intro } from "@/components/home/Intro";
import { Stats } from "@/components/home/Stats";
import { Testimonials } from "@/components/home/Testimonials";
import { CTA } from "@/components/home/CTA";
import { Footer } from "@/components/footer/Footer";

export default function StudioPage() {
  return (
    <main id="top" className="pt-[100px] min-h-screen">
      <ScrollReveal />
      <Intro />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
