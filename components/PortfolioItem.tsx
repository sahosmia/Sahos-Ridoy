"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PortfolioItemLinkButton from "./PortfolioItemLinkButton";
import { hoverLift, hoverGlow } from "@/lib/motion";

const PortfolioItem = ({ item }) => {
  // Tech stack with fallback
  const techStack = item.technologies || item.tags || ["React", "Next.js", "Tailwind"];

  // Optional: Add loading state for image
  const imagePriority = item.featured || false;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className="w-full h-full"
    >
      <motion.div
        {...hoverLift}
        {...hoverGlow}
        className="h-full"
      >
        <Link
          href={`/portfolios/${item.slug}`}
          className="group relative block h-full focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-3xl"
        >
          <div className="relative h-full rounded-3xl overflow-hidden bg-surface-muted border border-surface-border transition-all duration-500 hover:border-primary/50">

            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Image Section */}
            <div className="relative h-52 md:h-64 overflow-hidden bg-surface-border">
              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                className="
                  object-cover
                  transition-all duration-700
                  group-hover:scale-110
                "
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={imagePriority}
                loading={imagePriority ? "eager" : "lazy"}
              />

              {/* Gradient Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface-muted via-surface-muted/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />

              {/* Tech stack badges */}
              <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2 z-10">
                {techStack.slice(0, 3).map((tech, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="
                      text-[10px] md:text-xs font-medium
                      px-2 py-1 rounded-full
                      bg-black/60 backdrop-blur-md
                      text-white/90
                      border border-white/20
                      group-hover:bg-primary/80 group-hover:border-primary/50
                      transition-all duration-300
                    "
                  >
                    {tech}
                  </motion.span>
                ))}
                {techStack.length > 3 && (
                  <span className="text-[10px] md:text-xs font-medium px-2 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/70">
                    +{techStack.length - 3}
                  </span>
                )}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-5 md:p-6 relative z-10">
              {/* Category Badge */}
              {item.category && (
                <span className="inline-block text-primary text-xs font-semibold uppercase tracking-wider mb-2">
                  {item.category}
                </span>
              )}

              {/* Title */}
              <h3
                className="
                  text-lg md:text-xl font-bold 
                  text-text-primary
                  mb-2 line-clamp-2 
                  transition-all duration-300
                  group-hover:text-primary
                "
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary text-sm md:text-base line-clamp-2 mb-4">
                {item.description}
              </p>

              {/* View Project Button */}
              <div className="relative z-10 mt-auto">
                <PortfolioItemLinkButton slug={item.slug} />
              </div>
            </div>

            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-8 h-8 bg-primary/20 rounded-bl-3xl group-hover:bg-primary/40 transition-all duration-500" />
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default PortfolioItem;