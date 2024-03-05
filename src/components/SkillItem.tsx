import Image from "next/image";
import React from "react";

const SkillItem = ({ imgSrc, label }: { imgSrc: string; label: string }) => {
  return (
    <div className="flex flex-col items-center ">
      <div className="w-[60px] h-[60px] relative">
        <Image
          className="hover:scale-[1.1] duration-300 cursor-pointer"
          src={imgSrc}
          fill
          sizes="( max-width: 768px) 100vw,"
          alt={label}
        />
      </div>
      <p className="text-center text-lg text-grey-300 py-2">{label}</p>
    </div>
  );
};

export default SkillItem;
