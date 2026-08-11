"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
}) => {
  // If multiple is allowed, store set of open indices. Otherwise store single active index.
  const [openIndices, setOpenIndices] = useState<number[]>([]);
  const [activeSingleIndex, setActiveSingleIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      if (openIndices.includes(index)) {
        setOpenIndices(openIndices.filter((i) => i !== index));
      } else {
        setOpenIndices([...openIndices, index]);
      }
    } else {
      setActiveSingleIndex(activeSingleIndex === index ? null : index);
    }
  };

  const isItemOpen = (index: number) => {
    return allowMultiple ? openIndices.includes(index) : activeSingleIndex === index;
  };

  return (
    <div className="space-y-4 w-full">
      {items.map((item, index) => {
        const isOpen = isItemOpen(index);
        return (
          <motion.div
            key={index}
            className="
              group relative
              rounded-2xl
              bg-surface-muted/50 backdrop-blur-sm
              border border-surface-border
              hover:border-primary/30
              transition-all duration-300
              overflow-hidden
            "
            whileHover={{ scale: 1.01 }}
          >
            {/* Question Button */}
            <button
              onClick={() => toggleItem(index)}
              className="
                w-full text-left
                px-5 md:px-6 py-4 md:py-5
                flex items-center justify-between
                gap-4
                cursor-pointer
              "
            >
              {/* Question Number */}
              <span className="
                flex-shrink-0
                w-7 h-7 md:w-8 md:h-8
                rounded-full
                bg-primary/10
                text-primary text-sm font-bold
                flex items-center justify-center
              ">
                {index + 1}
              </span>

              {/* Question Text */}
              <span className="
                flex-1
                text-text-primary font-semibold
                text-sm md:text-base lg:text-lg
                group-hover:text-primary
                transition-colors duration-300
              ">
                {item.question}
              </span>

              {/* Icon */}
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="
                  flex-shrink-0
                  w-6 h-6 md:w-7 md:h-7
                  rounded-full
                  bg-surface-muted
                  border border-surface-border
                  text-primary
                  flex items-center justify-center
                  text-sm md:text-base
                  group-hover:bg-primary/10
                  transition-all duration-300
                "
              >
                {isOpen ? "−" : "+"}
              </motion.span>
            </button>

            {/* Answer (Animated) */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="
                    px-5 md:px-6 pb-4 md:pb-5
                    pl-12 md:pl-14
                    border-t border-surface-border
                  ">
                    <p className="
                      text-text-secondary
                      text-sm md:text-base
                      leading-relaxed
                    ">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Accordion;
