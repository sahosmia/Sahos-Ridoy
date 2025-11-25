"use client";
import { services } from "../../constants";
import SectionHead from "./SectionHead";
import { motion } from "framer-motion";
import { serviceMotion } from "@/lib/motion";

function Service() {
  return (
    <section
      className="py-20 relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      id="service"
    >
      <SectionHead
        title="My Services"
        des="What I offer to my clients"
      />

      <div className="container mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((item, index) => (
          <motion.div
            {...serviceMotion({ delay: index * 0.1 })}
            key={index}
            className="
              group relative rounded-2xl p-8 backdrop-blur-xl 
              bg-white/5 border border-white/10 shadow-xl 
              hover:bg-white/10 transition-all duration-500
            "
          >
            {/* Top Accent Line */}
            <span
              className="
                absolute top-0 left-0 h-1 w-0 bg-main 
                group-hover:w-full transition-all duration-500
              "
            ></span>

            {/* Icon */}
            <div
              className="
                text-main text-4xl w-20 h-20 rounded-2xl 
                flex justify-center items-center
                bg-white/10 backdrop-blur-lg
                border border-white/10 mx-auto mb-6
              "
            >
              {item.icon}
            </div>

            <h4 className="text-white text-xl font-semibold text-center mb-3">
              {item.title}
            </h4>

            <p className="text-slate-300 text-sm text-center leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Soft Background Glow */}
      <div className="absolute w-72 h-72 -right-10 top-1/3 bg-main/40 blur-[130px] rounded-full"></div>
    </section>
  );
}

export default Service;
