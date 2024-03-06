import { LOGOTEXT, NAV_LINK } from "@/lib/data";
import Link from "next/link";

import ThemeSwitcher from "./ThemeSwitcher";

const NavDrawer = ({
  setIsOpen,
  isOpen,
}: {
  setIsOpen: any;
  isOpen: boolean;
}) => {
  return (
    <div
      className={`md:hidden z-20 fixed inset-0 h-screen w-screen duration-300  backdrop-blur-sm ${
        isOpen ? "translate-x-0" : "translate-x-[100%]"
      } `}
    >
      <div className="absolute top-0 right-0 w-[70%] sm:w-[60%] h-screen bg-grey-900 px-6 py-4">
        <div className="flex justify-between items-center w-full md:w-auto">
          <h1 className="text-lg sm:text-2xl font-bold font-roboto">
            {"</"}
            <span className="text-highlight">{LOGOTEXT}</span>
            {">"}
          </h1>
          <button onClick={() => setIsOpen(false)} className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="30px"
              height="30px"
              className="fill-grey-300"
            >
              <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-4 justify-center  border-y border-grey-600 my-4 py-4">
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

        <div className="flex  justify-between py-2">
          <button className="  bg-grey-50 text-grey-900 font-semibold px-4 py-2 rounded-md hover:bg-grey-300 duration-500">
            Download CV
          </button>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default NavDrawer;
