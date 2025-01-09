import {
  BannerType,
  ContactType,
  HeaderType,
  ProjectsSpecificationType,
  ProjectsType,
  SkillsType,
} from "./types/types";

export const header: HeaderType = {
  logo_image:
    "https://ik.imagekit.io/metodijgj99/mgj.png?updatedAt=1703169735732",
  logo_name: "gjorgichkov",
  nav_links: [
    {
      title: "home",
      href: "#home",
    },
    {
      title: "projects",
      href: "#projects",
    },
    {
      title: "skills",
      href: "#skills",
    },
    {
      title: "contact",
      href: "#contact",
    },
  ],
};

export const banner: BannerType = {
  who_am_i: "Hello, I am",
  name: "Metodij Gjorgichkov",
  front_end: "Full Stack Developer",
  contact: "Contact Info",
  contactLinkTo: "#contact",
  image:
    "https://ik.imagekit.io/metodijgj99/metodij.png?updatedAt=1702249540999",
  passionate_frond_end: "passionate full stack developer",
};

export const project_type: ProjectsType = {
  title: "Projects",
  project_type: {
    all: "All",
    nextjs: "Next JS",
    reactjs: "React JS",
    javascript: "Javascript",
    bootstrap: "Bootstrap",
    sass: "SASS",
  },
};

