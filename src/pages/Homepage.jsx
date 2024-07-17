import { AppContext } from "../App.jsx";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "../components/sections/Hero.jsx";
import Projects from "../components/sections/Projects.jsx";
import PersonalProjects from "../components/sections/PersonalProjects.jsx";
import Footer from "../components/sections/Footer.jsx";
import EducationAndExperience from "../components/sections/EducationAndExperience.jsx";
import Skills from "../components/sections/Skills.jsx";

function Homepage() {
  const { theme, switchTheme } = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <div className="bg-zinc-100 dark:bg-zinc-900">
      <div className="xl:w-[1340px] md:mx-auto h-full border-x border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950">

        <Hero />
				<EducationAndExperience />
        <h4 className="text-4xl font-bold text-center mt-20 mb-10 dark:text-white">
        Projects
        </h4>
        <Projects />
        <Skills />

        <hr className="mt-12 border border-zinc-300 dark:border-zinc-800" />
        <PersonalProjects />
        <Footer theme={theme} />
      </div>
    </div>
  );
}

export default Homepage;