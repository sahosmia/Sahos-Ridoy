export interface Service {
  icon: string;
  title: string;
  description: string;
}

// data/services.js
export const services = [
  {
    icon: "FaCode",
    title: "Web Development",
    description: "Building responsive, high-performance websites with modern technologies like React, Next.js, and Laravel."
  },
  {
    icon: "FaMobileAlt",
    title: "Mobile Responsive",
    description: "Creating seamless experiences across all devices with pixel-perfect responsive designs."
  },
  {
    icon: "FaPaintBrush",
    title: "UI/UX Design",
    description: "Crafting intuitive and beautiful interfaces that users love to interact with."
  },
  {
    icon: "FaDatabase",
    title: "Backend Development",
    description: "Developing robust server-side applications with Laravel, APIs, and database optimization."
  },
  {
    icon: "FaRocket",
    title: "Performance Optimization",
    description: "Speed optimization, SEO best practices, and performance tuning for better user experience."
  },
  {
    icon: "FaHeadset",
    title: "24/7 Support",
    description: "Dedicated support and maintenance to keep your applications running smoothly."
  }
];
export interface Target {
  icon: string;
  title: string;
  content: string;
}

export const targets: Target[] = [
  {
    icon: "FaBullseye",
    title: "Pixcel Perfect",
    content:
      "You will get pixcel perfect website such as figma design using tailwind css or Bootstrap",
  },
  {
    icon: "FaRegClock",
    title: "Fast Delivery",
    content:
      "Time is valueable tools for working. If you give me proper time to build your dream project, I could build an awesome project ",
  },
  {
    icon: "FaRegSmileBeam",
    title: "Satisfaction",
    content:
      "I will try to give my best for you dream project. I think that project is valueless if I could not make happy my client",
  },
];
