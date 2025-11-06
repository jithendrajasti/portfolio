import React from "react";
import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

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
      </main>
      {/* footer */}
    </div>
  );
};

export default Home;
