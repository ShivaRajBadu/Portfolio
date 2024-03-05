import Image from "next/image";
import React from "react";

const ProfileInfo = () => {
  return (
    <div className="w-fit min-w-[400px]  border border-[color:var(--border-color)] shadow-lg p-8    rounded-[20px] ">
      <h1 className="font-bold text-[32px] text-[color:var(--text-light)] pb-4 text-center">
        <span className="text-[color:var(--text-highlight)]">S</span>hiva{" "}
        <span className="text-[color:var(--text-highlight)]">R</span>aj{" "}
        <span className="text-[color:var(--text-highlight)]">B</span>adu
      </h1>
      <div>
        <Image
          className="rounded-xl mx-auto border border-[color:var(--icon-color)]  "
          src="/profile.png"
          alt="profile"
          width={300}
          height={300}
        />
      </div>
      <h4 className="text-center text-[20px] font-normal text-[color:var(--text-light)] py-2">
        Based on Kathmandu, Nepal
      </h4>
      <h3 className="text-[24px] font-normal text-[color:var(--icon-color)] max-w-[300px]  text-center py-2">
        Frontend Developer || Flutter Developer
      </h3>
      <div className="flex  gap-12 justify-center py-3">
        <Image
          className="cursor-pointer"
          src="/icons/linkedin.svg"
          alt="linkedin"
          width={30}
          height={30}
        />
        <Image src="/icons/github.svg" alt="github" width={30} height={30} />
        <Image
          className="cursor-pointer"
          src="/icons/instagram.svg"
          alt="instagram"
          width={30}
          height={30}
        />
        <Image
          className="cursor-pointer"
          src="/icons/facebook.svg"
          alt="facebook"
          width={30}
          height={30}
        />
      </div>
      <button className="block mt-4 mx-auto rounded-[10px] font-medium bg-[color:var(--text-highlight)] px-4 py-2  w-[90%] text-[color:var(--background)]">
        Download Resume
      </button>
    </div>
  );
};

export default ProfileInfo;
