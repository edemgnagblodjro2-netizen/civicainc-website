"use client";

import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  title: string;
  subtitle: string;
  items: FAQItem[];
}

export default function FAQ({ title, subtitle, items }: FAQProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold text-[#0a1730] mb-4"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            {title}
          </h2>
          <p className="text-slate-500">{subtitle}</p>
        </div>

        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors focus-visible:outline-none"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-[#0a1730] text-sm leading-snug">{item.q}</span>
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all"
                  style={{ background: open === i ? "#1857e8" : "#eaf1ff" }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d={open === i ? "M2 8L6 4L10 8" : "M2 4L6 8L10 4"}
                      stroke={open === i ? "white" : "#1857e8"}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div
                  className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4"
                >
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
