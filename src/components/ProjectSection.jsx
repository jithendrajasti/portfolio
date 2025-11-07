import React from 'react'
import chatapp from '../assets/chatapp.png'
import saasapp from '../assets/saasapp.png'
import jobportalapp from '../assets/jobportalapp.png'
import todoapp from '../assets/todoapp.png'
import weatherapp from '../assets/weatherapp.png'

import { ArrowRight, ExternalLink, Github } from "lucide-react";

const ProjectSection = () => {
    const projects = [
        {
          id: 1,
          title: "Real-Time Chat Application (MERN + Socket.IO)",
          description: "Architected a MERN stack app with Socket.IO for instantaneous communication, secure JWT authentication, and an integrated Google Generative AI chatbot.",
          image: chatapp,
          tags: ["React.js", "Daisy UI", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT", "Google Generative Al"],
          demoUrl: "https://msgly-app.onrender.com/",
          githubUrl: "https://github.com/jithendrajasti/msgly",
        },
        {
          id: 2,
          title: "AI SaaS Web Platform (MERN)",
          description: "Engineered a scalable multi-tenant SaaS architecture with robust Clerk authentication and subscription payments.",
          image: saasapp,
          tags: ["React.js", "Material-UI", "Node.js", "MongoDB", "Clerk Payments & Authentication"],
          demoUrl: "https://ai-saas-project-ten.vercel.app/",
          githubUrl: "https://github.com/jithendrajasti/AiSaas-project",
        },
        {
          id: 3,
          title: "Job Portal Web Application (MERN)",
          description: "A full-stack portal with Role-Based Access Control (RBAC), a secure RESTful API, job filtering, and resume upload features.",
          image: jobportalapp,
          tags: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
          demoUrl: "https://jobportal-frontend-sigma.vercel.app/",
          githubUrl: "https://github.com/jithendrajasti/JOBPORTAL",
        },
        {
          id: 4,
          title: "ToDo App (React + Tailwind CSS)",
          description: "Task manager with state management via hooks and localStorage persistence.",
          image: todoapp,
          tags: ["React", "Tailwind CSS"],
          demoUrl: "https://todo-app-ten-psi-v10yoe9ct0.vercel.app/",
          githubUrl: "https://github.com/jithendrajasti/todo-app",
        },
        {
          id: 5,
          title: "Weather App (OpenWeather API + JS)",
          description: "Real-time forecast app using Open Weather API and a responsive Tailwind UI.",
          image: weatherapp,
          tags: ["JavaScript", "OpenWeather API", "Tailwind CSS"],
          demoUrl: "https://jithendrajasti.github.io/Weather-app/",
          githubUrl: "https://github.com/jithendrajasti/Weather-app",
        },
      ];
return (
    <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {" "}
                Featured <span className="text-primary"> Projects </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects. Each project was carefully
                crafted with attention to detail, performance, and user experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                    >
                        <div className="h-48 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag,index) => (
                                    <span key={index} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>
                            <div className="flex justify-center items-center">
                                <div className="flex space-x-3">
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a
                    className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    target="_blank"
                    href="https://github.com/jithendrajasti"
                >
                    Check My Github <ArrowRight size={16} />
                </a>
            </div>
        </div>
    </section>
)
}

export default ProjectSection