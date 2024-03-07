import React from "react";

import { SKILL } from "@/lib/data";
import SkillItem from "./SkillItem";
import Wrapper from "../Wrapper";
import SectionTitle from "../SectionTitle";

const SkillSection = () => {
  return (
    <div id="skills" className="py-16">
      <Wrapper>
        <SectionTitle
          title="Skills"
          subTitle="Here are Tool and Technologies I use:"
        />
        <div className="flex  flex-wrap gap-24 justify-center max-w-[90%] mx-auto py-16">
          {SKILL.map((skill) => (
            <SkillItem key={skill.id} imgSrc={skill.link} label={skill.name} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default SkillSection;
