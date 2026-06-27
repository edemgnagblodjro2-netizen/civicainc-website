"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";

interface Platform {
  id: string;
  name: string;
  tagline: string;
  desc: string;
  features: string[];
  cta: string;
  href: string;
}

export default function PlatformTabs({ platforms }: { platforms: Platform[] }) {
  const [active, setActive] = useState(0);
  const p = platforms[active];

  return (
    <div>
      {/* Tab row */}
      <div className="flex flex-wrap gap-2 mb-12">
        {platforms.map((pl, i) => (
          <button
            key={pl.id}
            onClick={() => setActive(i)}
            className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all focus-visible:outline-none"
            style={
              active === i
                ? { background: "#1857e8", color: "#fff" }
                : { background: "#f1f5f9", color: "#475569" }
            }
          >
            {pl.name}
          </button>
        ))}
      </div>

      {/* Content panel */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <div>
          <span
            className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-5"
            style={{ background: "var(--sky, #eaf1ff)", color: "var(--blue, #1857e8)" }}
          >
            {p.tagline}
          </span>
          <h3
            className="text-3xl lg:text-4xl font-bold text-[#0a1730] mb-4"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            {p.name}
          </h3>
          <p className="text-slate-500 leading-relaxed mb-8 text-base">{p.desc}</p>

          <ul className="space-y-3 mb-10">
            {p.features.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--sky, #eaf1ff)" }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5L4 7L8 3" stroke="#1857e8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-slate-700 text-sm">{f}</span>
              </li>
            ))}
          </ul>

          <Link
            href={p.href}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-full transition-all hover:opacity-90"
            style={{ background: "#1857e8" }}
          >
            {p.cta} →
          </Link>
        </div>

        {/* Right: visual placeholder */}
        <div
          className="h-72 lg:h-96 rounded-2xl flex items-center justify-center"
          style={{ background: "var(--sky, #eaf1ff)" }}
        >
          <div className="text-center">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl font-black text-white"
              style={{ background: "#1857e8" }}
            >
              {p.name[0]}
            </div>
            <p className="text-sm font-semibold" style={{ color: "#1857e8" }}>
              {p.name}
            </p>
            <p className="text-xs text-slate-400 mt-1">{p.tagline}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
