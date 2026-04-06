"use client";
import { motion } from "framer-motion";
import { viewportConfig } from "@/lib/motion";

const SectionHeader = ({
    badge,
    title,
    subtitle,
    centered = true,
    titleHighlight,
    className = ""
}) => {
    const alignment = centered ? "text-center" : "text-left";
    const subtitleAlign = centered ? "mx-auto" : "";

    return (
        <div className={`mb-12 md:mb-16 ${alignment} ${className}`}>
            {badge && (
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportConfig}
                    className="
            inline-block text-primary text-sm font-semibold 
            uppercase tracking-[0.2em] mb-3
          "
                >
                    {badge}
                </motion.span>
            )}

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ delay: 0.1 }}
                className="
          text-3xl md:text-4xl lg:text-5xl font-bold 
          text-text-primary mb-4
        "
            >
                {titleHighlight ? (
                    <>
                        {title.split(titleHighlight)[0]}
                        <span className="text-primary">{titleHighlight}</span>
                        {title.split(titleHighlight)[1]}
                    </>
                ) : (
                    title
                )}
            </motion.h2>

            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportConfig}
                    transition={{ delay: 0.2 }}
                    className={`
            text-text-secondary text-lg 
            max-w-2xl ${subtitleAlign}
            leading-relaxed
          `}
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
};

export default SectionHeader;