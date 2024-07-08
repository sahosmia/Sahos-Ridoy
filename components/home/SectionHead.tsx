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
    <div className="container mb-5">
      <motion.p {...sectionHeaderMotion({ delay: 0.3 })} className="sub-title">
        {des}
      </motion.p>
      <motion.h3
        {...sectionHeaderMotion({ delay: 0.6 })}
        className="section-heading"
      >
        {title}
      </motion.h3>
      {content && <p className="text-slate-600 mb-8">{content}</p>}
    </div>
  );
}
