
//         <div className="">
//             <div className="">
//               <a href="#about-me" className="cursor-pointer">
//                 About me
//               </a>
//               <a href="#skills" className="cursor-pointer">
//                 Skills
//               </a>
//               <a href="#projects" className="cursor-pointer">
//                 Projects
//               </a>
//             </div>
//           </div>

//         <div className="flex flex-row gap-5">
//             {Socials.map((social) => (
//               <a href={social.link} target="_blank" rel="noopener noreferrer" key={social.name}>
//                 <Image
//                   src={social.src}
//                   alt={social.name}
//                   width={24}
//                   height={24}
//                 />
//               </a>
//             ))}
//           </div>

//       </div>


"use client"

import { useState } from "react";
import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full fixed top-0 shadow-lg bg-opacity-50 bg-gray-900 backdrop-blur-md z-50 sm:px-4 py-3
       shadow-[#2A0E61]/50 bg-[#03001417] px-10">
      <div className="flex items-center justify-between
          w-full h-full  flex-row m-auto px-[10px]
      ">
        <a href="#about-me" className="flex items-center
            h-auto w-auto flex-row
        ">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-spin"
          />
          <span className="font-bold ml-2 text-gray-300 hidden md:block
          ">
            Rkstlohchab
          </span>
        </a>


        <div className="flex items-center md:hidden">
          <button
            onClick={handleMenuToggle}
            className="text-gray-200 hover:text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>


        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:w-auto`}
        >
          <nav>
            <ul className="flex flex-col md:flex-row md:gap-8 md:mr-20
              items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200
            ">
              <li>
                <a href="#about-me" className="text-gray-200 hover:text-white">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-200 hover:text-white">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-200 hover:text-white">
                  Projects
                </a>
              </li>
            </ul>
          </nav>
        </div>


        <div className="hidden md:flex md:flex-row md:gap-5">
          {Socials.map((social) => (
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              key={social.name}
            >
              <Image src={social.src} alt={social.name} width={24} height={24} />
            </a>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default Navbar;
