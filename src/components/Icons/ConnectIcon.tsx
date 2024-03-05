import React from "react";

const ConnectIcon = ({ fillColor = "#7D7373" }: { fillColor?: string }) => {
  return (
    <div title="Connect with me" className="cursor-pointer">
      <svg
        width="29"
        height="31"
        viewBox="0 0 29 31"
        fill={fillColor}
        className="hover:fill-[#FF5C00] duration-700 ease-in-out"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1.49788 27.8508L6.87527 22.1667H23.9661C24.7606 22.1667 25.5226 21.833 26.0844 21.2392C26.6462 20.6453 26.9619 19.8399 26.9619 19V4.75C26.9619 3.91015 26.6462 3.10469 26.0844 2.51083C25.5226 1.91696 24.7606 1.58333 23.9661 1.58333H4.49364C3.69912 1.58333 2.93713 1.91696 2.37532 2.51083C1.8135 3.10469 1.49788 3.91015 1.49788 4.75V27.8508ZM1.49788 30.0833H0V4.75C0 3.49022 0.473436 2.28204 1.31616 1.39124C2.15888 0.500445 3.30185 0 4.49364 0H23.9661C25.1579 0 26.3009 0.500445 27.1436 1.39124C27.9863 2.28204 28.4597 3.49022 28.4597 4.75V19C28.4597 20.2598 27.9863 21.468 27.1436 22.3588C26.3009 23.2496 25.1579 23.75 23.9661 23.75H7.4894L1.49788 30.0833Z" />
      </svg>
    </div>
  );
};

export default ConnectIcon;
