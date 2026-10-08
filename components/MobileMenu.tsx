"use client";

import { useState } from "react";
import Link from "next/link";
import { navItems } from "./siteNavigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
        className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-line text-forest transition-colors hover:border-forest hover:bg-sage hover:text-clay-dark lg:hidden"
      >
        <span
          className={`h-px w-5 bg-current transition-transform ${isOpen ? "translate-y-[3px] rotate-45" : ""}`}
        />
        <span
          className={`h-px w-5 bg-current transition-opacity ${isOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`h-px w-5 bg-current transition-transform ${isOpen ? "-translate-y-[3px] -rotate-45" : ""}`}
        />
      </button>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="absolute right-0 top-[calc(100%+1rem)] z-30 w-[min(19rem,calc(100vw-2rem))] border border-line bg-paper p-5 shadow-xl"
        >
          <div className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-line py-3 text-xs font-medium uppercase tracking-[0.14em] transition-[color,padding] hover:pl-[0.45rem] hover:text-clay-dark focus-visible:pl-[0.45rem] focus-visible:text-clay-dark"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-5 inline-flex min-h-[3.35rem] items-center justify-center gap-3 rounded-full border border-forest bg-forest px-[1.55rem] py-[0.9rem] text-center text-[0.72rem] font-medium uppercase tracking-[0.12em] text-paper transition duration-200 hover:-translate-y-0.5 hover:border-clay-dark hover:bg-clay-dark hover:shadow-[0_8px_20px_rgb(43_48_58_/_14%)]"
            >
              Session options
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
