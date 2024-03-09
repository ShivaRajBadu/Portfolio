import FacebookIcon from "@/components/Icons/FacebookIcon";
import dark from "../../public/icons/dark.png";
import light from "../../public/icons/light.png";

export const LOGOTEXT = "BADU";
export const MainTitle = "Hi,I'm <span style='color: #ff5c00'>Shiva</span>";
export const MainDescription =
  "I'm Frontend Developer (ReactJS & VueJS) with a focus of creating attractive, interactive and user-friendly web applications. Each time it feels good to put life into design through responsiveness and interactivity.";

export const NAV_LINK = [
  {
    id: 2,
    label: "Work",
    link: "#work",
  },
  {
    id: 3,
    label: "Skills",
    link: "#skills",
  },
  {
    id: 4,
    label: "Experience",
    link: "#experience",
  },
  {
    id: 5,
    label: "Contact",
    link: "#contact",
  },
];
export const SOCIAL_LINKS = [
  {
    id: 1,
    label: "github",
    link: "https://github.com/ShivaRajBadu",
  },
  {
    id: 2,
    label: "linkedin",
    link: "https://www.linkedin.com/in/shiva-raj-badu-082b33188/",
  },
  {
    id: 3,
    label: "facebook",
    link: "https://facebook.com/shivraj.badu.39",
  },
];

export const SKILL = [
  {
    id: 0,
    name: "Javascript",
    link: "/skill/javascript.png",
  },
  {
    id: 1,
    name: "React.js",
    link: "/skill/react.svg",
  },
  {
    id: 2,
    name: "Vue.js",
    link: "/skill/vue-js.png",
  },
  {
    id: 3,
    name: "Next.js",
    link: "/skill/nextjs.svg",
  },
  {
    id: 4,
    name: "Nuxt.js",
    link: "/skill/nuxt-js.png",
  },
  {
    id: 5,
    name: "Node.js",
    link: "/skill/nodejs.png",
  },
  {
    id: 6,
    name: "Express.js",
    link: "/skill/expressjs.svg",
  },
  {
    id: 7,
    name: "Flutter",
    link: "/skill/flutter.png",
  },

  {
    id: 8,
    name: "HTML",
    link: "/skill/html.png",
  },
  {
    id: 9,
    name: "CSS",
    link: "/skill/css.png",
  },
  {
    id: 10,
    name: "TailwindCSS",
    link: "/skill/tailwind-css.png",
  },
  {
    id: 11,
    name: "Bootstrap",
    link: "/skill/bootstrap.png",
  },
  {
    id: 12,
    name: "Git",
    link: "/skill/git.png",
  },
  {
    id: 13,
    name: "Figma",
    link: "/skill/figma.png",
  },
];

export const ExperienceData = [
  {
    id: 1,
    companyName: "Kinu Tech Pvt. Ltd.",
    jobType: "On-site",
    position: "Frontend | Flutter Developer",
    duration: "Feb 2023 - Jan 2024",
    description: [
      "Development of a start-up company product(websites) by implementing JavaScript, HTML, CSS, and Vue.js (Nuxt.js) coding techniques.",
      "Enhanced company websites kinu.com.np and byaparlink.com.np through the utilization of innovative front-end development strategies.",
      "Played a crucial role in the development of an e-commerce mobile app(Kinu shopping app and byaparlink) utilizing Flutter technology.",
    ],
    location: "Kathmandu, Nepal",
  },
  {
    id: 2,
    companyName: "Vertaa Food OY",
    position: "Frontend Developer",
    duration: "Jun 2022 - Jan 2023",
    jobType: "Remote",
    description: [
      "Developed responsive and user-friendly websites using HTML, CSS, and JavaScript to improve overall user experience.",
      "Collaborated with the design team to implement interactive features and animations.",
      "Integrated APIs and third-party services to enhance website functionality and streamline processes.",
    ],
    location: "jyväskylä, FInland",
  },
];

