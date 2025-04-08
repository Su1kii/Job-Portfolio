import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import GrainImage from "@/assets/images/grain.jpg";
import Pizza from "@/assets/images/Pro pizza.png";
import Birthday from "@/assets/images/Project 1.png";
import WorkInProgress from "@/assets/images/Progress.png";

const portfolioProjects = [
  {
    company: "Product Store",
    year: "2025",
    title: "Latest Project",
    results: [
      { title: "Create, Update, and Delete products" },
      { title: "Tools used: React, Node.js, MongoDB" },
      { title: "Work In Progress" },
    ],
    link: "#",
    image: Birthday,
  },
  {
    company: "Personal Projects",
    year: "2025",
    title: "Personal Projects",
    results: [
      { title: "Projects I've done in my free time" },
      { title: "Learning full-stack development" },
      { title: "Work In Progress" },
    ],
    link: "#",
    image: Pizza,
  },
  {
    company: "SLCC",
    year: "2024-2025",
    title: "Acdemic Projects",
    results: [
      { title: "Classes - 1430" },
      { title: "Learning HTML/CSS/JS" },
      { title: "Projects I've done throughout the semester" },
    ],
    link: "http://www.steven-e.ct.ws/?i=1",
    image: WorkInProgress,
  },
];

import Image from "next/image"; // Import Image component for Next.js

export const ProjectsSection = () => {
  return (
    <section id="projects">
    <section className="pb-16 lg:py-24">
      <div className="container">
      <div className="justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center text-transparent bg-clip-text">Real-world Results</p>
      </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">Portfolio Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">See what I&apos;ve built so far.</p>
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects?.map((project) => (
            <div key={project.title} className="bg-gray-800 rounded-3xl z-0 after:z-10 overflow-hidden after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none sticky top-10"
            >
              <div className="absolute inset-0 -z-10 opacity-5" style={{
                backgroundImage: `url(${GrainImage.src})`,
              }}></div>
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text ">
                  <span>{project.company}</span> 
                  <span>&bull;</span>
                  <span>{project.year}</span>
              </div>
              <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
              <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                {project.results?.map((result, index) => (
                  <li key={index} className="flex gap-2 text-sm md:text-base text-white/50">
                    <CheckIcon className="size-5 md:size-6" />
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                    <span>Visit Live Site</span>
                    <ArrowUpRightIcon className="size-4"/>
                  </button>
                </a>
              )}
              </div>
              <div className="relative">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                />
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </section>
  );
};
