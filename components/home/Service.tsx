"use client";
import { services } from "../../constants";
import SectionHead from "./SectionHead";
import { motion } from "framer-motion";
import { serviceMotion } from "@/lib/motion";

function Service() {
  return (
    <section className="bg-light py-10 sm:py-16 relative" id="service">
      <SectionHead title="My Service" des="Service I offer to my clients" />

      <div className="container flex flex-col md:flex-row flex-wrap gap-5">
        {services.map((item, index) => (
          <motion.div
            {...serviceMotion({ delay: index / 20 })}
            key={index}
            className="transition delay-150 after:transition-all after:duration-700 duration-700 ease-in-out flex-shrink-1 flex-grow basis-1/3 lg:basis-[30%] p-5 md:p-10 bg-slate-800 rounded text-center relative after:absolute hover:after:w-full after:w-0 after:h-1 after:bg-main after:bottom-0 after:left-0 after:-z-10 z-10 overflow-hidden  shadow"
          >
            <span className="text-main  bg-light bg-opacity-20 text-3xl md:text-4xl lg:text-5xl w-16 md:w-20 h-16 md:h-20 rounded-full flex justify-center items-center m-auto mb-8">
              {item.icon}
            </span>
            <h4 className="text-light text-md md:text-xl font-semibold mb-3 md:mb-5">
              {item.title}
            </h4>
            <p className="text-slate-300 text-sm max-w-80 m-auto">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
      <div className=" absolute w-40 h-40 top-1/2 -right-7 -translate-y-1/2  rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 blur-3xl"></div>
    </section>
  );
}

export default Service;
