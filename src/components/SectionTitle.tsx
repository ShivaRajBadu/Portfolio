import React from "react";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <p className="text-base font-normal bg-grey-700 px-6 py-1 rounded-3xl font-roboto text-grey-100 text-center w-fit mx-auto">
      {title}
    </p>
  );
};

export default SectionTitle;
