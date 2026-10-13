import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import type { Education } from '../../data/resume';

interface EducationCardProps {
  education: Education;
  index?: number;
}

const EducationCard: React.FC<EducationCardProps> = ({ education, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="rounded-[24px] border border-white/20 bg-white/60 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] dark:border-slate-700/60 dark:bg-slate-900/60 sm:p-8"
    >
      <div className="mb-1 flex flex-wrap items-center gap-2">
        <span className="inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
          Education
        </span>
        {education.status ? (
          <span className="inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">
            {education.status}
          </span>
        ) : null}
      </div>

      <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
        {education.degree}
      </h3>
      <p className="mt-1 text-base font-medium text-slate-600 dark:text-slate-300">
        {education.institution}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
        <div>
          <span className="font-semibold text-slate-900 dark:text-white">
            {education.startDate} — {education.endDate}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin size={14} />
          {education.location}
        </div>
      </div>

      <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
        {education.description}
      </p>

      {education.focusAreas && education.focusAreas.length > 0 && (
        <div className="mt-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            Focus Areas
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {education.focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default EducationCard;
