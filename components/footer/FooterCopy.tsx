"use client";
import React, { useState, useEffect } from "react";

export function FooterCopy() {
  const [greeting, setGreeting] = useState("Hello from Vijayawada");
  const year = new Date().getFullYear();

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning from Vijayawada");
    else if (hour < 18) setGreeting("Good afternoon from Vijayawada");
    else setGreeting("Good evening from Vijayawada");
  }, []);

  return (
    <div className="flex flex-col min-[900px]:flex-row items-center justify-between gap-6 border-t border-[rgba(255,255,255,0.1)] py-8 text-[13px] text-white/50 [font-family:var(--f-display)]">
      <div className="flex items-center gap-3">
        <span className="inline-block size-2 rounded-full bg-[var(--blue)]"></span>
        <span>{greeting}</span>
      </div>
      <div>
        &copy; {year} Yarla Studios. All rights reserved.
      </div>
    </div>
  );
}
