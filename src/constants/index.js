import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  reactnative,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  mysql,
  ariyahome,
  linkora,
  planora,
  clarifi,
  happytails,
  threejs,
  starbucks,
  tesla,
  shopify,
  meta,
  chat,
  seo,
  time,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Works",
    title: "Works",
  },
  {
    id: "Skills",
    title: "Skills",
  },
   {
    id: "Articles",
    title: "Articles",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front-End Developer",
    icon: mobile,
  },
  {
    title: "Back-End Developer",
    icon: backend,
  },
  {
    title: "Full-Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "React Native",
    icon: reactnative,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
{
  name: "AriyaHome Construction Pvt Ltd",
  description:
    "Full Stack web app built with the MERN stack and Tailwind CSS to streamline client inquiries and service management for construction businesses, providing a faster, cleaner, and more reliable digital workflow.",
  tags: [
    { name: "react", color: "blue-text-gradient" },
    { name: "tailwind", color: "pink-text-gradient" },
    { name: "MERN", color: "green-text-gradient" },
    
  ],
  image: ariyahome, 
  source_code_link: "https://github.com/Devindichathurika03/AriyaHomeFrontend.git",
},
{
  name: "Linkora-A Social Networking Platform",
  description:
    "Full-stack web app built as a university project to showcase student talent and connect students with complementary skills and shared interests, fostering collaboration and opportunities on campus.",
  tags: [
    { name: "nextjs", color: "blue-text-gradient" },
    { name: "tailwind", color: "pink-text-gradient" },
     { name: "express", color: "green-text-gradient" }
  ],
  image: linkora, 
  source_code_link: "https://github.com/ATgayan/Linkora-Frontend.git", // add GitHub repo if available
},
{
  name: "Planora-Event Planning Platform",
  description:
    "Interactive event planning platform where users can plan events step-by-step and explore a curated vendor marketplace, built with a focus on intuitive UI/UX and seamless frontend interactions.",
  tags: [
    { name: "react", color: "blue-text-gradient" },
    { name: "typescript", color: "green-text-gradient" },
    { name: "tailwind", color: "pink-text-gradient" },
  ],
  image: planora, 
  source_code_link: "https://github.com/Devindichathurika03/Planora.git",
},
{
  name: "ClariFi-AI-Powered Decision Companion",
  description:
    "AI-powered web app that helps users make clearer decisions by analyzing situations and providing actionable guidance, reducing stress and saving time.",
  tags: [
    { name: "react", color: "blue-text-gradient" },
    { name: "typescript", color: "green-text-gradient" },
    { name: "tailwind", color: "pink-text-gradient" },
    { name: "nodejs", color: "green-text-gradient" },
    { name: "express", color: "green-text-gradient" },
    { name: "cohere-ai", color: "purple-text-gradient" },
  ],
  image: clarifi, 
  source_code_link: "https://github.com/Devindichathurika03/ClariFi.git",
},
{
  name: "HappyTails",
  description:
    "Modern pet adoption platform connecting adopters, shelters, and pet owners, providing smart filters, detailed profiles, and secure communication to make the adoption process faster and more efficient.",
  tags: [
    { name: "react", color: "blue-text-gradient" },
    { name: "springboot", color: "green-text-gradient" },
    { name: "sql", color: "orange-text-gradient" },
    { name: "figma", color: "blue-text-gradient" },
  ],
  image: happytails, 
  source_code_link: "https://github.com/independent-project-2/HappyTail-Frontend.git", 
 
},
];

const abilities = [
  {
    img: seo,
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    img: chat,
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    img: time,
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

export { services, technologies, experiences, testimonials, projects, abilities };