export const project_specifications: ProjectsSpecificationType[] = [
  {
    id: 1,
    category: "nextJS",
    image: "/images/cards-images/myPortfolio.png",
    name: "My Portfolio",
    desc: "fully responsive portfolio website created with Next JS and Typescript",
    linkGithub: "https://github.com/Metodij-Gjorgichkov/myPortfolio",
  },
  {
    id: 2,
    category: "nextJS",
    image: "/images/cards-images/nextjs02.png",
    name: "E-commerce",
    desc: "fully responsive e-commerce website created with Next JS and Typescript",
    linkGithub:
      "https://github.com/Metodij-Gjorgichkov/challenges/tree/Mentorship-NextJS-01",
  },
  {
    id: 3,
    category: "nextJS",
    image: "/images/cards-images/nextjs03.png",
    name: "E-commerce",
    desc: "mobile responsive e-commerce website created with Next JS and Typescript",
    linkGithub:
      "https://github.com/Metodij-Gjorgichkov/myProjects/tree/project-03/igralishte-project",
  },
  {
    id: 4,
    category: "nextJS",
    image: "/images/cards-images/next01.png",
    name: "E-commerce",
    desc: "fully responsive restaurant website created with Next JS and Typescript",
    linkGithub:
      "https://github.com/Metodij-Gjorgichkov/challenges/tree/Mentorship-NextJS-01",
  },
  {
    id: 5,
    category: "reactJS",
    image: "/images/cards-images/react01.png",
    name: "Simple page",
    desc: "fully responsive website created with React JS and Typescript",
    linkTo: "https://metodij-gjorgichkov-react-01.netlify.app",
    linkGithub:
      "https://github.com/Metodij-Gjorgichkov/challenges/tree/Challenge-React-01",
  },
  {
    id: 6,
    category: "reactJS",
    image: "/images/cards-images/react02.png",
    name: "Bikes e-commerce",
    desc: "fully responsive website created with React JS and Typescript",
    linkTo: "https://metodij-gjorgichkov-react-02.netlify.app",
    linkGithub:
      "https://github.com/Metodij-Gjorgichkov/challenges/tree/Challenge-React-02",
  },
  {
    id: 7,
    category: "reactJS",
    image: "/images/cards-images/react03.png",
    name: "Music App",
    desc: "mobile responsive music website created with React JS and Typescript",
    linkTo: "https://metodij-gjorgichkov-react-03.netlify.app",
    linkGithub:
      "https://github.com/Metodij-Gjorgichkov/challenges/tree/Challenge-React-03",
  },
  {
    id: 8,
    category: "reactJS",
    image: "/images/cards-images/react04.png",
    name: "Restaurant App",
    desc: "fully responsive restaurant website created with React JS and Typescript",
    linkTo: "https://metodij-gjorgichkov-react-04.netlify.app",
    linkGithub:
      "https://github.com/Metodij-Gjorgichkov/challenges/tree/Challenge-React-04",
  },
  {
    id: 9,
    category: "bootstrap",
    image: "/images/cards-images/bootstrap08.png",
    name: "Gloozom",
    desc: "fully responsive website created with Bootstrap",
    linkTo: "https://metodij-gjorgichkov-bootstrap-06.netlify.app",
    linkGithub:
      "https://github.com/Metodij-Gjorgichkov/challenges/tree/Challenge-Bootstrap-06",
  },
  {
    id: 10,
    category: "bootstrap",
    image: "/images/cards-images/bootstrap07.png",
    name: "Blogger",
    desc: "fully responsive website created with Bootstrap",
    linkTo: "https://metodij-gjorgichkov-bootstrap-05.netlify.app",
    linkGithub:
      "https://github.com/Metodij-Gjorgichkov/challenges/tree/Challenge-Bootstrap-05",
  },
  {
    id: 11,
    category: "javascript",
    image: "/images/cards-images/javascript01.png",
    name: "Brainster Labs",
    desc: "fully responsive website created with Javascript and Bootstrap",
    linkTo: "https://metodij-gjorgichkov-brainster-labs.netlify.app/",
    linkGithub:
      "https://github.com/Metodij-Gjorgichkov/myProjects/tree/project-01/01/Design",
  },
  {
    id: 12,
    category: "javascript",
    image: "/images/cards-images/javascript03.png",
    name: "Keyboard",
    desc: "desktop website created with Javascript",
    linkTo: "https://metodij-gjorgichkov-jquery.netlify.app/",
    linkGithub:
      "https://github.com/Metodij-Gjorgichkov/challenges/tree/Challenge-JavaScript-Keyboard-11/11%20-%20Challenge%20-%20JavaScript",
  },
  {
    id: 13,
    category: "javascript",
    image: "/images/cards-images/javascript02.png",
    name: "Street Artists App",
    desc: "mobile website about Street Artists and paitings created with Javascript",
    linkTo: "https://metodij-gjorgichkov-artists-project.netlify.app",
    linkGithub:
      "https://github.com/Metodij-Gjorgichkov/myProjects/tree/project-02/project-02",
  },
  {
    id: 14,
    category: "sass",
    image: "/images/cards-images/sass04.png",
    name: "Magnetic",
    desc: "fully responsive website created with SASS",
    linkTo: "https://metodij-gjorgichkov-sass-03.netlify.app/",
    linkGithub:
      "https://github.com/Metodij-Gjorgichkov/challenges/tree/Challenge-SCSS-03/challenge%2004%20solution",
  },
  {
    id: 15,
    category: "reactJS",
    image: "/images/cards-images/reactExercise1.png",
    name: "Simple page",
    desc: "desktop responsive exercise about adding cards through form created with React JS and Typescript",
    linkTo: "https://metodij-gjorgichkov-react-mentorship1.netlify.app/",
    linkGithub:
      "https://github.com/Metodij-Gjorgichkov/challenges/tree/Mentorship-ReactJS-O1",
  },
  {
    id: 16,
    category: "sass",
    image: "/images/cards-images/sass05.png",
    name: "Simple Page",
    desc: "fully responsive website created with SASS",
    linkTo: "https://metodij-gjorgichkov-sass-04.netlify.app/",
    linkGithub:
      "https://github.com/Metodij-Gjorgichkov/challenges/tree/Challenge-SCSS-04",
  },
  {
    id: 17,
    category: "javascript",
    image: "/images/cards-images/javascript04.png",
    name: "Book Exercise",
    desc: "desktop exercise about adding books to a table created with Javascript",
    linkTo: "https://metodij-gjorgichkov-javascript-04.netlify.app/",
    linkGithub:
      "https://github.com/Metodij-Gjorgichkov/challenges/tree/Challenge-JavaScript-Objects-12",
  },
  {
    id: 18,
    category: "nextJS",
    image: "/images/cards-images/next05.png",
    name: "Architecture website",
    desc: "full responsive architecture website about designs and making appointments created with Next JS and Typescript",
    linkGithub:
      "https://github.com/Metodij-Gjorgichkov/challenges/tree/Mentorship-NextJS-02",
  },
  {
    id: 19,
    category: "nextJS",
    image: "/images/cards-images/next06.png",
    name: "E-commerce website",
    desc: "mobile responsive e-commerce website about handmade jewerly created with Next JS and Typescript",
    linkGithub:
      "https://github.com/Metodij-Gjorgichkov/myProjects/tree/hackaton-marinov",
  },
  {
    id: 20,
    category: "reactJS",
    image: "/images/cards-images/reactEscape.png",
    name: "Escape Caffe Menu",
    desc: "mobile responsive menu created with React JS",
    linkTo: "https://escapecafferadovish.com/",
    linkGithub:
      "https://github.com/Metodij-Gjorgichkov/escape-menu",
  },
  {
    id: 21,
    category: "nextJS",
    image: "/images/cards-images/next07.png",
    name: "Hackaton Breathe",
    desc: "still working on the mobile app about tracking the air polution created with Next JS and Typescript",
    linkGithub:
      "https://github.com/Metodij-Gjorgichkov/myProjects/tree/hackaton-breathemk",
  },
  {
    id: 22,
    category: "nextJS",
    image: "/images/cards-images/nextJsKrikApp.png",
    name: "Krik Website",
    desc: "mobile and desktop responsive website with Next JS and Typescript",
    linkGithub:
      "https://github.com/Metodij-Gjorgichkov/krik-project",
  },
];

