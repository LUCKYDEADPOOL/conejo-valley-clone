'use client";'

import Link from "next/link";

export default function Button() {
  return (
    <Link
      href="/contact"
      className="inline-flex min-h-[3.35rem] items-center justify-center gap-3 rounded-[50%] border border-forest bg-forest px-[1.25rem] py-[1.2rem] text-center text-[0.62rem] font-medium uppercase tracking-[0.12em] text-paper transition duration-200 hover:-translate-y-0.5 hover:border-clay-dark hover:bg-clay-dark hover:shadow-[0_8px_20px_rgb(43_48_58_/_14%)]"
    >
      Session options
    </Link>
  );
}
