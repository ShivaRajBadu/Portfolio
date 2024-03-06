"use client";
import { useRouter } from "next/navigation";
import React from "react";

const ViewAllButton = () => {
  const router = useRouter();
  return (
    <div className="text-center ">
      <button
        title="view all"
        onClick={() => router.push("/projects")}
        className="text-center py-6 text-grey-500  hover:text-grey-300 duration-300 px-6  cursor-pointer font-semibold text-xl underline decoration-highlight underline-offset-8"
      >
        View all
      </button>
    </div>
  );
};

export default ViewAllButton;
