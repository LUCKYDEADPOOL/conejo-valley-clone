import Image from "next/image";

const officeImages = [
  {
    src: "/images/maya-office-1.jpeg",
    alt: "Therapy office with a sofa, bookshelves, and light from a large window",
    caption: "A place to arrive",
    detail: "A private room with comfortable seating and natural light.",
  },
  {
    src: "/images/maya-office-2.jpeg",
    alt: "Quiet counseling room with two chairs and tall sunlit windows",
    caption: "Room to settle",
    detail: "An uncluttered setting for in-person sessions in Santa Monica.",
  },
];

export default function OurOffice() {
  return (
    <section
      id="office"
      className="bg-sage-soft py-[clamp(4.5rem,8vw,8rem)]"
      aria-labelledby="office-heading"
    >
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1240px]">
        <div>
          <p className="text-[0.72rem] font-medium uppercase leading-[1.6] tracking-[0.19em] text-clay-dark">
            A space to feel at ease
          </p>
          <h1
            id="office-heading"
            className="mt-3 max-w-[740px] font-serif text-[clamp(2.5rem,5vw,4.45rem)] leading-[1.04] tracking-[-0.04em]"
          >
            A quieter place to meet.
          </h1>
          <p className="mt-5 max-w-[48rem] text-base leading-[1.7] text-muted">
            The Santa Monica office is private, comfortable, and uncluttered,
            with natural light. In-person sessions take place here; secure
            telehealth is also available for clients located in California.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 items-start gap-[clamp(1rem,2.5vw,2rem)] max-md:items-center max-sm:mt-8 max-sm:gap-4">
          {officeImages.map((image, index) => (
            <figure
              key={image.src}
              className={`group m-0 min-w-0 ${index === 1 ? "hidden md:block" : ""}`}
              tabIndex={0}
            >
              <div className="relative aspect-[1.3/1] w-full overflow-hidden bg-paper-deep max-sm:aspect-square">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 800px) 50vw, 55vw"
                  className="object-cover transition-[opacity,transform] duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:group-hover:scale-[1.02] md:group-hover:opacity-40 md:group-focus-visible:scale-[1.02] md:group-focus-visible:opacity-40 motion-reduce:transform-none"
                />
                <figcaption className="pointer-events-none absolute inset-0 flex translate-x-0 flex-col justify-center gap-3 bg-ink/15 p-[clamp(1.25rem,3vw,3rem)] text-white opacity-0 transition-opacity duration-700 ease-in-out md:group-hover:opacity-100 md:group-focus-visible:opacity-100 motion-reduce:transition-none">
                  <span className="font-serif text-[clamp(1.4rem,2.5vw,2.3rem)] leading-[1.1]">
                    {image.caption}
                  </span>
                  <span className="max-w-[22rem] text-[0.9rem] leading-[1.7]">
                    {image.detail}
                  </span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
        <address className="mt-8 flex items-center gap-4 border-t border-ink/20 pt-4 text-[0.92rem] not-italic max-sm:flex-col max-sm:items-start max-sm:gap-2">
          <span className="shrink-0 text-[0.72rem] font-medium uppercase leading-[1.6] tracking-[0.19em] text-clay-dark">
            Visit in person
          </span>
          <strong className="font-medium text-forest">
            123th Street 45 W, Santa Monica, CA 90401
          </strong>
        </address>
      </div>
    </section>
  );
}
