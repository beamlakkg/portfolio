import React from 'react';
import { Search } from 'lucide-react';

interface ProjectSearchProps {
  value: string;
  onChange: (value: string) => void;
}

const ProjectSearch: React.FC<ProjectSearchProps> = ({ value, onChange }) => {
  return (
    <label className="relative block w-full max-w-xl">
      <span className="sr-only">Search projects</span>
      <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-label="Search projects"
        placeholder="Search projects..."
        className="w-full rounded-full border border-slate-200 bg-white/70 py-3 pl-11 pr-4 text-sm text-slate-700 shadow-sm outline-none transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200"
      />
    </label>
  );
};

export default ProjectSearch;
