"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PortfolioItemLinkButton from "./PortfolioItemLinkButton";

const PortfolioItem = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full"
    >
      <Link
        href={`/portfolios/${item.slug}`}
        className="
          group relative block rounded-3xl overflow-hidden 
          bg-white/[0.05] backdrop-blur-xl
          border border-white/10 
          transition-all duration-500
          hover:border-white/20
          hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]
        "
      >
        {/* Animated border glow */}
        <div
          className="
            absolute inset-0 
            rounded-3xl 
            pointer-events-none 
            opacity-0 group-hover:opacity-100
            transition-opacity duration-700
            bg-gradient-to-br from-white/10 to-transparent
          "
        ></div>

        {/* Image Section */}
        <div className="relative h-48 md:h-60 overflow-hidden rounded-t-3xl">
          <Image
            src={item.thumbnail}
            alt={item.title}
            fill
            className="
              object-cover w-full h-full
              transition-transform duration-700
              group-hover:scale-110
            "
            placeholder="blur"
            sizes="100vw"
          />

          {/* Hover Overlay */}
          <div
            className="
              absolute inset-0 
              bg-gradient-to-t from-black/70 via-black/40 to-transparent
              opacity-0 group-hover:opacity-100
              transition-all duration-700
            "
          ></div>

          {/* Floating badge */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="
              absolute bottom-3 left-3
              bg-white/10 backdrop-blur-md
              text-xs text-white px-3 py-1 rounded-full
              border border-white/20
              group-hover:bg-white/20 
            "
          >
            Featured Project
          </motion.span>
        </div>

        {/* Content */}
        <div className="p-6">
          <h5
            className="
               text-lg md:text-xl font-semibold 
              mb-2 line-clamp-2 
              transition-all duration-300
              group-hover:text-main
            "
          >
            {item.title}
          </h5>

          <p className="text-slate-300 text-sm md:text-base line-clamp-3 mb-5">
            {item.description}
          </p>

          {/* Button */}
          <div className="relative z-10">
            <PortfolioItemLinkButton slug={item.slug} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PortfolioItem;
