import { SOCIAL_LINKS } from "@/lib/data";
import Link from "next/link";
import React from "react";
import FacebookIcon from "../Icons/FacebookIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import GithubIcon from "../Icons/GithubIcon";

const SocialLink = () => {
  return (
    <div className="flex gap-8 items-center py-2 ">
      {SOCIAL_LINKS.map((link) => (
        <Link
          key={link.id}
          href={link.link}
          target="_blank"
          className={`text-xl text-grey-500 hover:text-grey-50 duration-500 hover:scale-[1.1] `}
        >
          {/* <Image src={link.icon} width={30} height={30} alt="links" /> */}
          {link.label === "facebook" && <FacebookIcon />}
          {link.label === "linkedin" && <LinkedinIcon />}
          {link.label === "github" && <GithubIcon />}
        </Link>
      ))}
    </div>
  );
};

export default SocialLink;
