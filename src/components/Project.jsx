import React, { useState } from 'react';
import { CiLink } from "react-icons/ci";
import { SiGithub } from "react-icons/si";
import { HiArrowRight } from "react-icons/hi2";

function Project({ title, description, image, technologies, link, github }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative h-full w-full max-w-[600px] mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card with glassmorphism effect */}
      <div className="relative h-full bg-gradient-to-br from-zinc-900 via-zinc-900 to-black dark:from-zinc-950 dark:via-zinc-900 dark:to-black rounded-2xl overflow-hidden border border-zinc-800 dark:border-zinc-700 shadow-2xl transition-all duration-500 hover:shadow-red-500/20 hover:shadow-2xl hover:border-red-900/50 hover:-translate-y-2">
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-red-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Glowing orb effect */}
        <div className={`absolute -top-24 -right-24 w-48 h-48 bg-red-500/20 rounded-full blur-3xl transition-all duration-700 ${isHovered ? 'opacity-100 scale-150' : 'opacity-0 scale-100'}`}></div>
        
        <div className="relative z-10 p-6 flex flex-col h-full">
          
          {/* Technology badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.split(",").map((tech, index) => (
              <span 
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-950/40 text-red-300 border border-red-800/50 backdrop-blur-sm hover:bg-red-900/50 hover:border-red-700 transition-all duration-300"
              >
                {tech.trim()}
              </span>
            ))}
          </div>

          {/* Project image with overlay effect */}
          <div className="relative rounded-xl overflow-hidden mb-4 shadow-lg group/img">
            <img 
              className="w-full h-48 object-cover transition-all duration-500 group-hover/img:scale-110" 
              src={image} 
              alt={title} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Title with animated underline */}
          <h3 className="text-2xl font-bold text-white mb-3 relative inline-block">
            {title}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-700 group-hover:w-full transition-all duration-500"></span>
          </h3>

          {/* Description */}
          <p className="text-zinc-400 dark:text-zinc-400 leading-relaxed text-sm mb-6 flex-grow">
            {description}
          </p>

          {/* Links with improved styling */}
          <div className="flex gap-4 mt-auto">
            {link !== "NA" && (
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group/link flex items-center gap-2 px-4 py-2 rounded-lg bg-red-950/30 border border-red-800/50 text-red-300 hover:bg-red-900/50 hover:border-red-600 hover:text-red-200 transition-all duration-300 hover:gap-3"
              >
                <CiLink className="text-xl" />
                <span className="text-sm font-medium">Live Demo</span>
                <HiArrowRight className="text-sm opacity-0 group-hover/link:opacity-100 transition-all duration-300 -ml-2 group-hover/link:ml-0" />
              </a>
            )}
            {github !== "NA" && (
              <a 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group/link flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700 text-zinc-300 hover:bg-zinc-700/50 hover:border-zinc-600 hover:text-white transition-all duration-300 hover:gap-3"
              >
                <SiGithub className="text-lg" />
                <span className="text-sm font-medium">Code</span>
                <HiArrowRight className="text-sm opacity-0 group-hover/link:opacity-100 transition-all duration-300 -ml-2 group-hover/link:ml-0" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-red-600/10 to-red-900/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
}

export default Project;
