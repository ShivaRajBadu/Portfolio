import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/Contact";

import HeroSection from "@/components/HeroSection/HeroSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import SkillSection from "@/components/skill/SkillSection";
import WorkSection from "@/components/work/WorkSection";

export default function Home() {
  return (
    <div title="Shiva Raj Badu" className=" ">
      <HeroSection />
      <AboutMe />
      <SkillSection />
      <ExperienceSection />
      <WorkSection />
      <ContactMe />
    </div>
  );
}
