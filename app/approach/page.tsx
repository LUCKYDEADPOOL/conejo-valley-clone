import ApproachSection from "@/components/ApproachSection";
import PageFrame from "@/components/PageFrame";
import PageFeature from "@/components/PageFeature";

export const metadata = {
  title: "Therapy Approach | CBT, EMDR & Mindfulness",
  description:
    "Learn about the collaborative, paced therapy approach of Dr. Maya Reynolds, including CBT, EMDR, mindfulness, and body-oriented techniques.",
};

export default function ApproachPage() {
  return (
    <PageFrame>
      <main>
        <PageFeature
          eyebrow="A collaborative process"
          title="Evidence-based methods, adapted to you."
          description="Dr. Reynolds draws on CBT, EMDR, mindfulness-based practices, and body-oriented techniques, making room for both practical tools and reflection."
          image="/images/evidence.jpg"
          imageAlt="A calm, abstract pattern of overlapping forms"
        />
        <ApproachSection />
      </main>
    </PageFrame>
  );
}
