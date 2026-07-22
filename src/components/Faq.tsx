"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto mt-12 max-w-3xl divide-y divide-forest-100 border-y border-forest-100">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-olive-600"
            >
              <span className="font-display text-2xl font-medium text-forest-900">
                {item.q}
              </span>
              <span
                className={`grid h-9 w-9 shrink-0 place-items-center border border-forest-300 text-forest-600 transition-all duration-300 ${
                  isOpen
                    ? "rotate-45 border-olive-500 bg-olive-500 text-cream"
                    : ""
                }`}
                aria-hidden
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                  <path
                    d="M12 5v14M5 12h14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-6 text-[0.95rem] leading-relaxed text-muted">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
