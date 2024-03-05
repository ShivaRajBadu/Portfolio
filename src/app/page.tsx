import AboutMe from "@/components/AboutMe";
import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import SkillSection from "@/components/SkillSection";
import WorkSection from "@/components/WorkSection";

export default function Home() {
  return (
    <div title="Shiva Raj Badu" className=" ">
      <HeroSection />
      <AboutMe />
      <SkillSection />
      <ExperienceSection />
      <WorkSection />
    </div>
  );
}
