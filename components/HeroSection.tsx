import Image from "next/image";
import Link from "next/link";
import PositiveQuoteCard from "./PositiveQuoteCard";

export default function HeroSection() {
  return (
    <section
      className="mx-auto w-[calc(100%-2.5rem)] max-w-[1240px] pb-[5.5rem] pt-5 max-md:pt-2"
      aria-labelledby="hero-heading"
    >
      <div className="grid grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] items-center gap-[clamp(2rem,7vw,7rem)] max-md:grid-cols-1">
        <div className="relative min-h-[33rem] max-md:mx-auto max-md:min-h-[clamp(24rem,88vw,37rem)] max-md:w-full max-md:max-w-[35rem]">
          <div className="absolute inset-[0_1.75rem_1.75rem_0] overflow-hidden rounded-[48%_48%_0.4rem_0.4rem] bg-sage max-sm:inset-[0_1rem_1.4rem_0]">
            <Image
              src="/images/couples.jpg"
              alt="A quiet, sunlit therapy office in Santa Monica"
              fill
              loading="eager"
              sizes="(max-width: 800px) 100vw, 48vw"
              className="animate-image-settle object-cover motion-reduce:animate-none"
            />
          </div>
          <PositiveQuoteCard />
        </div>
        <div className="py-10 [animation:fade-rise_850ms_150ms_cubic-bezier(0.2,0.65,0.3,1)_both] motion-reduce:animate-none max-md:py-0">
          <p className="text-[0.72rem] font-medium uppercase leading-[1.6] tracking-[0.19em] text-clay-dark">
            Adult therapy · Santa Monica, California
          </p>
          <h1
            id="hero-heading"
            className="mt-[1.4rem] max-w-[680px] font-serif text-[clamp(3.15rem,6.3vw,5.65rem)] leading-[0.98] tracking-[-0.055em] max-md:max-w-[15ch] max-sm:text-[clamp(2.9rem,13vw,4rem)]"
          >
            You don&apos;t have to keep pushing through alone.
          </h1>
          <p className="mt-6 max-w-[36rem] text-[clamp(1rem,1.5vw,1.18rem)] leading-[1.7] text-muted">
            A warm, collaborative space for adults to slow down, reconnect with
            themselves, and find a more sustainable way forward.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 max-sm:items-stretch max-sm:flex-col">
            <Link
              href="/therapy"
              className="inline-flex min-h-[3.35rem] items-center justify-center gap-3 rounded-full border border-forest bg-forest px-[1.55rem] py-[0.9rem] text-center text-[0.72rem] font-medium uppercase tracking-[0.12em] text-paper transition duration-200 hover:-translate-y-0.5 hover:border-clay-dark hover:bg-clay-dark hover:shadow-[0_8px_20px_rgb(43_48_58_/_14%)] max-sm:w-full"
            >
              Explore therapy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
