import React from "react";

const SectionTitle = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle?: string;
}) => {
  return (
    <div>
      <p className="text-base font-normal bg-grey-700 px-6 py-1 rounded-3xl font-roboto text-grey-100 text-center w-fit mx-auto">
        {title}
      </p>
      {subTitle && (
        <p className="text-xl py-4 font-semibold text-center text-grey-400">
          {subTitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
