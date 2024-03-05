import React from "react";
import Image from "next/image";
const MainImage = ({
  imgSrc,
  width = 350,
  height = 350,
  holdersColor = "grey-600",
  borderColor = "grey",
}: {
  imgSrc: string;
  width?: number;
  height?: number;
  holdersColor?: string;
  borderColor?: string;
}) => {
  const holderStyle = `bg-${holdersColor} w-[${width}px] h-[${height}px]`;
  const borderStyle = ` border-${borderColor}`;
  return (
    <div className=" relative my-6 ">
      <div className=" absolute top-0 bg-grey-800 z-10  w-[350px] h-[350px]"></div>
      <Image
        className={`bg-inherit border-[6px] border-grey relative z-10 ${borderStyle}`}
        src={imgSrc}
        width={width}
        height={height}
        alt="profile"
      />
      <div
        style={{ width: width, height: height }}
        className={`absolute -bottom-5 -right-5   ${holderStyle} `}
      ></div>
      <div
        style={{ width: width, height: height }}
        className={` absolute -top-5 -left-5   ${holderStyle} `}
      ></div>
    </div>
  );
};

export default MainImage;
