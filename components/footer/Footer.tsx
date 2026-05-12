"use client";
import React, { useRef } from "react";
import { FooterMarquee } from "./FooterMarquee";
import { FooterStatus } from "./FooterStatus";
import { FooterGrid } from "./FooterGrid";
import { FooterCopy } from "./FooterCopy";
import { FooterBackToTop } from "./FooterBackToTop";
import { FooterNewsletter } from "./FooterNewsletter";
import { useFooterParallax } from "@/hooks/useFooterParallax";

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  useFooterParallax(footerRef);

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-[var(--ink)] text-white"
    >
      <div className="relative z-10">
        <div className="mx-auto px-[var(--pad-x)]">
          {/* Grid Links Section */}
          <FooterGrid />

          {/* Copy & Bottom Elements */}
          <div className="relative">
            <FooterCopy />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 min-[900px]:block hidden">
              <FooterBackToTop />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
