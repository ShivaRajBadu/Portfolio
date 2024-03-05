import React from "react";
import HomeIcon from "./Icons/HomeIcon";
import Image from "next/image";
import AboutIcon from "./Icons/AboutIcon";
import EducationIcon from "./Icons/EducationIcon";
import SkillIcon from "./Icons/SkillIcon";
import ProjectIcon from "./Icons/ProjectIcon";
import ConnectIcon from "./Icons/ConnectIcon";
import SpecilizationIcon from "./Icons/SpecilizationIcon";

const NavigationBar = () => {
  return (
    <div className="flex flex-col gap-10 border border-[color:var(--border-color)] shadow-md px-5 py-10 rounded-full">
      <HomeIcon fillColor="#FF5C00" />
      <AboutIcon />
      <SkillIcon />
      <EducationIcon />
      <SpecilizationIcon />
      <ProjectIcon />
      <ConnectIcon />
    </div>
  );
};

export default NavigationBar;
