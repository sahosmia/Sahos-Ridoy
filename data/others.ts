export interface PersonalInfo {
  title: string;
  value: string;
  icon: string;
  href?: string;
}

export const aboutPersonalInfoItems: PersonalInfo[] = [
  { title: "Name", value: "Sahos Mia", icon:"FaUser" },
  { title: "Location", value: "Mohakhali, Dhaka", icon: "FaMapMarkerAlt" },
  { title: "Phone", value: "01952827301", icon: "FaPhone", href: "tel:+8801952827301" },
  { title: "Works", value: "AgainSoft", icon: "FaBriefcase" },
  { title: "Email", value: "sahosmia.webdev@gmail.com", icon: "FaEnvelope", href: "mailto:sahosmia.webdev@gmail.com" },
];

export interface WhyWorkItem {
  icon: string;
  title: string;
  description: string;
}

export const why_work_items: WhyWorkItem[] = [
  {
    icon: "FaRegHeart",
    title: "Reliable Support",
    description: "I stay available after launch for bug fixes, updates and improvements — quick help whenever something needs attention.",
  },
  {
    icon: "FaRegSmile",
    title: "Clear Requirements & Communication",
    description: "Requirements are analysed and documented before coding starts, and you get clear progress updates in English or Bangla.",
  },
  {
    icon: "FaCode",
    title: "Tested & Maintainable Code",
    description: "Clean code, PHPUnit tests and clear architecture, so the next developer (or you) can safely extend the system.",
  },
];

export interface Contact {
  title: string;
  val: string;
  href?: string;
  icon: string;
  variant: "orange" | "green" | "purple";
}

export const contacts: Contact[] = [
  {
    title: "Location",
    val: "Mohakhali, Dhaka",
    icon: "FaMap",
    variant: "orange",
  },
  {
    title: "Phone",
    val: "01952827301",
    href: "tel:+8801952827301",
    icon: "ImPhone",
    variant: "green",
  },
  {
    title: "Email",
    val: "sahosmia.webdev@gmail.com",
    href: "mailto:sahosmia.webdev@gmail.com",
    icon: "FaEnvelope",
    variant: "purple",
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
    question: "What is your development process?",
    answer:
      "I start by analysing your requirements and business workflow, then move to database design, development, testing and deployment. You are kept informed and involved at every stage.",
  },
  {
    question: "How long does a project take?",
    answer:
      "It depends on the scope. A simple website can take 1-2 weeks, while a custom CRM, ERP or inventory system usually takes 1-3 months. I share a detailed timeline after we discuss your requirements.",
  },
  {
    question: "Do you provide maintenance after delivery?",
    answer:
      "Yes. I provide post-launch support for bug fixes, new features, updates and performance improvements on Laravel, Vue and React applications.",
  },
];
