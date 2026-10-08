import AboutSection from "@/components/AboutSection";
import PageFrame from "@/components/PageFrame";

export const metadata = {
  title: "About Dr. Maya Reynolds, PsyD | Santa Monica Therapist",
  description:
    "Get to know Dr. Maya Reynolds, a licensed clinical psychologist offering collaborative therapy for adults in Santa Monica and across California.",
};

export default function AboutPage() {
  return (
    <PageFrame>
      <main>
        <AboutSection />
      </main>
    </PageFrame>
  );
}
