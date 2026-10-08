"use client";

import { useEffect, useState } from "react";

const positiveQuotes = [
  "You can take the next step at your own pace.",
  "Small steps still move you forward.",
  "You deserve the patience you offer others.",
  "There is room to begin again.",
  "Rest can be part of moving forward.",
  "You do not have to figure everything out today.",
  "Your progress can be uniquely yours.",
  "It is okay to pause and notice what you need.",
];

export default function PositiveQuoteCard() {
  const [quote, setQuote] = useState("A calmer place to begin");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const index = Math.floor(Math.random() * positiveQuotes.length);
      setQuote(positiveQuotes[index]);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="absolute bottom-0 right-0 grid min-h-28 w-[min(17rem,78%)] content-center gap-[0.45rem] border border-line bg-paper p-[1.35rem_1.45rem] shadow-[0_16px_40px_rgb(43_48_58_/_9%)] [animation:fade-rise_750ms_450ms_cubic-bezier(0.2,0.65,0.3,1)_both] motion-reduce:animate-none">
      <strong className="font-serif text-[1.18rem] font-medium leading-[1.35] text-forest">
        {quote}
      </strong>
      <span className="text-[0.8rem] leading-[1.6] text-muted">
        A gentle reminder for today.
      </span>
    </div>
  );
}
