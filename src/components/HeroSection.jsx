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
        <div className="w-full overflow-hidden rounded-full ring-4 ring-primary/20">
          <img
            src={profile}
            alt="Jithendra Jasti profile"
            className="w-60 h-60 object-cover rounded-full"
          />
        </div>

        {/* Social Icons */}
        <div className="absolute -right-14 flex flex-col gap-4">
          {[
            {
              href: "https://github.com/jithendrajasti",
              icon: <Github className="h-5 w-5 sm:h-7 sm:w-7" />,
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/in/jithendra-mohan-jasti-40691b285",
              icon: <Linkedin className="h-5 w-5 sm:h-7 sm:w-7" />,
              label: "LinkedIn",
            },
            {
              href: "https://www.instagram.com/jithendrajasti",
              icon: <Instagram className="h-5 w-5 sm:h-7 sm:w-7" />,
              label: "Instagram",
            },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="bg-background/90 dark:bg-slate-800 text-primary p-2 rounded-full shadow-md hover:scale-110 hover:text-primary transition-transform duration-300"
            >
              {icon}
            </a>
          ))}
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
