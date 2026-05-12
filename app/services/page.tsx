import { ScrollReveal } from "@/components/ScrollReveal";
import { Services } from "@/components/home/Services";
import { CTA } from "@/components/home/CTA";
import { Footer } from "@/components/footer/Footer";

export default function ServicesPage() {
  return (
    <main id="top" className="pt-[100px] min-h-screen">
      <ScrollReveal />
      <Services />
      <CTA />
      <Footer />
    </main>
  );
}
