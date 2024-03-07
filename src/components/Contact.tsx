import React from "react";
import Wrapper from "./Wrapper";
import SectionTitle from "./SectionTitle";
import CopyToClipboard from "./CopyToClipboard";
import SocialLink from "./HeroSection/SocialLink";

const ContactMe = () => {
  return (
    <div className="py-16 bg-grey-900">
      <Wrapper>
        <div>
          <SectionTitle title="Contact Me" />

          <p className="text-2xl  text-grey-500 p-6 max-w-[60%] mx-auto  font-semibold font-inter text-center  ">
            I am always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>
          <h1 className=" pt-6 pb-4 text-5xl text-center font-bold text-grey-400 font-roboto flex gap-4 justify-center items-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 8 6"
              className="fill-grey-400"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.5 0C1.10218 0 0.720644 0.158035 0.43934 0.43934C0.158035 0.720644 0 1.10218 0 1.5V4.5C0 4.89782 0.158035 5.27936 0.43934 5.56066C0.720644 5.84196 1.10218 6 1.5 6H6.5C6.89782 6 7.27936 5.84196 7.56066 5.56066C7.84196 5.27936 8 4.89782 8 4.5V1.5C8 1.10218 7.84196 0.720644 7.56066 0.43934C7.27936 0.158035 6.89782 0 6.5 0H1.5ZM1 1.5C1 1.36739 1.05268 1.24021 1.14645 1.14645C1.24021 1.05268 1.36739 1 1.5 1H6.5C6.63261 1 6.75979 1.05268 6.85355 1.14645C6.94732 1.24021 7 1.36739 7 1.5V1.67L4 2.956L1 1.67V1.5ZM1 2.758L3.803 3.959C3.86525 3.98569 3.93227 3.99944 4 3.99944C4.06773 3.99944 4.13475 3.98569 4.197 3.959L7 2.758V4.5C7 4.63261 6.94732 4.75979 6.85355 4.85355C6.75979 4.94732 6.63261 5 6.5 5H1.5C1.36739 5 1.24021 4.94732 1.14645 4.85355C1.05268 4.75979 1 4.63261 1 4.5V2.758Z" />
            </svg>
            shivabadu5@gmail.com
            <CopyToClipboard text="shivabadu5@gmail.com" />
          </h1>
          <h1 className=" text-3xl py-2 text-center text-grey-400 font-roboto font-bold flex gap-4 justify-center items-center ">
            <svg
              width="30"
              height="30"
              viewBox="0 0 8 10"
              className="fill-grey-400"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.56109 1.551C3.48711 1.34961 3.33888 1.18416 3.1468 1.08858C2.95472 0.993006 2.73334 0.974551 2.52809 1.037C1.55509 1.337 0.875088 2.172 1.02109 3.138C1.18437 4.21014 1.54768 5.24205 2.09209 6.18C2.63068 7.1158 3.33675 7.94458 4.17509 8.625C4.92909 9.235 5.98709 9.067 6.73309 8.367C6.89001 8.21972 6.98522 8.0184 6.99951 7.80367C7.0138 7.58894 6.94611 7.37678 6.81009 7.21L6.27609 6.557C6.16913 6.42569 6.02518 6.32955 5.86292 6.28105C5.70066 6.23255 5.52756 6.23393 5.36609 6.285L4.13409 6.675L3.91909 6.453C3.64819 6.17205 3.41124 5.86024 3.21309 5.524C3.02077 5.18397 2.87098 4.82158 2.76709 4.445L2.68409 4.15L3.63409 3.275C3.75945 3.1586 3.84738 3.00758 3.88673 2.8411C3.92608 2.67462 3.91507 2.50021 3.85509 2.34L3.56109 1.551ZM2.23409 0.0810016C2.68324 -0.0564208 3.16794 -0.0168691 3.58888 0.191552C4.00981 0.399973 4.3351 0.761482 4.49809 1.202L4.79109 1.99C4.92034 2.3362 4.94372 2.71301 4.85825 3.07253C4.77277 3.43204 4.58232 3.75802 4.31109 4.009L3.82109 4.46C3.88409 4.634 3.96909 4.833 4.07909 5.026C4.18909 5.216 4.31709 5.389 4.43409 5.53L5.06409 5.33C5.4163 5.2188 5.79378 5.21587 6.14768 5.3216C6.50157 5.42732 6.81559 5.63683 7.04909 5.923L7.58309 6.576C7.87986 6.93891 8.02779 7.40095 7.99697 7.86873C7.96616 8.33652 7.7589 8.77516 7.41709 9.096C6.42309 10.029 4.80009 10.416 3.54709 9.402C2.61343 8.64456 1.82702 7.72188 1.22709 6.68C0.619738 5.63384 0.214371 4.48287 0.0320882 3.287C-0.207912 1.694 0.935088 0.481002 2.23409 0.0820017" />
            </svg>
            +977-9848992297
            <CopyToClipboard text="+977-9848992297" />
          </h1>
          <div>
            <h3 className="text-center text-grey-500 text-xl font-semibold py-6">
              You can also find me on these platforms
            </h3>
            <div className="flex justify-center">
              <SocialLink />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ContactMe;
