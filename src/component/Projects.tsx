import React from "react";
import { motion } from "framer-motion";
import ExpCard from "./ExpCard";
import { Project } from "../../typings";
import ProjectCard from "./ProjectCard";
type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <article className="h-screen flex flex-col relative text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects?.map((elem, index, arr) => {
          return (
            <ProjectCard
              key={index}
              Index={index + 1}
              Length={arr.length}
              Data={elem}
            />
          );
        })}
        <ProjectCard />
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </article>
  );
};

export default Projects;
