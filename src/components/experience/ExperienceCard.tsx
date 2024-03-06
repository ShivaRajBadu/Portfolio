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
    <div className="flex gap-8 justify-between bg-grey-800 p-6  rounded-xl w-full">
      <h2 className="text-xl w-fit font-semibold">{companyName}</h2>
      <div className="w-[60%]">
        <h1 className="text-2xl pb-2 font-bold ">
          {position} ({jobType})
        </h1>
        <ul className="list-disc space-y-3 ">
          {description.map((desc) => (
            <li className="text-lg text-grey-400" key={desc}>
              {desc}
            </li>
          ))}
        </ul>
      </div>
      <div className="text-end">
        <p className="text-base font-medium font-roboto">{duration}</p>
        <p className="text-sm font-medium font-inter">{location}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
