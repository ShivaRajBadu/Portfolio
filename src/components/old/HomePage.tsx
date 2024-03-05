import React from "react";

const HomePage = () => {
  return (
    <div className=" ">
      <h3 className="font-normal text-[40px] text-[color:var(--text-light)] py-2">
        Lets Work{" "}
        <span className="text-[color:var(--text-highlight)] font-semibold">
          Together !
        </span>
      </h3>
      <h2 className=" text-[48px] font-bold text-[color:var(--text-light)] py-2">
        <span className="block">
          Hi From{" "}
          <span className="text-[color:var(--text-highlight)]">SHIVA</span> ,
        </span>
        Front-End Developer and{" "}
        <span className="block">Flutter Developer.</span>
      </h2>
      <p className="text-[24px] font-normal text-[color:var(--icon-color)] py-4">
        As a Frontend Developer, I always love creating attactive, interactive
        and responsive applications. Putting life into the design through
        responseiveness and interactivity is what makes me happy. Here is always
        room for learning and growth, that never stops{" "}
        <span className="text-[color:var(--text-highlight)] font-bold">!</span>{" "}
      </p>
      <div className="flex  gap-16">
        <div>
          <h4 className="text-[color:var(--text-highlight)] font-normal text-[65px]">
            2+
          </h4>
          <p className="text-[20px] font-normal text-[--icon-color]">
            Years of <span className="block">Expericence</span>
          </p>
        </div>
        <div>
          <h4 className="text-[color:var(--text-highlight)] font-normal text-[65px]">
            10+
          </h4>
          <p className="text-[20px] font-normal text-[--icon-color]">
            Projects <span className="block">Completed</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
