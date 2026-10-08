import FaqSection from "@/components/FaqSection";
import PageFrame from "@/components/PageFrame";
import PageFeature from "@/components/PageFeature";

export const metadata = {
  title: "Therapy FAQs | Dr. Maya Reynolds, PsyD",
  description:
    "Answers about therapy for adults with Dr. Maya Reynolds, including who she works with, telehealth, in-person sessions, and treatment approaches.",
};

export default function FaqsPage() {
  return (
    <PageFrame>
      <main>
        <PageFeature
          eyebrow="Before you begin"
          title="Answers to common questions."
          description="Learn who Dr. Reynolds works with, which methods she uses, how trauma work is paced, and where sessions take place."
          image="/images/faq-quiet.svg"
          imageAlt="A simple, abstract question mark illustration"
        />
        <FaqSection />
      </main>
    </PageFrame>
  );
}
