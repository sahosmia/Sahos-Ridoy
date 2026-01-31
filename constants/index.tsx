import EDashPortfolio from "../public/images/portfolio/Edash.png";
import OrganicPortfolio from "../public/images/portfolio/organic.png";
import PortfolioNirapad from "../public/images/portfolio/nirapad.png";
import ConstructionPortfolio from "../public/images/portfolio/construction.png";
import PersonalPortfolio from "../public/images/portfolio/personal.png";
import FigmaToReactPortfolio from "../public/images/portfolio/easexpence.png";
import LoginPortfolio from "../public/images/portfolio/login.png";
import LonesomLabsPortfolio from "../public/images/portfolio/lonesomelabs.png";
import { ImPhone } from "react-icons/im";

export const menus = [
  {
    title: "Home",
    link: "/",
  },

  {
    title: "Portfolios",
    link: "/portfolios",
  },
  {
    title: "Posts",
    link: "/posts",
  },
];

import {
  FaBullseye,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMap,
  FaRegHeart,
  FaRegSmile,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaRegSmileBeam } from "react-icons/fa";

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

import { TfiPaintBucket } from "react-icons/tfi";
import { BiCodeAlt } from "react-icons/bi";
import { PiMonitor } from "react-icons/pi";
import { FaFigma } from "react-icons/fa";
import { GoDatabase } from "react-icons/go";
import { FaRepeat } from "react-icons/fa6";

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

// Data
export const aboutPersonalInfoItems = [
  { title: "Name", value: "Sahos Mia" },
  { title: "Location", value: "Bangladesh" },
  { title: "Phone", value: "01952827301" },
  { title: "Education", value: "Bsc in CSE" },
  { title: "Email", value: "sahosmia.webdev@gmail.com" },
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


export const faqs = [
  {
    question: "What is your web design process?",
    answer:
      "Our web design process begins with a discovery phase to understand your brand, goals, and target audience. We then move to wireframing, design mockups, development, and finally, deployment. We ensure you are involved and informed at every stage.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline for building a website varies depending on the complexity of the project. A simple brochure site might take 2-4 weeks, while a more complex e-commerce site could take 2-3 months. We provide a detailed timeline after the initial consultation.",
  },
  {
    question: "Do you provide website maintenance services?",
    answer:
      "Yes, we offer ongoing website maintenance packages to ensure your site remains secure, up-to-date, and performs optimally. Our services include regular backups, security scans, and content updates.",
  },
];

import HtmlInterviewQuestions from "@/public/images/posts/html-interview-questions.png";

export const posts = [
  {
    title: "Html Interview Questions",
    slug: "html-interview-questions",
    content:
      "<div class='flex flex-col gap-8'><div><h2 class='font-bold pb-2'>What are Semantic and non-semantic tags in HTML?</h2><p>Semantic HTML tags are tags that define the meaning of the content they contain. For example, tags like &lt;header&gt;, &lt;article&gt;, and &lt;footer&gt; are semantic HTML tags. They clearly indicate the role of the content they contain. On the other hand, tags like &lt;div&gt; and &lt;span&gt; are typical examples of non-semantic HTML elements.</p></div><div><h2 class='font-bold pb-2'>What are empty tags in HTML?</h2><p>An empty element is a component that doesn't have any embedded elements or text elements. Empty tags contain only the opening tag but they perform some action in the webpage. For example, &lt;br&gt; tag is an empty tag.</p></div><div><h2 class='font-bold pb-2'>What will happen if we don't pass doctype?</h2><p>If you don't declare the doctype, browsers can interpret the document as something else other than HTML and switch into quirks mode, which is, basically, a mode for documents with no doctype declaration. There can be a lot of quirks in the quirks mode; it can pretty much mess up how your document appears on the screen!</p></div><div><h2 class='font-bold pb-2'>What are the differences between &lt;div&gt; and &lt;span&gt; elements in HTML?</h2><p>Span and div are both generic HTML elements that group together related parts of a web page. However, they serve different functions. A div element is used for block-level organization and styling of page elements, whereas a span element is used for inline organization and styling.</p></div><div><h2 class='font-bold pb-2'>Name any 5 Tags which are include in HTML5 and its application</h2><ul><li>&lt;article&gt;</li><li>&lt;nav&gt;</li><li>&lt;figure&gt;</li><li>&lt;aside&gt;</li><li>&lt;section&gt;</li></ul></div></div>",
    thumbnail: HtmlInterviewQuestions,
    showStatus: true,
  },
];
