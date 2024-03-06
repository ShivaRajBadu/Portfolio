"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const ProjectTab = () => {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <div className="flex xl:w-[90%] mx-auto py-12 justify-center gap-8">
      <button
        onClick={() => router.push("web")}
        className={`text-2xl  font-semibold  font-inter cursor-pointer ${
          pathName === "/projects/web"
            ? "underline decoration-highlight underline-offset-8 text-grey-400"
            : "text-grey-500 hover:text-grey-400 duration-300"
        } `}
      >
        Web App
      </button>
      <button
        onClick={() => router.push("mobile")}
        className={` text-2xl  font-semibold  font-inter   cursor-pointer ${
          pathName === "/projects/mobile"
            ? "underline decoration-highlight underline-offset-8 text-grey-400"
            : "text-grey-500 hover:text-grey-400 duration-300"
        } `}
      >
        Mobile App
      </button>
    </div>
  );
};

export default ProjectTab;
