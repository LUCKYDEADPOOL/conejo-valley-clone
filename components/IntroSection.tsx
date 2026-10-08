export default function IntroSection() {
  return (
    <section
      className="bg-sage-soft py-[clamp(4.5rem,8vw,8rem)]"
      aria-labelledby="intro-heading"
    >
      <div className="mx-auto grid w-[calc(100%-2.5rem)] max-w-[1240px] grid-cols-[minmax(0,1.15fr)_minmax(15rem,0.7fr)] items-end gap-12 max-md:grid-cols-1 max-md:gap-6">
        <div>
          <p className="text-[0.72rem] font-medium uppercase leading-[1.6] tracking-[0.19em] text-clay-dark">
            A space to slow down
          </p>
          <h2
            id="intro-heading"
            className="mt-4 max-w-[800px] font-serif text-[clamp(2.45rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.045em]"
          >
            Your experience deserves room beyond the version of you that keeps everything moving.
          </h2>
          <p className="mt-5 max-w-[44rem] text-base leading-[1.7] text-muted">
            Therapy can be a place to feel understood, take stock of what has
            been weighing on you, and become an active part of the process.
          </p>
        </div>
      </div>
    </section>
  );
}
