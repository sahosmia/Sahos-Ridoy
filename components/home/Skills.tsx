"use client";
import Image from "next/image";
import FaqSide from "../../public/images/faq2.jpg";
import { motion } from "framer-motion";

interface SkillCategory {
  category: string;
  items: string[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Frontend Development",
    items: [
      "React.js - Component-based UI development",
      "Next.js - Server-side rendering & routing",
      "TypeScript - Typed JavaScript for better code quality",
      "Tailwind CSS & Material UI - Styling & UI components",
      "HTML5 & CSS3 - Semantic markup and modern styling",
    ],
  },
  {
    category: "Backend Development",
    items: [
      "Node.js & Express.js - Building scalable APIs",
      "PHP & Laravel - Server-side development",
      "MySQL & MongoDB - Database design & management",
    ],
  },
  {
    category: "Tools & DevOps",
    items: [
      "Git & GitHub - Version control",
      "Docker - Containerization",
      "Postman - API testing",
      "VS Code - Development environment",
      "Figma - UI/UX design",
      "NPM / PNPM - Package management",
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center leading-tight">
          My Skills
        </h2>

        <div className="flex flex-col gap-20">
          {skillsData.map((skillCategory, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
              >
                {/* Image with bounce hover */}
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 100, damping: 12 }}
                  whileHover={{ scale: 1.05 }}
                  className={`relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-xl ${
                    !isEven ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={FaqSide}
                    alt="Skills Illustration - Sahos"
                    fill
                    style={{ objectFit: "cover" }}
                    placeholder="blur"
                  />
                </motion.div>

                {/* Skills Card with bounce on hover */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 120, damping: 14 }}
                  whileHover={{
                    scale: 1.03,
                    transition: { type: "spring", stiffness: 200, damping: 15 },
                  }}
                  className={`bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg w-full ${
                    !isEven ? "lg:order-1" : ""
                  }`}
                >
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-6 leading-snug">
                    {skillCategory.category}
                  </h3>
                  <ul className="list-disc list-inside space-y-3 text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
                    {skillCategory.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
