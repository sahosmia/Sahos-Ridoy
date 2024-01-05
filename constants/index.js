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

import Portfolio1 from "@/public/images/portfolio/protfolio-1.png";
import Portfolio2 from "@/public/images/portfolio/protfolio-2.png";

export const menus = [
  {
    title: "Home",
    link: "/",
  },

  {
    title: "Protfolio",
    link: "portfolios",
  },
];

export const targets = [
  {
    icon: <FaBullseye />,
    title: "Pixcel Perfect",
    content:
      "You will get pixcel perfect website such as figma design. I use tailwind css to design website, It you want to design usign other farmwork, Don't worry I know other Farmwork",
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
    //
    icon: <TfiPaintBucket />,
    title: "Web Design",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    icon: <BiCodeAlt />,
    title: "Web Development",
    description:
      "Quaerat consectetur adipisicing elit consequatur fugiat amet? Iure.",
  },
  {
    icon: <PiMonitor />,
    title: "Single Page Application",
    description:
      "Amet consectetur adipisicing elit. Quaerat consequatur amet? Iure.",
  },
  {
    icon: <FaFigma />,
    title: "Figma Design",
    description: "Lorem ipsum dolor sit amet consequatur fugiat amet? Iure.",
  },
  {
    icon: <GoDatabase />,
    title: "Rest Api",
    description:
      "Lorem adipisicing elit. Quaerat consequatur fugiat amet? Iure.",
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
  { title: "Freelance", value: "Available" },
];

export const portfolios = [
  {
    title: "Organic Food Prossesing",
    slug: "organic-food-prossesing",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    thumbnail: Portfolio1,
    images: [Portfolio1, Portfolio2, Portfolio1],
    tecnology: ["React", "Tailwind"],
    live_url: "https://www.sahosmia.netlify.com",
    github: "https://www.github.com/sahosmia",
    showStatus: true,
  },
  {
    title: "Organic Food Prossesing 2",
    slug: "organic-food-prossesing-2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    thumbnail: Portfolio2,
    images: [""],
    tecnology: ["React", "Tailwind"],
    live_url: "www.sahosmia.netlify.com",
    github: "www.github.com/sahosmia",
    showStatus: true,
  },
  {
    title: "Organic Food Prossesing 2",
    slug: "organic-food-prossesing-2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    thumbnail: Portfolio2,
    images: [""],
    tecnology: ["React", "Tailwind"],
    live_url: "www.sahosmia.netlify.com",
    github: "www.github.com/sahosmia",
    showStatus: true,
  },
  {
    title: "Organic Food Prossesing 2",
    slug: "organic-food-prossesing-2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    thumbnail: Portfolio2,
    images: [""],
    tecnology: ["React", "Tailwind"],
    live_url: "www.sahosmia.netlify.com",
    github: "www.github.com/sahosmia",
    showStatus: false,
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
