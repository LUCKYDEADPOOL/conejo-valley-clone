import ApproachSection from "./ApproachSection";
import HeroSection from "./HeroSection";
import IntroSection from "./IntroSection";
import OurOffice from "./OurOffice";
import ScheduleAnAppointment from "./ScheduleAnAppointment";
import ServicesSection from "./ServicesSection";
import HomeGuide from "./HomeGuide";
import WhoWeHelp from "./WhoWeHelp";

export default function Body() {
  return (
    <main id="top">
      <HeroSection />
      <IntroSection />
      <WhoWeHelp />
      <ServicesSection />
      <ApproachSection />
      <OurOffice />
      <HomeGuide />
      <ScheduleAnAppointment />
    </main>
  );
}
