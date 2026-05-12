export type JournalArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: number; // minutes
  date: string; // ISO date string
  dateFormatted: string;
  author: {
    name: string;
    role: string;
    bio: string;
    initials: string;
  };
  content: Section[];
  tags: string[];
};

export type Section = {
  type: "heading" | "paragraph" | "pullquote" | "list" | "divider";
  text?: string;
  items?: string[];
};

const AUTHOR_ESWAR = {
  name: "Eswar Aditya",
  role: "Founder & Creative Director, Yarla Studios",
  bio: "Eswar leads design and strategy at Yarla Studios. He writes about the intersection of craft, systems thinking, and what it means to build things that last.",
  initials: "EA",
};

const AUTHOR_TEAM = {
  name: "Yarla Studios",
  role: "Design & Engineering Studio",
  bio: "Notes, field reports, and thinking from the Yarla Studios team — a 14-person independent studio building considered digital experiences.",
  initials: "YS",
};

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    slug: "why-we-stopped-pitching-with-decks",
    title: "Why we stopped pitching with decks.",
    excerpt:
      "Three years ago we replaced our pitch decks with working prototypes. Here's what changed.",
    category: "Essay",
    readingTime: 6,
    date: "2026-04-10",
    dateFormatted: "Apr 2026",
    author: AUTHOR_ESWAR,
    tags: ["Process", "Business", "Design"],
    content: [
      {
        type: "paragraph",
        text: "In 2023, we walked into a pitch meeting with a 47-slide deck. The client sat through it politely, asked three questions we'd already answered on slide 22, and passed. We'd spent two weeks on that deck.",
      },
      {
        type: "paragraph",
        text: "A month later, we walked into a different meeting with a laptop, an open browser, and a rough prototype we'd built in three days. The client leaned forward. They started rearranging things. They asked their dev team to join the call. We closed the project that afternoon.",
      },
      {
        type: "pullquote",
        text: "A prototype answers questions that a deck can only approximate. It makes the abstract tangible before anyone signs anything.",
      },
      {
        type: "heading",
        text: "The deck is a translation layer — and every translation loses something",
      },
      {
        type: "paragraph",
        text: "Decks translate vision into slides. Slides translate into stakeholder understanding. Stakeholder understanding translates into buy-in. By the time you get to a decision, you're four layers removed from the actual thing you're trying to build.",
      },
      {
        type: "paragraph",
        text: "Prototypes collapse that stack. When someone can click through a nav, read a headline in the right typeface, and see how a card animates on hover — they're experiencing the thing, not a representation of it. Their feedback is calibrated to reality instead of imagination.",
      },
      {
        type: "heading",
        text: "What we changed in practice",
      },
      {
        type: "list",
        items: [
          "We stopped quoting before building a 3-day discovery prototype.",
          "Our proposals are now one page of text + a clickable Figma or deployed Next.js shell.",
          "We treat the prototype as the first deliverable, not a pre-sales expense.",
          "Clients who engage with the prototype before signing tend to scope better and change less.",
        ],
      },
      {
        type: "paragraph",
        text: "This approach costs us more upfront. Some leads don't warrant a prototype. We've gotten better at knowing which ones do. The filter has improved our close rate and, more importantly, the quality of projects we take on.",
      },
      {
        type: "divider",
      },
      {
        type: "paragraph",
        text: "The irony is that a prototype is often faster to build than a deck looks to assemble. Slides require consensus, copy reviews, brand alignment. A prototype just requires building. And building is what we're good at.",
      },
    ],
  },
  {
    slug: "a-studio-retainer-that-actually-retains",
    title: "A studio retainer that actually retains.",
    excerpt:
      "Most retainers die in month four. We rebuilt ours around outcomes instead of hours.",
    category: "Field note",
    readingTime: 3,
    date: "2026-03-18",
    dateFormatted: "Mar 2026",
    author: AUTHOR_ESWAR,
    tags: ["Business", "Retainers", "Client Work"],
    content: [
      {
        type: "paragraph",
        text: "The traditional studio retainer is a bad product. You sell a client 20 hours a month, they struggle to fill them, and by month four someone is asking whether the retainer is worth renewing. It usually isn't.",
      },
      {
        type: "paragraph",
        text: "We've run retainers for 30 of our 62 engagements. The ones that thrived were never about hours — they were about a shared outcome and a rhythm of work that made the outcome achievable.",
      },
      {
        type: "pullquote",
        text: "Hours are an input. Outcomes are what clients actually care about. Design your retainer around the latter.",
      },
      {
        type: "heading",
        text: "The three things we changed",
      },
      {
        type: "list",
        items: [
          "Quarterly OKRs instead of monthly hour budgets — we align on what success looks like before we talk about capacity.",
          "A fixed weekly touchpoint, always on the same day, always with the same attendees. Rhythm beats volume.",
          "A 'fast lane' allocation — 20% of retainer time reserved for urgent work that doesn't require scoping. This prevents the retainer from feeling bureaucratic.",
        ],
      },
      {
        type: "paragraph",
        text: "The result is retainers that average 14 months versus the industry's 4-6. Clients renew because they're seeing movement on things that matter, not because they feel they need to justify a line item.",
      },
      {
        type: "divider",
      },
      {
        type: "paragraph",
        text: "If your retainer is dying in month four, the problem probably isn't the work. It's that nobody agreed on what winning looked like.",
      },
    ],
  },
  {
    slug: "designing-systems-that-survive-the-team",
    title: "Designing systems that survive the team.",
    excerpt:
      "Our talk at Config 2026 on writing brand systems for the engineering team, not just the brand team.",
    category: "Talk",
    readingTime: 8,
    date: "2026-02-22",
    dateFormatted: "Feb 2026",
    author: AUTHOR_TEAM,
    tags: ["Design Systems", "Engineering", "Brand"],
    content: [
      {
        type: "paragraph",
        text: "At Config 2026, we presented a case study on one of the harder problems in brand work: building a visual system that engineering teams actually use after the agency leaves. The recording is below, but here are the core ideas for those who'd rather read.",
      },
      {
        type: "heading",
        text: "The problem with most brand guidelines",
      },
      {
        type: "paragraph",
        text: "Most brand guidelines are written for brand managers. They document what the brand looks like in controlled conditions — the logo on a white background, the color palette as swatches, the typeface as a specimen. They say nothing about how the brand behaves in code.",
      },
      {
        type: "paragraph",
        text: "Engineers inherit these guidelines and have to translate them into tokens, components, and logic. That translation is where brand systems break down. Not because engineers don't care, but because the guidelines weren't written for them.",
      },
      {
        type: "pullquote",
        text: "A brand system that lives only in a PDF is a brand system that will diverge from reality within six months.",
      },
      {
        type: "heading",
        text: "What we build instead",
      },
      {
        type: "list",
        items: [
          "Design tokens as the single source of truth — colors, spacing, typography scales all live in a JSON file that both Figma and the codebase consume.",
          "Component documentation that includes interaction states, not just visual specs.",
          "An 'escape hatch' protocol — documented rules for when and how engineers can deviate, so deviations are intentional, not accidental.",
          "A quarterly brand audit built into the retainer, where we check the live product against the system and note drift.",
        ],
      },
      {
        type: "paragraph",
        text: "The goal isn't a perfect system — it's a living one. A system that can absorb the reality of a growing product team without losing its coherence.",
      },
      {
        type: "divider",
      },
      {
        type: "paragraph",
        text: "The talk runs 34 minutes and covers three client case studies in depth. If you're building a design system for an engineering-heavy team, it's worth watching. If you'd like us to run a workshop version of this for your team, reach out.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): JournalArticle | undefined {
  return JOURNAL_ARTICLES.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return JOURNAL_ARTICLES.map((a) => a.slug);
}
