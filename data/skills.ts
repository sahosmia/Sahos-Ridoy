export interface SkillGroup {
  title: string;
  description: string;
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend & Architecture",
    description:
      "PHP, Laravel, REST API, Eloquent ORM, MVC, OOP / SOLID, Repository–Service pattern, authentication & authorization (RBAC), queue management, PHPUnit and clean code.",
  },
  {
    title: "Frontend Development",
    description:
      "React.js, Inertia.js, TypeScript, JavaScript, Tailwind CSS, Vue.js and Next.js — reusable components and responsive interfaces.",
  },
  {
    title: "Databases & Tools",
    description:
      "MySQL, MongoDB, Docker, Git & GitHub, Notion for technical documentation, and Claude for AI-assisted development.",
  },
  {
    title: "Workflow & Operations",
    description:
      "Client requirement analysis and technical documentation — turning business needs into a clear, buildable scope.",
  },
];

export interface TimelineEntry {
  title: string;
  subtitle?: string;
  description: string;
}

export const experienceList: TimelineEntry[] = [
  {
    title: "Again Soft",
    subtitle: "Web Developer — Aug 2025 to Present",
    description:
      "Engineered custom CRM and ERP systems with Laravel and React for lead management, quotation processing and workflow automation. Architected a China-to-BD cargo logistics platform and a real-time inventory system. Built an LMS, a matrimonial application and custom OpenCart solutions.",
  },
  {
    title: "Code24 Pty Ltd (Australia, Remote)",
    subtitle: "Remote Web Developer — Jan 2025 to Jul 2025",
    description:
      "Developed and maintained Laravel applications with Tailwind CSS for an Australian client. Contributed to Care & Connects, a person-centered disability support app, and implemented secure authentication with granular RBAC.",
  },
  {
    title: "Freelance",
    subtitle: "Remote Web Developer — Jan 2023 to Present",
    description:
      "Built BD Nirapad, a secure money-transfer platform; a custom Laravel POS with carat-based commission rules; and a university project-management platform connecting students, supervisors and external companies.",
  },
  {
    title: "iSocial Limited",
    subtitle: "Web Application Developer — Jan 2022 to Dec 2022",
    description:
      "Developed a real-time task and project management platform with Laravel, Vue.js, TypeScript and MySQL, with role-based dashboards, plus dynamic content and location-based shop modules for the SME Foundation platform.",
  },
];

export const educationList: TimelineEntry[] = [
  {
    title: "B.Sc. in CSE",
    subtitle: "European University of Bangladesh — 2021 to 2025",
    description: "Bachelor of Science in Computer Science and Engineering.",
  },
  {
    title: "Diploma in Engineering",
    subtitle: "Magura Polytechnic Institute — 2016 to 2020",
    description: "Diploma in Engineering (Computer).",
  },
  {
    title: "Training & Certifications",
    subtitle: "Learn with Sumit · Creative IT Institute",
    description:
      "Reactive Accelerator (React, Redux, Next.js, NextAuth.js, TypeScript) and Web Development (PHP, Laravel, MySQL, Git).",
  },
];
