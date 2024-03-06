import FullProjectCard from "@/components/projectsPage/FullProjectCard";

import { MobileProject, WebProjects } from "@/lib/data";
import React from "react";

const EachCategory = ({ params }: { params: { slug: string } }) => {
  if (params.slug === "web") {
    return (
      <div className="flex gap-16 py-12   flex-col xl:max-w-[90%] mx-auto">
        {WebProjects.map((project, index) => {
          return (
            <FullProjectCard isMobile={false} key={project.id} {...project} />
          );
        })}
      </div>
    );
  } else if (params.slug === "mobile") {
    return (
      <div className="flex gap-16 py-12   flex-col xl:max-w-[90%] mx-auto">
        {MobileProject.map((project, index) => {
          return (
            <FullProjectCard key={project.id} isMobile={true} {...project} />
          );
        })}
      </div>
    );
  } else return null;
};

export default EachCategory;
