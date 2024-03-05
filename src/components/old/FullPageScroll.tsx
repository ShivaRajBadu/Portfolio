"use client";
import React, { useEffect, useRef } from "react";

const FullPageScroll = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id="fullpage" className="overflow-auto h-full  gap-10 hideScrollBar ">
      {children}
    </div>
  );
};

export default FullPageScroll;
