import React from "react";

import ProjectCard from "./ProjectCard";
import { MobileProject, WebProjects } from "@/lib/data";
import Wrapper from "../Wrapper";
import SectionTitle from "../SectionTitle";
import MainPageProjectCategory from "./MainPageProjectCategory";
import ViewAllButton from "./ViewAllButton";

const WorkSection = () => {
  return (
    <div className="py-16">
      <Wrapper>
        <div>
          <SectionTitle
            title="Projects"
            subTitle="Some of the noteworty projects:"
          />
          <MainPageProjectCategory
            title="Web App projects:"
            projects={WebProjects}
          />
          <ViewAllButton />
          <MainPageProjectCategory
            title="Mobile App projects:"
            projects={MobileProject}
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default WorkSection;
