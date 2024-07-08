"use client";
import { targets } from "../../constants";
import { motion } from "framer-motion";
import { serviceMotion } from "@/lib/motion";

function Target() {
  return (
    <section className="py-10 sm:py-16 relative">
      <div className="container flex flex-col lg:flex-row gap-3">
        {targets.map((item, i) => (
          <motion.div
            {...serviceMotion({ delay: i * 0.3 })}
            key={i}
            className="p-5 md:p-8 flex-1 flex flex-col flex-wrap justify-center items-center bg-gray-50 border border-1 border-slate-100  rounded-lg  transition ease-in-out duration-300 shadow"
          >
            <span className="pb-2 md:pb-5 text-4xl md:text-5xl text-main">
              {item.icon}
            </span>
            <h4 className="text-xl md:text-2xl font-semibold pb-2 md:pb-5 text-center">
              {item.title}
            </h4>
            <p className="text-lg text-center text-slate-600">{item.content}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Target;
