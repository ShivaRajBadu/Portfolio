"use client";
import { useWindowListener } from "@/hooks/useWindowListener";
import React, { useState } from "react";

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useWindowListener("pointermove", (e: any) => {
    setPosition({
      x: e.pageX,
      y: e.pageY,
    });
  });
  useWindowListener("scroll", (e: any) => {
    // setPosition({
    //   x: e.pageX,
    //   y: e.pageY,
    // });
    console.log(window.scrollX, window.screenY);
  });

  return (
    <div
      style={{
        position: "absolute",
        // background: `rgb(var(--background))`,
        borderRadius: "50%",
        opacity: 0.5,
        border: "1px solid rgba(255, 255, 255, 0.3)",
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: "none",
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        zIndex: 100000,
      }}
    />
  );
};

export default MouseFollower;
