// lib/motion.js
import { Variants } from "framer-motion";

// ============ PRESET CONFIGURATIONS ============

// Stagger container - use for sections with multiple child cards
export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

// ============ ENTRANCE VARIANTS ============

// Fade + Up (most common, great for cards)
export const fadeUpVariant = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94], // cubic-bezier
        },
    },
});

// Fade + Left (good for side elements)
export const fadeLeftVariant = (delay = 0) => ({
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, delay, ease: "easeOut" },
    },
});

// Fade + Right (good for side elements)
export const fadeRightVariant = (delay = 0) => ({
    hidden: { opacity: 0, x: 30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, delay, ease: "easeOut" },
    },
});

// Scale + Fade (good for images, icons)
export const scaleVariant = (delay = 0) => ({
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.4,
            delay,
            type: "spring",
            stiffness: 300,
            damping: 20,
        },
    },
});

// Spring Bounce (good for attention-grabbing elements)
export const springVariant = (delay = 0) => ({
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            bounce: 0.5,
            duration: 0.6,
            delay,
        },
    },
});

// ============ SECTION HEADER (consistent across all sections) ============
export const sectionHeaderVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

// ============ HOVER EFFECTS (for interactive elements) ============
export const hoverScale = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring", stiffness: 400, damping: 17 },
};

export const hoverGlow = {
    whileHover: {
        boxShadow: "0 0 25px rgba(254,78,89,0.3)",
        borderColor: "rgba(254,78,89,0.5)",
    },
};

export const hoverLift = {
    whileHover: { y: -5 },
    transition: { duration: 0.2 },
};

// ============ VIEWPORT CONFIGURATION ============
export const viewportConfig = {
    once: true,
    margin: "-100px 0px -100px 0px", // Triggers when element is 100px into view
};

// ============ BACKWARD COMPATIBILITY (preserves your existing imports) ============
export const heroMotion = ({ delay = 0 }) => fadeLeftVariant(delay);
export const aboutMotion = ({ delay = 0 }) => fadeLeftVariant(delay);
export const skillMotion = ({ delay = 0 }) => fadeRightVariant(delay);
export const skillImageMotion = ({ delay = 0 }) => fadeLeftVariant(delay);
export const sectionHeaderMotion = ({ delay = 0 }) => sectionHeaderVariant;
export const serviceMotion = ({ delay = 0 }) => springVariant(delay);