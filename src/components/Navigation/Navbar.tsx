"use client";
import React, { useState } from "react";

import { NAV_LINK, LOGOTEXT } from "@/lib/data";
import Link from "next/link";
import Wrapper from "../Wrapper";
import ThemeSwitcher from "./ThemeSwitcher";
import NavDrawer from "./NavDrawer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <div className="py-6 flex justify-between items-center md:border-none border-b border-grey-900">
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link href={"/"} className="text-2xl font-bold font-roboto">
            {"</"}
            <span className="text-highlight">{LOGOTEXT}</span>
            {">"}
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="50px"
              height="50px"
              className="fill-grey-300 w-[30xpx] h-[30px]"
            >
              <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex items-center gap-4 lg:gap-6 ">
          <div className="flex gap-6 lg:gap-8 border-r pr-6 border-grey-700">
            {NAV_LINK.map((link) => (
              <Link
                key={link.id}
                href={link.link}
                className="text-xl font-medium font-inter text-grey-500 hover:text-grey-50 duration-500 "
              >
                {link.label}
              </Link>
            ))}
          </div>
          {/* <ThemeSwitcher /> */}
          <button
            onClick={() => window.open("/resume.pdf", "_blank")}
            className="  bg-grey-50 text-grey-900 font-semibold px-4 py-2 rounded-md hover:bg-grey-300 duration-500"
          >
            Download CV
          </button>
        </div>
        <NavDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </Wrapper>
  );
};

export default Navbar;
