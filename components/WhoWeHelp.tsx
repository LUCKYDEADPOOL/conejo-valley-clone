export default function WhoWeHelp() {
  return (
    <section
      className="mx-auto w-[calc(100%-2.5rem)] max-w-[1240px] py-[clamp(4.5rem,8vw,8rem)]"
      aria-labelledby="who-heading"
    >
      <div className="grid grid-cols-[minmax(0,1fr)_minmax(18rem,0.82fr)] items-center gap-[clamp(2.5rem,8vw,8rem)] max-md:grid-cols-1">
        <div>
          <p className="text-[0.72rem] font-medium uppercase leading-[1.6] tracking-[0.19em] text-clay-dark">
            Who I work with
          </p>
          <h2
            id="who-heading"
            className="mt-4 font-serif text-[clamp(2.4rem,4.5vw,4rem)] leading-[1.04] tracking-[-0.04em]"
          >
            For adults carrying a lot, quietly.
          </h2>
          <p className="mt-5 max-w-[38rem] text-base leading-[1.7] text-muted">
            Many of my clients are thoughtful, self-aware, high-achieving adults
            who keep showing up for work and others while feeling worn down
            inside. You may be navigating constant worry, body tension,
            difficulty sleeping, or the pressure to get everything right.
          </p>
        </div>
        <aside
          className="border-l border-line py-2 pl-8 max-md:mt-2 max-sm:pl-5"
          aria-label="You may be looking for support if"
        >
          <h3 className="mb-4 font-serif text-[1.65rem]">
            You may be looking for support if…
          </h3>
          <ul className="grid list-none gap-[0.9rem] p-0">
            <li className="flex items-start gap-3 text-[0.95rem] leading-[1.7] text-muted before:mt-[0.55rem] before:block before:h-2 before:w-2 before:flex-[0_0_0.5rem] before:rounded-full before:bg-clay before:content-['']">
              You feel stuck in overthinking or panic.
            </li>
            <li className="flex items-start gap-3 text-[0.95rem] leading-[1.7] text-muted before:mt-[0.55rem] before:block before:h-2 before:w-2 before:flex-[0_0_0.5rem] before:rounded-full before:bg-clay before:content-['']">
              Past experiences still affect your relationships or sense of safety.
            </li>
            <li className="flex items-start gap-3 text-[0.95rem] leading-[1.7] text-muted before:mt-[0.55rem] before:block before:h-2 before:w-2 before:flex-[0_0_0.5rem] before:rounded-full before:bg-clay before:content-['']">
              Burnout or perfectionism is making life feel unsustainable.
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
