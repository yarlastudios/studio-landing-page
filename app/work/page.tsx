import { ScrollReveal } from "@/components/ScrollReveal";
import { Work } from "@/components/home/Work";
import { CTA } from "@/components/home/CTA";

export default function WorkPage() {
  return (
    <main id="top" className="pt-[100px] min-h-screen">
      <ScrollReveal />
      <Work />
      <CTA />
    </main>
  );
}
