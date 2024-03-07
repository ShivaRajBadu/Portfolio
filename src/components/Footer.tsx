import React from "react";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <div className="py-2">
      <Wrapper>
        <h1 className="text-center py-1 text-grey-400">
          &copy; {new Date().getFullYear()} | Shiva Raj Badu
        </h1>
      </Wrapper>
    </div>
  );
};

export default Footer;
