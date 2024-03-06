import React from "react";

const UsedTech = ({ usedTech }: { usedTech: string[] }) => {
  return (
    <div className="flex flex-wrap w-full">
      {usedTech.map((tech) => (
        <span
          key={tech}
          className="bg-gray-600 font-semibold text-grey-400 py-2 px-4 rounded-lg mr-4 mb-4"
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

export default UsedTech;
