import React from "react";
import Link from "next/link";
import { socials_links } from "@/constants";

function ProjectTogether() {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="py-10 px-6 md:px-10  sm:py-16 lg:py-20 rounded-3xl overflow-hidden text-slate-300 bg-project-together bg-no-repeat bg-cover bg-center relative after:absolute after:w-full after:h-full after:bg-black after:top-0 after:left-0 after:bg-opacity-90 after:-z-10 z-10 shadow-xl">
          <div className="">
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight pb-5 text-white">
              Have a <span className="text-primary">Project</span> idea. Let’s work
              together!
            </h2>
            <p className="pb-8 text-slate-300 max-w-xl text-lg">
              Do you fancy saying hi to me or do you want to get started with
              your project and you need my help? Feel free to contact me.
            </p>
            <ul className="flex gap-3">
              {socials_links.map((item, i) => (
                <li key={i}>
                  <Link href={item.val} target="_blank">
                    <span className="bg-primary/20 hover:bg-primary/40 transition-colors w-12 h-12 flex items-center justify-center rounded-xl text-white text-xl">
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
