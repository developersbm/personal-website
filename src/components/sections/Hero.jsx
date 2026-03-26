import { useState } from 'react';
import user_info from "../../data/user_info.js";
import { IoIosArrowForward } from "react-icons/io";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { HiPhone, HiMail } from "react-icons/hi";

function Hero() {
  const [showContactInfo, setShowContactInfo] = useState(false);

  // Parse the description into pipe-separated parts for styled rendering
  const descParts = user_info.main.description.split("|").map(s => s.trim());

  return (
    <section id="hero" className="pt-8 pb-12 md:pt-28 md:pb-20 px-4 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">

          {/* Left Side */}
          <div className="flex-1 w-full text-center lg:text-left">

            {/* Mobile Profile Image */}
            <div className="lg:hidden mb-6 flex justify-center">
              <img
                src={user_info.main.photo}
                className="rounded-full w-32 h-32 border-4 border-cream-300 shadow-xl"
                alt="Profile"
              />
            </div>

            {/* Code opening tag */}
            <div className="font-mono-code text-sm text-zinc-500 mb-3 tracking-widest hidden lg:block select-none">
              <span className="text-zinc-600">const</span>{" "}
              <span className="text-zinc-900 font-bold">developer</span>{" "}
              <span className="text-zinc-500">=</span>{" "}
              <span className="text-zinc-600">&#123;</span>
            </div>

            {/* Name */}
            <h1 className="font-mono-code font-extrabold text-[44px] text-zinc-900 mb-2 leading-tight tracking-tight">
              {user_info.main.name}
            </h1>

            {/* Code closing tag */}
            <div className="font-mono-code text-sm text-zinc-600 mb-5 hidden lg:block select-none">
              <span>&#125;</span>
            </div>

            {/* Description */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-5">
              {descParts.map((part, i) => (
                <span
                  key={i}
                  className="font-mono-code text-xs font-semibold text-zinc-900 bg-cream-200 border border-cream-300 px-3 py-1 rounded-md"
                >
                  {part}
                </span>
              ))}
            </div>

            {/* About — Inter, dark, very readable */}
            <p className="font-mono-code text-sm md:text-base text-zinc-800 font-normal leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              <span className="text-zinc-500 select-none">&#47;&#42; </span>
              {user_info.main.about}
              <span className="text-zinc-500 select-none"> &#42;&#47; </span>
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#projects"
                className="group px-6 py-3 bg-zinc-900 border border-zinc-900 text-white hover:bg-zinc-700 font-mono-code text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
              >
                ./view-projects
                <IoIosArrowForward className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <div className="relative flex justify-center">
                <button
                  onClick={() => setShowContactInfo(!showContactInfo)}
                  className="group px-6 py-3 bg-cream-100 border border-cream-300 text-zinc-900 hover:border-zinc-900 font-mono-code text-sm font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-sm w-full sm:w-auto"
                >
                  ./get-in-touch
                  <IoIosArrowForward className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                {showContactInfo && (
                  <div className="absolute top-full mt-3 -translate-x-1/2 z-50 w-72 p-4 bg-cream-50 border border-cream-300 rounded-xl shadow-xl animate-fade-in">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-cream-50 border-l border-t border-cream-300 rotate-45"></div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-cream-200 rounded-lg flex items-center justify-center flex-shrink-0">
                          <HiPhone className="text-zinc-800 text-sm" />
                        </div>
                        <a href="tel:951-466-9984" className="font-mono-code text-zinc-900 hover:text-zinc-600 transition-colors text-xs font-medium">
                          (951) 466-9984
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-cream-200 rounded-lg flex items-center justify-center flex-shrink-0">
                          <HiMail className="text-zinc-800 text-sm" />
                        </div>
                        <a href={`mailto:${user_info.main.email}`} className="font-mono-code text-zinc-900 hover:text-zinc-600 transition-colors text-xs font-medium">
                          {user_info.main.email}
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
                className="group p-3 bg-cream-100 border border-cream-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 shadow-sm"
              >
                <SiLinkedin className="text-zinc-800 group-hover:text-blue-600 text-2xl transition-colors duration-300" />
              </a>
              <a
                href={user_info.main.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-cream-100 border border-cream-300 rounded-lg hover:border-zinc-900 hover:bg-zinc-900 transition-all duration-300 shadow-sm"
              >
                <SiGithub className="text-zinc-800 group-hover:text-white text-2xl transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Right Side — Desktop Profile Photo */}
          <div className="hidden lg:block flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cream-300/60 to-cream-400/30 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-cream-50 to-cream-100 border-2 border-cream-300 rounded-3xl p-2 hover:border-cream-400 transition-all duration-500 hover:shadow-2xl hover:shadow-cream-400/30 shadow-lg">
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
