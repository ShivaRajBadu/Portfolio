import React from "react";
import Wrapper from "./Wrapper";
import SectionTitle from "./SectionTitle";
import { SKILL } from "@/lib/data";
import SkillItem from "./SkillItem";

const SkillSection = () => {
  return (
    <div className="py-16">
      <Wrapper>
        <SectionTitle title="Skills" />
        <p className="text-xl text-center text-grey-300 py-4">
          Here are Tool and Technologies I use:
        </p>
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
