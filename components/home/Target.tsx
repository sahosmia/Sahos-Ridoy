"use client";

import { targets } from "../../constants";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

function Target() {
  return (
    <section className="py-16 relative">
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {targets.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="
              group p-8 rounded-3xl 
              bg-[#1d1831] backdrop-blur-xl
              border border-white/20 
              shadow-[0_8px_30px_rgb(0,0,0,0.12)]
              hover:shadow-[0_8px_45px_rgba(0,0,0,0.2)]
              transition-all duration-500 
            "
          >
            {/* Icon */}
            <div
              className="
                w-16 h-16 flex items-center justify-center 
                rounded-2xl 
                bg-gradient-to-br from-main/20 to-main/5 
                text-main text-4xl
                mb-6 
                group-hover:scale-110 
                transition-all duration-500
              "
            >
              {item.icon}
            </div>

            {/* Title */}
            <h4
              className="
                text-white text-xl md:text-2xl font-semibold 
                mb-3 
                group-hover:text-main 
                transition-colors duration-300
              "
            >
              {item.title}
            </h4>

            {/* Description */}
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              {item.content}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Target;
