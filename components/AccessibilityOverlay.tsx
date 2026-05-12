"use client";
import React, { useState, useEffect } from "react";

export function AccessibilityOverlay() {
  const [open, setOpen] = useState(false);
  const [fontSize, setFontSize] = useState("normal"); // normal, large, xlarge
  const [contrast, setContrast] = useState("normal"); // normal, high

  useEffect(() => {
    const body = document.body;
    
    // Reset
    body.classList.remove("acc-large", "acc-xlarge", "acc-high-contrast");
    
    // Apply Font Size
    if (fontSize === "large") body.classList.add("acc-large");
    if (fontSize === "xlarge") body.classList.add("acc-xlarge");
    
    // Apply Contrast
    if (contrast === "high") body.classList.add("acc-high-contrast");
  }, [fontSize, contrast]);

  return (
    <div className="fixed bottom-6 left-6 z-[1000]">
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex size-12 items-center justify-center rounded-full bg-[var(--ink)] text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
        aria-label="Accessibility options"
        data-cursor="magnet"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      </button>

      {/* Panel */}
      {open && (
        <div className="absolute bottom-16 left-0 w-64 rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-5 shadow-xl [font-family:var(--f-display)]">
          <h3 className="mb-4 text-[14px] font-semibold uppercase tracking-[0.05em] text-[var(--ink)] [font-family:var(--f-mono)]">
            Accessibility
          </h3>
          
          {/* Font Size */}
          <div className="mb-5">
            <label className="mb-2 block text-[12px] font-medium text-[var(--muted)]">
              Text Size
            </label>
            <div className="grid grid-cols-3 gap-2">
              {["normal", "large", "xlarge"].map((size) => (
                <button
                  key={size}
                  onClick={() => setFontSize(size)}
                  className={`rounded-md py-1.5 text-[11px] font-medium uppercase transition-colors ${
                    fontSize === size
                      ? "bg-[var(--blue)] text-white"
                      : "bg-[var(--paper-2)] text-[var(--ink)] hover:bg-[var(--line)]"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Contrast */}
          <div>
            <label className="mb-2 block text-[12px] font-medium text-[var(--muted)]">
              Contrast
            </label>
            <div className="grid grid-cols-2 gap-2">
              {["normal", "high"].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setContrast(mode)}
                  className={`rounded-md py-1.5 text-[11px] font-medium uppercase transition-colors ${
                    contrast === mode
                      ? "bg-[var(--blue)] text-white"
                      : "bg-[var(--paper-2)] text-[var(--ink)] hover:bg-[var(--line)]"
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
