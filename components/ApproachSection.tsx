const modalities = [
  "Cognitive-behavioral therapy (CBT)",
  "EMDR",
  "Mindfulness-based practices",
  "Body-oriented techniques",
];

export default function ApproachSection() {
  return (
    <section
      id="approach"
      className="bg-paper-deep py-[clamp(4.5rem,8vw,8rem)]"
      aria-labelledby="approach-heading"
    >
      <div className="mx-auto grid w-[calc(100%-2.5rem)] max-w-[1240px] grid-cols-[minmax(0,1fr)_minmax(18rem,0.85fr)] items-center gap-[clamp(2rem,7vw,7rem)] max-md:grid-cols-1">
        <div>
          <p className="text-[0.72rem] font-medium uppercase leading-[1.6] tracking-[0.19em] text-clay-dark">
            Putting the pieces together
          </p>
          <h2
            id="approach-heading"
            className="mt-3 max-w-[740px] font-serif text-[clamp(2.5rem,5vw,4.45rem)] leading-[1.04] tracking-[-0.04em]"
          >
            A thoughtful mix of methods.
          </h2>
          <p className="mt-5 max-w-[40rem] text-base leading-[1.7] text-muted">
            I integrate evidence-based methods to explore both the emotional
            and physiological sides of what you&apos;re experiencing. The
            specific mix is shaped around you rather than applied as a fixed
            formula.
          </p>
          <p className="mt-5 max-w-[40rem] text-base leading-[1.7] text-muted">
            When trauma is part of the work, we move carefully. Safety and
            stabilization come first, with attention to feeling more regulated
            in daily life as well as during sessions.
          </p>
        </div>

        <div className="border border-line bg-paper p-[clamp(1.5rem,3vw,2.5rem)]">
          <p className="text-[0.72rem] font-medium uppercase leading-[1.6] tracking-[0.19em] text-clay-dark">
            Therapeutic approaches
          </p>
          <h3 className="mt-2 font-serif text-[1.7rem]">
            Tools we may draw on together
          </h3>
          <div className="mt-4 grid">
            {modalities.map((modality) => (
              <span
                className="border-b border-line py-[0.85rem] text-[0.9rem] tracking-[0.035em] text-forest last:border-b-0"
                key={modality}
              >
                {modality}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
