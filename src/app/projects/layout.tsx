import Wrapper from "@/components/Wrapper";

import ProjectTab from "@/components/projectsPage/ProjectTab";
import React from "react";

const ProjectLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Wrapper>
      <div className="py-16">
        <h1 className="text-4xl pb-8  font-bold text-center underline decoration-highlight underline-offset-4 font-roboto">
          Most of my work
        </h1>
        <div>
          <ProjectTab />

          {children}
        </div>
      </div>
    </Wrapper>
  );
};

export default ProjectLayout;
