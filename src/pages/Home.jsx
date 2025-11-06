import React from "react";
import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMe";
import SkillsSection from "../components/SkillsSection";
import ProjectSection from "../components/ProjectSection";

const Home = () => {

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme toggle */}
      <ThemeToggle />
      {/* Background effects */}
      <StarBackground />
      {/*  navbar */}
      <Navbar />
      {/* main content */}
      <main>
        <HeroSection/>
        <AboutMe />
        <SkillsSection />
        <ProjectSection />
      </main>
      {/* footer */}
    </div>
  );
};

export default Home;
