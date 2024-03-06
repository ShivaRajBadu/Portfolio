import React from "react";
import Image from "next/image";
import Description from "./Description";
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
    <div className=" bg-gray-800 rounded-md w-full">
      <div className="relative w-[90%]  mx-auto group   mt-4 p-6 h-[300px]  rounded-md shadow-xl">
        <Image
          src={projectImage}
          alt="Wingle"
          fill
          className="object-cover rounded-md group-hover:scale-[1.05]  duration-500 cursor-pointer"
        />
        <div className="grid opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#1515159d] duration-500 transition-all group-hover:opacity-100 scale-0  group-hover:scale-[1.05] rounded-md  place-content-center ">
          <Image
            title="live preview"
            className="cursor-pointer hover:scale-[1.15] duration-500 transition-transform"
            src={"/icons/link.png"}
            width={40}
            height={40}
            alt="link icon"
          />
        </div>
      </div>
      <div className=" p-8">
        <h1 className="text-3xl font-bold mb-4">{projectName}</h1>
        <Description description={description} />
        <div className="flex flex-wrap w-full">
          {usedTech.map((tech) => (
            <span
              key={tech}
              className="bg-gray-600 text-white py-2 px-4 rounded-lg mr-4 mb-4"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
