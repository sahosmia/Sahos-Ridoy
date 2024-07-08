"use client";
import { aboutPersonalInfoItems } from "../../constants";
import { AboutPersonalInfoItem } from "./AboutPersonalInfoItem";
import Image from "next/image";
import Me from "../../public/images/avatar.png";
import { aboutMotion } from "@/lib/motion";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="py-10 sm:py-16  relative" id="about">
      <div className="absolute rounded-full w-5 h-5 bg-orange-300  top-64 left-40 -z-10"></div>
      <div className="absolute rounded-full w-3 h-3 bg-pink-300  bottom-64 right-40 -z-10"></div>
      <div className="absolute rounded border-2 border-red-600 w-4 md:w-10 h-4 md:h-10 bottom-96 right-96 -z-10"></div>
      <div className="absolute rounded-full border border-teal-600 w-6 h-6 bottom-2 right-2/3 -z-10"></div>

      <div className="container flex flex-col-reverse lg:flex-row gap-3">
        <div className="flex-1">
          <motion.p {...aboutMotion({ delay: 1.6 })} className="sub-title">
            About me
          </motion.p>

          <motion.h3
            {...aboutMotion({ delay: 2 })}
            className="section-heading leading-tight mb-4"
          >
            Developer For You
          </motion.h3>
          <motion.p
            {...aboutMotion({ delay: 2.4 })}
            className="text-slate-600 mb-8 max-w-lg text-lg"
          >
            Passionate web developer and designer crafting innovative,
            functional digital experiences with precision.
          </motion.p>

          <motion.div
            {...aboutMotion({ delay: .6 })}
            className="flex flex-wrap flex-row gap-5 md:gap-8 mb-5 md:mb-8"
          >
            {aboutPersonalInfoItems.map((item, i) => (
              <AboutPersonalInfoItem key={i} item={item} />
            ))}
          </motion.div>

          <motion.a
            {...aboutMotion({ delay: 1 })}
            target="_blank"
            href="/doc/cv.pdf"
            className="bg-main uppercase text-light py-3 px-5 rounded"
          >
            Download CV
          </motion.a>
        </div>

        <motion.div
          {...aboutMotion({ delay: 3.6 })}
          className="flex-1 flex justify-center items-center"
        >
          <Image
            className="w-3/5 block m-auto rounded mb-10"
            placeholder="blur"
            src={Me}
            alt="Sahos Mia"
            width="600"
            height="650"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default About;
