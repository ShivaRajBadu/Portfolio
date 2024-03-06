import React from "react";

import Image from "next/image";
import UsedTech from "../UsedTech";
import PagePreviewButton from "../work/PagePreviewButton";
import ImageCarousel from "./ImageCarousel";
interface Props {
  id: number;
  projectName: string;
  usedTech: string[];
  description: string;
  liveLink?: string;
  projectImage: string;
  projectImages?: string[];
  isMobile: boolean;
}
const FullProjectCard = ({
  id,
  projectName,
  usedTech,
  description,
  isMobile,
  liveLink,
  projectImages,
  projectImage,
}: Props) => {
  const orderStyling = id % 2 === 0 ? "order-1" : "order-2";
  const reverseOrderStyling = id % 2 === 0 ? "order-2" : "order-1";

  return (
    <div className="  shadow-md shadow-grey-900 rounded-xl overflow-hidden  flex md:flex-row  flex-col">
      <div
        className={`bg-grey-700 flex justify-center items-center  px-5 md:px-10 w-full md:w-[50%] py-6 md:${reverseOrderStyling}`}
      >
        {!isMobile ? (
          <div
            title={projectName}
            className="relative w-full aspect-w-16 aspect-h-9 md:aspect-w-9 md:apsect-h-16 lg:aspect-w-16 lg:aspect-h-9"
          >
            <Image
              loading="lazy"
              className="hover:scale-[1.05]   rounded-md  cursor-pointer duration-500"
              src={projectImage}
              alt={projectName}
              sizes="(100vw - 4px)"
              fill
            />
          </div>
        ) : (
          <ImageCarousel images={projectImages!} />
        )}
      </div>
      <div className={`w-full md:w-[50%] bg-grey-900   md:${orderStyling}`}>
        <div className="px-5 md:px-10 py-6">
          <div className="flex justify-between">
            <h1 className="text-xl sm:text-3xl font-bold  ">{projectName}</h1>
            <PagePreviewButton isMainPage={false} link={liveLink} />
          </div>
          <p className="text-base sm:text-lg py-4 font-semibold  text-grey-500">
            {description}
          </p>
          <UsedTech usedTech={usedTech} />
        </div>
      </div>
    </div>
  );
};

export default FullProjectCard;
