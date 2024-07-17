import { useState } from 'react';
import user_info from "../../data/user_info.js";
import { IoIosArrowForward } from "react-icons/io";
import { SiGithub, SiLinkedin } from "react-icons/si";

function Hero() {
  const [showContactInfo, setShowContactInfo] = useState(false);

  const handleContactClick = () => {
    setShowContactInfo(!showContactInfo);
  };

  return (
    <section id="hero" className="pb-12 md:pt-28 flex lg:px-24">
      <div className="self-center">
        <div className="hs-tooltip [--placement:right] w-20 hs-tooltip-toggle">
          <img
            src={user_info.main.photo}
            className="rounded-full mb-6 lg:hidden"
          />
        </div>
        <div className="flex gap-2 align-center flex-wrap md:flex-nowrap">
          <div className="lg:w-[80%] text-zinc-900 dark:text-zinc-100 self-center relative">
            <h2 className="text-xl">{user_info.main.role}</h2>
            <h1 className="font-black mt-3 text-5xl lg:w-[85%]">
              {user_info.main.name}
            </h1>

            <p className="mt-6 dark:text-zinc-300 text-base font-light lg:w-[87%] leading-7">
              {user_info.main.description}
            </p>

            <div className="flex gap-2 mt-6 relative">
              <a
                href="#projects"
                className="px-6 py-3 border border-black hover:bg-red-800 hover:text-white hover:border-red-800 dark:border-white font-medium transition-all duration-300"
              >
                Projects
              </a>
              
              <div className="relative">
                <a
                  onClick={handleContactClick}
                  className="px-6 py-3 hover:text-red-800 dark:hover:text-red-500 transition-all duration-300 flex gap-3 hover:gap-4 cursor-pointer"
                >
                  <span className="self-center font-medium">Contact</span>
                  <IoIosArrowForward className="self-center" />
                </a>
                
              </div>
            </div>

            {showContactInfo && (
                  <div className="p-4 border border-gray-300 bg-white w-42 dark:bg-black rounded shadow-lg mr-52 absolute"
                  style={{marginLeft: '15em', marginBottom: '-1em', marginTop: '-4em'}}>                    
                    <p className="font-medium">Tel: +1 (951)-466-9984</p>
                    <p className="font-medium">Email: sbastid1@uci.edu</p>
                  </div>
                )}

            <div className="flex gap-4 mt-6">
              <a href={user_info.main.linkedin} target="_blank" rel="noopener noreferrer">
                <SiLinkedin className="text-black dark:text-white text-3xl" />
              </a>
              <a href={user_info.main.github} target="_blank" rel="noopener noreferrer">
                <SiGithub className="text-black dark:text-white text-3xl" />
              </a>
            </div>
          </div>

          <div className="hidden lg:block w-[480px] self-center">
            <img
              className="rounded-[10%] transform rotate-3"
              src={user_info.main.photo}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
