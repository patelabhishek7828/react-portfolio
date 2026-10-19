// --------------------------------------- Project List
import cars360logo from '../assets/cars360logo.png';
import reactcrudlogo from '../assets/reactcrudlogo.png';
import portfoliologo from '../assets/portfoliologo.png';
import curieAiCover from '../assets/curie-logo.png';
import salesserCover from '../assets/saleseer-logo.jpg';
import { SiOpenai } from 'react-icons/si';
import { FiSun } from 'react-icons/fi';
export const ProjectList = [
  {
    img: curieAiCover,
    category: "Enterprise AI workspace",
    brand: "curie",
    title: "Curie_Ai",
    description:
      "A private AI workspace for Healthark Insights, bringing internal knowledge search, document generation, and data visualization into one conversational experience. Permission-based tools help teams streamline research, HR, clinical, and finance workflows.",
    tech_stack: ["React", "Vite", "FastAPI", "Firebase", "Langfuse", "Docker"],
    github_url: "",
    demo_url: "https://curie.healthark.ai/",
  },
  {
    img: salesserCover,
    category: "Healthcare data pricing",
    brand: "saleseer",
    title: "Saleseer Pricing Engine",
    description:
      "A centralized healthcare data pricing platform that replaces a legacy desktop tool. Teams configure versioned pricing rules, create quotes, and manage approvals through secure role-based workflows, with Azure VM pricing scripts and a complete audit trail.",
    tech_stack: ["React", "Vite", "FastAPI", "PostgreSQL", "Azure VM"],
    github_url: "",
    demo_url: "https://app.saleseerpricingtool.com/",
  },
  {
    img: cars360logo,
    title: "CARS360 App",
    description:
      "Cars 360 is a cross-platform app where users piece together the ideal car purchase experience.",
    tech_stack: ["React Native", "Firebase", "Laravel"],
    github_url: "",
    demo_url: "https://play.google.com/store/apps/details?id=co.cars360",
  },
  {
    img: reactcrudlogo,
    title: "Welcome to My CRUD Application",
    description:
      "A Crud react web application where users can create, read, update and delete.",
    tech_stack: ["React", "Axios"],
    github_url: "",
    demo_url: "https://reactfullstackcrud.netlify.app/",
  },
  {
    img: portfoliologo,
    title: "Showcasing My Work",
    description:
      "Check out my React-based web and mobile app projects, showcasing my coding skills and creativity.",
    tech_stack: ["React", "JSX"],
    github_url: "",
    demo_url: "https://react-portfolio-abhishek.netlify.app/",
  },
];

// --------------------------------------- Skills

export const stackList = [
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg",
    name: "Vite",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    name: "Python",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg",
    name: "FastAPI",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
    name: "PostgreSQL",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
    name: "Docker",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg",
    name: "Azure",
  },
  {
    icon: SiOpenai,
    color: "#10a37f",
    name: "ChatGPT",
  },
  {
    icon: FiSun,
    color: "#d97757",
    name: "Claude",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    name: "HTML",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    name: "CSS",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    name: "JavaScript",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    name: "ReactJS",
  },
  // {
  //   img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
  //   name: "NextJs",
  // },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    name: "Typescript",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    name: "React Native",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
    name: "Git",
  },
  // {
  //   img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
  //   name: "NodeJS",
  // },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg",
    name: "Firebase",
  },
  // {
  //   img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
  //   name: "MongoDB",
  // },
  // {
  //   img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
  //   name: "Python",
  // },
  // {
  //   img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg",
  //   name: "Flask",
  // },
  // {
  //   img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
  //   name: "C",
  // },
  // {
  //   img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
  //   name: "Java",
  // },
  // {
  //   img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
  //   name: "MySQL",
  // },
  // {
  //   img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
  //   name: "Bootstrap",
  // },
  // {
  //   img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg",
  //   name: "Material UI",
  // },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
    name: "Figma",
  },
  // {
  //   img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg",
  //   name: "TailwindCSS",
  // },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
    name: "VS Code",
  },
];
