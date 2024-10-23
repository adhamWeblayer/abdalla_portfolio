"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { Projects } from "@/constants";

const ProjectsSection = () => {
  return (
    <div className="flex flex-col items-center justify-center z-50" id="projects">
      <h1 className="text-4xl font-light text-white text-center leading-snug mb-10">
       Latest {" "}
        <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-2">
          Projects
        </span>
      </h1>
      <div className="px-20 max-md:px-10 max-sm:px-5 w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Projects.map((project, index) => (
          <div key={index} className="flex items-center justify-center">
            <ProjectCard
              image={project.image}
              title={project.title}
              description={project.description}
              icons={project.icons}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
