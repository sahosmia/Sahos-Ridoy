"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { heroMotion } from "@/lib/motion";

const Hero = () => {
  return (
    <section className="bg-hero-pattern bg-center bg-no-repeat bg-cover text-light pt-40 lg:pt-56 pb-24 md:pb-32">
      <div className="container max-md:text-center">

        {/* Small intro */}
        <motion.h4
          {...heroMotion({ delay: 0 })}
          className="text-2xl md:text-4xl font-medium text-primary"
        >
          Hello, I am
        </motion.h4>

        {/* Name */}
        <motion.h1
          {...heroMotion({ delay: 0.4 })}
          className="text-4xl md:text-7xl font-bold leading-tight pb-4"
        >
          Sahos Mia
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...heroMotion({ delay: 0.8 })}
          className="w-full max-w-2xl text-slate-300 text-lg md:text-xl max-md:mx-auto leading-relaxed"
        >
          I am a creative designer based in New York, passionate and dedicated
          to building exceptional digital experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...heroMotion({ delay: 1.2 })}
          className="mt-10 flex gap-4 max-md:justify-center flex-wrap"
        >
          <Link
            href="/portfolios"
            className="btn btn-primary"
          >
            Portfolio
          </Link>

          <Link
            href="#about"
            className="btn btn-outline"
          >
            About
          </Link>

     
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
