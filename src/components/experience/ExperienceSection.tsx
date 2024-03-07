import React from "react";

import ExperienceCard from "./ExperienceCard";
import { ExperienceData } from "@/lib/data";
import Wrapper from "../Wrapper";
import SectionTitle from "../SectionTitle";

const ExperienceSection = () => {
  return (
    <div className="py-16 bg-grey-900">
      <Wrapper>
        <div className="w-full md:w-[95%] xl:w-[80%] mx-auto">
          <SectionTitle
            title="Experience"
            subTitle="Here is a summary of my experience"
          />

          <div className="flex px-2 sm:px-0 gap-8 py-16 flex-col">
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
