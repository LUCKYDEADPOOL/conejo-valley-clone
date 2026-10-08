import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto w-[calc(100%-2.5rem)] max-w-[1240px] py-[clamp(4.5rem,8vw,8rem)]"
      aria-labelledby="about-heading"
    >
      <div className="grid grid-cols-[minmax(18rem,0.75fr)_minmax(0,1fr)] items-center gap-[clamp(2.5rem,8vw,8rem)] max-md:grid-cols-1">
        <div className="relative aspect-[4/5] overflow-hidden bg-sage-soft max-md:mx-auto max-md:w-full max-md:max-w-[27rem]">
          <Image
            src="/images/maya-reynolds.png"
            alt="Dr. Maya Reynolds, PsyD"
            fill
            sizes="(max-width: 800px) 85vw, 38vw"
            className="object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.035] motion-reduce:transform-none"
          />
        </div>
        <div>
          <p className="text-[0.72rem] font-medium uppercase leading-[1.6] tracking-[0.19em] text-clay-dark">
            About Dr. Maya Reynolds, PsyD
          </p>
          <h1
            id="about-heading"
            className="mt-3 max-w-[740px] font-serif text-[clamp(2.5rem,5vw,4.45rem)] leading-[1.04] tracking-[-0.04em]"
          >
            Thoughtful care, shaped together.
          </h1>
          <p className="mt-5 text-base leading-[1.7] text-muted">
            I&apos;m a licensed clinical psychologist based in Santa Monica,
            California. I work with adults who may seem functional on the
            outside while privately feeling exhausted, caught in overthinking,
            or emotionally on edge.
          </p>
          <p className="mt-5 text-base leading-[1.7] text-muted">
            Sessions are structured enough to feel supportive and open enough
            to leave room for reflection. I believe therapy works best when you
            feel respected, understood, and actively involved—not simply
            treated as a set of symptoms.
          </p>
          <p className="mt-5 text-base leading-[1.7] text-muted">
            My goal is to support insight, resilience, and a stronger
            relationship with yourself over time. For people living and
            working in a fast-paced environment, therapy can offer space to
            pause and consider a more sustainable way forward.
          </p>
        </div>
      </div>
    </section>
  );
}
