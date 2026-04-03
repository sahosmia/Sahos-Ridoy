"use client";
import { aboutPersonalInfoItems } from "@/data/others";
import { AboutPersonalInfoItem } from "./AboutPersonalInfoItem";
import Image from "next/image";
import { aboutMotion } from "@/lib/motion";
import { motion } from "framer-motion";


export default function About() {
  return (
    <section id="about" className="section relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
      {/* Decorative shapes */}
      <div className="absolute w-8 h-8 bg-orange-300/40 rounded-full top-40 left-20 blur-2xl"></div>
      <div className="absolute w-6 h-6 bg-pink-300/40 rounded-full bottom-40 right-20 blur-xl"></div>
      <div className="absolute w-10 h-10 border-2 border-red-400 rounded-xl bottom-72 right-72 rotate-45"></div>
      <div className="absolute w-6 h-6 border border-teal-500/40 rounded-full bottom-10 right-1/2"></div>


      <div className="container-custom flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <motion.p {...aboutMotion({ delay: 0.2 })} className="section-subtitle">
            About me
          </motion.p>


          <motion.h3
            {...aboutMotion({ delay: 0.4 })}
            className="section-title"
          >
            Developer For You
          </motion.h3>


          <motion.p
            {...aboutMotion({ delay: 0.6 })}
            className="text-slate-600 max-w-xl text-lg mb-8"
          >
            Passionate web developer and designer crafting innovative, functional digital experiences with precision.
          </motion.p>


          {/* Personal info grid */}
          <motion.div
            {...aboutMotion({ delay: 0.8 })}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8"
          >
            {aboutPersonalInfoItems.map((item, i) => (
              <AboutPersonalInfoItem key={i} item={item} />
            ))}
          </motion.div>


          {/* Button */}
          <motion.a
            {...aboutMotion({ delay: 1 })}
            href="/doc/cv.pdf"
            target="_blank"
            className="btn btn-primary rounded-xl"
          >
            Download CV
          </motion.a>
        </div>


        {/* Right Image */}
        <motion.div
          {...aboutMotion({ delay: 1.2 })}
          className="flex-1 flex justify-center items-center"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] rounded overflow-hidden shadow-xl ring-4 ring-white">
            <Image
              src="/images/avatar.png"
              alt="Sahos Mia"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}