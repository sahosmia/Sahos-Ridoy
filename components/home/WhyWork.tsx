"use client";
import Image from "next/image";
import { why_work_items } from "@/data/others";
import { motion } from "framer-motion";
import { skillMotion } from "@/lib/motion";
import DynamicIcon from "../core/DynamicIcon";

function WhyWork() {
  return (
    <section className="section relative">
      <Image
        src="/images/shape-2.png"
        className=" absolute w-20 top-2 right-2"
        alt=""
        width="200"
        height="200"
      />

      <div className="container-custom flex flex-col lg:flex-row gap-8">
        <div className="pb-48 lg:pb-20 md:mb-16 flex-1 relative after:absolute after:top-24 after:left-2 sm:after:top-40 sm:after:left-20 lg:after:top-36 lg:after:left-0 xl:after:left-20 after:w-6 sm:after:w-10 after:h-6 sm:after:h-10 before:bottom-16 before:right-10 sm:before:right-40 md:before:bottom-20 md:before:right-60 lg:before:right-10 xl:before:right-60 xl:before:bottom-5 before:w-10 before:h-10 md:before:w-20 md:before:h-20 after:bg-primary after:rounded-lg before:absolute before:rounded-lg before:border-primary before:border-4">
          <Image
            className="m-auto block w-3/5 sm:w-auto"
            src="/images/1.png"
            alt=""
            width="3800"
            height="4360"
          />
          <Image
            className="absolute w-3/5 sm:w-auto bottom-10 md:bottom-0 md:left-0"
            src="/images/2.png"
            alt=""
            width="3800"
            height="4500"
          />
        </div>

        <div className="flex-1 lg:pl-10">
          <motion.p {...skillMotion({ delay: 0.3 })} className="section-subtitle">
            Why Work With Me
          </motion.p>

          <motion.h3
            {...skillMotion({ delay: 0.6 })}
            className="section-title leading-tight mb-3 md:mb-5 "
          >
            Best result with top user experience
          </motion.h3>
          <motion.p
            {...skillMotion({ delay: 0.9 })}
            className="text-slate-500 mb-14 pr-16 leading-loose"
          >
            I focus on creating high-quality digital products that provide exceptional user experiences and meet your business goals.
          </motion.p>

          <div className="flex flex-col gap-10">
            {why_work_items.map((item, i) => (
              <motion.div
                {...skillMotion({ delay: i * 0.3 })}
                key={i}
                className="flex flex-col md:flex-row gap-3 md:gap-5"
              >
                <div>
                  <span className="bg-primary text-white w-12 md:w-16 h-12 md:h-16 flex justify-center items-center rounded-2xl text-xl md:text-2xl shadow-lg shadow-primary/20">
                    <DynamicIcon name={item.icon} />
                  </span>
                </div>
                <div>
                  <h5 className="text-lg md:text-xl text-gray-800 font-bold mb-1 md:mb-2">
                    {item.title}
                  </h5>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyWork;
