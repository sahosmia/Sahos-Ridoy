import { TfiPaintBucket } from "react-icons/tfi";
import { PiMonitor } from "react-icons/pi";
import { GoDatabase } from "react-icons/go";
import { BiCodeAlt } from "react-icons/bi";

import {
  FaRegSmile,
  FaEnvelope,
  FaRegSmileBeam,
  FaRegClock,
  FaFigma,
} from "react-icons/fa";

import {
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaMap,
  FaRepeat,
  FaRegHeart,
  FaBullseye,
} from "react-icons/fa6";

import { ImPhone } from "react-icons/im";

import EDashPortfolio from "@/public/images/portfolio/Edash.png";
import OrganicPortfolio from "@/public/images/portfolio/organic.png";
import PortfolioNirapad from "@/public/images/portfolio/nirapad.png";
import ConstructionPortfolio from "@/public/images/portfolio/construction.png";
import PersonalPortfolio from "@/public/images/portfolio/personal.png";
import FigmaToReactPortfolio from "@/public/images/portfolio/easexpence.png";
import LoginPortfolio from "@/public/images/portfolio/login.png";
import LonesomLabsPortfolio from "@/public/images/portfolio/lonesomelabs.png";

export const menus = [
  {
    title: "Home",
    link: "/",
  },

  {
    title: "Protfolio",
    link: "/portfolio",
  },
];

export const targets = [
  {
    icon: <FaBullseye />,
    title: "Pixcel Perfect",
    content:
      "You will get pixcel perfect website such as figma design using tailwind css or Bootstrap",
  },
  {
    icon: <FaRegClock />,
    title: "Fast Delivery",
    content:
      "Time is valueable tools for working. If you give me proper time to build your dream project, I could build an awesome project ",
  },
  {
    icon: <FaRegSmileBeam />,
    title: "Satisfaction",
    content:
      "I will try to give my best for you dream project. I think that project is valueless if I could not make happy my client",
  },
];

// Service
export const services = [
  {
    icon: <TfiPaintBucket />,
    title: "Web Design",
    description:
      "I am expert in Html, Css, Bootstrap, Tailwind, React Js, Vue Js, Next Js ",
  },
  {
    icon: <BiCodeAlt />,
    title: "Web Development",
    description:
      "Web development: Designing, coding, and maintaining websites for optimal online functionality.",
  },
  {
    icon: <PiMonitor />,
    title: "Single Page Application",
    description:
      "SPA: Updates content dynamically, avoids full page reloads for smoother browsing.",
  },
  {
    icon: <FaFigma />,
    title: "Figma Design",
    description:
      "Creating designs in Figma involves wireframing, prototyping, and collaborative editing.",
  },
  {
    icon: <GoDatabase />,
    title: "Rest Api",
    description:
      "REST API: Web service architecture for communication between client and server.",
  },
];

export const skills = [
  { title: "Javascript", per: "70%" },
  { title: "React", per: "85%" },
  { title: "Vue Js", per: "80%" },
  { title: "Next Js", per: "70%" },
  { title: "Php", per: "80%" },
  { title: "Laravel", per: "85%" },
  { title: "Tailwind", per: "90%" },
];

export const aboutPersonalInfoItems = [
  { title: "Name", value: "Sahos Mia" },
  { title: "Location", value: "Bangladesh" },
  { title: "Phone", value: "01952827301" },
  { title: "Education", value: "Bsc in CSE" },
  { title: "Email", value: "sahosmia.webdev@gmail.com" },
  // { title: "Freelance", value: "Available" },
];

