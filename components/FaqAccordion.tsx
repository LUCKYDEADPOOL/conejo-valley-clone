"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-t border-line">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const answerId = `faq-answer-${index}`;

        return (
          <div className="border-b border-line" key={item.question}>
            <h3 className="m-0">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-6 border-0 bg-transparent py-5 text-left font-serif text-[clamp(1.15rem,2vw,1.45rem)] text-ink transition-colors hover:text-clay-dark"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <span
                  className="shrink-0 font-sans text-[1.3rem] text-clay-dark"
                  aria-hidden="true"
                >
                  {isOpen ? "-" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={answerId}
              className={`grid transition-[grid-template-rows,opacity] duration-[450ms] ease-out motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              aria-hidden={!isOpen}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="max-w-[44rem] pb-[1.35rem] pr-8 text-[0.94rem] leading-[1.7] text-muted">
                {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
