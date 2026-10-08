import PageFrame from "@/components/PageFrame";
import PageFeature from "@/components/PageFeature";
import ScheduleAnAppointment from "@/components/ScheduleAnAppointment";

export const metadata = {
  title: "Contact Dr. Maya Reynolds | Therapy in Santa Monica, CA",
  description:
    "Explore in-person therapy at the Santa Monica office of Dr. Maya Reynolds and secure telehealth options for clients in California.",
};

export default function ContactPage() {
  return (
    <PageFrame>
      <main>
        <PageFeature
          eyebrow="In-person or online"
          title="Find a way to meet that fits."
          description="Dr. Maya Reynolds sees adults in her Santa Monica office and offers secure telehealth sessions for clients located in California."
          image="/images/contact-doorway.svg"
          imageAlt="An illustration of a welcoming doorway"
        />
        <ScheduleAnAppointment showForm />
      </main>
    </PageFrame>
  );
}
