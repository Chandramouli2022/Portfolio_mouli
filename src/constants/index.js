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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  api,
  expressjs,
  communication,
  teamwork,
  problemsolving,
  weatherreport,
  todolist,
  musicplayer,
  bws,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "API",
    icon: api,
  },
  {
    name: "Express JS",
    icon: expressjs,
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
    name: "Team work",
    icon: teamwork,
  },
  {
    name: "Communicative",
    icon: communication,
  },
  {
    name: "Problem-solver",
    icon: problemsolving,
  },
];

const experiences = [
  {
    title: "Full Stack Web Developer",
    company_name: "Business Web Solutions",
    icon: bws,
    iconBg: "#383E56",
    date: "May 2022 - June 2022",
    points: [
      "Worked on many different projects of both frontend and backend based upon HTML, CSS, JAVASCRIPT, JQUERY, Bootstrap, React.js, Node.js etc.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Mouli proved me wrong.",
    name: "Shivaram",
    designation: "Software Developer",
    company: "Microsoft",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Mouli does.",
    name: "VSS Neeraj Varma",
    designation: "UI/UX Engineer ",
    company: "Google",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Mouli is a person who develops a web application in an optimized way. Really Great!",
    name: "Nilesh kamble",
    designation: "Frontend Web developer",
    company: "Flipkart",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "Weather Report",
    description:
      "Web-based platform that allows users to search and displays the current weather of the user entered location. Open Weather API provides weather data.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: weatherreport,
    source_code_link: "https://github.com/",
  },
  {
    name: "To Do list",
    description:
      "A web application like a task keeper where the user can enter the tasks that they need to do. Once the task is completed they can also remove them from the list.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: todolist,
    source_code_link: "https://github.com/",
  },
  {
    name: "Melodics",
    description:
      "Melodics is a modern ReactJS music player application. A modern homepage where we can choose a genre to get the top songs. A fully fledged spotify like music player",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: musicplayer,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
