import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col justify-center px-[var(--pad-x)] bg-[var(--paper)] text-[var(--ink)]">
      <ScrollReveal />
      
      <div className="flex flex-col gap-6 max-w-[800px]">
        <div className="flex items-baseline gap-3 text-[11px] font-medium uppercase leading-none tracking-[0.06em] text-[var(--muted)] [font-family:var(--f-mono)]">
          <span className="font-semibold text-[var(--blue)]">/404</span>
          <span>Not Found</span>
        </div>
        
        <h1 className="reveal-on-scroll m-0 text-[clamp(48px,9.5vw,120px)] font-bold tracking-[-0.045em] leading-[0.9] [font-family:var(--f-display)]">
          Page <em>missing</em>.
        </h1>
        
        <p className="reveal-on-scroll m-0 max-w-[45ch] text-[18px] font-normal leading-[1.55] text-[var(--muted)] [font-family:var(--f-display)]">
          The file you are looking for has been moved, deleted, or never existed in the first place.
        </p>
        
        <div className="mt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-[var(--muted)] transition-colors duration-200 hover:text-[var(--blue)] [font-family:var(--f-mono)] uppercase tracking-[0.05em]"
            data-cursor="link"
          >
            ← Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}
