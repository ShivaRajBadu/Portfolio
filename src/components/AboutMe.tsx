import React from "react";
import Wrapper from "./Wrapper";
import SectionTitle from "./SectionTitle";
import MainImage from "./MainImage";

const AboutMe = () => {
  return (
    <div id="about" className="bg-grey-900 py-10 px-4">
      <Wrapper>
        <SectionTitle title="About me" />
        <div className="flex lg:flex-row flex-col justify-center lg:justify-between gap-4 items-start py-16">
          <MainImage
            imgSrc="/profile_2.jpg"
            borderColor="grey-900"
            holdersColor="grey-700"
            showImageBackground={false}
          />
          <div className="w-full  lg:w-[50%]">
            <h1 className="text-2xl md:text-4xl pb-2 font-medium font-inter">
              Want to know? Okay, here you go:
            </h1>
            <p className="py-2 text-base md:text-lg text-grey-400">
              I&apos;m a self-learner and progressive developer who specializes
              mostly in frontend technologies such as ReactJS, VueJS, and
              frameworks like NextJS and NuxtJS. I am passionate about creating
              beautiful and intuitive user interfaces with a focus on
              responsiveness, interactivity, pixel-perfect design, and high
              performance.
            </p>
            <p className="py-2 text-base md:text-lg text-grey-400">
              I began my journey as a developer in 2021 (after Covid). Since
              then, frontend development has always excited me to explore new
              technologies and learn new things. I&apos;ve continued to grow and
              evolve as a developer. Along the way, I first encountered ReactJS
              and NextJS, using which I have built projects. Then, after some
              time helping a friend on his project, I learned VueJS and NuxtJS
              (which was easy to start up, as you know, once you know one
              framework/library, you can easily catch up with another) and built
              projects using them.
            </p>
            <p className="py-2 text-base md:text-lg text-grey-400">
              Last year, with a friend, we wanted to build mobile applications,
              so I learned Flutter and completed interesting projects using
              Flutter, which posed new challenges.
            </p>
            <p className="py-2 text-base md:text-lg text-grey-400">
              Along the way, I have learned and completed projects in frontend
              using NuxtJS & NextJS and mobile development using FLutter.
            </p>
            <p className="py-2  text-base md:text-lg text-grey-400">
              A quick bit about me:
            </p>
            <ul>
              <li>
                B.E in Electronic, Communication and Infromation Engineering
              </li>
            </ul>
            <p className="py-2 text-base md:text-lg text-grey-400">
              Lastly, I&apos;m available for work, so feel free to reach out.
              You can find me on any social media. As my surname is unique, I am
              easy to find 😉.
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default AboutMe;
