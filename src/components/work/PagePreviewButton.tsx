"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
const PagePreviewButton = ({
  link,
  isMainPage = true,
}: {
  link?: string;
  isMainPage?: boolean;
}) => {
  const router = useRouter();
  const handleNavigation = (link?: string) => {
    if (link) {
      window.open(link, "_blank");
    } else {
      router.push("/projects");
    }
  };
  if (!isMainPage && !link) return null;
  return (
    <Image
      onClick={() => handleNavigation(link)}
      title="live preview"
      className="cursor-pointer w-[20px] h-[20px] md:w-[30px] md:h-[30px] hover:scale-[1.15] duration-500 transition-transform"
      src={"/icons/link.png"}
      width={40}
      height={40}
      alt="link icon"
    />
  );
};

export default PagePreviewButton;
