import user_info from "../../data/user_info.js";
import { FaLandmark, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";
import { PiCertificateFill, PiCertificate } from "react-icons/pi";
import { SiAmazonaws, SiGithub, SiMicrosoft } from "react-icons/si";
import { useState } from "react";

function EducationAndExperience() {
  // State for the Certificates Slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const certCount = user_info.certificates.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === certCount - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? certCount - 1 : prev - 1));
  };

  // Helper to get the correct icon component
  const getCertIcon = (iconName) => {
    switch (iconName) {
      case "aws": return <SiAmazonaws className="text-orange-500 text-3xl" />;
      case "github": return <SiGithub className="text-white text-3xl" />;
      case "microsoft": return <SiMicrosoft className="text-blue-500 text-3xl" />;
      default: return <PiCertificate className="text-zinc-500 text-3xl" />;
    }
  };

  return (
    <section id="education-and-experience" className="mt-20 mx-4 lg:mx-20 flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-[55%]">
        
        <div className="mb-6">
          <h4 className="text-2xl font-bold text-white flex gap-3 items-center mb-2">
            <div className="p-2 bg-red-900/30 rounded-lg">
              <FaLandmark className="text-xl text-red-500" />
            </div>
            Education
          </h4>
          <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-red-800 rounded-full"></div>
        </div>

        {user_info.education.map((edu, index) => (
          <div key={index} className="group mb-6">
            <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-6 border border-zinc-800 hover:border-red-900/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center px-3 py-1.5 rounded-lg bg-red-950/40 border border-red-800/50 mb-4">
                  <span className="text-xs font-semibold text-red-300 uppercase tracking-wide">
                    {edu.duration}
                  </span>
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <img 
                      className="w-16 h-16 rounded-xl border-2 border-zinc-800 group-hover:border-red-900/50 transition-all duration-300 object-cover" 
                      src={edu.image} 
                      alt="School Logo" 
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-xl mb-2 group-hover:text-red-400 transition-colors duration-300">
                      {edu.school}
                    </h3>
                    <p className="text-zinc-400 font-medium">
                      {edu.degree}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pl-2 border-l-2 border-zinc-800 group-hover:border-red-900/50 transition-colors duration-300">
                  <div className="flex gap-3 pl-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                    </div>
                    <span className="text-sm text-zinc-400 leading-relaxed">
                      {edu.awards}
                    </span>
                  </div>
                  <div className="flex gap-3 pl-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                    </div>
                    <span className="text-sm text-zinc-400 leading-relaxed">
                      {edu.courses}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-10">

        <div className="mb-6">
          <h4 className="text-2xl font-bold text-white flex gap-3 items-center mb-2">
            <div className="p-2 bg-red-900/30 rounded-lg">
              <PiCertificateFill className="text-xl text-red-500" />
            </div>
            Certificates
          </h4>
          <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-red-800 rounded-full"></div>
        </div>

          <div className="relative w-full overflow-hidden bg-zinc-900/50 border border-zinc-800 rounded-2xl p-1">
            
            {/* Slider Track */}
            <div 
              className="flex transition-transform duration-500 ease-out" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {user_info.certificates.map((cert, index) => (
                <div key={index} className="w-full flex-shrink-0 p-4">
                  {/* Individual Certificate Card */}
                  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 h-full flex flex-col justify-between hover:border-red-500/30 transition-colors duration-300 shadow-lg">
                    
                    {/* Header: Icon + Title */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1 pr-4">
                        <h5 className="text-lg font-bold text-white leading-tight mb-1">
                          {cert.title}
                        </h5>
                        <span className="text-xs font-medium text-red-400 uppercase tracking-wider">
                          Verified Certificate
                        </span>
                      </div>
                      <div className="bg-zinc-800 p-2 rounded-lg">
                        {getCertIcon(cert.icon)}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-zinc-400 mb-6 line-clamp-3">
                      {cert.description}
                    </p>

                    {/* Link Button */}
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center justify-center w-full py-2.5 bg-zinc-800 hover:bg-red-900/30 text-white text-sm font-medium rounded-lg border border-zinc-700 hover:border-red-500/50 transition-all duration-300 group"
                    >
                      View Credential
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Controls (Bottom Bar) */}
            <div className="flex items-center justify-between px-6 py-3 border-t border-zinc-800/50 bg-zinc-900/80">
              {/* Pagination Dots */}
              <div className="flex gap-2">
                {user_info.certificates.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentSlide === idx ? "w-8 bg-red-500" : "w-2 bg-zinc-600 hover:bg-zinc-500"
                    }`}
                  />
                ))}
              </div>

              {/* Prev/Next Buttons */}
              <div className="flex gap-2">
                <button 
                  onClick={prevSlide}
                  className="p-2 rounded-lg bg-zinc-800 text-white hover:bg-red-600 transition-colors"
                >
                  <FaChevronLeft />
                </button>
                <button 
                  onClick={nextSlide}
                  className="p-2 rounded-lg bg-zinc-800 text-white hover:bg-red-600 transition-colors"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <div className="w-full lg:w-[45%]">
        <div className="mb-6">
          <h4 className="text-2xl font-bold text-white flex gap-3 items-center mb-2">
            <div className="p-2 bg-red-900/30 rounded-lg">
              <FaBuildingUser className="text-xl text-red-500" />
            </div>
            Experience
          </h4>
          <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-red-800 rounded-full"></div>
        </div>

        <div className="lg:h-[690px] lg:overflow-y-auto scroll-smooth pr-2 space-y-4 custom-scrollbar">
          {user_info.experience.map((exp, index) => (
            <div key={index} className="group relative">
              {/* Timeline connector */}
              {index !== user_info.experience.length - 1 && (
                <div className="absolute left-[30px] top-[60px] bottom-[-16px] w-0.5 bg-gradient-to-b from-red-800/50 to-zinc-800"></div>
              )}
              
              <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-xl p-5 border border-zinc-800 hover:border-red-900/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center px-3 py-1 rounded-lg bg-zinc-800/50 border border-zinc-700 mb-3">
                    <span className="text-xs font-medium text-zinc-300">
                      {exp.duration}
                    </span>
                  </div>

                  <div className="flex items-start gap-3 mb-4">
                    <div className="relative">
                      <img 
                        className="w-12 h-12 rounded-lg border-2 border-zinc-800 group-hover:border-red-900/50 transition-all duration-300 object-cover" 
                        src={exp.image} 
                        alt="Company Logo" 
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white text-lg group-hover:text-red-400 transition-colors duration-300">
                        {exp.company}
                      </h3>
                      <p className="text-sm text-zinc-400 font-medium">
                        {exp.position}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.descriptions.map((desc, descIndex) => (
                      <li className="flex gap-3" key={descIndex}>
                        <div className="flex-shrink-0 mt-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                        </div>
                        <span className="text-sm text-zinc-400 leading-relaxed">
                          {desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationAndExperience;