import React from "react";

const Description = ({ description }: { description: string }) => {
  return (
    <p className="text-lg mb-8 text-grey-400 line-clamp-3 cursor-text ">
      {description}
    </p>
  );
};

export default Description;
