export interface Portfolio {
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  images: string[];
  live_url: string;
  technology: string[];
  github: string;
  showStatus: boolean;
  featured?: boolean;
  client: string;
  type: string;
  duration: string;
}

export type PortfolioCategory = "Laravel" | "Frontend" | "Design";

export const portfolioCategories: PortfolioCategory[] = [
  "Laravel",
  "Frontend",
  "Design",
];

export function getPortfolioCategory(item: Portfolio): PortfolioCategory {
  if (item.technology?.includes("Laravel")) return "Laravel";
  if (item.technology?.includes("Figma")) return "Design";
  return "Frontend";
}

export const portfolios: Portfolio[] = [
  {
    title: "Sales & CRM System - Crystal Vision Solutions",
    slug: "crystal-vision-crm",
    description:
      "A high-performance Sales & CRM system built for Crystal Vision Solutions. Covers the full customer journey — requirement gathering, follow-ups, meetings, quotations, sales, and post-sale installation tracking — with role-based access control, Excel import/export, and PDF quote generation.",
    thumbnail: "/images/portfolio/crystal-crm.png",
    images: ["/images/portfolio/crystal-crm.png"],
    live_url: "https://crystalvisionsolutions.us/",
    technology: ["Laravel", "React", "TypeScript", "Inertia.js", "Tailwind"],
    github: "https://github.com/sahosmia/NewComCRM",
    showStatus: true,
    featured: true,
    client: "Crystal Solutions",
    type: "Development",
    duration: "45 Days",
  },
  {
    title: "Launverse - Laundry Business Management",
    slug: "launverse-business-management",
    description:
      "A multi-tenant laundry management platform with outlet-specific operations, customer-tier pricing, asset tracking and role-based access control. Covers order management, inventory, expenses, accounting and CRM workflows (follow-ups, appointments), plus payroll automation — built as a modular monolith with a strict-typed service layer and atomic transactions.",
    thumbnail: "/images/portfolio/launverse.svg",
    images: ["/images/portfolio/launverse.svg"],
    live_url: "",
    technology: ["Laravel", "React", "TypeScript", "Inertia.js", "Tailwind", "MySQL"],
    github: "https://github.com/sahosmia/Laumberse",
    showStatus: true,
    featured: true,
    client: "Contact",
    type: "Development",
    duration: "Ongoing",
  },
  {
    title: "Care & Connects - Disability Support App",
    slug: "care-connects-disability-support",
    description: "A person-centered disability support application built for an Australian client. Provides care coordination and stakeholder communication features, with secure authentication, granular role-based access control and protected workflows for sensitive user information.",
    thumbnail: "/images/portfolio/care-connects.svg",
    images: ["/images/portfolio/care-connects.svg"],
    live_url: "",
    technology: ["Laravel", "Vue.js", "Bootstrap", "jQuery", "MySQL"],
    github: "",
    showStatus: true,
    featured: true,
    client: "Contact",
    type: "Development",
    duration: "Jan 2025 - Jul 2025",
  },
  {
    title: "China-to-BD Cargo Logistics Platform",
    slug: "china-bd-cargo-logistics",
    description: "A cargo logistics platform for shipments moving from China to Bangladesh, covering the full order and shipment workflow. Built with Laravel and React at Again Soft.",
    thumbnail: "/images/portfolio/cargo-logistics.svg",
    images: ["/images/portfolio/cargo-logistics.svg"],
    live_url: "",
    technology: ["Laravel", "React", "MySQL"],
    github: "",
    showStatus: true,
    featured: true,
    client: "Contact",
    type: "Development",
    duration: "Ongoing",
  },{
    title: "University Project Proposal Management System",
    slug: "project-proposal-management-system",
    description:
      "A role-based academic proposal workflow platform for institutions. Students submit and track project and industrial proposals, faculty members review and bulk-approve submissions, and admins manage users, departments, companies, R-cells, and system settings end-to-end.",
    thumbnail: "/images/portfolio/thesis-project/thumbnail.png",
    images: ["/images/portfolio/thesis-project/thumbnail.png", "/images/portfolio/thesis-project/dashboard.png", "/images/portfolio/thesis-project/proposal-list.png", "/images/portfolio/thesis-project/proposal-details.png"],
    live_url: "",
    technology: ["Laravel", "Alpine.js", "Tailwind"],
    github: "https://github.com/sahosmia/Thesis_Project_Managment",
    showStatus: true,
    client: "Contact",
    type: "Development",
    duration: "Ongoing",
  },
  {
    title: "Second Home - Monthly Bachelor Mess Tracker",
    slug: "second-home-mess-tracker",
    description: "A modern client-side bachelor mess management application for tracking monthly meals, bazaar deposits, member balances, shared expenses, and individual adjustments. Features real-time meal rate calculation, transparent settlement breakdowns, bilingual support, dark/light themes, flexible monthly resets, and client-side report exporting with zero backend dependency.",
    thumbnail: "/images/portfolio/second-home/second-home.png",
    images: [
      "/images/portfolio/second-home/second-home.png",
      "/images/portfolio/second-home/second-home-member.png",
      "/images/portfolio/second-home/second-home-expense.png",
    ],
    live_url: "https://second-home-sahos.vercel.app/",
    technology: ["Next.js","TypeScript","Tailwind CSS","Lucide React","jsPDF","LocalStorage"],
    github: "https://github.com/sahosmia/Second-Home",
    showStatus: true,
    client: "Personal Project",
    type: "Development",
    duration: "Ongoing",
  },
  {
    title: "Real-time Inventory Management System",
    slug: "inventory-management-system",
    description:
      "An inventory management system for real-time order and stock tracking, built with Laravel and React for business users who need accurate stock visibility.",
    thumbnail: "/images/portfolio/inventory-system.svg",
    images: ["/images/portfolio/inventory-system.svg"],
    live_url: "",
    technology: ["Laravel", "React", "MySQL"],
    github: "",
    showStatus: true,
    featured: true,
    client: "Contact",
    type: "Development",
    duration: "Ongoing",
  },
  {
    title: "Custom POS System",
    slug: "custom-pos-system",
    description:
      "A custom Laravel point-of-sale system implementing carat-based commission calculations and other domain-specific business rules.",
    thumbnail: "/images/portfolio/pos-system.svg",
    images: ["/images/portfolio/pos-system.svg"],
    live_url: "",
    technology: ["Laravel", "MySQL"],
    github: "",
    showStatus: true,
    client: "Contact",
    type: "Development",
    duration: "Freelance",
  },
  {
    title: "Task-Based Project Management System",
    slug: "task-project-management-system",
    description:
      "A real-time task assignment and progress-tracking platform with role-based dashboards and workflows for managers, developers and stakeholders. Built at iSocial Limited.",
    thumbnail: "/images/portfolio/task-management.svg",
    images: ["/images/portfolio/task-management.svg"],
    live_url: "",
    technology: ["Laravel", "Vue.js", "TypeScript", "MySQL"],
    github: "",
    showStatus: true,
    client: "Contact",
    type: "Development",
    duration: "Jan 2022 - Dec 2022",
  },
  {
    title: "Bd Nirapd",
    slug: "bd-nirapad",
    description:
      "Send Money Safely to Your Loved Ones We help you send money safely to your loved ones. We are committed to delivering your remittances as quickly as possible. We will be engaged in providing your transaction transparency and accountability, Inshallah. ",
    thumbnail: "/images/portfolio/nirapad.png",
    images: ["/images/portfolio/nirapad.png"],
    live_url: "https://bdnirapad.com/",
    technology: ["Laravel", "JavaScript", "Bootstrap"],
    github: "https://github.com/sahosmia/Bd-Nirapad",
    showStatus: true,
    featured: true,
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
    technology: ["React", "Tailwind", "TypeScript"],
    live_url: "https://e-dash-sahos.vercel.app/",
    github: "https://github.com/sahosmia/EDash",
    showStatus: true,
    client: "Contact",
    type: "Design",
    duration: "1.5 Months",
  },
  {
    title: "Organic Food Processing",
    slug: "organic-food-processing",
    description: "A responsive website for an organic food processing business, built with React and Tailwind CSS.",
    thumbnail: "/images/portfolio/organic.png",
    images: [],
    technology: ["React", "Tailwind"],
    live_url: "https://organic-food-sahos.vercel.app",
    github: "https://github.com/sahosmia/Organic-Food",
    showStatus: true,
    client: "Contact",
    type: "Design",
    duration: "1 Week",
  },

  {
    title: "Lonesome Labs",
    slug: "lonesome-labs-tailwind",
    description:
      "An online marketplace client project (Upwork) — a Figma design converted into a responsive interface with Tailwind CSS.",
    thumbnail: "/images/portfolio/lonesomelabs.png",
    images: [],
    technology: ["Tailwind"],
    live_url: "",
    github: "https://github.com/sahosmia/Lonesome-Labs-2nd-version",
    showStatus: true,
    client: "Upwork",
    type: "Design",
    duration: "2 Weeks",
  },
  {
    title: "Personal Portfolio",
    slug: "personal-website-next",
    description: "My personal portfolio website, built with Next.js, Tailwind CSS and Framer Motion.",
    thumbnail: "/images/portfolio/personal.png",
    images: [],
    technology: ["React", "Tailwind", "Next.js"],
    live_url: "https://sahosmia.vercel.app/",
    github: "https://github.com/sahosmia/Sahos-Ridoy",
    showStatus: true,
    client: "Contact",
    type: "Design",
    duration: "2 Weeks",
  },
  {
    title: "Easexpense - Figma to React",
    slug: "figma-to-react-easexpence",
    description: "A client Figma design converted into a pixel-perfect, responsive React and Tailwind CSS interface (Upwork project).",
    thumbnail: "/images/portfolio/easexpence.png",
    images: [],
    technology: ["React", "Tailwind"],
    live_url: "https://easexpense.vercel.app/",
    github: "https://github.com/sahosmia/Easexpense",
    showStatus: false,
    client: "Upwork",
    type: "Design",
    duration: "3 Days",
  },
 
];
