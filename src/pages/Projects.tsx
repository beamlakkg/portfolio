import React, { useState } from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.png';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.jpg';
import img7 from '../assets/7.png';
import img8 from '../assets/8.png';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
  category: string[];
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Academix',
      description: ' A comprehensive university-management system that streamlines enrollment, grading, and campus administration for students and staff alike. Its intuitive dashboard delivers real-time academic insights and self-service tools, making day-to-day campus life effortless.',
      image: img6,
      tech: ['React', 'Django', 'MongoDB'],
      github: 'https://github.com/Acaddemixx/Academix.git',
      demo: '',
      category: ['frontend']
    },
    {
      id: 2,
      title: 'Entrepreneur & Investor Platform',
      description: 'A matchmaking web app that pairs founders with the right backers through curated project profiles and smart recommendation algorithms. Built-in pitch submissions, due-diligence workflows, and secure messaging remove the friction from fundraising.',
      image: img3,
      tech: ['React', 'Laravel', 'Tailwind CSS'],
      github: 'https://github.com/Project-Kuraz-Group-8/E-and-I-Frontend.git',
      demo: '',
      category: ['frontend']
    },
    {
      id: 3,
      title: 'Kuraz Internship Management ',
      description: ' A dedicated platform for the Kuraz company to streamline the internship process, from application submission to final evaluation. It enables efficient tracking, communication, and management of interns throughout their program.',
      image: img4 ,
      tech: ['React', 'Laravel', 'AWS', 'Docker'],
      github: '',
      demo: '',
      category: ['frontend']
    },
    {
      id: 4,
      title: 'Mead Restaurant Reservation',
      description: 'A modern restaurant site where guests can browse the menu, place food orders, and reserve tables in one fluid experience. Real-time availability and a fully responsive design keep both diners and staff perfectly in sync.',
      image: img5 ,
      tech: ['JavaScript', 'PHP', 'Mysql'],
      github: '',
      demo: '',
      category: ['frontend', 'backend']
    },
    {
      id: 5,
      title: 'Hiyaw Kal',
      description: 'A user-friendly Bible reading platform that allows smooth navigation through books and chapters. Designed for clarity and ease, it helps users focus on scripture without distractions.',
      image: img7 ,
      tech: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
      github: 'https://github.com/Betelhem-Demsis/bible-pdf.git',
      demo: '',
      category: ['frontend', 'django']
    },
    {
      id: 6,
      title: 'Redesign Chip-Chip app',
      description: 'A complete redesign of the ChipChip e-commerce app interface to improve usability and visual appeal. The updated design simplifies navigation and enhances the overall user experience.',
      image: img8 ,
      tech: ['figma'],
      github: 'https://www.figma.com/design/oxAwb4pcsTrKNpOkJ1CUdL/Chip-Chip-App---Group-4---Section-A---Fall-2025-v1.0?node-id=56-15&t=kjGQWGwyZorAvgde-1',
      demo: 'https://www.figma.com/design/oxAwb4pcsTrKNpOkJ1CUdL/Chip-Chip-App---Group-4---Section-A---Fall-2025-v1.0?node-id=56-15&t=kjGQWGwyZorAvgde-1',
      category: ['ui/ux']
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a specific problem
            or explore new technologies.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {['all', 'frontend', 'backend', 'ui/ux'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full transition-all ${
                  filter === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative overflow-hidden group h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech, index) => (
                        <span 
                          key={index} 
                          className="text-xs px-2 py-1 bg-blue-600/80 text-white rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-blue-600/80 text-white rounded-full">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-6 h-20 overflow-hidden text-ellipsis">
                  {project.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  
                  <button 
                    className="text-sm text-blue-600 dark:text-blue-400 flex items-center gap-1 hover:underline"
                    onClick={() => alert(`View details for ${project.title}`)}
                  >
                    <Code size={16} />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;