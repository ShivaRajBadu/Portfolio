import React from "react";

const LinkedinIcon = ({ fillColor = "#ffffff" }: { fillColor?: string }) => {
  return (
    <div
      aria-label="linkedin"
      className="w-10 h-10 hover:bg-grey-900 p-2 rounded-md"
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill={fillColor}
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_22_489)">
          <path d="M37.0391 0H2.95312C1.32031 0 0 1.28906 0 2.88281V37.1094C0 38.7031 1.32031 40 2.95312 40H37.0391C38.6719 40 40 38.7031 40 37.1172V2.88281C40 1.28906 38.6719 0 37.0391 0ZM11.8672 34.0859H5.92969V14.9922H11.8672V34.0859ZM8.89844 12.3906C6.99219 12.3906 5.45312 10.8516 5.45312 8.95312C5.45312 7.05469 6.99219 5.51562 8.89844 5.51562C10.7969 5.51562 12.3359 7.05469 12.3359 8.95312C12.3359 10.8438 10.7969 12.3906 8.89844 12.3906ZM34.0859 34.0859H28.1562V24.8047C28.1562 22.5938 28.1172 19.7422 25.0703 19.7422C21.9844 19.7422 21.5156 22.1562 21.5156 24.6484V34.0859H15.5938V14.9922H21.2812V17.6016H21.3594C22.1484 16.1016 24.0859 14.5156 26.9688 14.5156C32.9766 14.5156 34.0859 18.4688 34.0859 23.6094V34.0859Z" />
        </g>
        <defs>
          <clipPath id="clip0_22_489">
            <rect width="40" height="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default LinkedinIcon;
