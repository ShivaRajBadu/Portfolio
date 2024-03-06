import React from "react";
import Image from "next/image";
import Description from "./Description";
import PagePreviewButton from "./PagePreviewButton";
import UsedTech from "../UsedTech";
interface Props {
  projectName: string;
  usedTech: string[];
  description: string;
  liveLink?: string;
  projectImage: string;
}
const ProjectCard = ({
  projectName,
  usedTech,
  description,
  liveLink,
  projectImage,
}: Props) => {
  return (
    <div className=" bg-gray-800 rounded-md ">
      <div className="relative w-[90%]  mx-auto group   mt-4 p-6 h-[300px]  rounded-md shadow-xl">
        <Image
          src={projectImage}
          alt={projectName}
          fill
          className="object-cover rounded-md group-hover:scale-[1.05]  duration-500 cursor-pointer"
        />
        <div className="grid opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#1515159d] duration-500 transition-all group-hover:opacity-100 scale-0  group-hover:scale-[1.05] rounded-md  place-content-center ">
          <PagePreviewButton link={liveLink} />
        </div>
      </div>
      <div className=" p-6">
        <h1 className="text-3xl font-bold mb-4">{projectName}</h1>
        <Description description={description} />
        <UsedTech usedTech={usedTech} />
      </div>
    </div>
  );
};

export default ProjectCard;
