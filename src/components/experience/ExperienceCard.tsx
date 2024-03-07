import React from "react";

interface Props {
  companyName: string;
  position: string;
  duration: string;
  description: string[];
  location: string;
  jobType: string;
}
const ExperienceCard = ({
  companyName,
  position,
  duration,
  description,
  location,
  jobType,
}: Props) => {
  return (
    <div className="flex flex-col md:flex-row  gap-4 md:gap-8 justify-between bg-grey-800 px-4 py-6 md:px-6 md:py-6  rounded-xl w-full">
      <h2 className="text-xl max-md:order-1 w-fit font-semibold">
        {companyName}
      </h2>
      <div className="w-full  max-md:order-3 md:w-[60%]">
        <h1 className="text-xl md:text-2xl pb-2 font-bold ">
          {position} ({jobType})
        </h1>
        <ul className="list-disc px-3 md:px-0 space-y-3 ">
          {description.map((desc) => (
            <li className="text-base md:text-lg text-grey-400" key={desc}>
              {desc}
            </li>
          ))}
        </ul>
      </div>
      <div className="text-start md:text-end order-2">
        <p className="text-sm md:text-base font-medium font-roboto">
          {duration}
        </p>
        <p className="text-xs md:text-sm font-medium font-inter">{location}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