export const portfolios = [
  {
    title: "Bd Nirapd",
    slug: "bd-nirapad",
    description:
      "Send Money Safely to Your Loved Ones We help you send money safely to your loved ones. We are committed to delivering your remittances as quickly as possible. We will be engaged in providing your transaction transparency and accountability, Inshallah. ",
    thumbnail: PortfolioNirapad,
    images: [PortfolioNirapad],
    live_url: "https://bdnirapad.com/",
    tecnology: ["Laravel", "JavaScript", "Bootstrap"],
    github: "https://github.com/sahosmia/Bd-Nirapad",
    showStatus: true,
    client: "Contact",
    type: "Development",
    duration: "1.5 Months",
  },

  {
    title: "E-dashboard",
    slug: "e-dashboard-react",
    description:
      "A dashboard is an information management tool that receives data from a linked database to provide data visualizations. It typically offers high-level information in one view that end users can use to answer a single question.",
    thumbnail: EDashPortfolio,
    images: [],
    tecnology: ["React", "Tailwind", "typeScript"],
    live_url: "https://e-dash-sahos.vercel.app/",
    github: "https://github.com/sahosmia/EDash",
    showStatus: true,
    client: "Contact",
    type: "Design",
    duration: "1.5 Months",
  },
  {
    title: "Organic Food Prossesing",
    slug: "organic-food-prossesing-2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    thumbnail: OrganicPortfolio,
    images: [],
    tecnology: ["React", "Tailwind"],
    live_url: "https://organic-food-sahos.vercel.app",
    github: "https://github.com/sahosmia/Organic-Food",
    showStatus: true,
    client: "Contact",
    type: "Design",
    duration: "1 Week",
  },

  {
    title: "Construction Website",
    slug: "construction-website-react",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    thumbnail: ConstructionPortfolio,
    images: [],
    tecnology: ["React", "Tailwind"],
    live_url: "https://sahos-mia-construction.netlify.app/",
    github: "https://github.com/sahosmia/Construction-React-Tailwind",
    showStatus: false,
    client: "Contact",
    type: "Design",
    duration: "1 Week",
  },
  {
    title: "Lonesome Labs",
    slug: "lonesome-labs-tailwind",
    description:
      "It was a online marketplace client project for figma to tailwind css.",
    thumbnail: LonesomLabsPortfolio,
    images: [],
    tecnology: ["Tailwind"],
    live_url: "",
    github: "https://github.com/sahosmia/Lonesome-Labs-2nd-version",
    showStatus: true,
    client: "Upwork",
    type: "Design",
    duration: "2 Week",
  },

  {
    title: "Personal Portfolio",
    slug: "personal-website-next",
    description: "It is my perosnal website. I use it for work purpuse",
    thumbnail: PersonalPortfolio,
    images: [],
    tecnology: ["React", "Tailwind", "Next js"],
    live_url: "https://sahosmia.vercel.app/",
    github: "https://github.com/sahosmia/Sahos-Ridoy",
    showStatus: true,
    client: "Contact",
    type: "Design",
    duration: "2 Week",
  },

  {
    title: "Figma to React",
    slug: "figma-to-react-easexpence",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    thumbnail: FigmaToReactPortfolio,
    images: [],
    tecnology: ["React", "Tailwind"],
    live_url: "https://easexpense.vercel.app/",
    github: "https://github.com/sahosmia/Easexpense",
    showStatus: false,
    client: "Upwork",
    type: "Design",
    duration: "3 Days",
  },

  {
    title: "DEB Login Page",
    slug: "deb-login-page",
    description:
      "It is a login page design with figma. It was disigned for Digital Experts in Bangladesh.",
    thumbnail: LoginPortfolio,
    images: [],
    tecnology: ["Figma"],
    live_url:
      "https://www.behance.net/gallery/165236487/Login-Page-Design-with-Figma",
    github: "",
    showStatus: true,
    client: "Contact",
    type: "Figma Design",
    duration: "1 Days",
  },
];

export const why_work_items = [
  {
    icon: <FaRegHeart />,
    title: "Life time Support",
    description: "You will get life time support for your dream project.",
  },
  {
    icon: <FaRegSmile />,
    title: "Good Communication",
    description: "I will try to give 100% for good comminication.",
  },
  {
    icon: <FaRepeat />,
    title: "Regular Update",
    description: "You will know every update on my proggress on your project.",
  },
];

export const contacts = [
  {
    title: "Location",
    val: "Chuadanga, Bangladesh",
    icon: <FaMap />,
    color: "#F75023",
    bg: "#FEDFD7",
  },
  {
    title: "Phone",
    val: "01952827301",
    icon: <ImPhone />,
    color: "#1CBE59",
    bg: "#DDF5E6",
  },
  {
    title: "Email",
    val: "sahosmia.webdev@gmail.com",
    icon: <FaEnvelope />,
    color: "#836AF0",
    bg: "#ECE8FD",
  },
];

export const socials_links = [
  {
    icon: <FaFacebookF />,
    val: "https://www.facebook.com/sahosmia301/",
  },
  {
    icon: <FaLinkedinIn />,
    val: "https://www.linkedin.com/in/sahosmia/",
  },
  { icon: <FaTwitter />, val: "https://twitter.com/sahosmia" },
  {
    icon: <FaInstagram />,
    val: "https://www.instagram.com/sahosmia/",
  },
  { icon: <FaYoutube />, val: "https://www.youtube.com/@SahosMia" },
];
