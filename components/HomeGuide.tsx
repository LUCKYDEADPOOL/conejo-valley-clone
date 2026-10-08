import Link from "next/link";

const destinations = [
  {
    href: "/about",
    number: "01",
    title: "Meet Maya",
    description: "Get to know Dr. Reynolds and her approach to therapy.",
  },
  {
    href: "/therapy",
    number: "02",
    title: "Find your focus",
    description: "Explore areas of support for the season you are in.",
  },
  {
    href: "/approach",
    number: "03",
    title: "See how therapy works",
    description: "Get a sense of the methods and pace used in sessions.",
  },
  {
    href: "/office",
    number: "04",
    title: "Visit the office",
    description: "Take a look at the Santa Monica space for in-person work.",
  },
  {
    href: "/faqs",
    number: "05",
    title: "Get a few answers",
    description: "Read practical details before deciding what comes next.",
  },
  {
    href: "/contact",
    number: "06",
    title: "Consider a first step",
    description: "Review ways to meet in person or by secure telehealth.",
  },
];

export default function HomeGuide() {
  return (
    <section className="bg-paper-deep py-[clamp(4rem,8vw,7rem)]">
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1240px]">
        <p className="text-[0.72rem] font-medium uppercase leading-[1.6] tracking-[0.19em] text-clay-dark">
          Explore the practice
        </p>
        <div className="mt-3 grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] items-end gap-8 max-md:grid-cols-1">
          <h2 className="max-w-[680px] font-serif text-[clamp(2.2rem,4.8vw,4rem)] font-bold leading-[1.05] tracking-[-0.04em]">
            Take the time you need to look around.
          </h2>
          <p className="max-w-[34rem] leading-[1.7] text-muted">
            Each part of the practice has its own page, so you can start with
            whatever feels useful and come back to the rest later.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-6 gap-px bg-line [&>a]:col-span-2 max-md:grid-cols-4 max-sm:grid-cols-1 max-sm:[&>a]:col-span-1">
          {destinations.map((destination) => (
            <Link
              className="group min-h-48 bg-paper p-6 transition-colors hover:bg-sage-soft"
              href={destination.href}
              key={destination.href}
            >
              <span className="text-xs font-medium tracking-[0.12em] text-clay-dark">
                {destination.number}
              </span>
              <h3 className="mt-6 font-serif text-[1.55rem] font-medium text-ink transition-colors group-hover:text-forest">
                {destination.title}
              </h3>
              <p className="mt-2 text-sm leading-[1.7] text-muted">
                {destination.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
