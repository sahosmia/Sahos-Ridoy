import { Metadata } from "next";
import About from "../components/home/About";
import Hero from "../components/home/Hero";
import MyWork from "../components/home/MyWork";
import ProjectTogether from "../components/home/ProjectTogether";
import Service from "../components/home/Service";
import Skills from "../components/home/Skills";
import Faq from "../components/home/Faq";
import Target from "../components/home/Target";
import WhyWork from "../components/home/WhyWork";
import WhatsAppButton from "@/components/home/WhatsAppButton";
import EduExperience from "@/components/home/EduExperience";

export const metadata: Metadata = {
  title: "Home Page",
  description: "Sahos mia is a profetional web developer",
};



export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <EduExperience />
      {/* <Skills /> */}
      <Target />
      <Service />
      <MyWork />
      <WhyWork />
      <Faq />
      <ProjectTogether />
      <WhatsAppButton />
    </main>
  );
}
