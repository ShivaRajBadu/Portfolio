import React from "react";
import Wrapper from "./Wrapper";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";

const WorkSection = () => {
  return (
    <div>
      <Wrapper>
        <div>
          <SectionTitle title="Projects" />
          <h2>Some of the noteworty projects:</h2>
          <div>
            <ProjectCard />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default WorkSection;
