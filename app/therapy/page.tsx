import PageFrame from "@/components/PageFrame";
import PageFeature from "@/components/PageFeature";
import ServicesSection from "@/components/ServicesSection";

export const metadata = {
  title: "Adult Therapy Services | Anxiety, Trauma & Burnout",
  description:
    "Explore therapy for anxiety, panic, trauma, burnout, and perfectionism with Dr. Maya Reynolds in Santa Monica, CA, or through California telehealth.",
};

export default function TherapyPage() {
  return (
    <PageFrame>
      <main>
        <PageFeature
          eyebrow="Therapy for adults · Santa Monica, California"
          title="Therapy for anxiety, trauma, and burnout."
          description="Support for adults navigating worry, panic, the effects of past experiences, or professional burnout. In-person sessions are available in Santa Monica, with secure telehealth across California."
          image="/images/trauma-anxiety-burnout.jpg"
          imageAlt="An abstract illustration of overlapping shapes, suggesting several paths of support"
        />
        <ServicesSection />
      </main>
    </PageFrame>
  );
}
