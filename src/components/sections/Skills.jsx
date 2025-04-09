import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { CgVercel } from "react-icons/cg";
import { DiMongodb } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { FaAws, FaCss3Alt, FaGitAlt, FaHtml5, FaNodeJs, FaPython, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { SiExpress, SiFlask, SiPostman, SiTailwindcss, SiNextdotjs, SiCplusplus, SiMysql } from "react-icons/si";
import { SiGithub } from "react-icons/si";

const skillsByCategory = {
  "Programming Languages": [
    { name: "JavaScript", icon: IoLogoJavascript },
    { name: "TypeScript", icon: BiLogoTypescript },
    { name: "Python", icon: FaPython },
    { name: "C/C++", icon: SiCplusplus },
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
  ],
  "Frontend Frameworks": [
    { name: "React", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TailwindCSS", icon: SiTailwindcss },
  ],
  "Backend Technologies": [
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express.js", icon: SiExpress },
    { name: "Flask", icon: SiFlask },
  ],
  "Cloud & DevOps": {
    "AWS": [
      { name: "EC2", icon: FaAws },
      { name: "RDS", icon: FaAws },
      { name: "Cognito", icon: FaAws },
      { name: "Amplify", icon: FaAws },
      { name: "VPC", icon: FaAws },
      { name: "API Gateway", icon: FaAws },
      { name: "Lambda", icon: FaAws },
      { name: "CloudWatch", icon: FaAws },
    ],
    "Other Cloud Services": [
      { name: "Firebase", icon: IoLogoFirebase },
      { name: "Vercel", icon: CgVercel },
      { name: "Docker", icon: FaDocker },
    ]
  },
  "Databases": [
    { name: "MongoDB", icon: DiMongodb },
    { name: "PostgreSQL", icon: BiLogoPostgresql },
    { name: "SQL", icon: SiMysql },
  ],
  "Tools & Version Control": [
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: SiGithub },
    { name: "Postman", icon: SiPostman },
  ],
};

function Skills() {
  return (
    <section id="skills" className="mx-4 lg:mx-20">
      {/* =========== SKILLS TITLE =========== */}
      <div className="text-center mt-20">
        <h4 className="text-4xl font-bold dark:text-white inline-block relative">
          Technologies / Skills
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-800 rounded-full transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
        </h4>
      </div>
      
      {/* =========== SKILLS BY CATEGORY =========== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {Object.entries(skillsByCategory).map(([category, skills]) => (
          <div 
            key={category} 
            className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-zinc-200 dark:border-zinc-800"
          >
            <h5 className="text-xl font-semibold mb-4 text-red-800 dark:text-red-500 flex items-center gap-2">
              <span className="w-1 h-6 bg-red-800 dark:bg-red-500 rounded-full"></span>
              {category}
            </h5>
            {Array.isArray(skills) ? (
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <span
                      key={skill.name}
                      className="inline-flex items-center justify-between gap-x-2 py-2 px-3 hover:-translate-y-1.5 transition-all duration-300 rounded-xl font-medium bg-gradient-to-r from-red-100 to-red-50 text-red-800 dark:from-red-900/30 dark:to-red-800/30 dark:text-red-500 shadow-sm hover:shadow-md"
                    >
                      <Icon className="text-xl" />
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            ) : (
              <div className="space-y-4">
                {Object.entries(skills).map(([subCategory, subSkills]) => (
                  <div key={subCategory}>
                    <h6 className="text-lg font-medium mb-2 text-zinc-700 dark:text-zinc-300 flex items-center gap-2">
                      <span className="w-1 h-4 bg-zinc-300 dark:bg-zinc-600 rounded-full"></span>
                      {subCategory}
                    </h6>
                    <div className="flex flex-wrap gap-3">
                      {subSkills.map((skill) => {
                        const Icon = skill.icon;
                        return (
                          <span
                            key={skill.name}
                            className="inline-flex items-center justify-between gap-x-2 py-2 px-3 hover:-translate-y-1.5 transition-all duration-300 rounded-xl font-medium bg-gradient-to-r from-red-100 to-red-50 text-red-800 dark:from-red-900/30 dark:to-red-800/30 dark:text-red-500 shadow-sm hover:shadow-md"
                          >
                            <Icon className="text-xl" />
                            {skill.name}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
