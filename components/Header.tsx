import Link from "next/link";
import Button from "./Button";
import MobileMenu from "./MobileMenu";
import { navItems } from "./siteNavigation";

export default function Header() {
  return (
    <header className="relative z-20 mx-auto w-[calc(100%-2.5rem)] max-w-[1240px] py-6 sm:py-8">
      <nav
        aria-label="Main navigation"
        className="flex items-center justify-between gap-6"
      >
        <Link href="/" className="group min-w-0">
          <span className="block font-serif text-[1.55rem] leading-none tracking-[-0.04em]  sm:text-[1.9rem]">
            Dr. Maya Reynolds
          </span>
          <span className="mt-2 block text-[0.65rem] font-medium uppercase tracking-[0.18em] text-clay-dark transition-colors group-hover:text-forest sm:text-xs">
            Licensed Clinical Psychologist, PsyD
          </span>
        </Link>

        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-[0.4rem] text-[0.67rem] font-medium uppercase tracking-[0.13em] text-ink transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-clay after:transition-transform hover:text-clay-dark hover:after:scale-x-100 focus-visible:text-clay-dark focus-visible:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
          <Button />
        </div>

        <MobileMenu />
      </nav>
    </header>
  );
}
