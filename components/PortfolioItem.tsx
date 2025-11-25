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
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Link
        href={`/portfolios/${item.slug}`}
        className="
          group block bg-white/5 rounded-2xl overflow-hidden 
          border border-white/10 shadow-lg 
          hover:shadow-2xl transition-all duration-500
          backdrop-blur-xl
        "
      >
        {/* Image wrapper */}
        <div className="relative h-48 md:h-60 overflow-hidden rounded-t-2xl">
          <Image
            className="
              object-cover h-full w-full
              transition-all duration-700
              group-hover:scale-110
            "
            src={item.thumbnail}
            alt={item.title}
            fill
            placeholder="blur"
            sizes="100vw"
          />

          {/* dark gradient on hover */}
          <div
            className="
              absolute inset-0 
              bg-gradient-to-t from-black/60 via-black/20 to-transparent
              opacity-0 group-hover:opacity-100 
              transition-all duration-700
            "
          ></div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h5 className="text-white text-xl md:text-2xl font-semibold mb-2 line-clamp-2">
            {item.title}
          </h5>

          <p className="text-slate-300 text-sm md:text-base line-clamp-3 mb-4">
            {item.description}
          </p>

          <PortfolioItemLinkButton slug={item.slug} />
        </div>
      </Link>
    </motion.div>
  );
};

export default PortfolioItem;
