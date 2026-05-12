"use client";

import { useState } from "react";

export function ShareButtons({ title, slug }: { title: string; slug: string }) {
  const [copied, setCopied] = useState(false);

  const url = `https://yarlastudios.com/journal/${slug}`;
  const encoded = encodeURIComponent(url);
  const titleEncoded = encodeURIComponent(title);

  const handleCopy = () => {
    const live =
      typeof window !== "undefined"
        ? `${window.location.origin}/journal/${slug}`
        : url;
    navigator.clipboard?.writeText(live).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-[11px] font-medium uppercase tracking-[0.07em] text-[var(--muted)] [font-family:var(--f-mono)]">
        Share
      </span>
      <a
        href={`https://twitter.com/intent/tweet?text=${titleEncoded}&url=${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X / Twitter"
        className="flex size-9 items-center justify-center rounded-full border border-[var(--line)] text-[var(--muted)] transition-[background,border-color,color] duration-300 hover:border-[var(--ink)] hover:bg-[var(--ink)] hover:text-white"
        data-cursor="link"
      >
        <svg viewBox="0 0 24 24" className="size-[14px] fill-current">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="flex size-9 items-center justify-center rounded-full border border-[var(--line)] text-[var(--muted)] transition-[background,border-color,color] duration-300 hover:border-[var(--ink)] hover:bg-[var(--ink)] hover:text-white"
        data-cursor="link"
      >
        <svg viewBox="0 0 24 24" className="size-[14px] fill-current">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 23.227.192 22.222 0h.003z" />
        </svg>
      </a>
      <button
        type="button"
        aria-label={copied ? "Link copied!" : "Copy link"}
        className="flex size-9 items-center justify-center rounded-full border border-[var(--line)] text-[var(--muted)] transition-[background,border-color,color] duration-300 hover:border-[var(--ink)] hover:bg-[var(--ink)] hover:text-white"
        data-cursor="link"
        onClick={handleCopy}
      >
        {copied ? (
          <svg viewBox="0 0 24 24" className="size-[14px] fill-none stroke-current stroke-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="size-[14px] fill-none stroke-current stroke-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 0 0-5.656 0l-4 4a4 4 0 1 0 5.656 5.656l1.102-1.101m-.758-4.899a4 4 0 0 0 5.656 0l4-4a4 4 0 0 0-5.656-5.656l-1.1 1.1" />
          </svg>
        )}
      </button>
    </div>
  );
}
