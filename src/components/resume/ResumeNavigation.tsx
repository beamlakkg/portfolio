import React from 'react';

interface ResumeNavigationProps {
  sections: { id: string; label: string }[];
}

const ResumeNavigation: React.FC<ResumeNavigationProps> = ({ sections }) => {
  const handleNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      aria-label="Resume sections"
      className="mb-16 flex justify-center"
    >
      <div className="flex flex-wrap justify-center gap-3">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleNavigate(section.id)}
            className="rounded-full border border-slate-200 bg-white/60 px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-slate-300 hover:bg-white dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-800"
          >
            {section.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default ResumeNavigation;
