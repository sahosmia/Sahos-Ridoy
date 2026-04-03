export interface PersonalInfo {
  title: string;
  value: string;
}

export const aboutPersonalInfoItems: PersonalInfo[] = [
  { title: "Name", value: "Sahos Mia" },
  { title: "Location", value: "Bangladesh" },
  { title: "Phone", value: "01952827301" },
  { title: "Education", value: "Bsc in CSE" },
  { title: "Email", value: "sahosmia.webdev@gmail.com" },
];

export interface WhyWorkItem {
  icon: string;
  title: string;
  description: string;
}

export const why_work_items: WhyWorkItem[] = [
  {
    icon: "FaRegHeart",
    title: "Life time Support",
    description: "You will get life time support for your dream project.",
  },
  {
    icon: "FaRegSmile",
    title: "Good Communication",
    description: "I will try to give 100% for good comminication.",
  },
  {
    icon: "FaRepeat",
    title: "Regular Update",
    description: "You will know every update on my proggress on your project.",
  },
];

export interface Contact {
  title: string;
  val: string;
  icon: string;
  color: string;
  bg: string;
}

export const contacts: Contact[] = [
  {
    title: "Location",
    val: "Chuadanga, Bangladesh",
    icon: "FaMap",
    color: "#F75023",
    bg: "#FEDFD7",
  },
  {
    title: "Phone",
    val: "01952827301",
    icon: "ImPhone",
    color: "#1CBE59",
    bg: "#DDF5E6",
  },
  {
    title: "Email",
    val: "sahosmia.webdev@gmail.com",
    icon: "FaEnvelope",
    color: "#836AF0",
    bg: "#ECE8FD",
  },
];

export interface SocialLink {
  icon: string;
  val: string;
}

export const socials_links: SocialLink[] = [
  {
    icon: "FaFacebookF",
    val: "https://www.facebook.com/sahosmia301/",
  },
  {
    icon: "FaLinkedinIn",
    val: "https://www.linkedin.com/in/sahosmia/",
  },
  { icon: "FaTwitter", val: "https://twitter.com/sahosmia" },
  {
    icon: "FaInstagram",
    val: "https://www.instagram.com/sahosmia/",
  },
  { icon: "FaYoutube", val: "https://www.youtube.com/@SahosMia" },
];

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
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
