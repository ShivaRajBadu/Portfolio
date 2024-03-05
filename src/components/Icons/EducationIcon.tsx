import React from "react";

const EducationIcon = ({ fillColor = "#7D7373" }: { fillColor?: string }) => {
  return (
    <div title="Education & Expericence" className="cursor-pointer">
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        className="hover:fill-[#FF5C00] duration-700 ease-in-out"
        fill={fillColor}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_32_229)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.5625 34.4375L8.3125 28.5V9.5L22.5625 3.5625V34.4375ZM6.21063 31.483C5.77801 31.3025 5.40847 30.9981 5.14855 30.608C4.88863 30.2179 4.74996 29.7596 4.75 29.2909V8.70912C4.74996 8.24037 4.88863 7.78209 5.14855 7.39201C5.40847 7.00192 5.77801 6.69747 6.21063 6.517L21.1921 0.273124C21.7336 0.047483 22.3224 -0.0409663 22.9062 0.0156295C23.4901 0.0722253 24.0509 0.272115 24.5389 0.597549C25.027 0.922984 25.4271 1.36389 25.7038 1.88113C25.9805 2.39836 26.1252 2.97591 26.125 3.5625V4.75H29.0938C31.388 4.75 33.25 6.60962 33.25 8.90625V29.0937C33.25 30.1961 32.8121 31.2532 32.0327 32.0327C31.2532 32.8121 30.1961 33.25 29.0938 33.25H26.125V34.4375C26.1252 35.0241 25.9805 35.6016 25.7038 36.1189C25.4271 36.6361 25.027 37.077 24.5389 37.4024C24.0509 37.7279 23.4901 37.9278 22.9062 37.9844C22.3224 38.041 21.7336 37.9525 21.1921 37.7269L6.21063 31.483ZM26.125 29.6875H29.0938C29.2512 29.6875 29.4022 29.6249 29.5136 29.5136C29.6249 29.4022 29.6875 29.2512 29.6875 29.0937V8.90625C29.6875 8.74878 29.6249 8.59775 29.5136 8.4864C29.4022 8.37505 29.2512 8.3125 29.0938 8.3125H26.125V29.6875Z"
          />
        </g>
        <defs>
          <clipPath id="clip0_32_229">
            <rect width="38" height="38" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default EducationIcon;
