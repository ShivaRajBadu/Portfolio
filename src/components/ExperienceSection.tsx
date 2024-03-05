import React from "react";
import Wrapper from "./Wrapper";
import SectionTitle from "./SectionTitle";
import ExperienceCard from "./ExperienceCard";
import { ExperienceData } from "@/lib/data";

const ExperienceSection = () => {
  return (
    <div className="py-16 bg-grey-900">
      <Wrapper>
        <div className="w-[80%] mx-auto">
          <SectionTitle title="Experience" />
          <h1 className="text-xl py-4 font-semibold text-center text-grey-400">
            Here is a summary of my experience
          </h1>
          <div className="flex gap-8 py-16 flex-col">
            {ExperienceData.map((exp) => (
              <ExperienceCard key={exp.id} {...exp} />
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ExperienceSection;