export const skills: SkillsType = {
  title: "Skills",
  skills_type: [
    {
      image:
        "https://ik.imagekit.io/metodijgj99/reactjs.png?updatedAt=1702243006311",
      title: "React JS",
    },
    {
      image:
        "https://ik.imagekit.io/metodijgj99/typescript.png?updatedAt=1702243007656",
      title: "Typescript",
    },
    {
      image:
        "https://ik.imagekit.io/metodijgj99/css3.png?updatedAt=1702243006281",
      title: "CSS3",
    },
    {
      image:
        "https://ik.imagekit.io/metodijgj99/html5.png?updatedAt=1702243006319",
      title: "HTML5",
    },
    {
      image:
        "https://ik.imagekit.io/metodijgj99/javascript.png?updatedAt=1702243006354",
      title: "Javascript",
    },
    {
      image:
        "https://ik.imagekit.io/metodijgj99/tailwind.png?updatedAt=1702243006314",
      title: "Tailwind",
    },
    {
      image:
        "https://ik.imagekit.io/metodijgj99/github.png?updatedAt=1702243006294",
      title: "Github",
    },
    {
      image:
        "https://ik.imagekit.io/metodijgj99/gitlab.png?updatedAt=1702243006324",
      title: "Gitlab",
    },
    {
      image:
        "https://ik.imagekit.io/metodijgj99/bootstrap.png?updatedAt=1702243006311",
      title: "Bootstrap",
    },
    {
      image:
        "https://ik.imagekit.io/metodijgj99/git.png?updatedAt=1702243006311",
      title: "Git",
    },
    {
      image:
        "https://ik.imagekit.io/metodijgj99/sass.png?updatedAt=1702472073132",
      title: "Sass",
    },
    {
      image:
        "https://ik.imagekit.io/metodijgj99/figma.png?updatedAt=1702472073142",
      title: "Figma",
    },
    {
      image:
        "https://ik.imagekit.io/metodijgj99/mysql.png?updatedAt=1708616433120",
      title: "MySQL",
    },
    {
      image:
        "https://ik.imagekit.io/metodijgj99/php.png?updatedAt=1708616433088",
      title: "PHP",
    },
  ],
};
export const contact: ContactType = {
  title: "Contact me",
  header: "Let's work together",
  info: [
    {
      name: "metodijgjorgichkov@yahoo.com",
      image: "/icons/email.png",
      linkTo: "mailto:metodijgjorgichkov@yahoo.com",
    },
    {
      name: "Based in Macedonia",
      image: "/icons/location.png",
    },
    {
      name: "Linkedin profile",
      image: "/icons/linkedin.png",
      linkTo: "https://www.linkedin.com/in/metodij-gjorgichkov-1074b9254",
    },
    {
      name: "Github profile",
      image: "/icons/github1.png",
      linkTo: "https://github.com/Metodij-Gjorgichkov",
    },
  ],
};
