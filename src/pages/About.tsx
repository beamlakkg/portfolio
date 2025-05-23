import React from "react";
import { Code, Server, Layout, Database, Globe, Brain } from "lucide-react";

interface SkillProps {
  name: string;
  level: number;
  icon: React.ReactNode;
}

const Skill: React.FC<SkillProps> = ({ name, level, icon }) => {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <div className="mr-2 text-blue-600 dark:text-blue-400">{icon}</div>
          <span className="font-medium">{name}</span>
        </div>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {level}%
        </span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000"
          style={{
            width: `${level}%`,
            transform: "translateX(-100%)",
            animation: "slideRight 1.5s forwards",
          }}
        ></div>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  const skills = [
    { name: "JavaScript/TypeScript", level: 95, icon: <Code size={20} /> },
    { name: "React/Nextjs", level: 90, icon: <Layout size={20} /> },
    { name: "UI/UX Desgin", level: 85, icon: <Server size={20} /> },
    { name: "PHP", level: 70, icon: <Database size={20} /> },
    { name: "Node.js", level: 75, icon: <Globe size={20} /> },
    { name: "Documentation", level: 95, icon: <Brain size={20} /> },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know me, my background, and what I'm skilled at
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <h3 className="text-2xl font-bold mb-3">Who I Am</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I am a passionate and creative 4th-year Software Engineering
                student at Addis Ababa Science and Technology University
                (AASTU). I specialize in building beautiful, responsive websites
                and applications from the ground up—starting from requirement
                gathering and UI/UX design to seamless front-end development and
                integration. 
              </p>
              <p className="text-gray-700 dark:text-gray-300">
               While I’m strongest in front-end technologies, I’m
                also exploring and improving my skills in back-end development
                to become a full-stack developer. I enjoy turning ideas into
                functional, user-friendly digital experiences that not only work
                well but also look great.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <h3 className="text-2xl font-bold mb-3">What I Do</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">
                    ✓
                  </span>
                  Build responsive and interactive websites and web applications
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">
                    ✓
                  </span>
                  Design modern, clean, and creative user interfaces (UI/UX)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">
                    ✓
                  </span>
                  Design and optimize database schemas
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">
                    ✓
                  </span>
                  Integrate front-end with back-end APIs and services
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">
                    ✓
                  </span>
                  Continuously learn and experiment with new technologies and tools
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <h3 className="text-2xl font-bold mb-5">My Skills</h3>

              <div>
                {skills.map((skill, index) => (
                  <Skill
                    key={index}
                    name={skill.name}
                    level={skill.level}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <h3 className="text-2xl font-bold mb-3">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-3 mt-4">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "Mysql",
                  "React Native",
                  "PostgreSQL",
                  "Trello",
                  "Docker",
                  "CSS",
                  "PHP",
                  "Tailwind",
                  "Java",
                  "C++",
                  "Python",
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
