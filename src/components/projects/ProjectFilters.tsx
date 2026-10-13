import React from 'react';
import { motion } from 'framer-motion';
import type { ProjectCategory } from '../../data/projects';

interface ProjectFiltersProps {
  active: ProjectCategory;
  onChange: (value: ProjectCategory) => void;
  categories: ProjectCategory[];
}

const ProjectFilters: React.FC<ProjectFiltersProps> = ({ active, onChange, categories }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {categories.map((category) => {
        const isActive = active === category;

        return (
          <motion.button
            whileTap={{ scale: 0.98 }}
            type="button"
            key={category}
            onClick={() => onChange(category)}
            aria-pressed={isActive}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 ${
              isActive
                ? 'border-slate-900 bg-slate-900 text-white shadow-lg shadow-slate-900/10 dark:border-white dark:bg-white dark:text-slate-900'
                : 'border-slate-200 bg-white/60 text-slate-700 hover:border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-800'
            }`}
          >
            {category}
          </motion.button>
        );
      })}
    </div>
  );
};

export default ProjectFilters;
