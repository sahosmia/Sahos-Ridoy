"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const FaqItem = ({
    faq,
    index,
}: {
    faq: { question: string; answer: string };
    index: number;
}) => {
    const [isOpen, setIsOpen] = useState(index === 0); // FIRST OPEN BY DEFAULT

    const answerId = `faq-answer-${faq.question.replace(/\s+/g, "-")}`;

    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
            <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls={answerId}
            >
                <h4 className="font-semibold text-lg md:text-xl text-gray-900">
                    {faq.question}
                </h4>

                {/* Animated Icon */}
                <motion.div
                    animate={{
                        rotate: isOpen ? 360 : 0, // FULL SPIN
                    }}
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                    }}
                    className="text-main text-2xl"
                >
                    {isOpen ? <FaMinus /> : <FaPlus />}
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        id={answerId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden text-gray-600 leading-relaxed"
                    >
                        {faq.answer}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FaqItem;