export const WebProjects = [
  {
    id: 1,
    projectName: "Height Comparison",
    projectImage: "/projects/height_comparison.png",
    isCompleted: true,
    liveLink: "https://www.heightcomparison.com/",
    usedTech: ["VueJS", "NuxtJS", "VueX"],
    description:
      "Redesign development of home page to make clean user interface and responsive design which allow users to compare the heights of people and objects. You can input heights in feet or centimeters, and the tool will display them side-by-side for comparison. And development of it's  new feature, height calculator which allow users to predict the child height based on parent detail.",
  },
  {
    id: 2,
    projectName: "Vehicel Rental",
    projectImage: "/projects/vehicel_rental.png",
    liveLink: "https://vehicle-rental-orpin.vercel.app/",
    usedTech: ["NextJs", "ReactJS", "TailwindCSS"],
    isCompleted: false,
    description:
      "Frontend developement of this website which allow user to book a car. It also allow user to search for cars at their ",
  },
  {
    id: 3,
    projectName: "Unscrambler",
    projectImage: "/projects/unscrambler.png",
    liveLink: "https://unscrambler.org/",
    usedTech: ["HTML", "CSS", "JavaScript"],
    description:
      "Frontend developement of this website which  Unscrambler any word into multiple valid words of different length.",
  },
  {
    id: 4,
    projectName: "Ghar link",
    projectImage: "/projects/gharlink.png",
    isCompleted: true,
    liveLink: "",
    usedTech: ["VueJS", "NuxtJS", "TailwindCSS"],
    description:
      "This e-commerce website, showcases a variety of products and services, including skilled labor, tools and machinery, and second-hand goods. It also allows users to rent or buy/sell houses and land. ",
  },

  {
    id: 5,
    projectName: "Byalarlink - landing page",
    projectImage: "/projects/byarparlink.png",
    liveLink: "https://byaparlink.com/",
    usedTech: ["HTML", "CSS", "TailwindCSS", "JavaScript"],
    description:
      "Landing page for e-commerce mobile application which showcase the feature of mobile app and give the overview of app.",
  },
  {
    id: 6,
    projectName: "Kinu shopping app - landing page",
    projectImage: "/projects/kinu.png",
    liveLink: "https://kinu.com.np/",
    usedTech: ["Nuxtjs", "VueJS", "TailwindCSS"],
    description:
      "Landing page for e-commerce mobile application which showcase the feature of mobile app and give the overview of app.It also have share feature of product from app  and product description page ",
  },
  {
    id: 7,
    projectName: "Fly over Water",
    projectImage: "/projects/fly-over-water.png",
    liveLink: "https://fly-over-water.vercel.app/",
    usedTech: ["NextJS", "ReactJS", "TailwindCSS"],
    description: "Clone website for Learning of Nextjs, Reactjs, Tailwindcss.",
  },
  {
    id: 8,
    projectName: "Medium like blog website",
    projectImage: "/projects/medium.png",
    liveLink: " https://like-medium.vercel.app/",
    usedTech: ["NextJS", "ReactJS", "TailwindCSS", "Sanity-CMS"],
    description:
      "Medium like website which allow posting of blog.Also allow user to like comment on the post.",
  },
  {
    id: 9,
    projectName: "Travel website",
    projectImage: "/projects/travel.png",
    liveLink: ": https://travel-website-wheat.vercel.app/",
    usedTech: ["NextJS", "ReactJS", "CSS", "Mapbox"],
    description:
      "Medium like website which allow posting of blog.Also allow user to like comment on the post.",
  },
  {
    id: 10,
    projectName: "China Town - Restaurant Website",
    projectImage: "/projects/china_town.png",
    liveLink: " https://chinatowntest.netlify.app/",
    usedTech: ["HTML", "Standalone TailwindCSS", "CSS", "JavaScript"],
    description:
      "Restaurant webpage design to show restaurant menu, Mobile App, and restaurant features.",
  },
  {
    id: 10,
    projectName: "Shiva Raj Badu- Portfolio",
    projectImage: "/projects/height_comparison.png",
    liveLink: "https://shiva-raj-badu.vercel.app/",
    usedTech: ["NextJS", "ReactJS", "TailwindCSS"],
    description: "Personal Portfolio",
  },
  {
    id: 11,
    projectName: "Sitemap generator",
    projectImage: "/projects/sitemap.png",
    usedTech: ["NodeJs", "ExpressJs"],
    description:
      "Sitemap generator as name suggest is a tool which generate sitemap for website.",
  },
];
export const MobileProject = [
  {
    id: 1,
    projectName: "Kinu shopping app",
    projectImage: "/projects/kinu/screen_13.jpg",
    projectImages: [
      "/projects/kinu/screen_1.jpg",
      "/projects/kinu/screen_2.jpg",
      "/projects/kinu/screen_3.jpg",
      "/projects/kinu/screen_4.jpg",
      "/projects/kinu/screen_5.jpg",
      "/projects/kinu/screen_6.jpg",
      "/projects/kinu/screen_7.jpg",
      "/projects/kinu/screen_8.jpg",
      "/projects/kinu/screen_9.jpg",
      "/projects/kinu/screen_10.jpg",
      "/projects/kinu/screen_11.jpg",
      "/projects/kinu/screen_12.jpg",
      "/projects/kinu/screen_13.jpg",
      "/projects/kinu/screen_14.jpg",
    ],
    usedTech: ["Flutter", "Clean Architecture", "flutter_bloc"],
    description:
      "Kinu is the video first e-commerce market place in Nepal. Any one can explore wide range of products through short videos. Kinu makes shopping fun and easy, empowering discovery.",
  },
  {
    id: 2,
    projectName: "Byalarlink App",
    projectImage: "/projects/byaparlink/byaparlink_1.jpeg",
    projectImages: [
      "/projects/byaparlink/byaparlink_1.jpeg",
      "/projects/byaparlink/byaparlink_2.jpeg",
      "/projects/byaparlink/byaparlink_3.jpeg",
      "/projects/byaparlink/byaparlink_4.jpeg",
      "/projects/byaparlink/byaparlink_5.jpeg",
      "/projects/byaparlink/byaparlink_6.jpeg",
    ],
    usedTech: ["Flutter", "Clean Architecture", "Provider"],
    description:
      "Byalarlink is a e-commerce app which display the close proximity products and Restaurant details.Also allow user to order product and Food with fast delivery.",
  },
  {
    id: 3,
    projectName: "Insta-wallaper",
    projectImage: "/projects/insta.jpeg",
    projectImages: ["/projects/insta.jpeg"],
    usedTech: ["Flutter"],
    description:
      "Insta-wallaper is a mobile which allow user to set mobile wallpaper directly from instagram photos.",
  },
];

export { dark, light };
