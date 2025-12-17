import user_info from "../../data/user_info.js";
import Project from "../Project.jsx";

function Projects() {
  return (
    <section
      id="projects"
      className="px-4 lg:px-16 py-12"
    >
      {/* Projects grid with stagger animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
        {user_info.projects.map((project, index) => {
          return (
            <div 
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Project
                title={project.title}
                image={project.images}
                description={project.description}
                technologies={project.technologies}
                github={project.github}
                link={project.link}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
