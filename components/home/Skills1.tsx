"use client";
import Image from "next/image";
import { skills } from "@/data/skills";
import { skillImageMotion, skillMotion } from "@/lib/motion";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="py-5 sm:py-16  relative">
      <div className="container flex flex-col lg:flex-row items-center gap-5  md:gap-20">
        <motion.div
          {...skillImageMotion({ delay: 0.6 })}
          className="w-full lg:w-1/2 relative h-80 sm:h-[500px]"
        >
          <Image
            className="w-4/5 flex m-auto"
            src="/images/faq2.jpg"
            alt="Faq - Sahos"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
        <div className="w-full lg:w-2/4 ">
          <div className="w-full lg:w-4/5">
            {skills.map((skill, i) => (
              <motion.div
                {...skillMotion({ delay: i * 0.3 })}
                key={i}
                className="w-full pb-5"
              >
                <div className="flex justify-between">
                  <h5 className="font-medium">{skill.title}</h5>
                  <span className="font-medium">{skill.per}</span>
                </div>
                <div className="bg-gray-200   rounded">
                  <div className=" " style={{ width: skill.per }}>
                    <div
                      className={`bg-primary py-1 w-full rounded skill-bar `}
                    ></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
