import { BiLogoPostgresql, BiLogoGoLang } from "react-icons/bi";
import { FaDocker, FaLinux, FaAws, FaNodeJs, FaPython, FaJira } from "react-icons/fa6";
import { 
  SiExpress, 
  SiCplusplus, 
  SiMysql, 
  SiKubernetes, 
  SiJenkins, 
  SiRedis, 
  SiGraphql, 
  SiGnubash, 
  SiTerraform,
  SiSocketdotio,
  SiAmazonaws,
  SiGit,
  SiGithub,
  SiJira,
  SiGooglecloud
} from "react-icons/si";

const skillsByCategory = {
  "Systems & Scripting": [
    { name: "C++", icon: SiCplusplus },
    { name: "C", icon: SiCplusplus },
    { name: "Go", icon: BiLogoGoLang },
    { name: "Python", icon: FaPython },
    { name: "Bash", icon: SiGnubash },
    { name: "Linux", icon: FaLinux },
  ],
  "Cloud Infrastructure": [
    { name: "EC2", icon: FaAws },
    { name: "Lambda", icon: SiAmazonaws },
    { name: "VPC", icon: FaAws },
    { name: "CloudWatch", icon: FaAws },
    { name: "S3", icon: FaAws },
    { name: "DynamoDB", icon: FaAws },
    { name: "Load Balancer", icon: FaAws },
    { name: "Google Cloud", icon: SiGooglecloud },
  ],
  "DevOps & CI/CD": [
    { name: "Docker", icon: FaDocker },
    { name: "Kubernetes", icon: SiKubernetes },
    { name: "Jenkins", icon: SiJenkins },
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Terraform", icon: SiTerraform },
    { name: "Jira", icon: SiJira}
  ],
  "Backend & Data": [
    { name: "gRPC", icon: FaNodeJs },
    { name: "Redis", icon: SiRedis },
    { name: "PostgreSQL", icon: BiLogoPostgresql },
    { name: "WebSockets", icon: SiSocketdotio },
    { name: "GraphQL", icon: SiGraphql },
    { name: "Node.js", icon: FaNodeJs },
  ]
};

function Skills() {
  return (
    <section id="skills" className="mx-4 lg:mx-20">
      <div className="text-center mt-20">
        <h4 className="text-4xl font-bold dark:text-white inline-block relative">
          Technical Skills
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-800 rounded-full transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
        </h4>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {Object.entries(skillsByCategory).map(([category, skills]) => (
          <div 
            key={category} 
            className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-zinc-200 dark:border-zinc-800"
          >
            <h5 className="text-xl font-semibold mb-6 text-red-800 dark:text-red-500 flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-700 pb-2">
              <span className="w-1 h-6 bg-red-800 dark:bg-red-500 rounded-full"></span>
              {category}
            </h5>
            
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <span
                    key={skill.name}
                    className="inline-flex items-center justify-between gap-x-2 py-2 px-4 hover:-translate-y-1 transition-all duration-300 rounded-lg font-medium bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 hover:border-red-500 dark:hover:border-red-500 hover:text-red-600 dark:hover:text-red-400"
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
    </section>
  );
}

export default Skills;