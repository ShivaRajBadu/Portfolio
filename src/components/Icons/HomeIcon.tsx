import React from "react";

const HomeIcon = ({ fillColor = "#7D7373" }: { fillColor?: string }) => {
  return (
    <div title="Home" className="cursor-pointer">
      <svg
        width="35"
        height="35"
        viewBox="0 0 35 35"
        className="hover:fill-[#FF5C00] duration-700 ease-in-out"
        fill={fillColor}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M32.1061 14.7964L18.5307 2.30705C18.0894 1.90103 17.5082 1.6813 16.9087 1.69379C16.3091 1.70627 15.7376 1.95001 15.3136 2.37405L2.82823 14.8595L2.1875 15.5001V33.9062H14.2188V22.4219H20.7812V33.9062H32.8125V15.4463L32.1061 14.7964ZM16.9557 3.88082C16.975 3.88082 16.9631 3.88499 16.9548 3.89313C16.9463 3.88499 16.9364 3.88082 16.9557 3.88082ZM30.625 31.7187H22.9688V22.4219C22.9688 21.8417 22.7383 21.2853 22.328 20.8751C21.9178 20.4648 21.3614 20.2344 20.7812 20.2344H14.2188C13.6386 20.2344 13.0822 20.4648 12.672 20.8751C12.2617 21.2853 12.0312 21.8417 12.0312 22.4219V31.7187H4.375V16.4062L16.9557 3.92081C16.9566 3.91999 16.9567 3.91924 16.9574 3.91842L30.625 16.4062V31.7187Z" />
      </svg>
    </div>
  );
};

export default HomeIcon;