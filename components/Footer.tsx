import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-forest-dark py-[2.2rem] text-paper">
      <div className="mx-auto flex w-[calc(100%-2.5rem)] max-w-[1240px] items-center justify-between gap-6 max-sm:items-start max-sm:flex-col">
        <div>
          <Link href="/" className="font-serif text-[1.3rem]">
            Dr. Maya Reynolds, PsyD
          </Link>
          <p className="text-[0.78rem] leading-[1.7] text-paper/75">
            Licensed Clinical Psychologist · Santa Monica, California
          </p>
        </div>
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap gap-5 text-[0.78rem] text-paper/85"
        >
          <Link className="transition-colors hover:text-clay" href="/about">About</Link>
          <Link className="transition-colors hover:text-clay" href="/therapy">Therapy</Link>
          <Link className="transition-colors hover:text-clay" href="/approach">Approach</Link>
          <Link className="transition-colors hover:text-clay" href="/office">Our office</Link>
          <Link className="transition-colors hover:text-clay" href="/faqs">FAQs</Link>
          <Link className="transition-colors hover:text-clay" href="/contact">Contact</Link>
        </nav>
        <p className="text-[0.78rem] leading-[1.7] text-paper/75">
          © {new Date().getFullYear()} Dr. Maya Reynolds
        </p>
      </div>
    </footer>
  );
}
