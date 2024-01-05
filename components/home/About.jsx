import { aboutPersonalInfoItems } from "@/constants";
import { AboutPersonalInfoItem } from "./AboutPersonalInfoItem";
import Image from "next/image";

function About() {
  return (
    <section className="py-10 sm:py-16 lg:py-20 relative" id="about">
      <div className="absolute rounded-full w-5 h-5 bg-orange-300  top-64 left-40 -z-10"></div>
      <div className="absolute rounded-full w-3 h-3 bg-pink-300  bottom-64 right-40 -z-10"></div>
      <div className="absolute rounded border-2 border-red-600 w-4 md:w-10 h-4 md:h-10 bottom-96 right-96 -z-10"></div>
      <div className="absolute rounded-full border border-teal-600 w-6 h-6 bottom-2 right-2/3 -z-10"></div>

      <div className="container flex flex-col-reverse lg:flex-row gap-3">
        <div className="flex-1">
          <p className="sub-title">About me</p>

          <h3 className="section-heading leading-tight mb-4">
            Developer For You
          </h3>
          <p className="text-slate-600 mb-8 max-w-lg text-lg">
            Passionate web developer and designer crafting innovative,
            functional digital experiences with precision.
          </p>

          <div className="flex flex-wrap flex-row gap-5 md:gap-8 mb-5 md:mb-8">
            {aboutPersonalInfoItems.map((item, i) => (
              <AboutPersonalInfoItem
                key={i}
                item={item}
              ></AboutPersonalInfoItem>
            ))}
          </div>

          <a
            target="_blank"
            href="/doc/cv.pdf"
            className="bg-main uppercase text-light py-3 px-5 rounded"
          >
            Download CV
          </a>
        </div>

        <div className="flex-1">
          <Image
            className="w-3/5 block m-auto"
            placeholder="blur"
            blurDataURL="false"
            src="/images/avatar.png"
            alt="Sahos Mia"
            width="600"
            height="750"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
