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
}

export const portfolios: Portfolio[] = [
  {
    title: "Bd Nirapd",
    slug: "bd-nirapad",
    description:
      "Send Money Safely to Your Loved Ones We help you send money safely to your loved ones. We are committed to delivering your remittances as quickly as possible. We will be engaged in providing your transaction transparency and accountability, Inshallah. ",
    thumbnail: "/images/portfolio/nirapad.png",
    images: ["/images/portfolio/nirapad.png"],
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
    thumbnail: "/images/portfolio/Edash.png",
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
    thumbnail: "/images/portfolio/organic.png",
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
    thumbnail: "/images/portfolio/construction.png",
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
    thumbnail: "/images/portfolio/lonesomelabs.png",
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
    thumbnail: "/images/portfolio/personal.png",
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
    thumbnail: "/images/portfolio/easexpence.png",
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
  },
];
