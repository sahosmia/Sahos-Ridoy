"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import ShareButtons from "@/components/ShareButtons";
import { fadeUpVariant, staggerContainer, viewportConfig, hoverScale } from "@/lib/motion";

const PortfolioItemDetails = ({ portfolio }) => {
  // Info items for better mapping
  const infoItems = [
    { label: "Technology", value: portfolio.tecnology?.join(", "), show: true },
    { label: "Marketplace", value: portfolio.client === "Contact" ? "Outside of Marketplace" : portfolio.client, show: portfolio.client },
    { label: "Type", value: portfolio.type, show: portfolio.type },
    { label: "Duration", value: portfolio.duration, show: portfolio.duration },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewportConfig}
      className="py-10 md:py-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">

        {/* Left Column - Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative group"
        >
          {/* Image Container with Glow Effect */}
          <div className="relative rounded-2xl overflow-hidden bg-surface-muted border border-surface-border shadow-2xl">
            <Image
              src={portfolio.thumbnail}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              alt={portfolio.title}
              width={1200}
              height={800}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
            />

            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Image Badge */}
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm text-primary text-xs font-semibold border border-primary/30">
                Featured Project
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Details */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="space-y-6"
        >
          {/* Title */}
          <motion.h1
            variants={fadeUpVariant(0)}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary"
          >
            {portfolio.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUpVariant(0.1)}
            className="text-text-secondary text-base md:text-lg leading-relaxed"
          >
            {portfolio.description}
          </motion.p>

          {/* Info Grid - Modern Design */}
          <motion.div
            variants={fadeUpVariant(0.2)}
            className="bg-surface-muted rounded-2xl border border-surface-border p-6 space-y-4"
          >
            <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary rounded-full" />
              Project Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoItems.map((item, idx) => (
                item.show && (
                  <div key={idx} className="flex flex-col">
                    <span className="text-text-muted text-xs uppercase tracking-wider">
                      {item.label}
                    </span>
                    <span className="text-text-primary font-medium mt-1 break-words">
                      {item.value}
                    </span>
                  </div>
                )
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={fadeUpVariant(0.3)}
            className="flex flex-wrap gap-4 pt-4"
          >
            {portfolio.live_url && (
              <motion.div {...hoverScale}>
                <Link
                  href={portfolio.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-primary to-primary-dark rounded-xl font-semibold text-white overflow-hidden shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
                >
                  <span className="relative z-10">Live Preview</span>
                  <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            )}

            {portfolio.github && (
              <motion.div {...hoverScale}>
                <Link
                  href={portfolio.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-surface-muted border border-surface-border rounded-xl font-semibold text-text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026.8-.223 1.65-.334 2.5-.334.85 0 1.7.111 2.5.334 1.91-1.295 2.75-1.026 2.75-1.026.544 1.378.201 2.397.099 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub Repository
                </Link>
              </motion.div>
            )}
          </motion.div>

          {/* Share Section */}
          <motion.div
            variants={fadeUpVariant(0.4)}
            className="pt-6 border-t border-surface-border"
          >
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-text-muted text-sm">Share this project:</span>
              <ShareButtons slug={portfolio.slug} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PortfolioItemDetails;