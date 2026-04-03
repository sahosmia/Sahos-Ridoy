export interface Service {
  icon: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: "TfiPaintBucket",
    title: "Web Design",
    description:
      "I am expert in Html, Css, Bootstrap, Tailwind, React Js, Vue Js, Next Js ",
  },
  {
    icon: "BiCodeAlt",
    title: "Web Development",
    description:
      "Web development: Designing, coding, and maintaining websites for optimal online functionality.",
  },
  {
    icon: "PiMonitor",
    title: "Single Page Application",
    description:
      "SPA: Updates content dynamically, avoids full page reloads for smoother browsing.",
  },
  {
    icon: "FaFigma",
    title: "Figma Design",
    description:
      "Creating designs in Figma involves wireframing, prototyping, and collaborative editing.",
  },
  {
    icon: "GoDatabase",
    title: "Rest Api",
    description:
      "REST API: Web service architecture for communication between client and server.",
  },
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
