import React from "react";
import Link from "next/link";
import { socials_links } from "@/constants";

function ProjectTogether() {
  return (
    <section className="py-10 sm:py-16">
      <div className="container">
        <div className="py-10 px-6 md:px-10  sm:py-16 lg:py-20 rounded-xl overflow-hidden text-slate-300 bg-project-together bg-no-repeat bg-cover bg-center relative after:absolute after:w-full after:h-full after:bg-black after:top-0 after:left-0 after:bg-opacity-90 after:-z-10 z-10">
          <div className="">
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight pb-5">
              Have a <span className="text-main">Project</span> idea. Let’s work
              together!
            </h2>
            <p className="pb-5 text-slate-400 max-w-xl text-lg">
              Do you fancy saying hi to me or do you want to get started with
              your project and you need my help? Feel free to contact me.
            </p>
            <ul className="flex gap-1">
              {socials_links.map((item, i) => (
                <li key={i}>
                  <Link href={item.val} target="_blank">
                    <span className="bg-main bg-opacity-20 w-10 h-10 flex items-center justify-center rounded text-white">
                      {item.icon}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectTogether;
