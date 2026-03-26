import { BiLogoPostgresql, BiLogoGoLang } from "react-icons/bi";
import { FaDocker, FaLinux, FaAws, FaNodeJs, FaPython } from "react-icons/fa6";
import {
  SiCplusplus, SiKubernetes, SiJenkins, SiRedis, SiGraphql,
  SiGnubash, SiTerraform, SiSocketdotio, SiAmazonaws,
  SiGit, SiGithub, SiJira, SiGooglecloud
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
    { name: "Jira", icon: SiJira },
  ],
  "Backend & Data": [
    { name: "gRPC", icon: FaNodeJs },
    { name: "Redis", icon: SiRedis },
    { name: "PostgreSQL", icon: BiLogoPostgresql },
    { name: "WebSockets", icon: SiSocketdotio },
    { name: "GraphQL", icon: SiGraphql },
    { name: "Node.js", icon: FaNodeJs },
  ],
};

function Skills() {
  return (
    <section id="skills" className="mx-4 lg:mx-20 mt-[-100px]">
      <div className="text-center mt-20">
        <h4 className="text-4xl font-bold text-zinc-900 inline-block relative">
          <span className="font-mono-code text-cream-400 text-3xl mr-2">&lt;</span>
          Technical Skills
          <span className="font-mono-code text-cream-400 text-3xl ml-2">/&gt;</span>
        </h4>
        <p className="font-mono-code text-xs text-cream-500 mt-2 tracking-widest">&#47;&#47; tools &amp; technologies I work with</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {Object.entries(skillsByCategory).map(([category, skills]) => (
          <div
            key={category}
            className="bg-cream-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-cream-300 hover:border-cream-400"
          >
            <h5 className="text-xl font-semibold mb-4 text-zinc-900 flex items-center gap-2 border-b border-cream-200 pb-3">
              <span className="w-1 h-6 bg-zinc-800 rounded-full"></span>
              {category}
              <span className="font-mono-code text-xs text-cream-500 ml-auto">&#47;&#47; {skills.length} tools</span>
            </h5>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <span
                    key={skill.name}
                    className="inline-flex items-center justify-between gap-x-2 py-2 px-4 hover:-translate-y-1 transition-all duration-300 rounded-lg font-medium bg-cream-100 text-zinc-900 border border-cream-300 hover:border-zinc-800 hover:bg-zinc-900 hover:text-white"
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