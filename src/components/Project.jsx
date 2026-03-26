import React, { useState } from 'react';
import { CiLink } from "react-icons/ci";
import { SiGithub } from "react-icons/si";
import { HiArrowRight } from "react-icons/hi2";

function Project({ title, description, image, technologies, link, github }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative h-full w-full max-w-[600px] mx-auto mt-[-50px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card */}
      <div className="relative h-full bg-cream-50 rounded-2xl overflow-hidden border border-cream-300 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-cream-400/40 hover:border-cream-400 hover:-translate-y-2">

        {/* Warm gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream-100/80 via-transparent to-cream-200/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Ambient glow */}
        <div className={`absolute -top-24 -right-24 w-48 h-48 bg-cream-300/40 rounded-full blur-3xl transition-all duration-700 ${isHovered ? 'opacity-100 scale-150' : 'opacity-0 scale-100'}`}></div>

        <div className="relative z-10 p-6 flex flex-col h-full">

          {/* Technology badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.split(",").map((tech, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium font-mono-code bg-cream-200 text-zinc-700 border border-cream-300 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all duration-300"
              >
                {tech.trim()}
              </span>
            ))}
          </div>

          {/* Project image */}
          <div className="relative rounded-xl overflow-hidden mb-4 shadow-sm group/img border border-cream-200">
            <img
              className="w-full h-64 object-cover transition-all duration-500 group-hover/img:scale-110"
              src={image}
              alt={title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-zinc-900 mb-3 relative inline-block">
            {title}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-zinc-800 to-cream-500 group-hover:w-full transition-all duration-500"></span>
          </h3>

          {/* Description */}
          <p className="text-zinc-800 leading-relaxed text-sm mb-6 flex-grow">
            {description}
          </p>

          {/* Links */}
          <div className="flex gap-4 mt-auto">
            {link !== "NA" && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-700 hover:border-zinc-600 transition-all duration-300 hover:gap-3"
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
                className="group/link flex items-center gap-2 px-4 py-2 rounded-lg bg-cream-100 border border-cream-300 text-zinc-900 hover:bg-cream-200 hover:border-cream-400 hover:text-zinc-900 transition-all duration-300 hover:gap-3"
              >
                <SiGithub className="text-lg" />
                <span className="text-sm font-medium">Code</span>
                <HiArrowRight className="text-sm opacity-0 group-hover/link:opacity-100 transition-all duration-300 -ml-2 group-hover/link:ml-0" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Glow on hover */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cream-300/30 to-cream-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
}

export default Project;
