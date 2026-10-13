import React, { useState, useMemo } from 'react';
import ResumeHeader from '../components/resume/ResumeHeader';
import ResumeDownloadButton from '../components/resume/ResumeDownloadButton';
import ExperienceSection from '../components/resume/ExperienceSection';
import InternshipSection from '../components/resume/InternshipSection';
import EducationSection from '../components/resume/EducationSection';
import AwardsSection from '../components/resume/AwardsSection';
import {
  professionalExperience,
  internships,
  education,
  achievements,
} from '../data/resume';

type TabId = 'experience' | 'internships' | 'education' | 'awards';

const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('experience');

  // Only show navigation for sections that have content
  const navigationSections = useMemo(() => {
    const sections: { id: TabId; label: string }[] = [];
    if (professionalExperience.length > 0)
      sections.push({ id: 'experience', label: 'Experience' });
    if (internships.length > 0) sections.push({ id: 'internships', label: 'Internships' });
    if (education.length > 0) sections.push({ id: 'education', label: 'Education' });
    if (achievements.length > 0) sections.push({ id: 'awards', label: 'Awards' });
    return sections;
  }, []);

  const handleTabChange = (tabId: TabId) => {
    setActiveTab(tabId);
  };

  return (
    <section id="resume" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ResumeHeader />
        <ResumeDownloadButton />

        {navigationSections.length > 0 && (
          <nav
            aria-label="Resume sections"
            className="mb-16 flex justify-center"
          >
            <div className="flex flex-wrap justify-center gap-3">
              {navigationSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleTabChange(section.id)}
                  className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-200 border-2 ${
                    activeTab === section.id
                      ? 'border-slate-900 bg-slate-900 text-white shadow-lg dark:border-white dark:bg-white dark:text-slate-900'
                      : 'border-slate-300 bg-white/60 text-slate-700 hover:border-slate-400 hover:bg-white dark:border-slate-600 dark:bg-slate-900/40 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:bg-slate-800/60'
                  }`}
                  aria-current={activeTab === section.id ? 'page' : undefined}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </nav>
        )}

        <div>
          {activeTab === 'experience' && professionalExperience.length > 0 && (
            <ExperienceSection experiences={professionalExperience} />
          )}
          {activeTab === 'internships' && internships.length > 0 && (
            <InternshipSection internships={internships} />
          )}
          {activeTab === 'education' && education.length > 0 && (
            <EducationSection educations={education} />
          )}
          {activeTab === 'awards' && achievements.length > 0 && (
            <AwardsSection awards={achievements} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Resume;