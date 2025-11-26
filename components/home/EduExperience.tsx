"use client";

import { FC } from "react";
import { motion } from "framer-motion";

const EduExperience: FC = () => {
    return (
        <section className="w-full py-20 bg-[#0A0A0A] text-white">
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20">
                {/* ======================= SKILLS ======================= */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                >
                    <h2 className="text-3xl font-bold mb-8">Skills</h2>

                    <div className="bg-slate-900">
                        {/* ITEM */}
                        <div className="relative border-l-2 border-main border-b border-b-slate-700 p-10 h-48 overflow-auto">
                            <div className="absolute -left-3 top-10 w-6 h-4 bg-main rounded-r-sm"></div>
                            <div className="absolute left-3 top-10 border-8 border-transparent border-l-main "></div>{" "}
                            <h3 className="text-xl font-semibold">Backend Development</h3>
                            <p className="text-sm opacity-70 mt-3 leading-relaxed">
                                Strong experience with Laravel, REST APIs, authentication
                                systems, database design, queues & optimized backend
                                architecture.
                            </p>
                          
                        </div>

                        {/* ITEM */}
                        <div className="relative border-l-2 border-main border-b border-b-slate-700 p-10 h-48">
                            <div className="absolute -left-3 top-10 w-6 h-4 bg-main rounded-r-sm"></div>
                            <div className="absolute left-3 top-10 border-8 border-transparent border-l-main "></div>{" "}
                            <h3 className="text-xl font-semibold">Frontend Development</h3>
                            <p className="text-sm opacity-70 mt-3 leading-relaxed">
                                Skilled in React, Next.js, Tailwind CSS, UI animation,
                                responsive design & reusable component patterns.
                            </p>
                        </div>

                        {/* ITEM */}
                        <div className="relative border-l-2 border-main p-10 h-48">
                            <div className="absolute -left-3 top-10 w-6 h-4 bg-main rounded-r-sm"></div>
                            <div className="absolute left-3 top-10 border-8 border-transparent border-l-main ">
                            </div>              <h3 className="text-xl font-semibold">Tools & DevOps</h3>
                            <p className="text-sm opacity-70 mt-3 leading-relaxed">
                                Git, GitHub Actions, Docker basics, server deployment, Nginx
                                setup, CI/CD pipeline understanding.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* ======================= EXPERIENCE ======================= */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                >
                    <h2 className="text-3xl font-bold mb-8">Experience</h2>

                    <div className="bg-slate-900 rounded-xl ">
                        {/* ITEM */}
                        <div className="relative border-l-2 border-main border-b border-b-slate-700 p-10 h-48">
                            <div className="absolute -left-3 top-10 w-6 h-4 bg-main rounded-r-sm"></div>
                            <div className="absolute left-3 top-10 border-8 border-transparent border-l-main ">
                            </div>                            <h3 className="text-xl font-semibold">i&apos;Social Limited</h3>
                            <p className="text-sm opacity-80 mt-1">
                                Junior Application Developer — Jan 2022 to Jan 2023
                            </p>
                            <p className="text-sm opacity-70 mt-3 leading-relaxed">
                                Worked on web applications, bug fixing, feature development, API
                                integration & backend maintenance.
                            </p>
                        </div>

                        {/* ITEM */}
                        <div className="relative border-l-2 border-main border-b border-b-slate-700 p-10 h-48">
                            <div className="absolute -left-3 top-10 w-6 h-4 bg-main rounded-r-sm"></div>
                            <div className="absolute left-3 top-10 border-8 border-transparent border-l-main "></div>{" "}
                            <h3 className="text-xl font-semibold">Code 24</h3>
                            <p className="text-sm opacity-80 mt-1">
                                Laravel Application Developer — Jan 2025 to July 2025
                            </p>
                            <p className="text-sm opacity-70 mt-3 leading-relaxed">
                                Developed full-stack web solutions, optimized performance,
                                contributed to UI/UX improvement and deployment.
                            </p>
                        </div>

                        {/* ITEM */}
                        <div className="relative border-l-2 border-main p-10 h-48">
                            <div className="absolute -left-3 top-10 w-6 h-4 bg-main rounded-r-sm"></div>
                            <div className="absolute left-3 top-10 border-8 border-transparent border-l-main ">
                            </div>                            <h3 className="text-xl font-semibold">AgainSoft</h3>
                            <p className="text-sm opacity-80 mt-1">
                                Laravel Developer — Aug 2025 to Present
                            </p>
                            <p className="text-sm opacity-70 mt-3 leading-relaxed">
                                Building scalable applications, API architecture, admin
                                dashboard, performance optimization & long-term system
                                maintenance.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default EduExperience;
