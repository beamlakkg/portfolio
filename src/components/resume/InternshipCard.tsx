import React from 'react';
import { motion } from 'framer-motion';
import type { Internship } from '../../data/resume';

interface InternshipCardProps {
  internship: Internship;
  index?: number;
}

const InternshipCard: React.FC<InternshipCardProps> = ({ internship, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="rounded-[20px] border border-white/20 bg-white/60 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] dark:border-slate-700/60 dark:bg-slate-900/60"
    >
      <div className="mb-3 inline-block rounded-full bg-violet-500/10 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-violet-600 dark:text-violet-400">
        Internship
      </div>

      <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
        {internship.role}
      </h3>
      <p className="mt-0.5 text-sm font-medium text-slate-600 dark:text-slate-300">
        {internship.company}
      </p>

      <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {internship.description}
      </p>

      {internship.technologies.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {internship.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      <p className="mt-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
        {internship.startDate} — {internship.endDate}
      </p>
    </motion.div>
  );
};

export default InternshipCard;
