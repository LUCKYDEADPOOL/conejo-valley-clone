const services = [
  {
    title: "Anxiety & panic",
    description:
      "Understand patterns of worry, tension, and feeling on edge while building practical ways to feel more regulated in daily life.",
  },
  {
    title: "Trauma therapy",
    description:
      "Carefully paced support for single-incident trauma and longer-standing experiences, with safety and stabilization at the center.",
  },
  {
    title: "Burnout & perfectionism",
    description:
      "Make space to slow down, reconnect with yourself, and find more sustainable ways to live and work under pressure.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-paper-deep py-[clamp(4.5rem,8vw,8rem)] text-ink"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1240px]">
        <p className="text-[0.72rem] font-medium uppercase leading-[1.6] tracking-[0.19em] text-clay-dark">
          Areas of support
        </p>
        <h2
          id="services-heading"
          className="mt-3 max-w-[740px] font-serif text-[clamp(2.5rem,5vw,4.45rem)] leading-[1.04] tracking-[-0.04em]"
        >
          Support shaped around what you&apos;re facing.
        </h2>
        <p className="mt-5 max-w-[43rem] leading-[1.7] text-muted">
          These are three areas I often support. We can focus on what feels
          most important to you and consider how it affects everyday life.
        </p>

        <div className="mt-14 grid grid-cols-3 gap-px bg-line max-md:grid-cols-1">
          {services.map((service, index) => (
            <article
              className="min-h-72 bg-paper p-[clamp(1.5rem,3vw,2.5rem)] transition duration-300 hover:relative hover:z-10 hover:-translate-y-1 hover:bg-sage-soft max-md:min-h-0"
              key={service.title}
            >
              <span
                className="font-serif text-[1.1rem] text-clay-dark"
                aria-hidden="true"
              >
                0{index + 1}
              </span>
              <h3 className="mt-8 font-serif text-[clamp(1.65rem,2.5vw,2.15rem)] max-md:mt-5">
                {service.title}
              </h3>
              <p className="mt-3 text-[0.92rem] leading-[1.7] text-muted">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
