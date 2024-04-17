"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";


const Projects = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={slideInFromTop}
        className="flex flex-col items-center justify-center py-10"
        id="projects"
      >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          My Projects
        </h1>
        <motion.div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">


          {/* Project 1 */}
          <motion.div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">

            <Image
              src="/rapp.png"
              alt='ERC20 Token Exchange Website'
              width={1000}
              height={1000}
              className="w-full object-contain"
            />
            <motion.div className="relative p-4 z-50">
              <h1 className="text-2xl font-semibold text-white">ERC20 Token Exchange Website</h1>
              <motion.p className="mt-2 text-gray-300">Website that facilitates the trading of tokens based on the Ethereum blockchain’s ERC-20 standard.</motion.p>
              <motion.a
                href="https://soft-glade-2476.on.fleek.co/"
                target="_blank"
                className="mt-4 inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-md "
              >
                View Project
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Project 2 */}
          <motion.div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">

            <Image
              src="/appol.png"
              alt='Apple Website Clone'
              width={1000}
              height={1000}
              className="w-full object-contain"
            />
            <motion.div className="relative p-4 z-50">
              <h1 className="text-2xl font-semibold text-white">Apple Website Clone</h1>
              <motion.p className="mt-2 text-gray-300">Recreate the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D models.</motion.p>
              <motion.a
                href="https://appol.netlify.app/"
                target="_blank"
                className="mt-4 inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-md "
              >
                View Project
              </motion.a>
            </motion.div>
          </motion.div>

        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;