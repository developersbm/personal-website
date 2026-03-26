import user_info from "../../data/user_info.js";
import { FaLandmark, FaChevronLeft, FaChevronRight, FaAward, FaBookReader } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";
import { PiCertificateFill, PiCertificate } from "react-icons/pi";
import { SiAmazonaws, SiGithub, SiMicrosoft } from "react-icons/si";
import { useState } from "react";

function EducationAndExperience() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const certCount = user_info.certificates.length;

  const nextSlide = () => setCurrentSlide((prev) => (prev === certCount - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? certCount - 1 : prev - 1));

  const getCertIcon = (iconName) => {
    switch (iconName) {
      case "aws": return <SiAmazonaws className="text-orange-500 text-3xl" />;
      case "github": return <SiGithub className="text-zinc-700 text-3xl" />;
      case "microsoft": return <SiMicrosoft className="text-blue-500 text-3xl" />;
      default: return <PiCertificate className="text-zinc-500 text-3xl" />;
    }
  };

  const SectionHeading = ({ icon: Icon, label, tag }) => (
    <div className="mb-6">
      <h4 className="text-2xl font-bold text-zinc-900 flex gap-3 items-center mb-2">
        <div className="p-2 bg-cream-200 border border-cream-300 rounded-lg">
          <Icon className="text-xl text-zinc-700" />
        </div>
        {label}
        {tag && (
          <span className="font-mono-code text-xs text-cream-500 ml-1 hidden md:inline">&#47;&#47; {tag}</span>
        )}
      </h4>
      <div className="h-1 w-20 bg-gradient-to-r from-zinc-800 to-zinc-400 rounded-full"></div>
    </div>
  );

  return (
    <section id="education-and-experience" className="mt-5 mx-4 lg:mx-20 flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-[55%]">

        <SectionHeading icon={FaLandmark} label="Education" tag="my academic story :O" />

        <div className="relative bg-gradient-to-br from-cream-50 to-cream-100 rounded-xl p-5 border border-cream-300 hover:border-cream-400 transition-all duration-500 hover:shadow-xl hover:shadow-cream-400/30 mb-8">
          <div className="relative z-10 flex flex-col gap-8">
            {user_info.education.map((edu, index) => (
              <div key={index} className="group relative">
                <div
                  className={`absolute left-[23px] top-[56px] w-[2px] bg-cream-300 group-hover:bg-cream-400 transition-colors duration-300 ${index !== user_info.education.length - 1 ? 'bottom-[-24px]' : 'bottom-[8px]'
                    } ${(index === user_info.education.length - 1 && !edu.awards && !edu.courses) ? 'hidden' : ''}`}
                ></div>

                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div className="flex items-start gap-4">
                    <div className="relative z-10 flex-shrink-0">
                      <img
                        className="w-12 h-12 rounded-lg border-2 border-cream-300 group-hover:border-cream-400 transition-all duration-300 object-cover bg-cream-50"
                        src={edu.image}
                        alt="School Logo"
                      />
                    </div>
                    <div className="flex-1 mt-0.5">
                      <h3 className="font-bold text-zinc-900 text-lg leading-tight group-hover:text-zinc-600 transition-colors duration-300 max-w-[90%] md:max-w-full">
                        {edu.degree}
                      </h3>
                      <p className="text-sm text-zinc-800 font-medium mt-1">
                        {edu.school}
                      </p>
                      {edu.specialization && (
                        <div className="mt-2.5">
                          <span className="inline-block px-3 py-1 bg-cream-200 border border-cream-300 text-zinc-700 text-xs font-semibold rounded-md font-mono-code">
                            {edu.specialization}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start w-full md:w-auto mt-3 md:mt-0 pl-16 md:pl-0 flex-shrink-0">
                    <div className="inline-flex items-center px-3 py-1 rounded-lg bg-cream-200 border border-cream-300 mb-0 md:mb-1.5">
                      <span className="text-xs font-medium text-zinc-600 font-mono-code">
                        {edu.duration}
                      </span>
                    </div>
                    {edu.location && (
                      <span className="text-xs text-zinc-700 font-medium md:mr-1">
                        {edu.location}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-5 pl-4 ml-[20px] mt-4 mb-2">
                  {edu.awards && (
                    <div className="flex items-start gap-4 pl-4">
                      <div className="flex-shrink-0 p-2 rounded-lg bg-yellow-50 border border-yellow-200">
                        <FaAward className="text-yellow-600 text-lg" />
                      </div>
                      <div className="flex flex-col justify-center mt-[-2px]">
                        <span className="text-[13px] font-bold text-yellow-700 uppercase tracking-widest font-mono-code">Honors &amp; Awards</span>
                        <span className="text-[12.5px] text-zinc-800 font-medium leading-relaxed mt-[-3px]">
                          {edu.awards.replace(/Awards:\s*/i, "")}
                        </span>
                      </div>
                    </div>
                  )}
                  {edu.courses && (
                    <div className="flex items-start gap-4 pl-4">
                      <div className="flex-shrink-0 p-2 rounded-lg bg-blue-50 border border-blue-200">
                        <FaBookReader className="text-blue-600 text-lg" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-1 font-mono-code">Relevant Coursework</span>
                        <span className="text-sm text-zinc-800 leading-relaxed">
                          {edu.courses.replace(/(Relevant Coursework:|Courses:)\s*/i, "")}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <SectionHeading icon={PiCertificateFill} label="Certificates" tag="what should I do next?" />

          <div className="relative w-full overflow-hidden bg-cream-50 border border-cream-300 rounded-xl p-1">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {user_info.certificates.map((cert, index) => (
                <div key={index} className="w-full flex-shrink-0 p-3">
                  <div className="bg-cream-100 border border-cream-300 rounded-xl p-5 h-full flex flex-col justify-between hover:border-cream-400 transition-colors duration-300 shadow-sm">

                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1 pr-4">
                        <h5 className="text-lg font-bold text-zinc-900 leading-tight mb-1">
                          {cert.title}
                        </h5>
                        <span className="text-xs font-medium text-zinc-800 uppercase tracking-wider font-mono-code">
                          ✓ Verified Certificate
                        </span>
                      </div>
                      <div className="bg-white border border-cream-200 p-2 rounded-lg shadow-sm">
                        {getCertIcon(cert.icon)}
                      </div>
                    </div>

                    <p className="text-sm text-zinc-800 mb-4 line-clamp-2">
                      {cert.description}
                    </p>

                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center w-full py-2 bg-cream-50 hover:bg-zinc-900 text-zinc-900 hover:text-white text-sm font-medium rounded-lg border border-cream-300 hover:border-zinc-900 transition-all duration-300 group"
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

            <div className="flex items-center justify-between px-6 py-3 border-t border-cream-300 bg-cream-100/80">
              <div className="flex gap-2">
                {user_info.certificates.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? "w-8 bg-zinc-800" : "w-2 bg-cream-300 hover:bg-cream-400"
                      }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-lg bg-cream-50 border border-cream-300 text-zinc-700 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-colors"
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-lg bg-cream-50 border border-cream-300 text-zinc-700 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-colors"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[45%]">
        <SectionHeading icon={FaBuildingUser} label="Experience" tag="currently at IBM!" />

        <div className="lg:h-[725px] lg:overflow-y-auto scroll-smooth pr-2 space-y-4 custom-scrollbar">
          {user_info.experience.map((exp, index) => (
            <div key={index} className="group relative">
              {index !== user_info.experience.length - 1 && (
                <div className="absolute left-[30px] top-[60px] bottom-[-16px] w-0.5 bg-gradient-to-b from-cream-400 to-cream-200"></div>
              )}

              <div className="relative bg-gradient-to-br from-cream-50 to-cream-100 rounded-xl p-5 border border-cream-300 hover:border-cream-400 transition-all duration-300 hover:shadow-lg hover:shadow-cream-400/20">
                <div className="absolute inset-0 bg-gradient-to-br from-cream-200/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

                <div className="relative z-10">
                  {exp.roles.length === 1 ? (
                    <>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                        <div className="flex items-start gap-3">
                          <div className="relative flex-shrink-0">
                            <img
                              className="w-12 h-12 rounded-lg border-2 border-cream-300 group-hover:border-cream-400 transition-all duration-300 object-cover"
                              src={exp.image}
                              alt="Company Logo"
                            />
                          </div>
                          <div className="flex-1 mt-0.5 min-w-0 pr-2">
                            <h3 className="font-bold text-zinc-900 text-lg group-hover:text-zinc-600 transition-colors duration-300">
                              {exp.roles[0].title}
                            </h3>
                            <p className="text-sm text-zinc-800 font-medium truncate">
                              {exp.company}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start w-full md:w-auto mt-3 md:mt-0 pl-14 md:pl-0 flex-shrink-0">
                          <div className="inline-flex items-center px-3 py-1 rounded-lg bg-cream-200 border border-cream-300 mb-0 md:mb-1.5 whitespace-nowrap">
                            <span className="text-xs font-medium text-zinc-800 font-mono-code">
                              {exp.roles[0].duration}
                            </span>
                          </div>
                          {exp.roles[0].location && (
                            <span className="text-xs text-zinc-700 font-medium md:mr-1">
                              {exp.roles[0].location}
                            </span>
                          )}
                        </div>
                      </div>

                      <ul className="space-y-2.5">
                        {exp.roles[0].descriptions.map((desc, descIndex) => (
                          <li className="flex gap-3" key={descIndex}>
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
                            </div>
                            <span className="text-sm text-zinc-800 leading-relaxed">{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <div className="flex flex-col">
                      <div className="flex flex-row md:flex-row items-center gap-3 mb-6">
                        <div className="relative flex-shrink-0">
                          <img
                            className="w-12 h-12 rounded-lg border-2 border-cream-300 group-hover:border-cream-400 transition-all duration-300 object-cover"
                            src={exp.image}
                            alt="Company Logo"
                          />
                        </div>
                        <h3 className="font-bold text-zinc-900 text-lg group-hover:text-zinc-600 transition-colors duration-300">
                          {exp.company}
                        </h3>
                      </div>

                      <div className="flex flex-col gap-6 relative">
                        <div className="absolute left-[23px] top-[-16px] bottom-[24px] w-0.5 bg-cream-300"></div>

                        {exp.roles.map((role, rIndex) => (
                          <div key={rIndex} className="relative pl-[3.25rem]">
                            <div className="absolute left-[19px] top-[7px] w-2.5 h-2.5 rounded-full bg-cream-300 border-2 border-cream-50 z-10 group-hover:bg-zinc-700 transition-colors duration-300"></div>

                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                              <div className="flex-1 mt-0.5 min-w-0 pr-2">
                                <h4 className="font-bold text-zinc-800 text-[16px] group-hover:text-zinc-600 transition-colors duration-300">
                                  {role.title}
                                </h4>
                              </div>
                              <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start w-full md:w-auto mt-2 md:mt-0 flex-shrink-0">
                                <span className="text-xs font-semibold text-zinc-800 mb-0 md:mb-1 whitespace-nowrap font-mono-code">
                                  {role.duration}
                                </span>
                                {role.location && (
                                  <span className="text-xs text-zinc-700 font-medium whitespace-nowrap md:mr-1">
                                    {role.location}
                                  </span>
                                )}
                              </div>
                            </div>

                            <ul className="space-y-2.5">
                              {role.descriptions.map((desc, dIndex) => (
                                <li className="flex gap-3" key={dIndex}>
                                  <div className="flex-shrink-0 mt-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-cream-400"></div>
                                  </div>
                                  <span className="text-sm text-zinc-800 leading-relaxed">{desc}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
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