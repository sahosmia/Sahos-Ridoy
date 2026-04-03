"use client";
import { sectionHeaderMotion } from "@/lib/motion";
import { motion } from "framer-motion";

export default function SectionHead({
  title,
  des,
  content,
}: {
  title: string;
  des: string;
  content?: string;
}) {
  return (
    <div className="container-custom mb-10">
      <motion.p {...sectionHeaderMotion({ delay: 0.3 })} className="section-subtitle">
        {des}
      </motion.p>
      <motion.h3
        {...sectionHeaderMotion({ delay: 0.6 })}
        className="section-title"
      >
        {title}
      </motion.h3>
      {content && <p className="text-slate-600 mb-8 max-w-2xl">{content}</p>}
    </div>
  );
}
