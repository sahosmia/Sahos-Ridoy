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
  title: "Home | Laravel Full-Stack Developer",
  description: "Sahos Mia is a Laravel full-stack developer with 3+ years of experience building CRM, ERP, logistics and inventory systems with Laravel, React and Inertia.js.",
};



export default function Home() {
  return (
    <main>
      <Hero />
      <Target />
      <About />
      <EduExperience />
      {/* <Skills /> */}
      <MyWork />
      <Service />
      <WhyWork />
      <ProjectTogether />
      <Faq />
      <WhatsAppButton />
    </main>
  );
}
