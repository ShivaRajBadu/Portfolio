import { MobileProject } from "@/lib/data";
import React from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  id: number;
  projectName: string;
  usedTech: string[];
  description: string;
  liveLink?: string;
  projectImage: string;
}
const MainPageProjectCategory = ({
  title,
  projects,
}: {
  title: string;
  projects: Project[];
}) => {
  return (
    <div>
      <h2 className="text-lg md:text-2xl font-semibold font-inter py-6">
        {title}
      </h2>
      <div
        style={{
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
        }}
        className="grid gap-4 px-2 "
      >
        {projects.map((project, index) => {
          if (index < 3) {
            return <ProjectCard key={project.id} {...project} />;
          }
        })}
      </div>
    </div>
  );
};

export default MainPageProjectCategory;
