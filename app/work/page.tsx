"use client";
import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Work } from "@/components/home/Work";
import { WorkFolders } from "@/components/work/WorkFolders";
import { CTA } from "@/components/home/CTA";
import { Footer } from "@/components/footer/Footer";

export default function WorkPage() {
  const [view, setView] = useState<"list" | "folders">("list");

  return (
    <main id="top" className="pt-[100px] min-h-screen">
      <ScrollReveal />
      
      {/* View Toggle */}
      <div className="px-[var(--pad-x)] pt-10 flex justify-end">
        <div className="bg-[var(--paper-2)] p-1 rounded-full flex gap-1 text-[12px] font-medium font-mono">
          <button
            onClick={() => setView("list")}
            className={`px-4 py-1.5 rounded-full transition-colors ${
              view === "list" ? "bg-[var(--ink)] text-white" : "text-[var(--muted)] hover:text-[var(--ink)]"
            }`}
          >
            Grid
          </button>
          <button
            onClick={() => setView("folders")}
            className={`px-4 py-1.5 rounded-full transition-colors ${
              view === "folders" ? "bg-[var(--ink)] text-white" : "text-[var(--muted)] hover:text-[var(--ink)]"
            }`}
          >
            Folders
          </button>
        </div>
      </div>

      {view === "list" ? <Work /> : <div className="px-[var(--pad-x)]"><WorkFolders /></div>}
      
      <CTA />
      <Footer />
    </main>
  );
}
