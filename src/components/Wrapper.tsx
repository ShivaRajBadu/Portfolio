import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-[1440px] w-[96%] mx-auto">{children}</div>;
};

export default Wrapper;
