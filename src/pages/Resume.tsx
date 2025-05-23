import React, { useState } from 'react';
import { FileDown, Briefcase, GraduationCap, Award } from 'lucide-react';
import cvFile from '../assets/Bemalak_cv.pdf';

interface TimelineItemProps {
  date: string;
  title: string;
  organization: string;
  description: string;
  type: 'work' | 'education' | 'award';
}

const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, organization, description, type }) => {
  const getIcon = () => {
    switch (type) {
      case 'work':
        return <Briefcase size={20} />;
      case 'education':
        return <GraduationCap size={20} />;
      case 'award':
        return <Award size={20} />;
      default:
        return <Briefcase size={20} />;
    }
  };

  return (
    <div className="mb-12 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-blue-200 dark:before:bg-blue-900">
      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900"></div>
      <div className="absolute top-0 left-6 text-blue-600 dark:text-blue-400">
        {getIcon()}
      </div>
      <div className="pt-0.5">
        <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded px-2 py-1">
          {date}
        </span>
        <h3 className="text-xl font-bold mt-2 mb-1">{title}</h3>
        <h4 className="text-gray-700 dark:text-gray-300 font-medium mb-2">{organization}</h4>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
};

const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState('experience');
  
  const experienceData: TimelineItemProps[] = [
    {
      date: 'June 2024 - Sept 2024',
      title: 'Frontend develpoer',
      organization: 'Kuraz Tech',
      description: 'Worked as a front-end developer in a collaborative team to build an internship management platform for the company. Contributed to the design and implementation of an entrepreneur-investor matchmaking platform alongside backend and mobile teams. Initiated and developed multiple responsive web interfaces.',
      type: 'work'
    },
    {
      date: 'Oct 2024 - Jan 2025',
      title: 'Frontend developer',
      organization: 'Debo Engineering',
      description: 'I performed data cleaning and labeling tasks to prepare datasets for analysis and machine learning. Additionally, I contributed to multiple projects as a front-end developer, focusing on responsive UI design and user experience.',
      type: 'work'
    },
    {
      date: 'May 2025 - Present',
      title: 'Frontend developer/ Mobile developer',
      organization: 'WebCraft Studios',
      description: 'Created responsive and accessible user interfaces using Vue.js and Tailwind CSS. Collaborated with UX designers to implement pixel-perfect designs and animations.',
      type: 'work'
    },
  ];
  
  const educationData: TimelineItemProps[] = [
    {
      date: '2022- 2026',
      title: 'Bachelor of Science in Software Engineering',
      organization: 'Addis Ababa Science and Technology University (AASTU)',
      description: 'Pursuing a degree in Software Engineering with a focus on web and mobile application development.',
      type: 'education'
    },
    {
      date: '2023- 2026',
      title: 'Bachelor of Management ',
      organization: 'Unity University',
      description: 'Pursuing a degree in Management with a focus on project management and business analysis.',
      type: 'education'
    },
    {
      date: '2024',
      title: 'Frontend Web Development Bootcamp (React)',
      organization: 'Google Devlopers club',
      description: 'Completed a comprehensive bootcamp on front-end web development, focusing on React.js for six months doing different projects and competing in hackatones.',
      type: 'education'
    },
  ];
  
  const awardsData: TimelineItemProps[] = [
    {
      date: '2024',
      title: 'Prsedintial Mentorship by President Sahile werk zewde',
      organization: 'IEEE',
      description: 'Awarded for outstanding leadership performance.',
      type: 'award'
    },
  ];

  const renderTimelineItems = () => {
    switch (activeTab) {
      case 'experience':
        return experienceData.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ));
      case 'education':
        return educationData.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ));
      case 'awards':
        return awardsData.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ));
      default:
        return null;
    }
  };

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Resume</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A summary of my experience, education, and achievements
          </p>
          <a 
  href={cvFile}
  download="Beamlak_Kagnew_CV.pdf"
  className="inline-flex items-center px-4 py-2 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
>
  <FileDown size={18} className="mr-2" />
  Download Resume
</a>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
              {['experience', 'education', 'awards'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                    activeTab === tab
                      ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            {renderTimelineItems()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;