import OurOffice from "@/components/OurOffice";
import PageFrame from "@/components/PageFrame";

export const metadata = {
  title: "Our Santa Monica Therapy Office | Dr. Maya Reynolds",
  description:
    "See the quiet, private Santa Monica therapy office of Dr. Maya Reynolds. In-person sessions and secure telehealth across California are available.",
};

export default function OfficePage() {
  return (
    <PageFrame>
      <main>
        <OurOffice />
      </main>
    </PageFrame>
  );
}
