import React from "react";
import Image from "next/image";

const MainImage = ({
  imgSrc,
  width = 350,
  height = 350,
  holdersColor,
  showImageBackground = true,
  borderColor = "grey",
}: {
  imgSrc: string;
  width?: number;
  height?: number;
  showImageBackground?: boolean;
  holdersColor?: string;
  borderColor?: string;
}) => {
  const holderStyle = `bg-${holdersColor} w-[${width}px] h-[${height}px]`;
  const borderStyle = `border-${borderColor} `;

  return (
    <div className="relative my-6 sm:px-4  max-lg:mx-auto">
      {showImageBackground && (
        <div className="absolute top-0 bg-gray-800 z-10 w-full h-full md:w-[90%] md:h-[95%] lg:w-full lg:w-full max-w-[345px] max-h-[350px]"></div>
      )}
      <p className="hidden border-grey"> </p>
      <Image
        className={`bg-inherit border-[6px]  relative mx-auto z-10 ${borderStyle}`}
        src={imgSrc}
        width={width}
        height={height}
        priority
        alt="profile"
      />
      <div
        style={{
          maxWidth: width,
          maxHeight: height,
          width: "100%",
          height: "100%",
        }}
        className={`absolute -bottom-2 right-2 sm:-bottom-5 sm:-right-1 ${holderStyle}`}
      ></div>
      <div
        style={{
          maxWidth: width,
          maxHeight: height,
          width: "100%",
          height: "100%",
        }}
        className={`absolute -top-2 left-2 sm:-top-5 sm:-left-1 ${holderStyle}`}
      ></div>
    </div>
  );
};

export default MainImage;
