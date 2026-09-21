export interface Service {
  icon: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: "FaCode",
    title: "Custom Laravel Applications",
    description:
      "Business web apps built with PHP and Laravel — clean MVC, Eloquent ORM, Repository/Service architecture and queue-based background jobs.",
  },
  {
    icon: "FaBriefcase",
    title: "CRM & ERP Systems",
    description:
      "Lead management, quotations, inventory, accounting and workflow automation tailored to how your business actually operates.",
  },
  {
    icon: "FaDatabase",
    title: "REST API & Database Design",
    description:
      "Well-structured MySQL/MongoDB schemas and secure REST APIs, with authentication and role-based access control (RBAC).",
  },
  {
    icon: "FaRocket",
    title: "React + Inertia.js Frontends",
    description:
      "Fast, responsive single-page experiences with React, TypeScript, Inertia.js and Tailwind CSS on top of a Laravel backend.",
  },
  {
    icon: "FaFigma",
    title: "Figma to Code",
    description:
      "Pixel-perfect, mobile-responsive interfaces built from your Figma designs with Tailwind CSS or Bootstrap.",
  },
  {
    icon: "FaHeadset",
    title: "Maintenance & Support",
    description:
      "Bug fixes, feature additions and performance improvements for existing Laravel/Vue/React applications.",
  },
];

export interface Target {
  icon: string;
  title: string;
  content: string;
}

export const targets: Target[] = [
  {
    icon: "FaLayerGroup",
    title: "Clean & Scalable Code",
    content:
      "MVC, SOLID and the Repository–Service pattern keep the codebase easy to read, test and extend as your business grows.",
  },
  {
    icon: "FaShieldAlt",
    title: "Secure by Design",
    content:
      "Proper authentication, role-based access control and validation on every workflow, especially where sensitive data is involved.",
  },
  {
    icon: "FaBullseye",
    title: "Built Around Your Business",
    content:
      "I start from your real workflow and requirements, so the system fits how you operate instead of forcing you to adapt to it.",
  },
];
