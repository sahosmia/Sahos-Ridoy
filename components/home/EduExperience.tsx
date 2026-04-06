"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeUpVariant, viewportConfig } from "@/lib/motion";

// Reusable Timeline Item (DRY principle)
const TimelineItem = ({ title, subtitle = undefined, description, isLast }) => (
    <div className={`relative border-l-2 border-primary  p-6 pl-10 group`}>
        {/* Animated pointer */}
        <motion.div
            className="absolute -left-[9px] top-8 w-4 h-4 bg-primary rounded-full border-2 border-surface"
            whileHover={{ scale: 1.3 }}
        />
        <div className="absolute left-3 top-8 border-8 border-transparent border-l-primary opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="h-40 overflow-y-auto custom-scrollbar pr-2">
            <h3 className="text-xl font-semibold text-text-primary">{title}</h3>
            {subtitle && <p className="text-sm text-primary mt-1">{subtitle}</p>}
            <p className="text-text-secondary text-sm mt-3 leading-relaxed">
                {description}
            </p>
        </div>
    </div>
);

const EduExperience: FC = () => {
    const skillsList = [
        { title: "Backend Development", description: "Laravel, REST APIs, authentication, database design, queues, optimized backend architecture & clean code structure." },
        { title: "Frontend Development", description: "React, Next.js, Tailwind CSS, UI animation, responsive design, reusable components & performance optimization." },
        { title: "Tools & DevOps", description: "Git, GitHub Actions, Docker basics, server deployment, Nginx, CI/CD pipelines & environment management." }
    ];

    const experienceList = [
        { title: "i&apos;Social Limited", subtitle: "Junior Application Developer — Jan 2022 to Jan 2023", description: "Worked on web apps, bug fixing, features, API integration & backend maintenance." },
        { title: "Code 24", subtitle: "Laravel Application Developer — Jan 2025 to July 2025", description: "Built full-stack apps, optimized performance, improved UI/UX & worked on deployments." },
        { title: "AgainSoft", subtitle: "Laravel Developer — Aug 2025 to Present", description: "Building scalable apps, API architecture, admin dashboard, system maintenance & optimization." }
    ];

    return (
        <section className="section bg-surface">
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                {/* SKILLS */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                >
                    <motion.h2 variants={fadeUpVariant(0)} className="text-3xl font-bold text-text-primary mb-8">
                        Skills
                    </motion.h2>
                    <div className="bg-surface-muted rounded-2xl border border-surface-border overflow-hidden">
                        {skillsList.map((skill, i) => (
                            <TimelineItem
                                key={i}
                                title={skill.title}
                                description={skill.description}
                                isLast={i === skillsList.length - 1}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* EXPERIENCE */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                >
                    <motion.h2 variants={fadeUpVariant(0)} className="text-3xl font-bold text-text-primary mb-8">
                        Experience
                    </motion.h2>
                    <div className="bg-surface-muted rounded-2xl border border-surface-border overflow-hidden">
                        {experienceList.map((exp, i) => (
                            <TimelineItem
                                key={i}
                                title={exp.title}
                                subtitle={exp.subtitle}
                                description={exp.description}
                                isLast={i === experienceList.length - 1}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default EduExperience;