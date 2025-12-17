import { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import user_info from "../../data/user_info.js";
import { IoIosArrowForward } from "react-icons/io";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { HiPhone, HiMail } from "react-icons/hi";

function Hero() {
  const [showContactInfo, setShowContactInfo] = useState(false);

  const handleContactClick = () => {
    setShowContactInfo(!showContactInfo);
  };

  return (
    <section id="hero" className="pt-8 pb-12 md:pt-28 md:pb-20 px-4 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Main Hero Container */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
          
          {/* Left Side - Content */}
          <div className="flex-1 w-full text-center lg:text-left">
            {/* Mobile Profile Image */}
            <div className="lg:hidden mb-4 flex justify-center">
              <div className="relative">
                <img
                  src={user_info.main.photo}
                  className="rounded-full w-32 h-32 border-4 border-zinc-800 shadow-xl"
                  alt="Profile"
                />
              </div>
            </div>

            {/* Name */}
            <h1 className="font-black text-lg md:text-5xl text-white mb-8 mt-8 leading-tight">
              {user_info.main.name}
            </h1>

            {/* Description */}
            <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed mb-4 max-w-2xl mx-auto lg:mx-0">
              {user_info.main.description}
            </p>

            <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              {user_info.main.about}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#projects"
                className="group px-6 py-3 bg-red-900/30 border border-red-800/50 text-red-300 hover:bg-red-800 hover:border-red-700 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-900/50 flex items-center justify-center gap-2"
              >
                View Projects
                <IoIosArrowForward className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              
              <div className="relative">
                <button
                  onClick={handleContactClick}
                  className="group w-full px-6 py-3 bg-zinc-800/50 border border-zinc-700 text-zinc-300 hover:border-red-800/50 hover:text-red-400 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get in Touch
                  <IoIosArrowForward className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                {/* Contact Info Popup - Improved positioning */}
                {showContactInfo && (
                  <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 z-50 w-64 p-4 bg-gradient-to-br from-zinc-900 to-black border border-zinc-700 rounded-xl shadow-2xl shadow-red-900/20 animate-fade-in">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 sm:left-8 sm:translate-x-0 w-4 h-4 bg-zinc-900 border-l border-t border-zinc-700 rotate-45"></div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-red-950/40 rounded-lg flex items-center justify-center">
                            <HiPhone className="text-red-400 text-sm" />
                          </div>
                        <a href="tel:951-466-9984" className="text-zinc-300 hover:text-red-400 transition-colors font-medium text-sm">
                          (951) 466-9984
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-red-950/40 rounded-lg flex items-center justify-center">
                            <HiMail className="text-red-400 text-sm" />
                          </div>
                        <a href="mailto:sbastid1@uci.edu" className="text-zinc-300 hover:text-red-400 transition-colors font-medium text-sm break-all">
                          sbastid1@uci.edu
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a 
                href={user_info.main.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-3 bg-zinc-800/50 border border-zinc-700 rounded-lg hover:border-blue-500 hover:bg-blue-950/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/50"
              >
                <SiLinkedin className="text-zinc-300 group-hover:text-blue-400 text-2xl transition-colors duration-300" />
              </a>
              <a 
                href={user_info.main.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-3 bg-zinc-800/50 border border-zinc-700 rounded-lg hover:border-zinc-500 hover:bg-zinc-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-zinc-900/50"
              >
                <SiGithub className="text-zinc-300 group-hover:text-white text-2xl transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Right Side - Desktop Profile Image */}
          <div className="hidden lg:block flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-900/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-zinc-900 to-black border-2 border-zinc-800 rounded-3xl p-2 hover:border-red-900/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-900/30">
                <img
                  className="rounded-[1.5rem] w-full max-w-md transform hover:scale-[1.02] transition-transform duration-500"
                  src={user_info.main.photo}
                  alt="Profile"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
