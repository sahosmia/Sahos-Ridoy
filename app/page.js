import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import MyWork from "@/components/home/MyWork";
import ProjectTogether from "@/components/home/ProjectTogether";
import Service from "@/components/home/Service";
import Skills from "@/components/home/Skills";
import Target from "@/components/home/Target";
import WhyWork from "@/components/home/WhyWork";
import { portfolios } from "@/constants";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Service />
      <MyWork portfolios={portfolios} />
      <Target />
      <WhyWork />
      <ProjectTogether />
    </main>
  );
}
