type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageIntro({
  eyebrow,
  title,
  description,
}: PageIntroProps) {
  return (
    <header className="mx-auto w-[calc(100%-2.5rem)] max-w-[1240px] pb-12 pt-8 sm:pb-16">
      <p className="text-[0.72rem] font-medium uppercase leading-[1.6] tracking-[0.19em] text-clay-dark">
        {eyebrow}
      </p>
      <h1 className="mt-3 max-w-[850px] font-serif text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.04] tracking-[-0.04em]">
        {title}
      </h1>
      <p className="mt-5 max-w-[44rem] text-base leading-[1.7] text-muted">
        {description}
      </p>
    </header>
  );
}
