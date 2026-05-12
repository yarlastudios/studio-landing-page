import Link from "next/link";
import React from "react";

const COLUMNS = [
  {
    title: "Services",
    links: [
      { label: "Brand", href: "/services" },
      { label: "Web", href: "/services" },
      { label: "Product", href: "/services" },
      { label: "Motion", href: "/services" },
    ],
  },
  {
    title: "Studios",
    links: [
      { label: "Vijayawada", href: "#" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "Twitter", href: "https://twitter.com/yarlastudios" },
      { label: "Instagram", href: "https://www.instagram.com/yarlastudios?igsh=cW43b2U4N2x6Z3ps&utm_source=qr" },
      { label: "GitHub", href: "#" },
      { label: "Dribbble", href: "/404" },
      { label: "LinkedIn", href: "/404" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Work", href: "/work" },
      { label: "Journal", href: "/journal" },
      { label: "Process", href: "/process" },
      { label: "Studio", href: "/studio" },
    ],
  },
];

export function FooterGrid() {
  return (
    <div className="grid grid-cols-2 min-[900px]:grid-cols-4 gap-12 min-[900px]:gap-6 py-20">
      {COLUMNS.map((col, i) => (
        <div key={i} className="flex flex-col gap-6">
          <h4 className="text-[11px] font-medium uppercase tracking-[0.07em] text-white/40 [font-family:var(--f-mono)]">
            {col.title}
          </h4>
          <ul className="flex flex-col gap-4">
            {col.links.map((link, j) => {
              const isExternal = link.href.startsWith("http");
              return (
                <li key={j}>
                  <Link
                    href={link.href}
                    className="footer-link-underline text-[16px] font-medium text-white/80 transition-colors duration-300 hover:text-white"
                    data-cursor="magnet"
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
