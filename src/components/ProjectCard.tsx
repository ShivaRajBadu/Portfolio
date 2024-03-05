import React from "react";
import Image from "next/image";
const ProjectCard = () => {
  const technologies = [
    "React",
    "Typescript",
    "React Bootstrap",
    "Firebase",
    "Express.js",
    "PostgreSQL",
    "Styled Components",
    "Redux",
  ];

  return (
    <div className="flex justify-center items-center  bg-gray-800">
      <div className="relative w-[300px] h-[300px]">
        <Image
          src={"/profile_2.jpg"}
          alt="Wingle"
          fill
          className="object-cover"
        />
      </div>
      <div className="w-1/2 p-8">
        <h1 className="text-3xl font-bold mb-4">Wingle</h1>
        <p className="text-lg mb-8">
          A platform for comparing and finding affordable flights, as well as
          booking and purchasing tickets safely and easily in a few simple
          clicks.
        </p>
        <div className="flex flex-wrap">
          {technologies.map((tech) => (
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
