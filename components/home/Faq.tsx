"use client";

import { faqs } from "@/data/others";
import FaqItem from "./FaqItem";
import SectionHead from "./SectionHead";
import { motion } from "framer-motion";
import { staggerContainer, fadeUpVariant, viewportConfig } from "@/lib/motion";

export interface Faq {
    question: string;
    answer: string;
}

const Faq = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportConfig}
            className="section relative overflow-hidden bg-surface"
            id="faq"
        >
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 10, repeat: Infinity, delay: 2 }}
                    className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <SectionHead
                    title="Frequently Asked Questions"
                    des="faq"
                />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    className="mt-10 max-w-3xl mx-auto space-y-4"
                >
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={faq.question}
                            variants={fadeUpVariant(index * 0.1)}
                        >
                            <FaqItem faq={faq} index={index} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Faq;