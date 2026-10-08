import Image from "next/image";

type PageFeatureProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
};

export default function PageFeature({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  imagePosition = "object-center",
}: PageFeatureProps) {
  return (
    <header className="mx-auto grid w-[calc(100%-2.5rem)] max-w-[1240px] grid-cols-[minmax(0,1fr)_minmax(18rem,0.8fr)] items-center gap-[clamp(2rem,7vw,7rem)] py-[clamp(2rem,5vw,4.5rem)] max-md:grid-cols-1">
      <div>
        <p className="text-[0.72rem] font-medium uppercase leading-[1.6] tracking-[0.19em] text-clay-dark">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-[760px] font-serif text-[clamp(2.8rem,6vw,5.3rem)] font-bold leading-[1.02] tracking-[-0.045em]">
          {title}
        </h1>
        <p className="mt-6 max-w-[42rem] text-base leading-[1.7] text-muted">
          {description}
        </p>
      </div>
      <div className="relative aspect-[4/3] overflow-hidden bg-sage-soft max-md:mx-auto max-md:w-full max-md:max-w-[38rem]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 800px) 100vw, 40vw"
          className={`object-cover ${imagePosition}`}
        />
      </div>
    </header>
  );
}
