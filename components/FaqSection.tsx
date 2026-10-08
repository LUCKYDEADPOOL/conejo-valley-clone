import FaqAccordion from "./FaqAccordion";

const questions = [
  {
    question: "Who do you work with?",
    answer:
      "I work with adults, including thoughtful, self-aware, high-achieving people who feel overwhelmed by anxiety, stress, trauma, burnout, or perfectionism.",
  },
  {
    question: "Do you offer in-person and online therapy?",
    answer:
      "Yes. In-person therapy is available at my Santa Monica office, and secure telehealth sessions are available for clients located in California.",
  },
  {
    question: "What approaches do you use?",
    answer:
      "I integrate cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques. The approach is tailored to your needs and goals.",
  },
  {
    question: "What is trauma therapy like?",
    answer:
      "Trauma work is paced carefully, with an emphasis on safety and stabilization. The work can make room for understanding earlier experiences while supporting a greater sense of regulation in everyday life.",
  },
  {
    question: "What can I expect from sessions?",
    answer:
      "Sessions are structured enough to feel supportive while leaving room for reflection and depth. You are an active part of the process, and the work is shaped collaboratively.",
  },
];

export default function FaqSection() {
  return (
    <section
      id="faqs"
      className="mx-auto w-[calc(100%-2.5rem)] max-w-[1240px] py-[clamp(4.5rem,8vw,8rem)] max-sm:w-[calc(100%-2rem)] max-sm:py-16"
      aria-labelledby="faq-heading"
    >
      <div className="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-[clamp(2.5rem,8vw,8rem)] max-md:grid-cols-1">
        <div>
          <p className="text-[0.72rem] font-medium uppercase leading-[1.6] tracking-[0.19em] text-clay-dark">
            In plain language
          </p>
          <h2
            id="faq-heading"
            className="mt-4 max-w-[740px] font-serif text-[clamp(2.5rem,5vw,4.45rem)] leading-[1.04] tracking-[-0.04em]"
          >
            Details about the work.
          </h2>
          <p className="mt-4 max-w-[25rem] text-base leading-[1.7] text-muted">
            These answers reflect how I work and the options available through
            my practice.
          </p>
        </div>
        <FaqAccordion items={questions} />
      </div>
    </section>
  );
}
