"use client";
import Image from "next/image";
import { why_work_items } from "@/data/others";
import { motion } from "framer-motion";
import FeatureCard from "../ui/FeatureCard";
import {
  fadeRightVariant,
  fadeUpVariant,
  staggerContainer,
  viewportConfig,
} from "@/lib/motion";

function WhyWork() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewportConfig}
      className="section relative overflow-hidden bg-surface"
    >
      {/* Animated background decoration */}
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        whileInView={{ opacity: 0.5, rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-10 left-10 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl"
      />

      {/* Decorative shapes with animation */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-5 right-5 w-16 md:w-20 z-10"
      >
        <Image
          src="/images/shape-2.png"
          alt="Decorative shape"
          width={200}
          height={200}
          className="w-full h-auto opacity-50 hover:opacity-100 transition-opacity duration-500"
        />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">

          {/* Left Side - Images */}
          <motion.div
            variants={fadeRightVariant(0)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex-1 relative"
          >
            <div className="relative pb-48 lg:pb-0">
              {/* Main Image */}
              <div className="relative z-10">
                <Image
                  className="w-4/5 mx-auto lg:w-full"
                  src="/images/1.png"
                  alt="Working illustration"
                  width={800}
                  height={800}
                  priority={false}
                />
              </div>

              {/* Floating Second Image */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-0 right-0 md:left-10 z-20"
              >
                <Image
                  className="w-3/5 mx-auto md:w-2/3 lg:w-4/5"
                  src="/images/2.png"
                  alt="Working illustration 2"
                  width={800}
                  height={800}
                />
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute top-20 left-2 sm:left-10 lg:left-0 xl:left-10">
                <div className="w-6 h-6 sm:w-10 sm:h-10 bg-primary rounded-lg rotate-12 animate-pulse" />
              </div>
              <div className="absolute bottom-16 right-10 sm:right-20 md:right-32 lg:right-10 xl:right-20">
                <div className="w-10 h-10 md:w-16 md:h-16 border-4 border-primary rounded-lg rotate-45" />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex-1 lg:pl-8 xl:pl-12"
          >
            {/* Section Header */}
            <motion.span
              variants={fadeUpVariant(0)}
              className="inline-block text-primary text-sm md:text-base font-semibold uppercase tracking-[0.2em] mb-3"
            >
              Why Work With Me
            </motion.span>

            <motion.h3
              variants={fadeUpVariant(0.1)}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-4"
            >
              Best result with{" "}
              <span className="text-primary">top user experience</span>
            </motion.h3>

            <motion.p
              variants={fadeUpVariant(0.2)}
              className="text-text-secondary text-base md:text-lg mb-10 leading-relaxed"
            >
              I focus on creating high-quality digital products that provide
              exceptional user experiences and meet your business goals.
            </motion.p>

            {/* Features List */}
            <div className="flex flex-col gap-6 md:gap-8">
              {why_work_items.map((item, index) => (
                <FeatureCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  index={index}
                  layout="list"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default WhyWork;
