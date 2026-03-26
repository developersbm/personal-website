import { AppContext } from "../App.jsx";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "../components/sections/Hero.jsx";
import Projects from "../components/sections/Projects.jsx";
import Footer from "../components/sections/Footer.jsx";
import EducationAndExperience from "../components/sections/EducationAndExperience.jsx";
import Skills from "../components/sections/Skills.jsx";

function Homepage() {
  const { theme } = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <div className="bg-cream-200">
      <div className="xl:w-[1340px] md:mx-auto h-full border-x border-cream-300 bg-cream-100">

        <Hero />
        <EducationAndExperience />
        <h4 className="text-4xl font-bold text-center mt-20 mb-10 text-zinc-900">
          <span className="font-mono-code text-stone-400 text-3xl mr-2">&lt;</span>Projects<span className="font-mono-code text-stone-400 text-3xl ml-2">/&gt;</span>
          <p className="font-mono-code text-xs text-cream-500 mt-2 tracking-widest">&#47;&#47; some of my best projects</p>
        </h4>
        <Projects />
        <Skills />

        <hr className="mt-12 border border-cream-300" />
        <Footer theme={theme} />
      </div>
    </div>
  );
}

export default Homepage;