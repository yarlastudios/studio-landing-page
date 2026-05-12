"use client";
import React, { useState } from "react";

export function FooterNewsletter() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex w-full max-w-sm items-center overflow-hidden rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] focus-within:border-[var(--blue)] focus-within:bg-[rgba(255,255,255,0.05)] transition-colors duration-300"
    >
      <input
        type="email"
        placeholder="Join our newsletter"
        className="w-full bg-transparent px-6 py-3.5 text-[14px] text-white outline-none placeholder:text-white/30"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status !== "idle"}
        required
      />
      <button
        type="submit"
        disabled={status !== "idle"}
        className="absolute right-2 top-1/2 flex h-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 px-4 text-[12px] font-medium text-white transition-[background-color,transform] hover:bg-white/20 active:scale-95 disabled:opacity-50"
      >
        {status === "success" ? "✓" : "Subscribe"}
      </button>
    </form>
  );
}
