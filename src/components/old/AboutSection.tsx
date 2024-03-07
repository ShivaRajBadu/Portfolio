import React from "react";

const AboutSection = () => {
  return (
    <div>
      <h1 className="text-[40px] font-normal text-[color:var(--white)]">
        About <span className="text-[color:var(--text-highlight)]">Me</span>
      </h1>
      <h3 className="text-[48px] font-bold text-[color:var(--white)]">
        I&apos;m someone who finds profound joy in the art of design and coding
      </h3>
      <p className="text-[24px] font-normal text-[color:var(--icon-color)]">
        With an unwavering passion for crafting beautiful and simple creations,
        I pour my heart into every project I undertake. My work is a reflection
        of my dedication to merging aesthetics with user-centered functionality.
        With each design and code, I aim to create solutions that not only look
        pleasing but also make life easier for users. Welcome to my world of
        elegant simplicity, where every line of code and every pixel hold the
        essence of my love for what I do.
      </p>
    </div>
  );
};

export default AboutSection;
