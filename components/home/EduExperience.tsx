"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeUpVariant, viewportConfig } from "@/lib/motion";
import {
  skillGroups,
  experienceList,
  educationList,
  TimelineEntry,
} from "@/data/skills";

const TimelineItem: FC<TimelineEntry> = ({ title, subtitle, description }) => (
  <div className="relative border-l-2 border-primary p-6 pl-10 group">
    <motion.div
      className="absolute -left-[9px] top-8 w-4 h-4 bg-primary rounded-full border-2 border-surface"
      whileHover={{ scale: 1.3 }}
    />
    <h3 className="text-xl font-semibold text-text-primary">{title}</h3>
    {subtitle && <p className="text-sm text-primary mt-1">{subtitle}</p>}
    <p className="text-text-secondary text-sm mt-3 leading-relaxed">
      {description}
    </p>
  </div>
);

const Column: FC<{ heading: string; items: TimelineEntry[] }> = ({
  heading,
  items,
}) => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={viewportConfig}
  >
    <motion.h2
      variants={fadeUpVariant(0)}
      className="text-3xl font-bold text-text-primary mb-8"
    >
      {heading}
    </motion.h2>
    <div className="bg-surface-muted rounded-2xl border border-surface-border overflow-hidden">
      {items.map((item) => (
        <TimelineItem key={item.title} {...item} />
      ))}
    </div>
  </motion.div>
);

const EduExperience: FC = () => (
  <section className="section bg-surface">
    <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
      <div className="space-y-12">
        <Column heading="Skills" items={skillGroups} />
        <Column heading="Education" items={educationList} />
      </div>
      <Column heading="Experience" items={experienceList} />
    </div>
  </section>
);

export default EduExperience;
