import { ScrollReveal } from "@/components/ScrollReveal";
import { Process } from "@/components/home/Process";
import { CTA } from "@/components/home/CTA";

export default function ProcessPage() {
  return (
    <main id="top" className="pt-[100px] min-h-screen">
      <ScrollReveal />
      <Process />
      <CTA />
    </main>
  );
}
