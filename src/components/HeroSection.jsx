import React from "react";
import { ArrowDown, Github, Linkedin, Instagram } from "lucide-react";
import profile from "../assets/profile.jpg";
const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 mb-12"
    >
      <div className="flex items-center justify-center relative">
        <div className="w-full overflow-hidden rounded-full ring-4 ring-secondary/30 shadow-lg">
          <img
            src={profile}
            alt="Jithendra Jasti profile"
            className="w-60 h-60 object-cover rounded-full ring-8 ring-primary"
          />
        </div>
      </div>

      <div className="container max-w-4xl mx-auto text-center z-10 mt-8">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Jithendra
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Jasti
            </span>
          </h1>

          <p className="text-sm md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I create impactful web applications using modern technologies.
            Focused on full-stack development, I build products that are fast,
            scalable, and visually engaging.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
