import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Navbar from "@/components/main/Navbar";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";

export default function Home() {
  return (
      <div className="flex flex-col gap-5 items-center">
        
        <Hero />
        <Skills />
        <Projects />
        
      </div>
  );
}
