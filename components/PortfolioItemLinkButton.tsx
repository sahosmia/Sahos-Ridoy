// components/PortfolioItemLinkButton.jsx
"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const PortfolioItemLinkButton = ({ variant = "default" }) => {
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    default: "text-primary",
    outline: "text-text-primary hover:text-primary",
    minimal: "text-text-secondary hover:text-primary",
  };

  return (
    <motion.div
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 400 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Rendered as a span: the whole card is already a <Link>, and nesting <a> inside <a> is invalid HTML (causes a hydration error). */}
      <span
        className={`
          inline-flex items-center gap-2
          font-medium text-sm
          transition-all duration-300
          ${variants[variant]}
        `}
      >
        <span className="relative">
          View Project
          <span className={`
            absolute -bottom-0.5 left-0 h-px 
            bg-primary transition-all duration-300
            ${isHovered ? 'w-full' : 'w-0'}
          `} />
        </span>
        <motion.svg
          className="w-4 h-4"
          animate={{ x: isHovered ? 4 : 0 }}
          transition={{ type: "spring", stiffness: 400 }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </motion.svg>
      </span>
    </motion.div>
  );
};

export default PortfolioItemLinkButton;