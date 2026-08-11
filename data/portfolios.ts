export interface Portfolio {
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  images: string[];
  live_url: string;
  tecnology: string[];
  github: string;
  showStatus: boolean;
  client: string;
  type: string;
  duration: string;
  category: string;
}

export const portfolios: Portfolio[] = [
  {
    title: "Bd Nirapd",
    slug: "bd-nirapad",
    description:
      "Send Money Safely to Your Loved Ones. We help you send money safely to your loved ones with speed, transparency, and top-tier security. Committed to delivering remittances as quickly as possible with complete transactional accountability.",
    thumbnail: "/images/portfolio/nirapad.png",
    images: ["/images/portfolio/nirapad.png"],
    live_url: "https://bdnirapad.com/",
    tecnology: ["Laravel", "JavaScript", "Bootstrap"],
    github: "https://github.com/sahosmia/Bd-Nirapad",
    showStatus: true,
    client: "Contact",
    type: "Development",
    duration: "1.5 Months",
    category: "Web Development",
  },
  {
    title: "E-dashboard",
    slug: "e-dashboard-react",
    description:
      "A modern dashboard information management system designed for data visualizations and administrative tools. Features a high-performance react design with interactive graphs and tables.",
    thumbnail: "/images/portfolio/Edash.png",
    images: [],
    tecnology: ["React", "Tailwind", "typeScript"],
    live_url: "https://e-dash-sahos.vercel.app/",
    github: "https://github.com/sahosmia/EDash",
    showStatus: true,
    client: "Contact",
    type: "Design",
    duration: "1.5 Months",
    category: "Web Development",
  },
  {
    title: "Organic Food Processing",
    slug: "organic-food-processing-2",
    description: "A fast, fully responsive landing and product page showcasing organic food processing and delivery. Elegant animations with React and highly optimized Tailwind CSS layouts.",
    thumbnail: "/images/portfolio/organic.png",
    images: [],
    tecnology: ["React", "Tailwind"],
    live_url: "https://organic-food-sahos.vercel.app",
    github: "https://github.com/sahosmia/Organic-Food",
    showStatus: true,
    client: "Contact",
    type: "Design",
    duration: "1 Week",
    category: "Web Development",
  },
  {
    title: "Construction Website",
    slug: "construction-website-react",
    description: "A premium business website for a construction firm. Features project showcases, dynamic team cards, services, and online booking widgets built using React and styled with Tailwind CSS.",
    thumbnail: "/images/portfolio/construction.png",
    images: [],
    tecnology: ["React", "Tailwind"],
    live_url: "https://sahos-mia-construction.netlify.app/",
    github: "https://github.com/sahosmia/Construction-React-Tailwind",
    showStatus: false,
    client: "Contact",
    type: "Design",
    duration: "1 Week",
    category: "Web Development",
  },
  {
    title: "Lonesome Labs",
    slug: "lonesome-labs-tailwind",
    description:
      "A gorgeous, responsive online marketplace client project built pixel-perfectly from Figma to Tailwind CSS, featuring high-fidelity custom frontend components.",
    thumbnail: "/images/portfolio/lonesomelabs.png",
    images: [],
    tecnology: ["Tailwind"],
    live_url: "",
    github: "https://github.com/sahosmia/Lonesome-Labs-2nd-version",
    showStatus: true,
    client: "Upwork",
    type: "Design",
    duration: "2 Week",
    category: "UI/UX",
  },
  {
    title: "Personal Portfolio",
    slug: "personal-website-next",
    description: "My personal developer portfolio showcasing full-stack capabilities, premium animations with Framer Motion, and high performance powered by Next.js and Tailwind CSS.",
    thumbnail: "/images/portfolio/personal.png",
    images: [],
    tecnology: ["React", "Tailwind", "Next js"],
    live_url: "https://sahosmia.vercel.app/",
    github: "https://github.com/sahosmia/Sahos-Ridoy",
    showStatus: true,
    client: "Contact",
    type: "Design",
    duration: "2 Week",
    category: "Web Development",
  },
  {
    title: "Figma to React",
    slug: "figma-to-react-easexpence",
    description: "A highly responsive expense management dashboard app called Easexpense, translated pixel-perfectly from a comprehensive Figma design mockup into functional React + Tailwind code.",
    thumbnail: "/images/portfolio/easexpence.png",
    images: [],
    tecnology: ["React", "Tailwind"],
    live_url: "https://easexpense.vercel.app/",
    github: "https://github.com/sahosmia/Easexpense",
    showStatus: false,
    client: "Upwork",
    type: "Design",
    duration: "3 Days",
    category: "UI/UX",
  },
  {
    title: "DEB Login Page",
    slug: "deb-login-page",
    description:
      "A gorgeous custom login page designed in Figma and optimized for high-conversion user interfaces. Designed specifically for the Digital Experts in Bangladesh community portal.",
    thumbnail: "/images/portfolio/login.png",
    images: [],
    tecnology: ["Figma"],
    live_url:
      "https://www.behance.net/gallery/165236487/Login-Page-Design-with-Figma",
    github: "",
    showStatus: true,
    client: "Contact",
    type: "Figma Design",
    duration: "1 Days",
    category: "UI/UX",
  },
];
