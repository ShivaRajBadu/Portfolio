import Image from "next/image";
import React, { useState } from "react";
import { dark, light } from "@/lib/data";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(dark);

  return (
    <div
      className="max-md:order-2 rounded-md cursor-pointer hover:bg-grey-800 duration-500"
      onClick={() => setTheme(theme === dark ? light : dark)}
    >
      {theme === dark ? (
        <Image src={light} width={40} height={40} alt="light mode" />
      ) : (
        <Image src={dark} width={40} height={40} alt="dark mode" />
      )}
    </div>
  );
};

export default ThemeSwitcher;
