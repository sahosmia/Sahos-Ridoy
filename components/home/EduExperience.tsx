"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { experiences, skillCategories } from "@/data/others";

const EduExperience: FC = () => {
    return (
        <section className="section bg-surface">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-20">

                {/* ======================= SKILLS ======================= */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                >
                    <h2 className="text-3xl font-bold mb-8 text-text-primary">Skills</h2>

                    <div className="bg-surface-muted rounded-3xl overflow-hidden border border-surface-border">
                        {skillCategories.map((skill, index) => (
                            <div
                                key={index}
                                className={`relative border-l-4 border-primary p-8 pl-12 ${
                                    index !== skillCategories.length - 1 ? "border-b border-surface-border" : ""
                                }`}
                            >
                                <div className="absolute -left-1 top-10 w-4 h-4 bg-primary rotate-45"></div>

                                <h3 className="text-xl font-bold text-text-primary">{skill.title}</h3>
                                <p className="text-text-secondary mt-3 leading-relaxed">
                                    {skill.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* ======================= EXPERIENCE ======================= */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                >
                    <h2 className="text-3xl font-bold mb-8 text-text-primary">Experience</h2>

                    <div className="bg-surface-muted rounded-3xl overflow-hidden border border-surface-border">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className={`relative border-l-4 border-primary p-8 pl-12 ${
                                    index !== experiences.length - 1 ? "border-b border-surface-border" : ""
                                }`}
                            >
                                <div className="absolute -left-1 top-10 w-4 h-4 bg-primary rotate-45"></div>

                                <h3 className="text-xl font-bold text-text-primary">{exp.company}</h3>
                                <p className="text-primary text-sm font-medium mt-1">
                                    {exp.role} — {exp.period}
                                </p>
                                <p className="text-text-secondary mt-3 leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default EduExperience;
