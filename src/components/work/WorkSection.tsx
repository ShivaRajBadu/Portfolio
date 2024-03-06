import React from "react";

import ProjectCard from "./ProjectCard";
import { WebProjects } from "@/lib/data";
import Wrapper from "../Wrapper";
import SectionTitle from "../SectionTitle";

const WorkSection = () => {
  return (
    <div className="py-16">
      <Wrapper>
        <div>
          <SectionTitle
            title="Projects"
            subTitle="Some of the noteworty projects:"
          />
          <div>
            <h2 className="text-2xl font-semibold font-inter py-6">
              Frontend projects:
            </h2>
            <div className="flex gap-4">
              {WebProjects.map((project, index) => {
                if (index < 3) {
                  return <ProjectCard key={project.id} {...project} />;
                }
              })}
            </div>
            <p className="text-center py-6  px-6  cursor-pointer font-semibold text-xl underline decoration-highlight underline-offset-8">
              View all
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold font-inter py-6">
              Mobile App projects:
            </h2>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default WorkSection;
