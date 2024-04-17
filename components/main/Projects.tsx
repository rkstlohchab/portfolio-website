import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-10"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/rapp.png"
          title="ERC20 Token Exchange Website"
          description="Website that facilitates the trading of tokens based on the Ethereum blockchain’s ERC-20 standard."
        />
        <ProjectCard
          src="/appol.png"
          title="Apple Website Clone"
          description="Recreate the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D models."
        />
      </div>
    </div>
  );
};

export default Projects;