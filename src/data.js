//  icons
import { FiLinkedin, FiFacebook, FiGithub, FiMail, FiMapPin } from "react-icons/fi";

//project images
import buysellimg1 from "./assets/img/projects/buy-and-sell.png";
import yourmeals1 from "./assets/img/projects/your-meals.png";
import herocoders1 from "./assets/img/projects/hero-coders.png";
import quizstation1 from "./assets/img/projects/quiz-station.png";
import topPlayer1 from "./assets/img/projects/top-player.png";
import speedtype from "./assets/img/projects/speed-type7.png";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/nodejs.png";
import SkillImg6 from "./assets/img/skills/expressjs.png";
import SkillImg7 from "./assets/img/skills/mongodb.png";
import SkillImg8 from "./assets/img/skills/firebase.png";
import SkillImg9 from "./assets/img/skills/github.png";
import SkillImg10 from "./assets/img/skills/figma.png";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/nazmul-sujon/",
  },
  {
    icon: <FiFacebook />,
    href: "https://www.facebook.com/nazmulsujon404",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/nazmulsujon",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: buysellimg1,
    name: "Buy & Sell",
    subtitle: "Product resale website",
    description: "A full-stack responsive product resale website. Different Dashboard for Admin, Seller, and Buyer.",
    technolozy:
      "React | React-router-dom | TailWind CSS | DaisiUI | Node.js | Express.js | MongoDb | Firebase | Varcel | React Icons | React-Hot-Toast | React-Photo-View-package | imgBB | dateFns etc",
    live_site: "https://buy-and-sell-3568b.firebaseapp.com/",
    github: "https://github.com/nazmul68/buy-sell-client",
  },
  {
    id: "2",
    image: yourmeals1,
    name: "Your Meals",
    subtitle: "Food service & review website",
    description:
      "A full-stack responsive food service website. Users can request a service, also leave a review about food.",
    technolozy:
      "React | React-router-dom | TailWind CSS | DaisiUI | Node.js | Express.js | MongoDb | Firebase | Varcel | React Icons | React-Hot-Toast | Sweet-alert2 | react-reveal | React-Photo-View-package | imgbb |  react-helmet etc",
    live_site: "https://your-meals-2d0c3.firebaseapp.com/",
    github: "https://github.com/nazmul68/your-meals-client",
  },
  {
    id: "3",
    image: herocoders1,
    name: "Hero Coders",
    subtitle: "Learning platform website",
    description:
      "Hero Coders is a Learning application & whereas users can get various online courses also take premium access of any course.",
    technolozy:
      "React | React-router-dom | React Bootstrap | Firebase | React Icons |  React-Photo-View-package | imgBB | React pdf package etc",
    live_site: "https://hero-coders-auth.firebaseapp.com/",
    github: "https://github.com/nazmul68/hero-coders-client",
  },
  {
    id: "4",
    image: quizstation1,
    name: "Quiz Station",
    subtitle: "Programming quiz practice platform",
    description:
      "Quiz Station is a quiz practice application whereas users can practice various Programming topics also get quiz result instantly.",
    technolozy: "React | React-router-dom | React Bootstrap | Hero Icons | React Icons | sweetAlert2 etc",
    live_site: "https://quiz-station09.netlify.app/",
    github: "https://github.com/nazmulsujon/quiz-station",
  },
  {
    id: "5",
    image: topPlayer1,
    name: "Top Player",
    subtitle: "Players deal platform",
    description:
      "Top Player is a fully responsive player deal website where users can deal with maximum five players, this website is basically made with raw javascript code.",
    technolozy: "HTMl | CSS | Bootstrap | Raw javascript | Font Awesome etc",
    live_site: "https://top-player05.netlify.app/",
    github: "https://github.com/nazmulsujon/top-player",
  },
  {
    id: "6",
    image: speedtype,
    name: "Speed Typer",
    subtitle: "Typing speed test application",
    description:
      "Speed Typer is a typing test application where users can test their typing speed & see their mistake results as well. This application is basically made by raw javascript code.",
    technolozy: "HTMl | CSS | Bootstrap | Raw javascript | Font Awesome etc",
    live_site: "https://top-player05.netlify.app/",
    github: "https://github.com/nazmulsujon/top-player",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
  {
    image: SkillImg9,
  },
  {
    image: SkillImg10,
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at sujon686500@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Dhaka, Bangladesh",
    description: "Serving clients worldwide",
  },
];
