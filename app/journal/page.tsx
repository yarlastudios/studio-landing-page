import { ScrollReveal } from "@/components/ScrollReveal";
import { Journal } from "@/components/home/Journal";
import { CTA } from "@/components/home/CTA";
import { Footer } from "@/components/footer/Footer";

export default function JournalPage() {
  return (
    <main id="top" className="pt-[100px] min-h-screen">
      <ScrollReveal />
      <Journal />
      <CTA />
      <Footer />
    </main>
  );
}
