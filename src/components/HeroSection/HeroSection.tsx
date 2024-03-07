import React from "react";
import Wrapper from "../Wrapper";

import { MainDescription, MainTitle } from "@/lib/data";

import SocialLink from "./SocialLink";
import MainImage from "../MainImage";

const HeroSection = () => {
  return (
    <div className="md:h-[75vh] grid place-content-center px-4 py-14 md:py-0">
      <Wrapper>
        <div className="flex justify-between gap-12 md:gap-3  flex-col md:flex-row  items-center ">
          <div className="w-full text-center md:text-start max-md:order-2 md:w-[50%]">
            <h1
              className="text-4xl sm:text-6xl  font-bold font-inter py-2"
              dangerouslySetInnerHTML={{ __html: MainTitle }}
            ></h1>
            <p className="py-4 text-lg sm:text-xl text-grey-500 leading-8">
              {MainDescription}
            </p>
            <div className="flex gap-4   justify-center md:justify-start items-center pt-10">
              {/* location icon animation */}
              <div className="location"></div>
              <h4 className="text-lg text-grey-500">Kathmandu, Nepal</h4>
            </div>
            <div className="flex gap-7 ml-2 justify-center md:justify-start items-center pt-1 pb-3">
              <div className="relative my-6">
                <div className="bg-green-600 w-3  h-3 rounded-full z-10"></div>
                <div className="w-5 h-5 absolute -top-1 -left-1 bg-green-800 -z-10 rounded-full wave-animation"></div>
              </div>
              <p className="text-lg text-grey-500">Available</p>
            </div>
            <SocialLink />
          </div>
          <MainImage
            imgSrc={"/profile.png"}
            borderColor="grey"
            holdersColor="grey-700"
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default HeroSection;
