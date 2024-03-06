"use client";
import React, { useState } from "react";
import Image from "next/image";
const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <div title={"badu"} className="w-full h-full relative">
      <div className="relative w-[50%] mx-auto aspect-w-1 aspect-h-1">
        <Image
          loading="lazy"
          className="  rounded-md  "
          src={images[currentIndex]}
          alt={"h"}
          sizes="(100vw - 4px)"
          fill
        />
      </div>

      <div>
        <button
          disabled={currentIndex === 0}
          onClick={handlePrevious}
          className="absolute top-1/2 left-0 -translate-y-1/2 disabled:cursor-not-allowed "
          title="previous"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          disabled={currentIndex === images.length - 1}
          onClick={handleNext}
          className="absolute top-1/2 right-0 -translate-y-1/2 disabled:cursor-not-allowed"
          title="next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
