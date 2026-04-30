import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { CiLink, CiPlay1 } from "react-icons/ci";
import { SiGithub } from "react-icons/si";
import { HiArrowRight } from "react-icons/hi2";

function Project({ title, description, image, technologies, link, videolink, github }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isImageOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsImageOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isImageOpen]);

  return (
    <>
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

          {/* Project image (click to expand) */}
          <button
            type="button"
            className="relative rounded-xl overflow-hidden mb-4 shadow-sm group/img border border-cream-200 cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/30"
            onClick={() => setIsImageOpen(true)}
            aria-label={`Expand image for ${title}`}
          >
            <img
              className="w-full h-48 transition-all duration-500 group-hover/img:scale-110"
              src={image}
              alt={title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
          </button>

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
            {link && link !== "NA" && (
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
            {videolink && videolink !== "NA" && (
              <a
                href={videolink}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-700 hover:border-zinc-600 transition-all duration-300 hover:gap-3"
              >
                <CiPlay1 className="text-xl" />
                <span className="text-sm font-medium">Video Demo</span>
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

      {/* Image lightbox (rendered at the page root via portal) */}
      {isImageOpen &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-label={`Image preview: ${title}`}
            onClick={() => setIsImageOpen(false)}
          >
            <div className="absolute inset-0 bg-zinc-900/70"></div>

            <div
              className="relative z-10"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                ref={closeButtonRef}
                className="absolute -top-3 -right-3 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-cream-50 border border-cream-300 text-zinc-900 hover:bg-cream-200 transition-colors"
                onClick={() => setIsImageOpen(false)}
                aria-label="Close image preview"
              >
                <span className="text-2xl leading-none">×</span>
              </button>

              <img
                src={image}
                alt={title}
                className="block max-w-[90vw] max-h-[90vh] object-contain rounded-2xl bg-cream-50 border border-cream-300 shadow-xl"
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default Project;
