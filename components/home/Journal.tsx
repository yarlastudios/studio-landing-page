import Link from "next/link";
import { JOURNAL_ARTICLES } from "@/lib/journal";

export function Journal() {
  return (
    <>
      <section
        className="px-[var(--pad-x)] py-[120px] max-[700px]:py-20"
        id="journal"
      >
        <div className="mb-20 grid grid-cols-[1fr_2fr] items-end gap-[60px] max-[900px]:grid-cols-1 max-[900px]:gap-6">
          <div className="flex items-baseline gap-3 text-[11px] font-medium uppercase leading-none tracking-[0.06em] text-[var(--muted)] [font-family:var(--f-mono)]">
            <span className="font-semibold text-[var(--blue)]">/07</span>
            <span>Journal</span>
          </div>
          <h2 className="reveal-on-scroll m-0 max-w-[18ch] text-[clamp(36px,5.5vw,88px)] font-semibold leading-[1.02] tracking-[-0.035em] [font-family:var(--f-display)]">
            Notes from the studio.
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
          {JOURNAL_ARTICLES.map((article) => (
            <Link
              key={article.slug}
              href={`/journal/${article.slug}`}
              className="group relative flex min-h-[240px] flex-col gap-4 rounded-xl border border-[var(--line)] bg-[var(--white)] p-8 text-inherit transition-[transform,border-color,background] duration-500 ease-[var(--ease)] hover:-translate-y-1 hover:border-[var(--ink)]"
              data-cursor="link"
            >
              <div className="text-[11px] font-medium uppercase leading-none tracking-[0.05em] text-[var(--muted)] [font-family:var(--f-mono)]">
                {article.category} · {article.readingTime} min · {article.dateFormatted}
              </div>
              <h3 className="m-0 text-[22px] font-semibold leading-[1.15] tracking-[-0.02em] text-[var(--ink)] [font-family:var(--f-display)]">
                {article.title}
              </h3>
              <p className="m-0 text-[15px] font-normal leading-normal text-[var(--muted)] [font-family:var(--f-display)]">
                {article.excerpt}
              </p>
              <span className="mt-auto self-end text-[22px] text-[var(--ink)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--blue)]">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
