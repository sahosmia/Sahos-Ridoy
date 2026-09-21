"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHead from "./SectionHead";
import PortfolioItem from "../PortfolioItem";
import { portfolios } from "@/data/portfolios";
import { viewportConfig } from "@/lib/motion";

const MAX_ITEMS = 6;

function MyWork() {
  const visible = portfolios.filter((item) => item.showStatus);
  const featured = visible.filter((item) => item.featured);
  const items = (featured.length ? featured : visible).slice(0, MAX_ITEMS);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewportConfig}
      className="section relative overflow-hidden bg-surface"
      id="portfolio"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent-purple/5" />
        <div className="absolute -top-40 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />
      </div>

      <SectionHead
        title="Selected Work"
        des="Laravel & full-stack projects"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((item) => (
            <div key={item.slug} className="h-full">
              <PortfolioItem item={item} />
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/portfolios"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-surface-border bg-surface-muted text-text-primary font-bold hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
          >
            View all projects
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

export default MyWork;
