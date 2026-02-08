"use client";

import PageWrapper from "@/components/PageWrapper";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <PageWrapper>
      <div className="flex flex-col">
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Contact />
      </div>
    </PageWrapper>
  );
}
