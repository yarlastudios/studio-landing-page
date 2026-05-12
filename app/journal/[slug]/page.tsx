import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getArticleBySlug,
  getAllSlugs,
  JOURNAL_ARTICLES,
  type Section,
  type JournalArticle,
} from "@/lib/journal";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CTA } from "@/components/home/CTA";
import { ShareButtons } from "@/components/journal/ShareButtons";
import { Footer } from "@/components/footer/Footer";

/* ── Content renderer ── */
function ArticleContent({ sections }: { sections: Section[] }) {
  return (
    <div className="mt-14 [font-family:var(--f-display)]">
      {sections.map((section, i) => {
        switch (section.type) {
          case "heading":
            return (
              <h2
                key={i}
                className="mb-5 mt-14 text-[clamp(22px,2.8vw,34px)] font-semibold leading-[1.15] tracking-[-0.025em] text-[var(--ink)]"
              >
                {section.text}
              </h2>
            );
          case "paragraph":
            return (
              <p
                key={i}
                className="mb-6 text-[17px] font-normal leading-[1.7] text-[var(--ink-2)]"
              >
                {section.text}
              </p>
            );
          case "pullquote":
            return (
              <blockquote
                key={i}
                className="my-12 border-l-2 border-[var(--blue)] pl-8 text-[clamp(20px,2.4vw,30px)] font-medium leading-[1.35] tracking-[-0.02em] text-[var(--ink)]"
              >
                <span className="mr-1 font-[family-name:var(--f-serif)] text-[1.3em] font-normal not-italic leading-[0] text-[var(--blue)] [vertical-align:-0.15em]">
                  &quot;
                </span>
                {section.text}
              </blockquote>
            );
          case "list":
            return (
              <ul key={i} className="mb-8 flex flex-col gap-3 pl-0">
                {section.items?.map((item, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-[17px] font-normal leading-[1.65] text-[var(--ink-2)]"
                  >
                    <span className="mt-[0.42em] size-[6px] shrink-0 rounded-full bg-[var(--blue)]" />
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "divider":
            return (
              <div key={i} className="my-14 flex items-center gap-4">
                <div className="h-px flex-1 bg-[var(--line)]" />
                <div className="flex gap-2">
                  {[0, 1, 2].map((d) => (
                    <div key={d} className="size-1 rounded-full bg-[var(--line)]" />
                  ))}
                </div>
                <div className="h-px flex-1 bg-[var(--line)]" />
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

/* ── Author bio ── */
function AuthorBio({
  author,
}: {
  author: JournalArticle["author"];
}) {
  return (
    <div className="mt-20 flex gap-6 rounded-2xl border border-[var(--line)] bg-[var(--paper-2)] p-8 max-[700px]:flex-col max-[700px]:gap-4">
      <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[var(--blue)] text-[15px] font-bold tracking-[-0.01em] text-white [font-family:var(--f-display)]">
        {author.initials}
      </div>
      <div className="min-w-0">
        <p className="mb-0.5 text-[15px] font-semibold leading-none tracking-[-0.01em] text-[var(--ink)] [font-family:var(--f-display)]">
          {author.name}
        </p>
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.05em] text-[var(--muted)] [font-family:var(--f-mono)]">
          {author.role}
        </p>
        <p className="m-0 text-[15px] font-normal leading-[1.6] text-[var(--muted)] [font-family:var(--f-display)]">
          {author.bio}
        </p>
      </div>
    </div>
  );
}

/* ── Related articles ── */
function RelatedArticles({ currentSlug }: { currentSlug: string }) {
  const related: JournalArticle[] = JOURNAL_ARTICLES.filter(
    (a) => a.slug !== currentSlug,
  ).slice(0, 2);

  if (!related.length) return null;

  return (
    <div className="mt-20">
      <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.07em] text-[var(--muted)] [font-family:var(--f-mono)]">
        More from the journal
      </p>
      <div className="grid grid-cols-2 gap-6 max-[700px]:grid-cols-1">
        {related.map((a) => (
          <Link
            key={a.slug}
            href={`/journal/${a.slug}`}
            className="group flex flex-col gap-3 rounded-xl border border-[var(--line)] bg-[var(--white)] p-6 text-inherit transition-[transform,border-color] duration-500 ease-[var(--ease)] hover:-translate-y-0.5 hover:border-[var(--ink)]"
            data-cursor="link"
          >
            <div className="text-[11px] font-medium uppercase tracking-[0.05em] text-[var(--muted)] [font-family:var(--f-mono)]">
              {a.category} · {a.readingTime} min · {a.dateFormatted}
            </div>
            <h3 className="m-0 text-[18px] font-semibold leading-[1.2] tracking-[-0.015em] text-[var(--ink)] [font-family:var(--f-display)]">
              {a.title}
            </h3>
            <p className="m-0 line-clamp-2 text-[14px] leading-[1.55] text-[var(--muted)] [font-family:var(--f-display)]">
              {a.excerpt}
            </p>
            <span className="mt-auto self-end text-[18px] text-[var(--muted)] transition-[transform,color] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--blue)]">
              →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ── Page (Server Component) ── */
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  return (
    <main id="top" className="min-h-screen pt-[100px]">
      <ScrollReveal />

      {/* ── Article header ── */}
      <header className="px-[var(--pad-x)] pb-16 pt-16 max-[700px]:pt-10">
        <div className="mx-auto max-w-[780px]">

          {/* Back */}
          <Link
            href="/journal"
            className="mb-10 inline-flex items-center gap-2 text-[13px] font-medium text-[var(--muted)] transition-colors duration-200 hover:text-[var(--blue)] [font-family:var(--f-mono)]"
            data-cursor="link"
          >
            ← Journal
          </Link>

          {/* Meta */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[var(--line)] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.06em] text-[var(--muted)] [font-family:var(--f-mono)]">
              {article.category}
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.05em] text-[var(--muted)] [font-family:var(--f-mono)]">
              {article.readingTime} min read
            </span>
            <span className="text-[var(--line)] select-none">·</span>
            <time
              dateTime={article.date}
              className="text-[11px] font-medium uppercase tracking-[0.05em] text-[var(--muted)] [font-family:var(--f-mono)]"
            >
              {article.dateFormatted}
            </time>
          </div>

          {/* Title */}
          <h1 className="reveal-on-scroll m-0 mb-8 text-[clamp(32px,5vw,72px)] font-semibold leading-[1.04] tracking-[-0.04em] text-[var(--ink)] [font-family:var(--f-display)]">
            {article.title}
          </h1>

          {/* Excerpt */}
          <p className="mb-10 max-w-[55ch] text-[18px] font-normal leading-[1.6] text-[var(--muted)] [font-family:var(--f-display)]">
            {article.excerpt}
          </p>

          {/* Tags + share row */}
          <div className="flex flex-wrap items-center justify-between gap-5 border-t border-[var(--line)] pt-7">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[var(--paper-2)] px-3 py-1.5 text-[11px] font-medium tracking-[0.03em] text-[var(--muted)] [font-family:var(--f-mono)]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <ShareButtons title={article.title} slug={article.slug} />
          </div>
        </div>
      </header>

      {/* ── Rule ── */}
      <div className="mx-[var(--pad-x)] h-px bg-[var(--line)]" />

      {/* ── Body ── */}
      <article className="px-[var(--pad-x)] py-16">
        <div className="mx-auto max-w-[780px]">
          <ArticleContent sections={article.content} />
          <AuthorBio author={article.author} />
          <RelatedArticles currentSlug={article.slug} />
        </div>
      </article>

      <CTA />
      <Footer />
    </main>
  );
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}
