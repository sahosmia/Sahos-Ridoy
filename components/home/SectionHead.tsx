// components/home/SectionHead.jsx
"use client";

import { motion } from "framer-motion";
import { viewportConfig } from "@/lib/motion";

const SectionHead = ({
  title,
  des,
  centered = true,
  className = ""
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportConfig}
      className={`
        mb-12 md:mb-16 lg:mb-20
        ${centered ? 'text-center' : 'text-left'}
        ${className}
      `}
    >
      {/* Badge / Subtitle */}
      {des && (
        <span className="
          inline-block
          text-primary text-sm md:text-base 
          font-semibold uppercase tracking-[0.2em] 
          mb-3 md:mb-4
        ">
          {des}
        </span>
      )}

      {/* Title */}
      <h2 className="
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl
        font-bold 
        text-text-primary
        leading-tight
      ">
        {title}
      </h2>

      {/* Optional decorative line for centered titles */}
      {centered && (
        <div className="flex justify-center mt-4 md:mt-6">
          <div className="w-12 h-1 bg-primary rounded-full" />
        </div>
      )}
    </motion.div>
  );
};

export default SectionHead;